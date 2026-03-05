import type { Metadata } from 'next'
import { Caveat } from 'next/font/google'
import './globals.css'
import PaperPlaneTrail from '@/components/PaperPlaneTrail'
import FadeInInitializer from '@/components/FadeInInitializer'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pillars Therapy | Allied Health Services Across Victoria',
  description: 'Pillars Therapy delivers Occupational Therapy and Osteopathy services for NDIS, Support at Home, and private clients across Victoria.',
  icons: {
    icon: '/assets/PillarsTherapy_Icon_PositiveGrad.png',
    apple: '/assets/PillarsTherapy_Icon_PositiveGrad.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={caveat.variable}>
      <body>
        <PaperPlaneTrail />
        {children}
        <FadeInInitializer />
      </body>
    </html>
  )
}
