import { artMap, CheeseArt } from './Illustrations'

type ProductArtProps = {
  art: string
  alt: string
  className?: string
}

export function ProductArt({ art, alt, className }: ProductArtProps) {
  if (art.startsWith('/')) {
    return <img src={art} alt={alt} className={className} loading="lazy" decoding="async" />
  }
  const Component = artMap[art] ?? CheeseArt
  return <Component className={className} title={alt} />
}
