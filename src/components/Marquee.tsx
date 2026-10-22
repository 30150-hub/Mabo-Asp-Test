import { marqueeItems } from '../data/site'

export function Marquee() {
  const group = (
    <div className="marquee__group" aria-hidden="true">
      {marqueeItems.map((item) => (
        <span className="marquee__item" key={item}>
          <span className="marquee__star">✦</span>
          <span>
            {item === 'Burrata di Andria' || item === 'Orecchiette fresche' ? (
              <em>{item}</em>
            ) : (
              item
            )}
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee" role="region" aria-label="A taste of the Mabò range">
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  )
}
