import { Link } from 'react-router-dom'
import { nav, site } from '../data/site'
import { FacebookIcon, InstagramIcon } from './Illustrations'
import { Reveal } from './Reveal'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="container">
          <Reveal>
            <div className="footer__cta-grid">
              <div>
                <span className="eyebrow eyebrow--light">Let’s set the table</span>
                <h2 className="display h2" style={{ marginTop: '1rem' }}>
                  Your Italian pantry,
                  <br />
                  <em style={{ color: 'var(--red)' }}>one order away.</em>
                </h2>
              </div>
              <div>
                <p>
                  Tell us what your kitchen needs. We reply with availability, a tailored
                  quote and the next delivery window.
                </p>
                <div className="flex gap-s wrap" style={{ marginTop: '1.5rem' }}>
                  <Link to="/horeca#quote" className="btn btn--red">
                    <span>Request a quote</span>
                  </Link>
                  <Link to="/contatti" className="btn btn--light">
                    <span>Visit the warehouse</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container footer__main">
        <div className="footer__brand-block">
          <div className="footer__brand">
            <img
            src="/brand/mabo-logo.png"
            alt=""
            style={{ background: 'var(--paper)', borderRadius: '50%', padding: '.4rem' }}
          />
            <div>
              <p className="footer__brand-name">Mabò</p>
              <p className="footer__brand-sub">Antichi Sapori Pugliesi</p>
            </div>
          </div>
          <p
            style={{
              marginTop: '1.2rem',
              color: 'rgba(247,240,228,.6)',
              fontSize: '.82rem',
              maxWidth: '24ch',
            }}
          >
            A family-run importer of artisanal Italian food, based in Haren, Brussels since
            2000.
          </p>
          <div className="flex gap-s" style={{ marginTop: '1.4rem' }}>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              style={{ borderColor: 'rgba(247,240,228,.25)', color: 'var(--paper)' }}
              aria-label="Mabò on Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              style={{ borderColor: 'rgba(247,240,228,.25)', color: 'var(--paper)' }}
              aria-label="Mabò on Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h3>Explore</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/crediti">Photo credits</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>For the trade</h3>
          <ul>
            <li>
              <Link to="/horeca">Horeca supply</Link>
            </li>
            <li>
              <Link to="/prodotti">Full catalogue</Link>
            </li>
            <li>
              <Link to="/bottega">Bottega &amp; hampers</Link>
            </li>
            <li>
              <a href={site.shopUrl} target="_blank" rel="noreferrer">
                Online shop ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h3>Find us</h3>
          <address style={{ fontStyle: 'normal' }}>
            <p>
              {site.address.street}
              <br />
              {site.address.city}
              <br />
              {site.address.country}
            </p>
            <p style={{ marginTop: '.7rem' }}>
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p style={{ marginTop: '.7rem', fontSize: '.7rem' }}>VAT {site.vat}</p>
          </address>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Mabò ASP — All rights reserved</span>
        <span>Made with care in Brussels &amp; Puglia</span>
        <Link to="/crediti">Credits</Link>
      </div>

      <span className="footer__watermark" aria-hidden>
        Mabò
      </span>
    </footer>
  )
}
