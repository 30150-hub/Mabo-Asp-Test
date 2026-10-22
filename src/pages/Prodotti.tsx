import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { groups, legacyCategories, products } from '../data/catalog'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'
import { ArrowRight, ArrowUpRight, InfoIcon, SearchIcon } from '../components/Illustrations'

export function Prodotti() {
  const [params, setParams] = useSearchParams()
  const activeGroup = params.get('g') ?? 'all'
  const [query, setQuery] = useState('')

  // Interleave the families so every row of the grid has a different accent.
  const ordered = useMemo(() => {
    const buckets = groups.map((group) => products.filter((p) => p.group === group.slug))
    const out: typeof products = []
    while (buckets.some((bucket) => bucket.length > 0)) {
      for (const bucket of buckets) {
        const next = bucket.shift()
        if (next) out.push(next)
      }
    }
    return out
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ordered.filter((product) => {
      const matchesGroup = activeGroup === 'all' || product.group === activeGroup
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.origin.toLowerCase().includes(q) ||
        product.note.toLowerCase().includes(q)
      return matchesGroup && matchesQuery
    })
  }, [activeGroup, query, ordered])

  const setGroup = (slug: string) => {
    if (slug === 'all') {
      setParams({})
    } else {
      setParams({ g: slug })
    }
  }

  return (
    <>
      <section className="shop-hero">
        <div className="container shop-hero__grid">
          <div>
            <span className="eyebrow">Il catalogo</span>
            <h1 className="display shop-hero__title">
              Everything
              <br />
              from <em className="red">Italy.</em>
            </h1>
          </div>
          <div className="shop-hero__aside">
            <p className="lede">
              A working selection from a catalogue of 1,155 references. Cheese and charcuterie,
              fresh and frozen, pasta, pantry, oils and wine — chosen by hand, delivered across
              Belgium.
            </p>
            <div className="shop-hero__note">
              <InfoIcon />
              <span>
                <strong>Prices on request.</strong> There is no online payment. Send us your
                selection and we will reply with availability, a tailored quote and the next
                delivery window.
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="catalogue">
      <div className="toolbar">
        <div className="container toolbar__row">
          <div className="chips" role="group" aria-label="Filter by product family">
            <button
              className={`chip ${activeGroup === 'all' ? 'is-active' : ''}`}
              onClick={() => setGroup('all')}
            >
              All products
            </button>
            {groups.map((group) => (
              <button
                key={group.slug}
                className={`chip ${activeGroup === group.slug ? 'is-active' : ''}`}
                onClick={() => setGroup(group.slug)}
              >
                {group.name}
              </button>
            ))}
          </div>
          <label className="search">
            <SearchIcon />
            <span className="sr-only">Search the selection</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search burrata, Puglia, wine…"
            />
          </label>
        </div>
      </div>

      <div className="container">
        <div className="results-bar">
          <span>
            Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            {activeGroup !== 'all' ? ` · ${groups.find((g) => g.slug === activeGroup)?.name}` : ''}
          </span>
          <span>1,155 references in the full catalogue</span>
        </div>

        {filtered.length > 0 ? (
          <motion.div layout className="product-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.97, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="empty-state">
            <h3>Nothing under that name — yet.</h3>
            <p className="muted" style={{ marginTop: '.5rem' }}>
              The full catalogue is larger than this page. Tell us what you are looking for and
              we will check the warehouse.
            </p>
            <div className="flex gap-s wrap" style={{ justifyContent: 'center', marginTop: '1.4rem' }}>
              <button
                className="btn btn--sm"
                onClick={() => {
                  setQuery('')
                  setGroup('all')
                }}
              >
                <span>Clear filters</span>
              </button>
              <Link to="/contatti" className="btn btn--sm btn--solid">
                <span>Ask us</span>
              </Link>
            </div>
          </div>
        )}
      </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid pantry-grid">
            <Reveal>
              <span className="eyebrow">The full pantry</span>
              <h2 className="display h2" style={{ marginTop: '1rem' }}>
                Beyond this
                <br />
                <em className="red">selection.</em>
              </h2>
              <p className="body-copy" style={{ marginTop: '1.3rem' }}>
                The warehouse holds 24 families of products, from the fresh counter to the
                non-food shelf. Ask for the complete catalogue and current availability — we
                send it as a working document, with your prices.
              </p>
              <Link to="/contatti" className="link" style={{ marginTop: '1.4rem' }}>
                Request the full catalogue
                <ArrowUpRight className="link__arrow" />
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="cat-index">
                {legacyCategories.map((category, i) => (
                  <div className="cat-index__item" key={category}>
                    {category}
                    <span>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section quote-panel" style={{ paddingBlock: 'clamp(4rem, 7vw, 7rem)' }}>
        <div className="container quote-panel__grid">
          <div>
            <span className="eyebrow eyebrow--light">For professionals & home cooks</span>
            <h2 className="display quote-panel__title">
              Need a price
              <br />
              <em style={{ color: 'var(--red)' }}>for your list?</em>
            </h2>
            <p className="quote-panel__text">
              Send the references you use, or tell us what is missing from your pantry. We
              answer with a quote, availability and the next fresh delivery.
            </p>
          </div>
          <div>
            <div style={{ display: 'grid', gap: '1.4rem' }}>
              <div className="feature-list" style={{ borderColor: 'rgba(247,240,228,.25)' }}>
                <div className="feature-list__item" style={{ borderColor: 'rgba(247,240,228,.14)' }}>
                  <span className="feature-list__num">01</span>
                  <div>
                    <p className="feature-list__title" style={{ color: 'var(--paper)' }}>
                      Send your list
                    </p>
                    <p className="feature-list__text" style={{ color: 'rgba(247,240,228,.55)' }}>
                      By email, by phone or through the contact form. No account needed.
                    </p>
                  </div>
                </div>
                <div className="feature-list__item" style={{ borderColor: 'rgba(247,240,228,.14)' }}>
                  <span className="feature-list__num">02</span>
                  <div>
                    <p className="feature-list__title" style={{ color: 'var(--paper)' }}>
                      We confirm and quote
                    </p>
                    <p className="feature-list__text" style={{ color: 'rgba(247,240,228,.55)' }}>
                      Availability, price and delivery window — usually within one business day.
                    </p>
                  </div>
                </div>
                <div className="feature-list__item" style={{ borderColor: 'rgba(247,240,228,.14)' }}>
                  <span className="feature-list__num">03</span>
                  <div>
                    <p className="feature-list__title" style={{ color: 'var(--paper)' }}>
                      We deliver
                    </p>
                    <p className="feature-list__text" style={{ color: 'rgba(247,240,228,.55)' }}>
                      Chilled, frozen and dry goods arrive together, across Belgium.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-s wrap">
                <Link to="/contatti" className="btn btn--red">
                  <span>Ask for a quote</span>
                  <span className="btn__arrow">
                    <ArrowRight />
                  </span>
                </Link>
                <a href="mailto:info@aspbelgium.be" className="btn btn--light">
                  <span>Email us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
