'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function PictureFrame() {
  const { t } = useTranslation()

  return (
    <div className="picture-frame-assembly">
      <svg className="wall-nail" width="36" height="40" viewBox="0 0 36 40" aria-hidden="true">
        <ellipse cx="20" cy="13" rx="9" ry="3.5" fill="rgba(0,0,0,0.15)" />
        <ellipse cx="18" cy="10" rx="11" ry="5.5" fill="#888" stroke="#4a4a4a" strokeWidth="1.8" />
        <ellipse cx="18" cy="9" rx="7" ry="3" fill="#b0b0b0" opacity="0.5" />
        <rect x="15.5" y="13" width="5" height="22" rx="1.5" fill="#777" stroke="#4a4a4a" strokeWidth="1" />
        <rect x="16.8" y="14" width="1.8" height="20" rx="0.8" fill="#999" opacity="0.35" />
      </svg>
      <svg className="hanging-string" viewBox="0 0 440 70" preserveAspectRatio="none" aria-hidden="true">
        <path d="M220,0 Q100,42 6,60" fill="none" stroke="#7a6040" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M220,0 Q340,42 434,68" fill="none" stroke="#7a6040" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M220,0 Q100,42 6,60" fill="none" stroke="#a08b6b" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <path d="M220,0 Q340,42 434,68" fill="none" stroke="#a08b6b" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      </svg>
      <div className="hero-image-wrapper">
        <div className="frame-inner-border">
          <img src="/assets/hero-image.png" alt={t.pictureFrame.heroAlt} className="hero-image" />
        </div>
        <span className="frame-caption">{t.pictureFrame.caption}</span>
      </div>
    </div>
  )
}
