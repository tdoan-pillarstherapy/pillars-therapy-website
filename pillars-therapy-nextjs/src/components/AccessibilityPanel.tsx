'use client'

import { useEffect, useRef } from 'react'
import { useAccessibility } from '@/contexts/AccessibilityContext'

const FONT_SIZE_DISPLAY: Record<string, number> = {
  '-2': 75, '-1': 88, '0': 100, '1': 113, '2': 125, '3': 138, '4': 150, '5': 163,
}

export default function AccessibilityPanel() {
  const { settings, updateSetting, resetSettings, isPanelOpen, closePanel } = useAccessibility()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isPanelOpen) closePanel()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isPanelOpen, closePanel])

  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isPanelOpen])

  if (!isPanelOpen) return null

  const displaySize = FONT_SIZE_DISPLAY[String(settings.fontSize)] ?? 100

  return (
    <div className="a11y-overlay" onClick={closePanel}>
      <div className="a11y-panel" ref={panelRef} onClick={e => e.stopPropagation()} role="dialog" aria-label="Accessibility options">
        <div className="a11y-panel-header">
          <h3>Accessibility options</h3>
          <button className="a11y-close" onClick={closePanel} aria-label="Close accessibility panel">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>

        <div className="a11y-section">
          <div className="a11y-row">
            <span>Font size</span>
            <button className="a11y-text-btn" onClick={() => { resetSettings() }}>Reset</button>
          </div>
          <div className="a11y-fontsize-control">
            <button
              className="a11y-fontsize-btn"
              onClick={() => updateSetting('fontSize', Math.max(-2, settings.fontSize - 1))}
              disabled={settings.fontSize <= -2}
              aria-label="Decrease font size"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10" />
              </svg>
            </button>
            <span className="a11y-fontsize-value">{displaySize}</span>
            <button
              className="a11y-fontsize-btn"
              onClick={() => updateSetting('fontSize', Math.min(5, settings.fontSize + 1))}
              disabled={settings.fontSize >= 5}
              aria-label="Increase font size"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M8 3v10" />
              </svg>
            </button>
          </div>
        </div>

        <ToggleRow label="Dyslexia font" checked={settings.dyslexiaFont} onChange={v => updateSetting('dyslexiaFont', v)} />
        <ToggleRow label="Bold font" checked={settings.boldFont} onChange={v => updateSetting('boldFont', v)} />
        <ToggleRow label="Increase letter spacing" checked={settings.letterSpacing} onChange={v => updateSetting('letterSpacing', v)} />
        <ToggleRow label="Grayscale" checked={settings.grayscale} onChange={v => updateSetting('grayscale', v)} />
        <ToggleRow label="Highlight links" checked={settings.highlightLinks} onChange={v => updateSetting('highlightLinks', v)} />
      </div>
    </div>
  )
}

function ToggleRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="a11y-section">
      <div className="a11y-row">
        <span>{label}</span>
        <button
          className={`a11y-toggle${checked ? ' active' : ''}`}
          onClick={() => onChange(!checked)}
          role="switch"
          aria-checked={checked}
          aria-label={label}
        >
          <span className="a11y-toggle-thumb" />
        </button>
      </div>
    </div>
  )
}
