import type { ReactElement, SVGProps } from 'react'

type ArtProps = SVGProps<SVGSVGElement> & { title?: string }

const base = {
  viewBox: '0 0 120 120',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.15,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

/* --------------------------- food illustrations --------------------------- */

export function CheeseArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M17 73.5 61.5 41c4-3 8.5-3 12.5 0L101 59.5c3.5 2.5 3 6.5-1 9L55.5 97c-4 2.5-8 2.5-11.5 0L19 81.5c-3-2.2-4.5-5.5-2-8Z" />
      <path d="M44 97v10.5L17 89v-8" />
      <path d="M44 107.5 100 68.5V60" />
      <ellipse cx="44" cy="64" rx="4.6" ry="3.2" transform="rotate(-28 44 64)" />
      <ellipse cx="64" cy="65" rx="3.4" ry="2.4" transform="rotate(-28 64 65)" />
      <ellipse cx="72" cy="78" rx="5" ry="3.4" transform="rotate(-28 72 78)" />
      <ellipse cx="35" cy="80" rx="3.2" ry="2.2" transform="rotate(-28 35 80)" />
      <path d="M53 56.5c3-2 6-2 8.5-.5" opacity=".55" />
      <path d="M24 86.5 44 99" opacity=".5" />
    </svg>
  )
}

export function PastaArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M30 66h60" />
      <path d="M33 66c0 15 11 24 27 24s27-9 27-24" />
      <path d="M27 73c-2 0-3 2-2 4 3 12 14 20 26 20" opacity=".6" />
      <path d="M29 55c3-6 10-9 17-6 4 2 8 2 12 0 8-4 17-1 20 6" />
      <path d="M36 46c4-5 9-7 14-5 4 2 7 2 11 0 5-2 10-1 13 2" opacity=".75" />
      <path d="M23 40c5-4 9-4 13-1 4 3 8 3 12 0 4-3 9-3 13 0" opacity=".5" />
      <path d="M86 26v34" />
      <path d="M82 26v10M86 26v10M90 26v10" />
      <path d="M82 36h8" />
    </svg>
  )
}

export function TaralliArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M45 34c-12 1-21 10-20 22 1 13 11 22 24 21 12-1 21-11 20-24-1-12-11-20-24-19Z" />
      <path d="M51 46c-7 0-13 6-13 13s6 12 13 12 12-5 12-12-5-13-12-13Z" />
      <path d="M72 52c-10 2-16 11-14 21 2 11 12 17 23 15 10-2 16-12 14-22-2-10-12-16-23-14Z" opacity=".85" />
      <path d="M77 63c-5 1-8 5-7 10 1 5 6 8 11 7 5-1 8-6 7-11-1-4-6-7-11-6Z" opacity=".85" />
      <path d="M27 58c-8 4-11 13-7 21 4 8 13 10 21 7 7-4 9-13 5-20-4-7-12-10-19-8Z" opacity=".7" />
      <path d="M29 68c-4 2-5 7-3 11 2 4 7 5 11 3 3-2 4-6 2-10-2-3-6-5-10-4Z" opacity=".7" />
      <path d="M53 33.5 56 30M79 52l4-2M22 57l-4-2" opacity=".5" />
    </svg>
  )
}

export function TomatoArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M59 38c-15 0-27 12-27 28 0 17 12 29 28 29 17 0 29-12 29-29 0-16-13-28-30-28Z" />
      <path d="M59 38c-2-7 1-12 7-14M59 38c-5-4-10-4-15-1M59 38c2-5 6-8 11-8M59 38c-4-1-8 0-11 3" />
      <path d="M45 60c-1 7 1 13 5 17" opacity=".55" />
      <path d="M77 47c-2 3-3 6-3 9" opacity=".4" />
      <path d="M31 103c6 4 13 6 20 6" opacity=".45" />
    </svg>
  )
}

