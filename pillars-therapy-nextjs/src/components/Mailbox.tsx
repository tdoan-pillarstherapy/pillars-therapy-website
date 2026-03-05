export default function Mailbox() {
  return (
    <div className="mailbox-wrapper" id="mailbox" aria-hidden="true">
      <svg width="160" height="200" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Post */}
        <path d="M68,95 L68,185 Q68,190 72,190 L88,190 Q92,190 92,185 L92,95"
              fill="#d4c4a8" stroke="#2d2d2d" strokeWidth="2" strokeLinejoin="round" />
        {/* Post wood grain */}
        <line x1="74" y1="100" x2="74" y2="186" stroke="#b8a882" strokeWidth="0.7" strokeDasharray="4 6" />
        <line x1="80" y1="98" x2="80" y2="188" stroke="#b8a882" strokeWidth="0.5" strokeDasharray="3 8" />
        <line x1="86" y1="100" x2="86" y2="186" stroke="#b8a882" strokeWidth="0.6" strokeDasharray="5 7" />

        {/* Post base plate */}
        <rect x="60" y="186" width="40" height="6" rx="2" fill="#c4b490" stroke="#2d2d2d" strokeWidth="1.5" />

        {/* Mailbox body — rounded US-style with flat front */}
        <path d="M20,50 Q20,22 80,22 Q140,22 140,50 L140,92 L20,92 Z"
              fill="#f0ebe0" stroke="#2d2d2d" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Front face / door */}
        <path d="M20,92 L140,92" stroke="#2d2d2d" strokeWidth="2.8" />
        {/* Door flap (slightly open) */}
        <path d="M30,92 Q30,85 80,83 Q130,85 130,92" fill="#e8e0d0" stroke="#2d2d2d" strokeWidth="1.5" />
        {/* Door handle */}
        <circle cx="80" cy="88" r="3" fill="none" stroke="#2d2d2d" strokeWidth="1.5" />

        {/* Side panel lines (depth) */}
        <path d="M20,50 L20,92" stroke="#2d2d2d" strokeWidth="2" />
        <path d="M140,50 L140,92" stroke="#2d2d2d" strokeWidth="2" />

        {/* Side letter slot */}
        <rect x="26" y="62" width="20" height="14" rx="2" fill="none" stroke="#2d2d2d" strokeWidth="1.5" />
        <line x1="28" y1="69" x2="44" y2="69" stroke="#2d2d2d" strokeWidth="1" />

        {/* Flag (raised) */}
        <rect x="138" y="34" width="7" height="36" rx="2" fill="#d94535" stroke="#2d2d2d" strokeWidth="1.5" />
        <path d="M136,28 L155,28 Q158,28 158,31 L158,36 Q158,39 155,39 L136,39 Z"
              fill="#d94535" stroke="#2d2d2d" strokeWidth="1.5" strokeLinejoin="round" />

        {/* "MAIL" text */}
        <text x="80" y="74" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="22" fill="#2d2d2d" fontWeight="700" letterSpacing="2">MAIL</text>

        {/* Envelope peeking out of door slot */}
        <g transform="translate(55, 78) rotate(-5)">
          <rect x="0" y="0" width="22" height="15" rx="1.5" fill="#fff" stroke="#2d2d2d" strokeWidth="1.2" />
          <path d="M1,1 L11,8 L21,1" fill="none" stroke="#2d2d2d" strokeWidth="0.9" />
        </g>

        {/* Envelope floating out top-right */}
        <g transform="translate(105, 10) rotate(15)">
          <rect x="0" y="0" width="18" height="12" rx="1.5" fill="#fff" stroke="#2d2d2d" strokeWidth="1" />
          <path d="M1,1 L9,7 L17,1" fill="none" stroke="#2d2d2d" strokeWidth="0.7" />
        </g>

        {/* Small envelope top-left */}
        <g transform="translate(30, 5) rotate(-12)">
          <rect x="0" y="0" width="15" height="10" rx="1" fill="#fff" stroke="#2d2d2d" strokeWidth="0.9" />
          <path d="M0.5,0.5 L7.5,5.5 L14.5,0.5" fill="none" stroke="#2d2d2d" strokeWidth="0.6" />
        </g>

        {/* Grass at base */}
        <path d="M45,192 C48,182 51,192 54,184 C57,192 60,183 63,192" fill="none" stroke="#5a8a5a" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M95,192 C98,183 101,192 104,184 C107,192 110,182 113,192" fill="none" stroke="#5a8a5a" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M70,192 C72,186 75,192 77,187" fill="none" stroke="#5a8a5a" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    </div>
  )
}
