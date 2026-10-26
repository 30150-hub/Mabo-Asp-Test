import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { asset } from '../lib/asset'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site'
import { useCart } from '../context/CartContext'
import { BagIcon, CloseIcon, MenuIcon } from './Illustrations'

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" className="brand" aria-label="Mabò ASP home" onClick={onClick}>
      <img className="brand__stamp" src={asset('/brand/mabo-logo.png')} alt="" width={48} height={45} />
      <span className="brand__text">
        <span className="brand__name">Mabò</span>
        <span className="brand__sub">Antichi Sapori Pugliesi</span>
      </span>
    </Link>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={reduce ? undefined : { clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mobile-menu__top">
            <Link to="/" onClick={onClose} className="brand" aria-label="Mabò ASP home">
              <img
                className="brand__stamp"
                src={asset('/brand/mabo-logo.png')}
                alt=""
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="brand__text">
                <span className="brand__name" style={{ color: 'var(--paper)' }}>
                  Mabò
                </span>
                <span className="brand__sub">Antichi Sapori Pugliesi</span>
              </span>
            </Link>
            <button className="icon-btn" onClick={onClose} aria-label="Close menu" style={{ borderColor: 'rgba(247,240,228,.3)', color: 'var(--paper)' }}>
              <CloseIcon />
            </button>
          </div>

          <nav className="mobile-menu__links" aria-label="Mobile">
            {nav.map((item, i) => (
              <motion.div
                key={item.to}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.055, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <NavLink to={item.to} className="mobile-menu__link" onClick={onClose}>
                  {item.label}
                  <small>{item.index}</small>
                </NavLink>
              </motion.div>
            ))}
          </nav>

          <div className="mobile-menu__foot">
            <span>{site.address.street}, {site.address.city}</span>
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, open } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <div className="announce">
        <div className="announce__inner">
          <span className="announce__dot" />
          <span>Fresh from Italy twice a week</span>
          <span className="announce__dot" />
          <span className="announce__inner-text">
            Horeca &amp; home cooks across Belgium — <a href={`mailto:${site.email}`}>order by email</a>
          </span>
        </div>
      </div>

      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__bar">
          <Brand />
          <nav className="nav" aria-label="Main">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header__actions">
            <Link to="/horeca#quote" className="btn btn--sm header__quote">
              <span>Request a quote</span>
            </Link>
            <button className="icon-btn" onClick={open} aria-label={`Open enquiry basket, ${count} items`}>
              <BagIcon />
              {count > 0 && <span className="cart-count">{count}</span>}
            </button>
            <button
              className="icon-btn burger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