export function PreserveArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M42 39h36v9H42z" />
      <path d="M45 33h30c2 0 3 1 3 3v3H42v-3c0-2 1-3 3-3Z" />
      <path d="M43 48c-3 2-5 5-5 9v37c0 5 3 8 8 8h28c5 0 8-3 8-8V57c0-4-2-7-5-9" />
      <path d="M45 68h30v20H45z" opacity=".55" />
      <path d="M51 78c2-4 6-6 10-5 4 1 7 4 7 8" />
      <path d="M55 72c1-3 3-4 6-4s5 1 6 4" opacity=".7" />
      <path d="M46 97h28" opacity=".5" />
    </svg>
  )
}

export function CoffeeArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M30 92h56" />
      <path d="M36 92c0-8 2-15 6-20h30c4 5 6 12 6 20" />
      <path d="M45 72V53h24v19" />
      <path d="M42 53h30l-3-6H45z" />
      <path d="M49 47v-5h16v5" />
      <path d="M55 38h9" />
      <path d="M78 72c7 0 11 4 11 9s-4 9-11 9" />
      <path d="M60 32c-2-3 2-4 0-7M64 32c-2-3 2-4 0-7" opacity=".55" />
      <path d="M48 78h20" opacity=".4" />
    </svg>
  )
}

export function FishArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M26 61c8-13 22-21 37-21 11 0 20 4 27 11-5 4-8 9-9 15 1 6 4 11 9 15-7 7-16 11-27 11-15 0-29-8-37-21 5-3 8-6 8-10s-3-7-8-10Z" />
      <path d="M90 55c6-5 10-9 12-15M90 72c6 5 10 9 12 15" opacity=".7" />
      <path d="M57 41c-2 7-2 13 0 20s2 13 0 20" />
      <circle cx="48" cy="56" r="1.6" fill="currentColor" stroke="none" />
      <path d="M63 53c3-2 6-2 9 0" opacity=".5" />
      <path d="M62 67c3 2 6 2 9 0" opacity=".5" />
    </svg>
  )
}

export function OliveArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M55 99c-2-22 4-42 20-58" />
      <path d="M61 69c-10-2-17-8-20-17 10-2 18 2 22 9" />
      <path d="M68 57c-1-9 3-16 11-20 3 8 1 15-5 20" />
      <path d="M53 82c-9 1-16-2-20-9 8-4 16-2 21 4" />
      <path d="M73 52c3-8 9-12 17-12 0 9-6 14-14 15" />
      <circle cx="82" cy="72" r="7" />
      <circle cx="92" cy="86" r="5.5" />
      <circle cx="72" cy="85" r="5" />
      <path d="M82 79v4M92 91.5v3M72 90v2.5" opacity=".6" />
    </svg>
  )
}

export function CuredMeatArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M43 31c11-10 29-10 39 1 9 10 10 24 4 35-4 8-6 16-6 25 0 9-7 15-17 14-10-1-16-8-16-17 0-9-2-17-7-24-6-9-6-24 3-34Z" />
      <path d="M57 21c3 4 3 8 1 12M53 20c4 1 7 1 10 0" />
      <path d="M47 100c5 3 12 3 17 0" />
      <path d="M45 52c9 2 17 8 22 16M52 41c8 1 15 5 20 12M40 68c7 2 13 6 18 12" opacity=".45" />
      <path d="M62 33c-2 6-2 12 0 17" opacity=".55" />
    </svg>
  )
}

export function BreadArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M22 64c0-17 15-30 35-30s35 13 35 30c0 13-15 23-35 23S22 77 22 64Z" />
      <path d="M29 60c4-11 15-18 28-18s24 7 28 18" opacity=".55" />
      <ellipse cx="43" cy="64" rx="3" ry="2" />
      <ellipse cx="55" cy="57" rx="3" ry="2" />
      <ellipse cx="67" cy="63" rx="3" ry="2" />
      <ellipse cx="58" cy="72" rx="3" ry="2" />
      <ellipse cx="75" cy="73" rx="3" ry="2" />
      <path d="M37 74c5 4 11 6 18 6" opacity=".4" />
      <path d="M95 92c0-18 2-32 7-42" />
      <path d="M99 66c-6-1-10-4-12-9 6-1 11 1 13 6" />
      <path d="M100 56c-4-3-5-7-4-11 5 1 8 4 8 9" opacity=".7" />
      <path d="M101 78c5-2 8-5 9-10-5 0-9 3-10 7" opacity=".7" />
      <path d="M96 88c-4 1-7 4-8 8 5 0 8-2 10-6" opacity=".5" />
    </svg>
  )
}

