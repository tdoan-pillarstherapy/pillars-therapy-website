'use client'

import { useEffect, useRef } from 'react'

export default function PaperPlaneTrail() {
  const svgRef = useRef<SVGSVGElement>(null)
  const trailPathRef = useRef<SVGPathElement>(null)
  const planeIconRef = useRef<SVGGElement>(null)
  const stateRef = useRef({
    totalPathLength: 0,
    trailStartY: 0,
    trailEndY: 0,
  })

  useEffect(() => {
    const svg = svgRef.current
    const trailPath = trailPathRef.current
    const planeIcon = planeIconRef.current
    if (!svg || !trailPath || !planeIcon) return

    function buildTrail() {
      if (!svg || !trailPath || !planeIcon) return
      if (window.innerWidth <= 1024) {
        svg.style.display = 'none'
        return
      }
      svg.style.display = ''

      const pageWidth = document.documentElement.clientWidth
      const contactSection = document.getElementById('contact')
      if (!contactSection) return

      const contactBot = contactSection.offsetTop + contactSection.offsetHeight
      const totalHeight = contactBot

      svg.setAttribute('viewBox', '0 0 ' + pageWidth + ' ' + totalHeight)
      svg.style.height = totalHeight + 'px'

      const container = document.querySelector('.hero .container') as HTMLElement
      if (!container) return
      const containerRect = container.getBoundingClientRect()
      const contentLeft = containerRect.left
      const contentRight = containerRect.right

      const leftGutter = Math.max(contentLeft * 0.5, 20)
      const rightGutter = contentRight + (pageWidth - contentRight) * 0.5

      function absTop(el: Element) { return el.getBoundingClientRect().top + window.scrollY }
      function absBottom(el: Element) { return el.getBoundingClientRect().bottom + window.scrollY }

      const hero = document.querySelector('.hero')
      const pathways = document.getElementById('services')
      const disciplines = document.querySelector('.disciplines')
      const ndis = document.getElementById('ndis')
      const sah = document.getElementById('sah')
      const about = document.getElementById('about')

      if (!hero) return

      const heroTop = absTop(hero)
      const heroBot = absBottom(hero)

      // Pathways card gaps
      const pathwayCards = pathways ? pathways.querySelectorAll('.pathway-card') : []
      let pCardsY = 0, pCardsMidY = 0, pCardsBot = 0
      let gap12x = pageWidth * 0.38, gap23x = pageWidth * 0.62
      if (pathwayCards.length >= 3) {
        const c1 = pathwayCards[0].getBoundingClientRect()
        const c2 = pathwayCards[1].getBoundingClientRect()
        const c3 = pathwayCards[2].getBoundingClientRect()
        gap12x = (c1.right + c2.left) / 2
        gap23x = (c2.right + c3.left) / 2
        pCardsY = c1.top + window.scrollY
        pCardsMidY = pCardsY + c1.height * 0.5
        pCardsBot = pCardsY + c1.height
      }
      const pathwaysTop = pathways ? absTop(pathways) : heroBot + 100
      const pathwaysBot = pathways ? absBottom(pathways) : heroBot + 500

      // Disciplines card gap
      const discCards = disciplines ? disciplines.querySelectorAll('.discipline-card') : []
      let discGapX = pageWidth * 0.5, discCardsY = 0, discCardsMidY = 0, discCardsBot = 0
      if (discCards.length >= 2) {
        const d1 = discCards[0].getBoundingClientRect()
        const d2 = discCards[1].getBoundingClientRect()
        discGapX = (d1.right + d2.left) / 2
        discCardsY = d1.top + window.scrollY
        discCardsMidY = discCardsY + d1.height * 0.5
        discCardsBot = discCardsY + d1.height
      }
      const discTop = disciplines ? absTop(disciplines) : pathwaysBot + 100
      const discBot = disciplines ? absBottom(disciplines) : pathwaysBot + 500

      // NDIS column gap
      const ndisColumns = ndis ? ndis.querySelectorAll('.services-column') : []
      let ndisGapX = pageWidth * 0.55
      const ndisTop = ndis ? absTop(ndis) : discBot + 100
      const ndisBot = ndis ? absBottom(ndis) : discBot + 800
      if (ndisColumns.length >= 2) {
        const nc1 = ndisColumns[0].getBoundingClientRect()
        const nc2 = ndisColumns[1].getBoundingClientRect()
        ndisGapX = (nc1.right + nc2.left) / 2
      }

      // SAH column gap
      const sahColumns = sah ? sah.querySelectorAll('.services-column') : []
      let sahGapX = pageWidth * 0.55
      const sahTop = sah ? absTop(sah) : ndisBot + 100
      const sahBot = sah ? absBottom(sah) : ndisBot + 800
      if (sahColumns.length >= 2) {
        const sc1 = sahColumns[0].getBoundingClientRect()
        const sc2 = sahColumns[1].getBoundingClientRect()
        sahGapX = (sc1.right + sc2.left) / 2
      }

      const aboutTop = about ? absTop(about) : sahBot + 100
      const aboutBot = about ? absBottom(about) : sahBot + 400
      const contactTop = absTop(contactSection)

      // Target the mailbox element for trail endpoint
      const mailbox = document.getElementById('mailbox')
      let mailboxEndX = pageWidth * 0.5
      let mailboxEndY = contactTop + contactSection.offsetHeight * 0.45
      if (mailbox) {
        const mbRect = mailbox.getBoundingClientRect()
        mailboxEndX = mbRect.left + mbRect.width * 0.5 + window.scrollX
        mailboxEndY = mbRect.top + mbRect.height * 0.25 + window.scrollY
      }

      // Start clearly inside the viewport
      const startX = Math.min(rightGutter - 30, pageWidth - 60)
      const startY = heroTop + 60

      stateRef.current.trailStartY = startY
      stateRef.current.trailEndY = mailboxEndY

      const path = [
        'M' + startX + ',' + startY,
        'C ' + (rightGutter) + ',' + (heroTop + 140) +
        ' ' + (contentRight - 60) + ',' + (heroTop + 240) +
        ' ' + (contentLeft + 60) + ',' + (heroBot - 40),
        'C ' + leftGutter + ',' + (pathwaysTop + 30) +
        ' ' + leftGutter + ',' + (pCardsY - 40) +
        ' ' + gap12x + ',' + pCardsMidY,
        'C ' + (gap12x + 40) + ',' + (pCardsBot - 30) +
        ' ' + (gap23x - 40) + ',' + (pCardsBot - 60) +
        ' ' + gap23x + ',' + pCardsBot,
        'C ' + (gap23x + 60) + ',' + (pCardsBot + 60) +
        ' ' + rightGutter + ',' + (pathwaysBot - 20) +
        ' ' + rightGutter + ',' + (discTop + 40),
        'C ' + rightGutter + ',' + (discCardsY - 30) +
        ' ' + (discGapX + 80) + ',' + (discCardsY - 10) +
        ' ' + discGapX + ',' + discCardsMidY,
        'C ' + (discGapX - 80) + ',' + (discCardsBot + 20) +
        ' ' + leftGutter + ',' + (discBot - 40) +
        ' ' + leftGutter + ',' + (ndisTop + 60),
        'C ' + leftGutter + ',' + (ndisTop + 200) +
        ' ' + (ndisGapX - 60) + ',' + (ndisTop + 300) +
        ' ' + ndisGapX + ',' + (ndisTop + (ndisBot - ndisTop) * 0.45),
        'C ' + (ndisGapX + 60) + ',' + (ndisBot - 200) +
        ' ' + rightGutter + ',' + (ndisBot - 80) +
        ' ' + rightGutter + ',' + (sahTop + 60),
        'C ' + rightGutter + ',' + (sahTop + 200) +
        ' ' + (sahGapX + 60) + ',' + (sahTop + 300) +
        ' ' + sahGapX + ',' + (sahTop + (sahBot - sahTop) * 0.45),
        'C ' + (sahGapX - 60) + ',' + (sahBot - 200) +
        ' ' + leftGutter + ',' + (sahBot - 80) +
        ' ' + leftGutter + ',' + (aboutTop + 60),
        'C ' + leftGutter + ',' + (aboutTop + 150) +
        ' ' + (contentLeft + 100) + ',' + (aboutBot - 80) +
        ' ' + (pageWidth * 0.5) + ',' + (aboutBot + 20),
        'C ' + (pageWidth * 0.55) + ',' + (contactTop - 60) +
        ' ' + (mailboxEndX + 60) + ',' + (mailboxEndY - 80) +
        ' ' + mailboxEndX + ',' + mailboxEndY
      ]

      trailPath.setAttribute('d', path.join(' '))

      stateRef.current.totalPathLength = trailPath.getTotalLength()

      trailPath.style.strokeDasharray = String(stateRef.current.totalPathLength)
      trailPath.style.strokeDashoffset = String(stateRef.current.totalPathLength)

      updateScroll()
      svg.classList.add('visible')
    }

    function updateScroll() {
      if (!trailPath || !planeIcon) return
      const { totalPathLength, trailEndY } = stateRef.current
      if (!totalPathLength || window.innerWidth <= 1024) return

      const scrollY = window.scrollY
      const maxScroll = trailEndY - window.innerHeight * 0.5
      const minScroll = 0

      const progress = Math.max(0, Math.min(1, (scrollY - minScroll) / (maxScroll - minScroll)))

      const minDraw = 60
      const drawLength = minDraw + (totalPathLength - minDraw) * progress

      trailPath.style.strokeDashoffset = String(totalPathLength - drawLength)

      const point = trailPath.getPointAtLength(drawLength)
      const ahead = trailPath.getPointAtLength(Math.min(drawLength + 20, totalPathLength))
      const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * (180 / Math.PI)

      const cx = 42, cy = 29
      planeIcon.setAttribute('transform',
        'translate(' + (point.x - cx) + ',' + (point.y - cy) + ') rotate(' + angle + ' ' + cx + ' ' + cy + ')')

      const fadeStart = 0.92
      if (progress >= 1) {
        planeIcon.style.opacity = '0'
      } else if (progress > fadeStart) {
        planeIcon.style.opacity = String(1 - ((progress - fadeStart) / (1 - fadeStart)))
      } else {
        planeIcon.style.opacity = '1'
      }
    }

    let ticking = false
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScroll()
          ticking = false
        })
        ticking = true
      }
    }

    function tryBuild() {
      if (document.getElementById('contact')) {
        buildTrail()
      }
    }

    // Build after page fully loads
    if (document.readyState === 'complete') {
      setTimeout(tryBuild, 200)
    }

    const loadHandler = () => setTimeout(tryBuild, 200)
    window.addEventListener('load', loadHandler)
    const fallbackTimer = setTimeout(tryBuild, 1000)

    window.addEventListener('scroll', onScroll, { passive: true })

    let resizeTimer: NodeJS.Timeout
    function onResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(buildTrail, 250)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('load', loadHandler)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      clearTimeout(fallbackTimer)
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <svg
      className="page-plane-trail"
      id="planeTrail"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
    >
      <defs>
        <filter id="planeShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="1" dy="1.5" stdDeviation="2" floodColor="#3a5a7a" floodOpacity="0.3" />
        </filter>
      </defs>
      <path
        className="plane-trail"
        d=""
        stroke="var(--color-primary)"
        strokeWidth="1.5"
        strokeDasharray="6 8"
        strokeLinecap="round"
        fill="none"
        opacity="0.18"
        ref={trailPathRef}
      />
      <g className="plane-icon" filter="url(#planeShadow)" ref={planeIconRef}>
        <g transform="scale(2.6)">
          {/* Top wing */}
          <path d="M32,11 L0,0 L9,10 Z" fill="#ffffff" stroke="#3a3a3a" strokeWidth="0.7" strokeLinejoin="round" strokeLinecap="round" />
          {/* Bottom wing */}
          <path d="M32,11 L0,20 L9,12 Z" fill="#f0f0f0" stroke="#3a3a3a" strokeWidth="0.7" strokeLinejoin="round" strokeLinecap="round" />
          {/* Center fold crease */}
          <path d="M32,11 L0,10" fill="none" stroke="#3a3a3a" strokeWidth="0.8" strokeLinecap="round" />
          {/* Tail tuck fold */}
          <path d="M9,10 L9,12 L4,11 Z" fill="#e8e8e8" stroke="#3a3a3a" strokeWidth="0.5" strokeLinejoin="round" />
          {/* Hatching lines */}
          <line x1="12" y1="11.3" x2="7" y2="13.5" stroke="#555" strokeWidth="0.4" strokeLinecap="round" />
          <line x1="15" y1="11.3" x2="9" y2="14.5" stroke="#555" strokeWidth="0.4" strokeLinecap="round" />
          <line x1="18" y1="11.3" x2="11" y2="15.5" stroke="#555" strokeWidth="0.4" strokeLinecap="round" />
          <line x1="21" y1="11.3" x2="13.5" y2="16" stroke="#555" strokeWidth="0.4" strokeLinecap="round" />
          <line x1="24" y1="11.3" x2="16" y2="16.5" stroke="#555" strokeWidth="0.4" strokeLinecap="round" />
          <line x1="27" y1="11.3" x2="18.5" y2="17" stroke="#555" strokeWidth="0.4" strokeLinecap="round" />
          <line x1="30" y1="11.2" x2="21" y2="17.5" stroke="#555" strokeWidth="0.35" strokeLinecap="round" />
          {/* Subtle inner fold line */}
          <path d="M28,10.5 L5,2" fill="none" stroke="#bbb" strokeWidth="0.35" strokeDasharray="1.5 2" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  )
}
