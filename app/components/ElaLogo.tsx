import { Cormorant_Garamond } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600'],
  style: ['italic'],
  display: 'swap',
})

export function ElaLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const heights: Record<string, number> = { sm: 28, md: 36, lg: 52 }
  const h = heights[size]

  return (
    <span
      className={cormorant.className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        fontSize: h * 0.8,
        lineHeight: 1,
        color: 'inherit',
        letterSpacing: '0.03em',
      }}
    >
      {/* Leaf / lip motif — stand-in for the 'Ela' leaf+lip logo */}
      <svg
        width={h * 0.32}
        height={h * 0.52}
        viewBox="0 0 10 16"
        fill="none"
        aria-hidden
        style={{ flexShrink: 0, marginBottom: 2 }}
      >
        {/* Olive leaf body */}
        <path
          d="M5 0.5C8 3.5 9 8 6.5 12C5.8 13.5 4.2 13.5 3.5 12C1 8 2 3.5 5 0.5Z"
          fill="currentColor"
          opacity="0.9"
        />
        {/* Centre vein */}
        <line
          x1="5" y1="0.5" x2="5" y2="13"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />
        {/* Small stem */}
        <line
          x1="5" y1="13" x2="5" y2="15.5"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
      ela
    </span>
  )
}
