import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { asset } from '../lib/asset'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { groups } from '../data/catalog'
import { Marquee } from '../components/Marquee'
import { LineReveal, Reveal, Stagger, StaggerItem } from '../components/Reveal'
import { Seal } from '../components/Seal'
import {
  ArrowRight,
  ArrowUpRight,
  BoxIcon,
  BiscottiArt,
  BreadArt,
  CheeseArt,
  CuredMeatArt,
  FishArt,
  HandshakeIcon,
  OilArt,
  OliveArt,
  PastaArt,
  TomatoArt,
  TruckIcon,
  WineArt,
} from '../components/Illustrations'

const catIcons = {
  dairy: CheeseArt,
  salumi: CuredMeatArt,
  pasta: PastaArt,
  forno: BreadArt,
  dispensa: TomatoArt,
  olio: OilArt,
  cantina: WineArt,
  dolci: BiscottiArt,
  fish: FishArt,
}

const catLabel: Record<string, string> = {
  dairy: 'Cheese & dairy',
  salumi: 'Cured meats',
  pasta: 'Pasta & grains',
  forno: 'Bakery',
  dispensa: 'Pantry',
  olio: 'Olive oils',
  cantina: 'The cellar',
  dolci: 'Sweets',
}

const homeCategories = ['dairy', 'salumi', 'pasta', 'forno', 'dispensa', 'olio', 'cantina', 'dolci']

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70])
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40])

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="container hero__grid">
          <div className="hero__copy">
            <div className="hero__eyebrow">
              <span className="dot" />
              <span className="eyebrow eyebrow--plain">Artisanal Italian food · Haren, Brussels</span>
            </div>

            <h1 className="display hero__title">
              <LineReveal delay={0.1}>The true taste</LineReveal>
              <LineReveal delay={0.2}>
                of <em>Italy.</em>
              </LineReveal>
              <LineReveal delay={0.3}>
                <span className="serif-italic" style={{ fontSize: '.46em', color: 'var(--ink-2)' }}>
                  since 2000.
                </span>
              </LineReveal>
            </h1>

            <div className="hero__bottom">
              <div>
                <p className="hero__desc">
                  A family-run importer and wholesaler of artisanal Italian food. Two sisters,
                  their husbands, and 1,155 references chosen from small producers — for
                  restaurants and home cooks across Belgium.
                </p>
                <div className="hero__actions">
                  <Link to="/prodotti" className="btn btn--red">
                    <span>Explore the catalogue</span>
                    <span className="btn__arrow">
                      <ArrowRight />
                    </span>
                  </Link>
                  <Link to="/horeca" className="link">
                    For restaurants
                    <ArrowUpRight className="link__arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__media">
            <motion.div className="hero__frame" style={{ y: imageY }}>
              <img
                src={asset('/img/table.webp')}
                alt="An Italian table set with cheeses, bread and pasta at Mabò"
                fetchPriority="high"
              />
            </motion.div>
            <motion.div className="hero__badge" style={{ y: badgeY }}>
              <Seal />
            </motion.div>
            <motion.div
              className="hero__note"
              initial={reduce ? false : { opacity: 0, y: 18, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <strong>Twice a week</strong>
              <span>Fresh arrivals from Italy</span>
            </motion.div>
            <motion.img
              src={asset('/brand/deco1.png')}
              alt=""
              className="hero__leaf hero__leaf--basil"
              initial={reduce ? false : { opacity: 0, scale: 0.9, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1, duration: 1 }}
            />
            <motion.img
              src={asset('/brand/deco4.png')}
              alt=""
              className="hero__leaf hero__leaf--olive"
              initial={reduce ? false : { opacity: 0, scale: 0.9, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.15, duration: 1 }}
            />
          </div>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </div>
      </section>

      <Marquee />

      <section className="section intro">
        <div className="container intro__grid">
          <div className="intro__aside">
            <Reveal>
              <div className="intro__photo">
                <img
                  src={asset('/img/shop.webp')}
                  alt="Inside the Mabò warehouse and counter in Haren, Brussels"
                  loading="lazy"
                />
              </div>
              <div className="intro__small">
                <img src={asset('/img/photos/prosciutto.webp')} alt="Prosciutto being sliced" loading="lazy" />
              </div>
              <img className="intro__stamp" src={asset('/brand/mabo-logo.png')} alt="" />
            </Reveal>
          </div>

          <div className="intro__copy">
            <Reveal>
              <span className="eyebrow">01 — Our story</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display intro__headline">
                A family table,
                <br />
                set in <em>Brussels.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="intro__text">
                <p>
                  Antichi Sapori Pugliesi opened its doors in Brussels in 2000, with a simple
                  idea: bring the food of Puglia to the city without losing what makes it
                  special. In 2019 we merged with Mabò Prodotti Italiani, and became the
                  address that Italian chefs in Belgium quietly share with each other.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Today the business is run by two sisters and their husbands. We taste, we
                  choose, we drive to the airport at dawn. The catalogue is large — 1,155
                  references — but it is still put together by hand.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="intro__signature">
                <span className="intro__signature-line" />
                <p>The Mabò family</p>
              </div>
              <Link to="/storia" className="link" style={{ marginTop: '2rem' }}>
                Read our story
                <ArrowUpRight className="link__arrow" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cats__head">
            <div>
              <Reveal>
                <span className="eyebrow">02 — The pantry</span>
                <h2 className="display h2" style={{ marginTop: '1.1rem' }}>
                  The Italian pantry,
                  <br />
                  <em className="red">by heart.</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div style={{ maxWidth: '26rem' }}>
                <p className="cats__lead">
                  Fresh, frozen and dry. Choose a corner of the catalogue, or ask us for the
                  full list — it runs to 1,155 references.
                </p>
                <Link to="/prodotti" className="link" style={{ marginTop: '1rem' }}>
                  View all products
                  <ArrowUpRight className="link__arrow" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Stagger className="cats__grid">
            {homeCategories.map((slug, i) => {
              const group = groups.find((g) => g.slug === slug)
              const Icon = catIcons[slug as keyof typeof catIcons] ?? CheeseArt
              return (
                <StaggerItem key={slug}>
                  <Link to={`/prodotti?g=${slug}`} className="cat-card" aria-label={group?.name}>
                    <div className="cat-card__top">
                      <span className="cat-card__index">0{i + 1}</span>
                      <span className="cat-card__arrow">
                        <ArrowUpRight />
                      </span>
                    </div>
                    <div className="cat-card__icon">
                      <Icon />
                    </div>
                    <div className="cat-card__bottom">
                      <span className="cat-card__label">{catLabel[slug]}</span>
                      <span className="cat-card__count">{group?.count ?? 'Selected references'}</span>
                    </div>
                  </Link>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      <section className="section fresh">
        <div className="container fresh__grid">
          <Reveal>
            <div className="fresh__media">
              <img
                src={asset('/img/photos/burrata.webp')}
                alt="Fresh burrata, delivered from Italy"
                loading="lazy"
              />
              <span className="fresh__media-tag">Twice weekly</span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow eyebrow--light">03 — From Puglia</span>
              <h2 className="display fresh__title">
                From the south,
                <br />
                <em>twice a week.</em>
              </h2>
              <p className="fresh__text">
                The fresh truck leaves Italy on a schedule we have kept for years. That is how
                burrata arrives with its cream still soft, focaccia with its crumb still warm,
                and vegetables picked a day or two before.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="steps">
                <div className="step">
                  <span className="step__num">01</span>
                  <div>
                    <p className="step__title">Chosen at the source</p>
                    <p className="step__text">
                      Small caseifici, bakeries and family estates. We visit, taste and buy
                      directly.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <span className="step__num">02</span>
                  <div>
                    <p className="step__title">Shipped fresh</p>
                    <p className="step__text">
                      Temperature-controlled shipments from Italy, twice every week.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <span className="step__num">03</span>
                  <div>
                    <p className="step__title">Delivered in Belgium</p>
                    <p className="step__text">
                      One delivery, one invoice — from a single restaurant in Brussels to a
                      kitchen in Liège.
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/horeca" className="btn btn--light" style={{ marginTop: '2rem' }}>
                <span>How we supply restaurants</span>
                <span className="btn__arrow">
                  <ArrowRight />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section worlds">
        <div className="container">
          <div className="cats__head">
            <Reveal>
              <span className="eyebrow">04 — Two doors</span>
              <h2 className="display h2" style={{ marginTop: '1.1rem' }}>
                The same pantry,
                <br />
                <em className="red">two ways in.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="cats__lead" style={{ maxWidth: '24rem' }}>
                Wholesale for professionals, a curated bottega for the table at home. Same
                products, same family.
              </p>
            </Reveal>
          </div>
          <div className="worlds__grid">
            <Reveal>
              <article className="world-card">
                <img src={asset('/img/warehouse.webp')} alt="The Mabò team at work in Haren" loading="lazy" />
                <div>
                  <span className="world-card__eyebrow">For professionals</span>
                  <h3 className="world-card__title">Horeca supply</h3>
                  <p className="world-card__text">
                    Weekly lists, fresh arrivals, one invoice. Built around the rhythm of your
                    kitchen.
                  </p>
                  <Link to="/horeca" className="world-card__link">
                    Enter the Horeca side
                    <ArrowUpRight />
                  </Link>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="world-card">
                <img src={asset('/img/table.webp')} alt="An Italian table at home" loading="lazy" />
                <div>
                  <span className="world-card__eyebrow">For home cooks</span>
                  <h3 className="world-card__title">La Bottega</h3>
                  <p className="world-card__text">
                    Curated hampers and a retail selection delivered across Belgium, or picked
                    up in Haren.
                  </p>
                  <Link to="/bottega" className="world-card__link">
                    Open the Bottega
                    <ArrowUpRight />
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="stats">
          {[
            ['2000', 'Rooted in Brussels'],
            ['2019', 'The Mabò merger'],
            ['1,155', 'Catalogue references'],
            ['2×', 'Fresh arrivals each week'],
          ].map(([value, label], i) => (
            <Reveal className="stat" key={label} delay={i * 0.05}>
              <div className="stat__value">{value}</div>
              <div className="stat__label">{label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="values__grid">
              <div className="value-card">
                <span className="value-card__num">01 — Selection</span>
                <div style={{ width: '3rem', marginBottom: '1rem' }}>
                  <OliveArt />
                </div>
                <h3 className="value-card__title">Small producers only</h3>
                <p className="value-card__text">
                  If we would not serve it at our own table, it does not make the list. Every
                  reference has a name and a place behind it.
                </p>
              </div>
              <div className="value-card">
                <span className="value-card__num">02 — Service</span>
                <div style={{ width: '3rem', marginBottom: '1rem' }}>
                  <TruckIcon width="100%" height="100%" />
                </div>
                <h3 className="value-card__title">A person, not a portal</h3>
                <p className="value-card__text">
                  Call, write, ask for something unusual. The same family answers, checks the
                  stock and confirms your delivery.
                </p>
              </div>
              <div className="value-card">
                <span className="value-card__num">03 — Family</span>
                <div style={{ width: '3rem', marginBottom: '1rem' }}>
                  <HandshakeIcon width="100%" height="100%" />
                </div>
                <h3 className="value-card__title">Two sisters, four hands</h3>
                <p className="value-card__text">
                  A business run by two sisters and their husbands — with the patience and the
                  stubbornness that only a family has.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="puglia">
        <div className="puglia__bg">
          <img src={asset('/img/photos/trulli.webp')} alt="The trulli of Alberobello, Puglia" loading="lazy" />
        </div>
        <div className="puglia__content">
          <Reveal>
            <span className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>
              Our homeland
            </span>
            <p className="puglia__quote" style={{ marginTop: '1.4rem' }}>
              “We don’t import a catalogue. We bring over the producers{' '}
              <em>we grew up with.</em>”
            </p>
            <span className="puglia__caption">Puglia · Il tacco d’Italia</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid visit-grid">
            <Reveal>
              <span className="eyebrow">05 — Visit us</span>
              <h2 className="display h2" style={{ marginTop: '1rem' }}>
                Come say
                <br />
                <em className="red">buongiorno.</em>
              </h2>
              <p className="lede" style={{ marginTop: '1.4rem' }}>
                Our warehouse sits on Chaussée de Haecht in Haren. Pass by for a coffee, taste
                the new arrivals and leave with a case of something you did not plan to buy.
              </p>
              <div className="flex gap-m wrap mt-m">
                <div>
                  <p className="caption">Address</p>
                  <p style={{ marginTop: '.35rem' }}>
                    Chaussée de Haecht 1211
                    <br />
                    1130 Brussels (Haren)
                  </p>
                </div>
                <div>
                  <p className="caption">Call ahead</p>
                  <p style={{ marginTop: '.35rem' }}>
                    <a href="tel:+3224265961" style={{ borderBottom: '1px solid var(--line-strong)' }}>
                      +32 2 426 59 61
                    </a>
                    <br />
                    Visits by appointment
                  </p>
                </div>
              </div>
              <Link to="/contatti" className="btn" style={{ marginTop: '2rem' }}>
                <span>Plan your visit</span>
                <span className="btn__arrow">
                  <ArrowRight />
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="media media--rounded media--zoom" style={{ aspectRatio: '1.1' }}>
                <img src={asset('/img/photos/burrata.webp')} alt="Fresh burrata" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div style={{ paddingBlock: '2rem' }} className="container">
        <div className="flex between wrap gap-s" style={{ alignItems: 'center' }}>
          <p className="small muted">Mabò ASP · Antichi Sapori Pugliesi · Est. 2000</p>
          <div className="flex gap-s wrap">
            <span className="caption" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem' }}>
              <BoxIcon width={14} height={14} /> 1,155 references
            </span>
            <span className="caption" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem' }}>
              <TruckIcon width={14} height={14} /> Delivered across Belgium
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
