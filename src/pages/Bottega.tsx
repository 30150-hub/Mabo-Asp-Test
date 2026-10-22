import { Link } from 'react-router-dom'
import { hamperItems, products } from '../data/catalog'
import { site } from '../data/site'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'
import { useCart } from '../context/CartContext'
import {
  ArrowRight,
  ArrowUpRight,
  BoxIcon,
  SnowIcon,
  TruckIcon,
} from '../components/Illustrations'

function HamperStill({ items, label }: { items: string[]; label: string }) {
  return (
    <div className="hamper__still" role="img" aria-label={label}>
      <svg className="hamper__crate" viewBox="0 0 260 220" aria-hidden>
        <path d="M44 74h172v120c0 7-5 12-12 12H56c-7 0-12-5-12-12V74Z" />
        <path d="M34 56h192l-10 18H44L34 56Z" />
        <path d="M34 56c34-20 168-20 192 0" opacity=".4" />
        <path d="M60 101h140" opacity=".35" />
      </svg>
      <span className="hamper__stamp">Mabò</span>
      {items.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt=""
          className={`hamper__prop hamper__prop--${i + 1}`}
          loading="lazy"
        />
      ))}
    </div>
  )
}

const homeSelection = [
  'burrata-andria',
  'focaccia',
  'san-marzano',
  'olio-coratina',
  'primitivo',
  'cantuccini',
  'caffe',
  'alici',
]

