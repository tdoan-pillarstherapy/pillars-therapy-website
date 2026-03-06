'use client'

import { ReactNode } from 'react'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { AccessibilityProvider } from '@/contexts/AccessibilityContext'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <AccessibilityProvider>
        {children}
      </AccessibilityProvider>
    </LanguageProvider>
  )
}
