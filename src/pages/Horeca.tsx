import { Link } from 'react-router-dom'
import { products } from '../data/catalog'
import { site } from '../data/site'
import { Accordion } from '../components/Accordion'
import { EnquiryForm } from '../components/EnquiryForm'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'
import {
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
  TruckIcon,
} from '../components/Illustrations'

const chefShelf = ['burrata-andria', 'prosciutto-parma', 'orecchiette', 'olio-coratina']

export function Horeca() {
  return (
    <>
      <section className="horeca-hero">
        <div className="horeca-hero__bg">
          <img
            src="/img/shop.webp"
            alt="Fresh Italian produce being prepared at the Mabò warehouse in Haren"
            fetchPriority="high"
          />
        </div>
        <div className="container horeca-hero__content">
          <span className="eyebrow eyebrow--light">Per la ristorazione — Horeca supply</span>
          <h1 className="display horeca-hero__title" style={{ marginTop: '1.2rem' }}>
            Your Italian pantry,
            <br />
            <em>on your schedule.</em>
          </h1>
          <div className="horeca-hero__row">
            <p className="horeca-hero__desc">
              Fresh from Italy twice a week. 1,155 references. One delivery, one invoice — and a
              family that knows your kitchen by name.
            </p>
            <div>
              <div className="flex gap-s wrap">
                <Link to="/horeca#quote" className="btn btn--red">
                  <span>Request a quote</span>
                  <span className="btn__arrow">
                    <ArrowRight />
                  </span>
                </Link>
                <Link to="/prodotti" className="btn btn--light">
                  <span>See the range</span>
                </Link>
              </div>
              <div className="horeca-hero__chips">
                {['Restaurants', 'Trattorie', 'Caterers', 'Hotels', 'Delis'].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container horeca-intro">
          <div>
            <Reveal>
              <span className="eyebrow">01 — The difference</span>
              <h2 className="display horeca-intro__headline">
                Built for kitchens
                <br />
                that care where
                <br />
                it <em className="red">comes from.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="horeca-intro__text" style={{ marginTop: '1.5rem' }}>
                <p className="body-copy">
                  A restaurant menu is a promise. The burrata has to be creamy, the tomatoes
                  sweet, the olive oil green and peppery — every week, not just on the day of
                  the tasting. That consistency is the work we do.
                </p>
                <p className="body-copy">
                  We buy directly from small Italian producers, consolidate the shipments in
                  Haren, and deliver across Belgium. You get one order, one invoice and one
                  person to call when something changes at the last minute.
                </p>
              </div>
              <div className="feature-list">
                {[
                  {
                    title: 'Fresh twice a week',
                    text: 'Chilled arrivals from Italy on a fixed schedule, so your specials can be planned around them.',
                  },
                  {
                    title: '1,155 references',
                    text: 'From the fresh counter to frozen, dry goods, wine, beer and non-food. One supplier instead of six.',
                  },
                  {
                    title: 'One delivery, one invoice',
                    text: 'We consolidate your order in Haren and deliver it together, at the temperature it needs.',
                  },
                ].map((item, i) => (
                  <div className="feature-list__item" key={item.title}>
                    <span className="feature-list__num">0{i + 1}</span>
                    <div>
                      <p className="feature-list__title">{item.title}</p>
                      <p className="feature-list__text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="media media--rounded media--zoom" style={{ aspectRatio: '0.85' }}>
              <img
                src="/img/photos/prosciutto.webp"
                alt="Prosciutto being prepared for service"
                loading="lazy"
              />
              <span className="media__tag">Sliced to order</span>
            </div>
            <div
              className="flex gap-s"
              style={{
                marginTop: '1rem',
                padding: '1.1rem 1.2rem',
                border: '1px solid var(--line)',
                background: 'var(--white)',
                alignItems: 'flex-start',
              }}
            >
              <CheckIcon style={{ flexShrink: 0, marginTop: 2, color: 'var(--olive)' }} />
              <p className="small" style={{ color: 'var(--ink-2)', lineHeight: 1.55 }}>
                <strong>No online payment.</strong> Your order is confirmed by a person, with a
                quote adapted to what is actually available that week.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="cats__head">
            <Reveal>
              <span className="eyebrow">02 — How it works</span>
              <h2 className="display h2" style={{ marginTop: '1.1rem' }}>
                From your list
                <br />
                to your <em className="red">kitchen.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="cats__lead" style={{ maxWidth: '24rem' }}>
                No portal to learn, no minimum automation. A conversation, a quote, a delivery.
              </p>
            </Reveal>
          </div>
          <div className="process__grid">
            {[
              {
                title: 'Tell us about your kitchen',
                text: 'Send your current order, your menu or simply what you miss from Italy. We will suggest what fits.',
              },
              {
                title: 'We build your list & quote',
                text: 'Availability is checked against the next shipment. You receive a clear quote and delivery window.',
              },
              {
                title: 'We deliver & keep you stocked',
                text: 'Your order arrives chilled, frozen or dry — together. Reordering is a short email or a phone call.',
              },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="process__item">
                  <div className="process__num">0{i + 1}</div>
                  <h3 className="process__title">{step.title}</h3>
                  <p className="process__text">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cats__head">
            <Reveal>
              <span className="eyebrow">03 — On the chef’s shelf</span>
              <h2 className="display h2" style={{ marginTop: '1.1rem' }}>
                A few things
                <br />
                we are <em className="red">known for.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <Link to="/prodotti" className="link">
                See the full selection
                <ArrowUpRight className="link__arrow" />
              </Link>
            </Reveal>
          </div>
          <div className="product-grid">
            {products
              .filter((p) => chefShelf.includes(p.id))
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>

      <section className="section quote-panel" id="quote">
        <div className="container quote-panel__grid">
          <div>
            <span className="eyebrow eyebrow--light">04 — Start here</span>
            <h2 className="display quote-panel__title">
              Tell us what
              <br />
              your kitchen
              <br />
              <em style={{ color: 'var(--red)' }}>needs.</em>
            </h2>
            <p className="quote-panel__text">
              One of the family will read this — not a bot. Expect availability, a tailored
              quote and the next delivery window within one business day.
            </p>
            <div className="quote-panel__contact">
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              {site.address.street}, {site.address.city}
            </div>
            <div
              className="flex gap-s"
              style={{ marginTop: '2rem', alignItems: 'center', color: 'rgba(247,240,228,.55)' }}
            >
              <TruckIcon width={18} height={18} />
              <span className="small">Deliveries across Belgium, every week.</span>
            </div>
          </div>
          <div>
            <EnquiryForm variant="dark" subject="Horeca quote request" submitLabel="Request my quote" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-faq">
          <Reveal>
            <span className="eyebrow">Good to know</span>
            <h2 className="display h2" style={{ marginTop: '1rem' }}>
              Questions
              <br />
              from the <em className="red">trade.</em>
            </h2>
            <p className="body-copy" style={{ marginTop: '1.2rem' }}>
              Anything else? Call {site.phone} — or write to {site.email}. We answer during
              warehouse hours.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion
              items={[
                {
                  title: 'Where do you deliver?',
                  content: (
                    <p>
                      Across Belgium. Fresh, frozen and dry products travel together, keeping
                      each at the right temperature. Deliveries to Brussels and the surrounding
                      area are the most frequent.
                    </p>
                  ),
                },
                {
                  title: 'How often do fresh products arrive?',
                  content: (
                    <p>
                      Fresh shipments from Italy arrive twice a week. The exact selection
                      changes with the season and with what the producers have available — ask
                      us for the current week’s list.
                    </p>
                  ),
                },
                {
                  title: 'Can I see trade prices online?',
                  content: (
                    <p>
                      Our catalogue is a working document and prices depend on the shipment and
                      the quantity. Send your list and we will quote it. Established trade
                      customers can also receive the full price list directly.
                    </p>
                  ),
                },
                {
                  title: 'Do you supply more than food?',
                  content: (
                    <p>
                      Yes. The catalogue includes a non-food family — cleaning products,
                      packaging and disposable items used by restaurants and delis.
                    </p>
                  ),
                },
                {
                  title: 'Can private customers order?',
                  content: (
                    <p>
                      Yes. Home cooks can order through our retail shop, or contact us for a
                      hamper. Restaurants and caterers use the trade catalogue and quote
                      process.
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