export function OilArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M52 26h16v10c0 4 2 7 5 10 5 4 8 10 8 17v31c0 7-5 11-12 11H51c-7 0-12-4-12-11V63c0-7 3-13 8-17 3-3 5-6 5-10V26Z" />
      <path d="M50 22h20v6H50z" />
      <path d="M46 65h28v22H46z" opacity=".5" />
      <path d="M52 78c1-4 4-7 8-7s7 3 8 7" />
      <path d="M60 71c1-3 2-5 5-6" opacity=".7" />
      <circle cx="65" cy="73" r="1.6" fill="currentColor" stroke="none" opacity=".7" />
      <path d="M39 92c-3 3-3 6 0 9M83 45c4 2 6 6 5 10" opacity=".45" />
    </svg>
  )
}

export function WineArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M37 33h31v13c0 11-6 18-15.5 18S37 57 37 46V33Z" />
      <path d="M37 46c8 4 23 4 31 0" opacity=".55" />
      <path d="M53 64v23M41 90h24" />
      <path d="M42 84c4-2 8-2 12 0s8 2 11 0" opacity=".45" />
      <path d="M83 55c0-6 4-10 10-10 2-5 7-7 11-5" opacity=".7" />
      <circle cx="86" cy="62" r="5" />
      <circle cx="95" cy="68" r="5" />
      <circle cx="83" cy="72" r="4.5" />
      <path d="M90 58c2-3 5-4 8-3" opacity=".4" />
    </svg>
  )
}

export function BiscottiArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M34 47c10-5 22-5 31 0 3 2 4 5 2 8l-13 23c-2 3-5 4-8 2-9-5-16-15-15-25 0-4 1-7 3-8Z" />
      <path d="M39 53c7-3 15-3 22 0" opacity=".55" />
      <path d="M46 74c5 3 10 5 15 6" opacity=".45" />
      <path d="M62 40c8-7 20-8 29-2 4 3 4 7 1 10l-17 17c-3 3-7 3-10-1-6-8-8-17-3-24Z" opacity=".8" />
      <path d="M68 47c6-4 13-4 19-1" opacity=".45" />
      <circle cx="39" cy="89" r="6" opacity=".55" />
      <circle cx="52" cy="94" r="4" opacity=".4" />
      <path d="M30 84c4-2 7-2 11 0" opacity=".4" />
    </svg>
  )
}

export function MozzarellaArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M28 68c0-16 14-28 31-28s31 12 31 28-14 27-31 27-31-11-31-27Z" />
      <path d="M56 41c0-6 2-11 7-15 2 6 1 11-3 15" />
      <path d="M87 61c5-3 8-7 9-12" opacity=".55" />
      <path d="M40 77c3 6 9 10 16 12" opacity=".45" />
      <circle cx="94" cy="87" r="8" />
      <path d="M90 91c1 2 3 3 5 3" opacity=".5" />
      <path d="M22 82c-3 3-4 7-2 11" opacity=".4" />
    </svg>
  )
}

export function CheeseWheelArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <ellipse cx="56" cy="49" rx="33" ry="13" />
      <path d="M23 49v29c0 7 15 13 33 13s33-6 33-13V49" />
      <path d="M23 78c0 7 15 13 33 13s33-6 33-13" opacity=".45" />
      <path d="M63 62v29M63 62l26 8" />
      <path d="M63 62c9 0 18 3 26 8" opacity=".5" />
      <path d="M36 57c6 3 13 5 21 6" opacity=".35" />
      <path d="M34 89c2 3 6 5 10 6" opacity=".3" />
    </svg>
  )
}