export function Bottega() {
  const { add } = useCart()

  return (
    <>
      <section className="bottega-hero">
        <div className="container bottega-hero__grid">
          <div>
            <span className="eyebrow">La bottega — for the table at home</span>
            <h1 className="display bottega-hero__title">
              The good
              <br />
              things, for
              <br />
              <em className="red">home.</em>
            </h1>
            <p className="lede" style={{ marginTop: '1.6rem' }}>
              The same pantry we deliver to restaurants, in quantities that make sense in a
              home kitchen. Order online across Belgium, or come and choose at the counter in
              Haren.
            </p>
            <div className="flex gap-s wrap" style={{ marginTop: '1.8rem' }}>
              <a href={site.shopUrl} target="_blank" rel="noreferrer" className="btn btn--red">
                <span>Visit the online shop</span>
                <span className="btn__arrow">
                  <ArrowUpRight />
                </span>
              </a>
              <Link to="/bottega#hampers" className="btn">
                <span>Browse the hampers</span>
              </Link>
            </div>
          </div>
          <div className="bottega-hero__media">
            <div className="media media--rounded media--zoom" style={{ height: '100%' }}>
              <img
                src="/img/table.webp"
                alt="An Italian table laid with cheese, bread and wine"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="delivery-strip">
              <div className="delivery-strip__item">
                <div className="delivery-strip__icon">
                  <TruckIcon width="100%" height="100%" />
                </div>
                <div>
                  <p className="delivery-strip__title">Across Belgium</p>
                  <p className="delivery-strip__text">
                    Home delivery from the online shop, or by arrangement with us.
                  </p>
                </div>
              </div>
              <div className="delivery-strip__item">
                <div className="delivery-strip__icon">
                  <SnowIcon width="100%" height="100%" />
                </div>
                <div>
                  <p className="delivery-strip__title">Kept cold</p>
                  <p className="delivery-strip__text">
                    Fresh and frozen products travel in the same cold chain as the trade orders.
                  </p>
                </div>
              </div>
              <div className="delivery-strip__item">
                <div className="delivery-strip__icon">
                  <BoxIcon width="100%" height="100%" />
                </div>
                <div>
                  <p className="delivery-strip__title">Pick up in Haren</p>
                  <p className="delivery-strip__text">
                    Collect your order at the warehouse — and ask us what is new that week.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="hampers" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cats__head">
            <Reveal>
              <span className="eyebrow">01 — Boxed with care</span>
              <h2 className="display h2" style={{ marginTop: '1.1rem' }}>
                Hampers and
                <br />
                <em className="red">house boxes.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="cats__lead" style={{ maxWidth: '26rem' }}>
                Built around a region, a season or a table. Each box is assembled by hand and
                can be adapted for a gift.
              </p>
            </Reveal>
          </div>

          <div className="boxes__grid">
            {hamperItems.map((hamper, i) => (
              <Reveal key={hamper.id} delay={i * 0.06}>
                <article className="hamper">
                  <div className="hamper__media">
                    <HamperStill items={hamper.props} label={`${hamper.name} — hamper contents`} />
                    <span className="hamper__tag">{hamper.tag}</span>
                  </div>
                  <div className="hamper__body">
                    <span className="caption">{hamper.size}</span>
                    <h3 className="hamper__name">{hamper.name}</h3>
                    <p className="hamper__desc">{hamper.desc}</p>
                    <div className="hamper__foot">
                      <span className="hamper__price">{hamper.price}</span>
                      <button
                        className="add-btn"
                        onClick={() =>
                          add({
                            id: hamper.id,
                            name: hamper.name,
                            art: hamper.art,
                            group: 'Hamper',
                          })
                        }
                      >
                        Add to enquiry <ArrowRight width={12} height={12} />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <div className="cats__head">
            <Reveal>
              <span className="eyebrow">02 — From the counter</span>
              <h2 className="display h2" style={{ marginTop: '1.1rem' }}>
                A smaller
                <br />
                <em className="red">pantry.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div style={{ maxWidth: '25rem' }}>
                <p className="cats__lead">
                  Eight things that earn their place in a home kitchen. Add them to your
                  enquiry and we will come back with retail prices.
                </p>
                <a
                  href={site.shopUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                  style={{ marginTop: '1rem' }}
                >
                  Shop the full retail range
                  <ArrowUpRight className="link__arrow" />
                </a>
              </div>
            </Reveal>
          </div>
          <div className="product-grid">
            {products
              .filter((p) => homeSelection.includes(p.id))
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid counter-grid">
            <Reveal>
              <div className="media media--arch media--zoom" style={{ aspectRatio: '0.9' }}>
                <img
                  src="/img/shop.webp"
                  alt="The Mabò counter in Haren, Brussels"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <div className="counter-copy">
              <Reveal>
                <span className="eyebrow">03 — At the counter</span>
                <h2 className="display h2" style={{ marginTop: '1.1rem' }}>
                  Ask for
                  <br />
                  <em className="red">the good one.</em>
                </h2>
                <p className="lede" style={{ marginTop: '1.4rem' }}>
                  The counter is where the catalogue makes sense. Tell us what you are cooking
                  and we will point you to the right oil, the right cheese, the right pasta
                  shape. You may leave with more than you planned.
                </p>
                <div className="mt-m">
                  <p className="caption">The warehouse &amp; counter</p>
                  <p style={{ marginTop: '.4rem' }}>
                    {site.address.street}
                    <br />
                    {site.address.city}
                  </p>
                  <p className="small muted" style={{ marginTop: '.4rem' }}>
                    Visits by appointment — call {site.phone}.
                  </p>
                </div>
                <div className="flex gap-s wrap" style={{ marginTop: '1.6rem' }}>
                  <Link to="/contatti" className="btn btn--solid">
                    <span>Plan a visit</span>
                    <span className="btn__arrow">
                      <ArrowRight />
                    </span>
                  </Link>
                  <a href={`tel:${site.phoneHref}`} className="link">
                    Call the counter
                    <ArrowUpRight className="link__arrow" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div
              className="flex between wrap gap-m center"
              style={{
                border: '1px solid var(--line)',
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                background: 'var(--white)',
              }}
            >
              <div>
                <span className="eyebrow">The online shop</span>
                <h2 className="h3 display" style={{ marginTop: '.8rem', maxWidth: '22ch' }}>
                  Everything else lives at Panefocaccia.
                </h2>
                <p className="small muted" style={{ marginTop: '.6rem', maxWidth: '44ch' }}>
                  Our retail shop carries the full consumer range, delivered throughout
                  Belgium. The trade catalogue remains here, with us.
                </p>
              </div>
              <a href={site.shopUrl} target="_blank" rel="noreferrer" className="btn btn--red">
                <span>Open the shop</span>
                <span className="btn__arrow">
                  <ArrowUpRight />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
