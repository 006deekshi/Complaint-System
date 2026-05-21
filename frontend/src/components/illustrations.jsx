// All SVG illustrations — theme-aware via CSS currentColor + CSS vars

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Background card stack */}
      <rect x="60" y="60" width="360" height="260" rx="20" fill="var(--bg-2)" stroke="var(--line-2)" strokeWidth="1.5"/>
      <rect x="40" y="80" width="360" height="260" rx="20" fill="var(--bg-1)" stroke="var(--line-2)" strokeWidth="1.5"/>
      <rect x="20" y="100" width="360" height="260" rx="20" fill="var(--bg-2)" stroke="var(--line-3)" strokeWidth="1.5"/>

      {/* Main card */}
      <rect x="50" y="70" width="380" height="260" rx="18" fill="var(--bg-1)" stroke="var(--line-3)" strokeWidth="1.5"/>

      {/* Gold top shimmer */}
      <defs>
        <linearGradient id="shimmer" x1="50" y1="70" x2="430" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0"/>
          <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="fadeUp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect x="50" y="70" width="380" height="1.5" fill="url(#shimmer)"/>

      {/* Card header */}
      <circle cx="90" cy="108" r="14" fill="var(--gold-2)" stroke="var(--gold-border)" strokeWidth="1.5"/>
      {/* megaphone icon */}
      <path d="M85 108 L90 104 L90 112 Z" fill="var(--gold)"/>
      <rect x="90" y="105.5" width="5" height="5" rx="1" fill="var(--gold)"/>
      <path d="M95 106 Q100 104 100 108 Q100 112 95 110" stroke="var(--gold)" strokeWidth="1.5" fill="none"/>

      <rect x="112" y="100" width="80" height="8" rx="4" fill="var(--line-3)"/>
      <rect x="112" y="113" width="50" height="6" rx="3" fill="var(--line-2)"/>

      {/* Status pill */}
      <rect x="340" y="100" width="72" height="22" rx="11" fill="var(--gold-2)" stroke="var(--gold-border)" strokeWidth="1"/>
      <circle cx="354" cy="111" r="3.5" fill="var(--gold)"/>
      <rect x="361" y="107" width="42" height="8" rx="4" fill="var(--gold)" opacity="0.7"/>

      {/* Divider */}
      <line x1="70" y1="135" x2="410" y2="135" stroke="var(--line-2)" strokeWidth="1"/>

      {/* Content lines */}
      <rect x="70" y="150" width="280" height="8" rx="4" fill="var(--line-3)"/>
      <rect x="70" y="165" width="240" height="8" rx="4" fill="var(--line-2)"/>
      <rect x="70" y="180" width="200" height="8" rx="4" fill="var(--line-2)"/>

      {/* Second complaint row */}
      <rect x="70" y="205" width="340" height="1" fill="var(--line)"/>
      <circle cx="90" cy="228" r="14" fill="rgba(91,141,217,0.12)" stroke="rgba(91,141,217,0.25)" strokeWidth="1.5"/>
      <path d="M84 228 h12 M90 222 v12" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round"/>
      <rect x="112" y="220" width="70" height="8" rx="4" fill="var(--line-3)"/>
      <rect x="112" y="233" width="45" height="6" rx="3" fill="var(--line-2)"/>
      <rect x="340" y="220" width="72" height="22" rx="11" fill="rgba(74,158,107,0.1)" stroke="rgba(74,158,107,0.25)" strokeWidth="1"/>
      <circle cx="354" cy="231" r="3.5" fill="var(--green)"/>
      <rect x="361" y="227" width="42" height="8" rx="4" fill="var(--green)" opacity="0.7"/>

      {/* Third row */}
      <rect x="70" y="255" width="340" height="1" fill="var(--line)"/>
      <circle cx="90" cy="278" r="14" fill="rgba(212,168,67,0.1)" stroke="var(--gold-border)" strokeWidth="1.5"/>
      <path d="M90 272 v8 M87 277 l3 3 3-3" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="112" y="270" width="90" height="8" rx="4" fill="var(--line-3)"/>
      <rect x="112" y="283" width="60" height="6" rx="3" fill="var(--line-2)"/>
      <rect x="340" y="270" width="72" height="22" rx="11" fill="var(--gold-2)" stroke="var(--gold-border)" strokeWidth="1"/>
      <circle cx="354" cy="281" r="3.5" fill="var(--gold)"/>
      <rect x="361" y="277" width="42" height="8" rx="4" fill="var(--gold)" opacity="0.7"/>

      {/* Floating badge */}
      <rect x="310" y="40" width="130" height="36" rx="10" fill="var(--bg-1)" stroke="var(--gold-border)" strokeWidth="1.5"/>
      <circle cx="330" cy="58" r="7" fill="var(--gold-2)"/>
      <path d="M327 58 l2 2 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="342" y="52" width="50" height="6" rx="3" fill="var(--line-3)"/>
      <rect x="342" y="62" width="35" height="5" rx="2.5" fill="var(--line-2)"/>

      {/* Floating notification dot */}
      <circle cx="60" cy="55" r="18" fill="var(--bg-1)" stroke="var(--line-3)" strokeWidth="1.5"/>
      <path d="M53 55 h14 M60 48 v14" stroke="var(--txt-2)" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="72" cy="43" r="6" fill="var(--gold)"/>
      <text x="72" y="47" textAnchor="middle" fontSize="7" fill="#0c0c0e" fontWeight="800">3</text>
    </svg>
  );
}