export function SlicedMeatArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M24 78c0-13 14-22 36-22s36 9 36 22-14 21-36 21-36-8-36-21Z" />
      <path d="M36 71c6-8 14-12 24-12 11 0 19 5 24 12" />
      <path d="M45 59c4-7 11-11 19-11 8 0 14 4 18 11" opacity=".7" />
      <path d="M53 48c3-6 8-9 14-9 5 0 9 3 12 9" opacity=".5" />
      <path d="M40 84c8 3 16 4 26 4" opacity=".4" />
      <path d="M72 78c3 2 4 5 3 8" opacity=".35" />
    </svg>
  )
}

export function NdujaArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M40 36h40v9H40z" />
      <path d="M43 30h34c2 0 3 1 3 3v3H40v-3c0-2 1-3 3-3Z" />
      <path d="M43 45c-3 2-5 5-5 9v38c0 5 3 8 8 8h28c5 0 8-3 8-8V54c0-4-2-7-5-9" />
      <path d="M45 63h30v25H45z" opacity=".45" />
      <path d="M53 83c-3-6 0-12 6-13 6-1 11 3 12 8" />
      <path d="M71 74c2-2 4-2 6 0" />
      <path d="M55 76c-1 2-1 4 0 6" opacity=".5" />
    </svg>
  )
}

export function TomatoCanArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M36 37h48v52c0 6-11 10-24 10s-24-4-24-10V37Z" />
      <ellipse cx="60" cy="37" rx="24" ry="8" />
      <ellipse cx="60" cy="37" rx="18" ry="5.5" opacity=".45" />
      <path d="M43 57h34v22H43z" opacity=".45" />
      <path d="M60 68c-5 0-9-4-9-9s4-8 9-8 9 3 9 8-4 9-9 9Z" />
      <path d="M60 51c1-3 3-4 6-4M55 61c1 2 3 3 5 3" />
      <path d="M60 66c-2-2-3-5-3-8" opacity=".5" />
      <path d="M50 88h20" opacity=".3" />
    </svg>
  )
}

export function RiceArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M34 52h52l-5 46c0 4-3 7-7 7H46c-4 0-7-3-7-7l-5-46Z" />
      <path d="M37 52c4-7 11-11 23-11s19 4 23 11" />
      <path d="M48 29c8-2 15-3 21-2 6 1 9 4 9 8" opacity=".55" />
      <path d="M47 69c4 2 8 2 12 0s8-2 12 0" opacity=".6" />
      <path d="M45 81c4 2 8 2 12 0s8-2 12 0" opacity=".5" />
      <path d="M46 93c4 2 8 2 12 0s8-2 12 0" opacity=".4" />
      <path d="M41 40h38" opacity=".4" />
    </svg>
  )
}

export function WineBottleArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d="M52 22h16v7c0 4 2 7 5 10 4 4 6 9 6 15v43c0 5-3 8-8 8H49c-5 0-8-3-8-8V54c0-6 2-11 6-15 3-3 5-6 5-10v-7Z" />
      <path d="M50 17h20v6H50z" />
      <path d="M47 57h26v28H47z" opacity=".45" />
      <path d="M52 72c4-4 12-4 16 0" />
      <path d="M60 64v14" opacity=".45" />
      <path d="M92 70c0-5 2-9 6-12" opacity=".5" />
      <circle cx="93" cy="76" r="4" />
      <circle cx="100" cy="84" r="4" />
      <circle cx="90" cy="86" r="4" />
    </svg>
  )
}

export function PastryArt({ title, ...props }: ArtProps) {
  return (
    <svg {...base} {...props} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <ellipse cx="58" cy="64" rx="35" ry="24" />
      <ellipse cx="58" cy="62" rx="27" ry="17" opacity=".45" strokeDasharray="2 4" />
      <path d="M42 61c5-4 10-6 16-6s12 2 16 6" opacity=".55" />
      <path d="M50 70c5 3 11 3 16 0" />
      <path d="M36 85c6 4 13 5 20 5" opacity=".3" />
      <circle cx="96" cy="80" r="1.6" opacity=".5" />
      <circle cx="88" cy="88" r="1.2" opacity=".4" />
    </svg>
  )
}

