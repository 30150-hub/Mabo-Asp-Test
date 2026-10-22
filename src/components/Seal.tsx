import { useId } from 'react'

type SealProps = {
  className?: string
  spin?: boolean
}

export function Seal({ className, spin = true }: SealProps) {
  const id = useId().replace(/:/g, '')
  const pathId = `seal-${id}`

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Mabò — Antichi Sapori Pugliesi, Brussels, since 2000"
      style={spin ? { animation: 'slow-spin 46s linear infinite' } : undefined}
    >
      <circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <defs>
        <path id={pathId} d="M60,60 m-51,0 a51,51 0 1,1 102,0 a51,51 0 1,1 -102,0" />
      </defs>
      <text
        fill="currentColor"
        fontSize="6.4"
        letterSpacing="2.05"
        fontFamily="Jost Variable, Jost, sans-serif"
      >
        <textPath href={`#${pathId}`} startOffset="2%">
          ANTICHI SAPORI PUGLIESI · BRUXELLES · DAL 2000 ·
        </textPath>
      </text>
      <text
        x="60"
        y="63"
        textAnchor="middle"
        fill="currentColor"
        fontSize="20"
        fontFamily="Cormorant Garamond, serif"
        fontStyle="italic"
      >
        Mabò
      </text>
      <path d="M60 72.5v8" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <circle cx="60" cy="84" r="1.4" fill="currentColor" />
    </svg>
  )
}
