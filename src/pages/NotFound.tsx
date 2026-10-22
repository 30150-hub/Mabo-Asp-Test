import { Link } from 'react-router-dom'
import { ArrowRight, PastaArt } from '../components/Illustrations'

export function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '42rem' }}>
        <div style={{ width: '7rem', margin: '0 auto 1.5rem', opacity: 0.65 }}>
          <PastaArt />
        </div>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          Errore 404
        </span>
        <h1 className="display h1" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', marginTop: '1rem' }}>
          This plate is
          <br />
          <em className="red">empty.</em>
        </h1>
        <p className="lede" style={{ margin: '1.2rem auto 0', textAlign: 'center' }}>
          The page you are looking for has been eaten, moved, or never existed. The pantry,
          however, is still full.
        </p>
        <div className="flex gap-s wrap" style={{ justifyContent: 'center', marginTop: '1.8rem' }}>
          <Link to="/" className="btn btn--red">
            <span>Back to the table</span>
            <span className="btn__arrow">
              <ArrowRight />
            </span>
          </Link>
          <Link to="/prodotti" className="btn">
            <span>Browse the pantry</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