/* ------------------------------- UI icons -------------------------------- */

const ui = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="16" height="16" {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="14" height="14" {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const SearchIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="15" height="15" {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 4.5 4.5" />
  </svg>
)

export const BagIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="18" height="18" {...p}>
    <path d="M4 8h16l-1.2 12.5H5.2L4 8Z" />
    <path d="M8.5 8V6a3.5 3.5 0 0 1 7 0v2" />
  </svg>
)

export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="18" height="18" {...p}>
    <path d="m5 5 14 14M19 5 5 19" />
  </svg>
)

export const MenuIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="20" height="20" {...p}>
    <path d="M3 7h18M3 12h18M3 17h12" />
  </svg>
)

export const PlusIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="12" height="12" {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const MinusIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="12" height="12" {...p}>
    <path d="M5 12h14" />
  </svg>
)

export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="16" height="16" {...p}>
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
)

export const InfoIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="16" height="16" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v6M12 7.5v.5" />
  </svg>
)

export const PinIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="18" height="18" {...p}>
    <path d="M19 10c0 5.5-7 11-7 11S5 15.5 5 10a7 7 0 1 1 14 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="16" height="16" {...p}>
    <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3c0 2-1.5 3-3.5 3C10 21 3 14 3 6.5 3 4.5 4 3 6 3Z" />
  </svg>
)

export const MailIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="16" height="16" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const ClockIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="16" height="16" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
)

export const LeafIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} {...p}>
    <path d="M20 4c-8 0-14 4-14 10a5 5 0 0 0 5 5c6 0 9-6 9-15Z" />
    <path d="M4 21c2-6 6-10 12-12" />
  </svg>
)

export const SnowIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} {...p}>
    <path d="M12 2v20M3.5 7l17 10M20.5 7l-17 10M12 5l-2.5 2M12 5l2.5 2M12 19l-2.5-2M12 19l2.5-2" />
  </svg>
)

export const TruckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} {...p}>
    <path d="M2 6h12v11H2zM14 10h4l3 3v4h-7" />
    <circle cx="6.5" cy="18" r="2" />
    <circle cx="17.5" cy="18" r="2" />
  </svg>
)

export const HandshakeIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} {...p}>
    <path d="m2 12 4-4 4 2 3-2 4 2 5-3M2 12l5 6 3-2 2 2 4-3 3 2 3-5" />
    <path d="m8 10 3 3M11 8l3 3" opacity=".6" />
  </svg>
)

export const BoxIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} {...p}>
    <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z" />
    <path d="M3 7.5 12 12l9-4.5M12 12v9" />
  </svg>
)

export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="17" height="17" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
)

export const FacebookIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...ui} width="17" height="17" {...p}>
    <path d="M14 3h-2.5A4.5 4.5 0 0 0 7 7.5V10H4v4h3v7h4v-7h3.5l.5-4H11V7.5A1.5 1.5 0 0 1 12.5 6H14V3Z" />
  </svg>
)

export const artMap: Record<string, (p: ArtProps) => ReactElement> = {
  cheese: CheeseArt,
  pasta: PastaArt,
  taralli: TaralliArt,
  tomato: TomatoArt,
  preserve: PreserveArt,
  coffee: CoffeeArt,
  fish: FishArt,
  olive: OliveArt,
  salumi: CuredMeatArt,
  bread: BreadArt,
  oil: OilArt,
  wine: WineArt,
  biscuit: BiscottiArt,
  mozzarella: MozzarellaArt,
  wheel: CheeseWheelArt,
  slices: SlicedMeatArt,
  nduja: NdujaArt,
  can: TomatoCanArt,
  rice: RiceArt,
  bottle: WineBottleArt,
  pastry: PastryArt,
}