export function RoleIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Left: user bubble */}
      <rect x="10" y="30" width="130" height="80" rx="14" fill="var(--bg-2)" stroke="var(--line-2)" strokeWidth="1.5"/>
      <rect x="10" y="30" width="130" height="1.5" fill="url(#shimmer)"/>
      <circle cx="38" cy="58" r="12" fill="var(--line-2)"/>
      <path d="M33 58 a5 5 0 1 1 10 0" fill="var(--txt-3)"/>
      <circle cx="38" cy="54" r="4" fill="var(--txt-3)"/>
      <rect x="56" y="50" width="68" height="7" rx="3.5" fill="var(--line-3)"/>
      <rect x="56" y="62" width="48" height="6" rx="3" fill="var(--line-2)"/>
      <rect x="20" y="82" width="110" height="18" rx="9" fill="var(--bg-3)" stroke="var(--line-2)" strokeWidth="1"/>
      <rect x="30" y="88" width="70" height="6" rx="3" fill="var(--line-3)"/>

      {/* Arrow */}
      <path d="M148 90 L172 90" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M166 84 L172 90 L166 96" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Right: admin panel */}
      <rect x="180" y="20" width="130" height="100" rx="14" fill="var(--bg-1)" stroke="var(--gold-border)" strokeWidth="1.5"/>
      <rect x="180" y="20" width="130" height="1.5" fill="url(#shimmer)"/>
      <rect x="192" y="34" width="106" height="22" rx="8" fill="var(--gold-2)" stroke="var(--gold-border)" strokeWidth="1"/>
      <circle cx="204" cy="45" r="6" fill="var(--gold)" opacity="0.8"/>
      <rect x="214" y="41" width="60" height="6" rx="3" fill="var(--gold)" opacity="0.5"/>
      <rect x="192" y="62" width="106" height="1" fill="var(--line-2)"/>
      <rect x="192" y="72" width="80" height="6" rx="3" fill="var(--line-3)"/>
      <rect x="192" y="83" width="60" height="6" rx="3" fill="var(--line-2)"/>
      <rect x="192" y="98" width="106" height="14" rx="7" fill="var(--gold)" opacity="0.9"/>
      <rect x="220" y="102" width="50" height="6" rx="3" fill="#0c0c0e" opacity="0.5"/>

      {/* Bottom stats row */}
      <rect x="10" y="130" width="300" height="60" rx="14" fill="var(--bg-1)" stroke="var(--line-2)" strokeWidth="1.5"/>
      {[0,1,2].map((i) => (
        <g key={i}>
          <rect x={22 + i*102} y="142" width="90" height="36" rx="10" fill="var(--bg-2)" stroke="var(--line-2)" strokeWidth="1"/>
          <circle cx={42 + i*102} cy="160" r="8" fill={i===0 ? "var(--gold-2)" : i===1 ? "rgba(91,141,217,0.12)" : "rgba(74,158,107,0.12)"}
            stroke={i===0 ? "var(--gold-border)" : i===1 ? "rgba(91,141,217,0.25)" : "rgba(74,158,107,0.25)"} strokeWidth="1"/>
          <rect x={54 + i*102} y="155" width="44" height="6" rx="3" fill="var(--line-3)"/>
          <rect x={54 + i*102} y="164" width="30" height="5" rx="2.5" fill="var(--line-2)"/>
        </g>
      ))}
    </svg>
  );
}

export function SubmitIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="var(--gold-2)" stroke="var(--gold-border)" strokeWidth="1.5"/>
      <path d="M20 32 h24 M32 20 v24" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M22 22 L42 42 M42 22 L22 42" stroke="var(--gold)" strokeWidth="0" strokeLinecap="round"/>
      {/* envelope */}
      <rect x="18" y="24" width="28" height="20" rx="4" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 28 L32 37 L46 28" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function TrackIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="var(--gold-2)" stroke="var(--gold-border)" strokeWidth="1.5"/>
      {/* magnifier */}
      <circle cx="29" cy="29" r="10" stroke="var(--gold)" strokeWidth="2.2"/>
      <path d="M36.5 36.5 L44 44" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* lines inside */}
      <path d="M24 29 h10 M29 24 v10" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function AdminIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="var(--gold-2)" stroke="var(--gold-border)" strokeWidth="1.5"/>
      {/* shield */}
      <path d="M32 16 L46 22 V32 C46 40 32 48 32 48 C32 48 18 40 18 32 V22 Z"
        fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M26 32 l4 4 8-8" stroke="var(--gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
