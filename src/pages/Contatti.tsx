import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { Accordion } from '../components/Accordion'
import { EnquiryForm } from '../components/EnquiryForm'
import { Reveal } from '../components/Reveal'
import { ArrowUpRight, ClockIcon, MailIcon, PhoneIcon, PinIcon } from '../components/Illustrations'

function StylisedMap() {
  return (
    <a
      className="map-card"
      href={site.mapsUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Open Mabò ASP in Google Maps"
    >
      <svg
        viewBox="0 0 600 440"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Stylised map of Haren, Brussels"
      >
        <rect width="600" height="440" fill="#efe5d4" />
        <g stroke="#c9bda5" strokeWidth="8" fill="none" opacity=".6">
          <path d="M-20 360 620 120" />
          <path d="M-20 120 620 360" />
        </g>
        <g stroke="#d9cdb6" strokeWidth="3" fill="none" opacity=".8">
          <path d="M60 -10v460M180 -10v460M300 -10v460M420 -10v460M540 -10v460" />
          <path d="M-10 60h620M-10 180h620M-10 300h620M-10 420h620" />
        </g>
        <path d="M-20 250C90 235 150 210 210 150s100-95 210-85 140 10 200 60" stroke="#b9c8a0" strokeWidth="12" fill="none" opacity=".9" />
        <path d="M-20 258C90 243 158 216 218 158s100-93 206-84 138 12 198 62" stroke="#f6efe3" strokeWidth="3" fill="none" opacity=".8" />
        <g fill="#e3d7c2" opacity=".8">
          <rect x="78" y="215" width="52" height="34" rx="2" />
          <rect x="144" y="250" width="46" height="58" rx="2" />
          <rect x="250" y="60" width="60" height="40" rx="2" />
          <rect x="338" y="92" width="46" height="52" rx="2" />
          <rect x="470" y="280" width="56" height="40" rx="2" />
          <rect x="250" y="330" width="62" height="44" rx="2" />
          <rect x="410" y="190" width="38" height="38" rx="2" />
        </g>
        <g fill="#6f7760" opacity=".55" fontFamily="Jost, sans-serif" fontSize="11" letterSpacing="2">
          <text x="64" y="34">HAREN</text>
          <text x="412" y="410">CHAUSSÉE DE HAECHT</text>
          <text x="440" y="70">BORDET</text>
        </g>
        <circle cx="352" cy="186" r="54" fill="none" stroke="#d63d4c" strokeWidth="1" opacity=".25" />
        <circle cx="352" cy="186" r="86" fill="none" stroke="#d63d4c" strokeWidth="1" opacity=".12" />
        <path d="M352 160c-13 0-23 10-23 23 0 17 23 40 23 40s23-23 23-40c0-13-10-23-23-23Z" fill="#d63d4c" />
        <circle cx="352" cy="183" r="7" fill="#f6efe3" />
      </svg>
      <span className="map-card__badge">
        <PinIcon width={15} height={15} />
        Chaussée de Haecht 1211, Haren
        <ArrowUpRight width={12} height={12} />
      </span>
    </a>
  )
}

export function Contatti() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact — Haren, Brussels</span>
          <div className="page-hero__top">
            <h1 className="display h1" style={{ fontSize: 'clamp(3.2rem, 8vw, 7.6rem)' }}>
              Come say
              <br />
              <em className="red">buongiorno.</em>
            </h1>
            <p className="lede page-hero__side">
              Questions about a product, a delivery or a hamper? Call, write or come by the
              warehouse. We are a small family — most messages are read by the person who can
              actually answer them.
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 'var(--section)' }}>
        <div className="contact-grid">
          <div>
            <div className="contact-info">
              <div className="contact-row">
                <span className="contact-row__label">Visit</span>
                <div className="contact-row__value">
                  {site.address.street}
                  <br />
                  {site.address.city}
                  <br />
                  {site.address.country}
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-row__label">Call</span>
                <div className="contact-row__value">
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                  <br />
                  <a href={`tel:${site.mobileHref}`}>{site.mobile}</a>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-row__label">Write</span>
                <div className="contact-row__value">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-row__label">Company</span>
                <div className="contact-row__value">
                  Mabò — Antichi Sapori Pugliesi
                  <br />
                  VAT {site.vat}
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-row__label">Deliveries</span>
                <div className="contact-row__value">
                  Across Belgium — fresh, frozen and dry, twice-weekly fresh arrivals from
                  Italy.
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-row__label">Visits</span>
                <div className="contact-row__value" style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                  <ClockIcon /> By appointment — please call ahead.
                </div>
              </div>
            </div>
            <div className="hours-note">
              <strong>Planning a pick-up?</strong> Ring us before you come so we can have your
              order ready at the counter. The warehouse is busiest on delivery mornings.
            </div>
            <div className="flex gap-m wrap" style={{ marginTop: '1.6rem' }}>
              <a href={`tel:${site.phoneHref}`} className="link">
                <PhoneIcon /> Call the warehouse
              </a>
              <a href={`mailto:${site.email}`} className="link">
                <MailIcon /> Email us
              </a>
            </div>
          </div>

          <div
            style={{
              border: '1px solid var(--line)',
              padding: 'clamp(1.3rem, 3vw, 2rem)',
              background: 'var(--white)',
            }}
          >
            <span className="eyebrow">Send a message</span>
            <h2 className="h3 display" style={{ marginTop: '.8rem', marginBottom: '.4rem' }}>
              How can we help?
            </h2>
            <EnquiryForm subject="Message from the Mabò website" submitLabel="Send message" />
          </div>
        </div>

        <Reveal>
          <div style={{ marginTop: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <StylisedMap />
          </div>
        </Reveal>
      </section>

      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="container contact-faq">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="display h2" style={{ marginTop: '1rem' }}>
              A few
              <br />
              <em className="red">answers.</em>
            </h2>
            <p className="body-copy" style={{ marginTop: '1.2rem' }}>
              For anything else, the phone is still the fastest way to reach us.
            </p>
            <Link to="/horeca" className="link" style={{ marginTop: '1.2rem' }}>
              Horeca information
              <ArrowUpRight className="link__arrow" />
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion
              items={[
                {
                  title: 'Do you deliver outside Brussels?',
                  content: (
                    <p>
                      Yes — we serve the whole of Belgium. Fresh, frozen and dry products are
                      prepared and loaded in Haren, then delivered together.
                    </p>
                  ),
                },
                {
                  title: 'Can I order as a private customer?',
                  content: (
                    <p>
                      Yes. Home cooks can order through our retail shop, or contact us directly
                      for a hamper or a larger order. Restaurants and caterers use the trade
                      catalogue.
                    </p>
                  ),
                },
                {
                  title: 'Are prices visible on the site?',
                  content: (
                    <p>
                      Trade prices depend on the shipment and the quantities ordered, so they
                      are quoted per order. There is no payment online — we confirm everything
                      personally before delivery.
                    </p>
                  ),
                },
                {
                  title: 'How fresh is “fresh”?',
                  content: (
                    <p>
                      Fresh products arrive from Italy twice a week and are kept in the cold
                      chain from the moment they leave the producer. Ask us what came in this
                      week — the list changes.
                    </p>
                  ),
                },
                {
                  title: 'Can I visit the warehouse?',
                  content: (
                    <p>
                      Of course. We ask for a quick call or email first so someone is free to
                      show you around. Call {site.phone} or write to {site.email}.
                    </p>
                  ),
                },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
