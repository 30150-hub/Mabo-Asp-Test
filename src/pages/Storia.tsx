import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { ArrowRight, ArrowUpRight, CheeseArt, HandshakeIcon, OliveArt, SnowIcon } from '../components/Illustrations'

export function Storia() {
  return (
    <>
      <section className="story-hero">
        <div className="container story-hero__grid">
          <div>
            <span className="eyebrow">La nostra storia — since 2000</span>
            <h1 className="display story-hero__title">
              Two sisters.
              <br />
              One pantry.
              <br />
              <em className="red">Since 2000.</em>
            </h1>
            <p className="lede" style={{ marginTop: '1.8rem' }}>
              A Brussels address with a Puglian accent. A family business that grew out of a
              simple conviction: the food of the south deserves to travel well.
            </p>
          </div>
          <div>
            <div className="story-hero__media">
              <img
                src="/img/shop.webp"
                alt="The Mabò shop and counter in Haren, Brussels"
                fetchPriority="high"
              />
            </div>
            <p className="story-hero__caption">
              Chaussée de Haecht 1211, Haren — the counter where it all happens.
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 'var(--section)' }}>
        <div className="story-intro">
          <Reveal>
            <span className="eyebrow">The short version</span>
            <p className="h4" style={{ marginTop: '1rem', color: 'var(--muted)' }}>
              Antichi Sapori Pugliesi — A.S.P. — was born in Brussels in 2000.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="story-intro__body">
              It began as it continues today: with a list of small producers, a schedule of
              fresh deliveries, and the belief that <em>the best things are made close to
              home.</em>
            </p>
            <p className="story-intro__meta">
              In 2019 the company merged with Mabò Prodotti Italiani, joining two complementary
              ways of working with Italian food in Belgium. The name on the door became Mabò —
              Antichi Sapori Pugliesi. The family stayed at the centre. Two sisters and their
              husbands now run the business together, with a team of roughly 5.1 full-time
              equivalents. The catalogue has grown to 1,155 references. The fresh shipment
              still arrives twice a week.
            </p>
          </Reveal>
        </div>

        <div className="timeline">
          {[
            {
              year: '2000',
              title: 'A Brussels beginning',
              text: 'Antichi Sapori Pugliesi opens in Brussels and begins importing artisanal food directly from Puglia. Restaurants are the first customers — and they stay.',
            },
            {
              year: '2019',
              title: 'Two names become one',
              text: 'A.S.P. merges with Mabò Prodotti Italiani. The two catalogues, two networks and two families become one address in Haren.',
            },
            {
              year: 'Today',
              title: 'A pantry of 1,155 references',
              text: 'Cheese and charcuterie, fresh and frozen, pasta, pantry staples and wine. One family at the helm, four hands on the wheel, deliveries across Belgium.',
            },
            {
              year: 'Next',
              title: 'Natale 2026',
              text: 'The seasonal collection is already taking shape — panettone, festive salumi, torrone and the boxes our customers wait for all year.',
            },
          ].map((item, i) => (
            <Reveal key={item.year} delay={i * 0.04}>
              <div className="timeline__item">
                <span className="timeline__year">{item.year}</span>
                <div>
                  <h2 className="timeline__title">{item.title}</h2>
                </div>
                <p className="timeline__text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section family">
        <div className="container family__grid">
          <Reveal>
            <div className="family__media">
              <img
                src="/img/photos/prosciutto.webp"
                alt="Prosciutto sliced at the Mabò counter"
                loading="lazy"
              />
              <div className="family__caption">
                <strong>At the counter</strong>
                Sliced to order, every day the shop is open.
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">The family</span>
              <h2 className="display h2" style={{ marginTop: '1.1rem' }}>
                Four pairs
                <br />
                of <em className="red">hands.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text" style={{ marginTop: '1.4rem', maxWidth: '44ch', color: 'var(--ink-2)' }}>
                The company is run by two sisters and their husbands — in the office, on the
                road, at the counter and on the phone. The roles overlap. Everyone tastes. The
                decisions are made together, usually around a table.
              </p>
              <p style={{ marginTop: '1rem', maxWidth: '44ch', color: 'var(--ink-2)' }}>
                That is also why the service feels the way it does. When you call, you are not
                routed through a call centre. You speak to someone whose name is attached to
                the order.
              </p>
              <Link to="/contatti" className="link" style={{ marginTop: '1.8rem' }}>
                Meet us in Haren
                <ArrowUpRight className="link__arrow" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pullquote">
            <Reveal>
              <span className="pullquote__mark">“</span>
              <p className="pullquote__text">
                The best Italian food is not complicated. It is grown, made and eaten close to
                home — and then carried carefully, as far as it needs to go.
              </p>
              <p className="pullquote__who">Our house philosophy · La nostra filosofia</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">What we hold on to</span>
            <h2 className="display h2" style={{ marginTop: '1rem', marginBottom: '2.8rem' }}>
              Four things we
              <br />
              <em className="red">do not compromise on.</em>
            </h2>
          </Reveal>
          <div className="story-values__grid">
            {[
              {
                icon: <OliveArt />,
                title: 'The producer',
                text: 'Small estates, family caseifici, bakeries that still work by hand. We visit before we list.',
              },
              {
                icon: <SnowIcon width="100%" height="100%" />,
                title: 'The cold chain',
                text: 'Fresh means fresh. Temperature-controlled shipments from Italy and cold storage in Haren.',
              },
              {
                icon: <CheeseArt />,
                title: 'The season',
                text: 'We do not force the catalogue. Some things arrive only for a few weeks — and are better for it.',
              },
              {
                icon: <HandshakeIcon width="100%" height="100%" />,
                title: 'The word',
                text: 'If we say it will be on the truck, it will be on the truck. Reputation in this business is built on that.',
              },
            ].map((value) => (
              <Reveal key={value.title}>
                <div className="story-values__item">
                  <div className="story-values__icon">{value.icon}</div>
                  <h3 className="story-values__title">{value.title}</h3>
                  <p className="story-values__text">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="puglia" style={{ minHeight: 'clamp(24rem, 44vw, 36rem)' }}>
        <div className="puglia__bg">
          <img src="/img/photos/trulli.webp" alt="The trulli of Alberobello" loading="lazy" />
        </div>
        <div className="puglia__content">
          <Reveal>
            <span className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>
              The south, in our accent
            </span>
            <p className="puglia__quote" style={{ marginTop: '1.4rem' }}>
              Puglia is not a region we source from.
              <br />
              It is <em>the reason we started.</em>
            </p>
            <span className="puglia__caption">Between the Adriatic and the Ionian</span>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="flex between wrap gap-m center">
            <div>
              <span className="eyebrow">Next chapter</span>
              <h2 className="h3 display" style={{ marginTop: '.8rem' }}>
                Come taste what is arriving this week.
              </h2>
            </div>
            <div className="flex gap-s wrap">
              <Link to="/prodotti" className="btn btn--solid">
                <span>The catalogue</span>
                <span className="btn__arrow">
                  <ArrowRight />
                </span>
              </Link>
              <Link to="/contatti" className="btn">
                <span>Contact us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
