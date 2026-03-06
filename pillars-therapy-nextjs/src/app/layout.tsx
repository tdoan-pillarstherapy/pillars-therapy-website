import type { Metadata } from 'next'
import { Caveat, Permanent_Marker } from 'next/font/google'
import './globals.css'
import PaperPlaneTrail from '@/components/PaperPlaneTrail'
import FadeInInitializer from '@/components/FadeInInitializer'
import Providers from '@/components/Providers'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-caveat',
  display: 'swap',
})

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-marker',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pillars Therapy | Allied Health Services Across Melbourne',
  description: 'Pillars Therapy delivers Occupational Therapy and Osteopathy services for NDIS, Support at Home, and private clients across Metro Melbourne.',
  icons: {
    icon: '/assets/PillarsTherapy_Icon_PositiveGrad.png',
    apple: '/assets/PillarsTherapy_Icon_PositiveGrad.png',
  },
}

const foucScript = `(function(){try{var a=JSON.parse(localStorage.getItem('pillars-a11y')||'{}');var h=document.documentElement;if(a.fontSize)h.setAttribute('data-a11y-fontsize',a.fontSize);if(a.dyslexiaFont)h.setAttribute('data-a11y-dyslexia','true');if(a.boldFont)h.setAttribute('data-a11y-bold','true');if(a.letterSpacing)h.setAttribute('data-a11y-spacing','true');if(a.grayscale)h.setAttribute('data-a11y-grayscale','true');if(a.highlightLinks)h.setAttribute('data-a11y-links','true')}catch(e){}try{var m={'en':'en','vi':'vi','zh-CN':'zh-Hans','zh-TW':'zh-Hant'};var l=localStorage.getItem('pillars-locale');if(l&&m[l]){h.lang=m[l];h.setAttribute('data-locale',l)}}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${caveat.variable} ${permanentMarker.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: foucScript }} />
      </head>
      <body>
        <Providers>
          <PaperPlaneTrail />
          {children}
          <FadeInInitializer />
        </Providers>
      </body>
    </html>
  )
}
