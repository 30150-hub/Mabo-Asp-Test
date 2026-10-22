import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'
import { useCart } from './context/CartContext'
import { Home } from './pages/Home'
import { Storia } from './pages/Storia'
import { Prodotti } from './pages/Prodotti'
import { Horeca } from './pages/Horeca'
import { Bottega } from './pages/Bottega'
import { Contatti } from './pages/Contatti'
import { Crediti } from './pages/Crediti'
import { NotFound } from './pages/NotFound'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 })
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden />
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 700)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

function Toast() {
  const { toast } = useCart()
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          className="toast"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="toast__dot" />
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Intro() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    return !window.sessionStorage.getItem('mabo-intro-seen')
  })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!show) return
    const timer = window.setTimeout(() => {
      setShow(false)
      window.sessionStorage.setItem('mabo-intro-seen', '1')
    }, 1250)
    return () => window.clearTimeout(timer)
  }, [show])

  return (
    <AnimatePresence>
      {show && !reduce && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader__inner">
            <img className="preloader__stamp" src="/brand/mabo-logo.png" alt="Mabò" />
            <span className="preloader__label">Antichi Sapori Pugliesi · Bruxelles</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const location = useLocation()
  const reduce = useReducedMotion()

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Intro />
      <Header />
      <ScrollManager />
      <main id="main">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/storia" element={<Storia />} />
              <Route path="/prodotti" element={<Prodotti />} />
              <Route path="/horeca" element={<Horeca />} />
              <Route path="/bottega" element={<Bottega />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="/crediti" element={<Crediti />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
    </div>
  )
}
