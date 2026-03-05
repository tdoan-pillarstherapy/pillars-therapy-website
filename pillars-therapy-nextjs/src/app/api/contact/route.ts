import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { Client } from '@notionhq/client'

const resend = new Resend(process.env.RESEND_API_KEY)
const notion = new Client({ auth: process.env.NOTION_API_KEY })

const FUNDING_MAP: Record<string, string> = {
  'ndis-plan': 'NDIS - Plan Managed',
  'ndis-self': 'NDIS - Self Managed',
  'sah': 'Support at Home',
  'private': 'Private',
}

const SERVICE_MAP: Record<string, string> = {
  'driving': 'Driving Assessments',
  'functional': 'Functional Assessments',
  'home-mod': 'Home Modification Assessments',
  'at': 'AT Assessments',
  'sda-sil': 'SDA/SIL Applications',
  'wheelchair': 'Wheelchair Assessments',
  'pain': 'Pain Management',
  'exercise': 'Exercise Programs',
  'chronic': 'Chronic Condition Management',
  'falls': 'Falls Prevention',
}

function sanitise(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str.trim().slice(0, 2000)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const name = sanitise(body.name)
    const email = sanitise(body.email)
    const phone = sanitise(body.phone)
    const fundingKey = sanitise(body.funding)
    const serviceKey = sanitise(body.service)
    const message = sanitise(body.message)

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const fundingType = FUNDING_MAP[fundingKey] || fundingKey || 'Not specified'
    const serviceNeeded = SERVICE_MAP[serviceKey] || serviceKey || 'Not specified'

    const results = { email: false, notion: false }
    const errors: string[] = []

    // Send email via Resend
    try {
      await resend.emails.send({
        from: 'Pillars Therapy <noreply@pillarstherapy.com.au>',
        to: ['contact@pillarstherapy.com.au'],
        subject: `New Enquiry from ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1a5c4c, #2a7c6c); padding: 24px 32px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Enquiry Received</h1>
            </div>
            <div style="background: #ffffff; padding: 32px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #666; font-size: 14px; width: 140px; vertical-align: top;">Name</td>
                  <td style="padding: 10px 0; font-size: 14px; font-weight: 500;">${escapeHtml(name)}</td>
                </tr>
                <tr style="border-top: 1px solid #f0f0f0;">
                  <td style="padding: 10px 0; color: #666; font-size: 14px; vertical-align: top;">Email</td>
                  <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #1a5c4c;">${escapeHtml(email)}</a></td>
                </tr>
                <tr style="border-top: 1px solid #f0f0f0;">
                  <td style="padding: 10px 0; color: #666; font-size: 14px; vertical-align: top;">Phone</td>
                  <td style="padding: 10px 0; font-size: 14px;">${phone ? escapeHtml(phone) : '<span style="color:#999;">Not provided</span>'}</td>
                </tr>
                <tr style="border-top: 1px solid #f0f0f0;">
                  <td style="padding: 10px 0; color: #666; font-size: 14px; vertical-align: top;">Funding Type</td>
                  <td style="padding: 10px 0; font-size: 14px;">${escapeHtml(fundingType)}</td>
                </tr>
                <tr style="border-top: 1px solid #f0f0f0;">
                  <td style="padding: 10px 0; color: #666; font-size: 14px; vertical-align: top;">Service Needed</td>
                  <td style="padding: 10px 0; font-size: 14px;">${escapeHtml(serviceNeeded)}</td>
                </tr>
                ${message ? `
                <tr style="border-top: 1px solid #f0f0f0;">
                  <td style="padding: 10px 0; color: #666; font-size: 14px; vertical-align: top;">Message</td>
                  <td style="padding: 10px 0; font-size: 14px; white-space: pre-wrap;">${escapeHtml(message)}</td>
                </tr>
                ` : ''}
              </table>
              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e0e0e0; color: #999; font-size: 12px;">
                Submitted via pillarstherapy.com.au contact form
              </div>
            </div>
          </div>
        `,
      })
      results.email = true
    } catch (err) {
      console.error('Resend email error:', err)
      errors.push('Email notification failed')
    }

    // Save to Notion
    try {
      const databaseId = process.env.NOTION_DATABASE_ID
      if (!databaseId) throw new Error('NOTION_DATABASE_ID not configured')

      const properties: Record<string, unknown> = {
        Name: { title: [{ text: { content: name } }] },
        Email: { email: email },
        Message: { rich_text: [{ text: { content: message || '' } }] },
      }

      if (phone) {
        properties.Phone = { phone_number: phone }
      }

      const fundingLabel = FUNDING_MAP[fundingKey]
      if (fundingLabel) {
        properties['Funding Type'] = { select: { name: fundingLabel } }
      }

      const serviceLabel = SERVICE_MAP[serviceKey]
      if (serviceLabel) {
        properties['Service Needed'] = { select: { name: serviceLabel } }
      }

      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: properties as Parameters<typeof notion.pages.create>[0]['properties'],
      })
      results.notion = true
    } catch (err) {
      console.error('Notion error:', err)
      errors.push('Database save failed')
    }

    // If both failed, return error
    if (!results.email && !results.notion) {
      return NextResponse.json(
        { error: 'We couldn\'t process your enquiry right now. Please try again or email us directly at contact@pillarstherapy.com.au' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, results })
  } catch {
    console.error('Contact form error')
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us directly at contact@pillarstherapy.com.au' },
      { status: 500 }
    )
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
