'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

export interface AccessibilitySettings {
  fontSize: number
  dyslexiaFont: boolean
  boldFont: boolean
  letterSpacing: boolean
  grayscale: boolean
  highlightLinks: boolean
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 0,
  dyslexiaFont: false,
  boldFont: false,
  letterSpacing: false,
  grayscale: false,
  highlightLinks: false,
}

interface AccessibilityContextType {
  settings: AccessibilitySettings
  updateSetting: <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => void
  resetSettings: () => void
  isPanelOpen: boolean
  togglePanel: () => void
  closePanel: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType>({
  settings: DEFAULT_SETTINGS,
  updateSetting: () => {},
  resetSettings: () => {},
  isPanelOpen: false,
  togglePanel: () => {},
  closePanel: () => {},
})

function applySettings(settings: AccessibilitySettings) {
  const html = document.documentElement
  if (settings.fontSize !== 0) {
    html.setAttribute('data-a11y-fontsize', String(settings.fontSize))
  } else {
    html.removeAttribute('data-a11y-fontsize')
  }
  const boolAttrs: [keyof AccessibilitySettings, string][] = [
    ['dyslexiaFont', 'data-a11y-dyslexia'],
    ['boldFont', 'data-a11y-bold'],
    ['letterSpacing', 'data-a11y-spacing'],
    ['grayscale', 'data-a11y-grayscale'],
    ['highlightLinks', 'data-a11y-links'],
  ]
  for (const [key, attr] of boolAttrs) {
    if (settings[key]) {
      html.setAttribute(attr, 'true')
    } else {
      html.removeAttribute(attr)
    }
  }
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('pillars-a11y')
        if (saved) return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) }
      } catch {}
    }
    return DEFAULT_SETTINGS
  })
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  useEffect(() => {
    applySettings(settings)
    localStorage.setItem('pillars-a11y', JSON.stringify(settings))
  }, [settings])

  const updateSetting = useCallback(<K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }, [])

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS)
  }, [])

  const togglePanel = useCallback(() => {
    setIsPanelOpen(prev => !prev)
  }, [])

  const closePanel = useCallback(() => {
    setIsPanelOpen(false)
  }, [])

  return (
    <AccessibilityContext.Provider value={{ settings, updateSetting, resetSettings, isPanelOpen, togglePanel, closePanel }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  return useContext(AccessibilityContext)
}
