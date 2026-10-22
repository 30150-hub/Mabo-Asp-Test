import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { site } from '../data/site'
import { CloseIcon, MinusIcon, PlusIcon, ArrowRight, CheckIcon } from './Illustrations'
import { ProductArt } from './ProductArt'

export function CartDrawer() {
  const { items, isOpen, close, remove, setQty, clear, count } = useCart()
  const reduce = useReducedMotion()
  const [sent, setSent] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      setSent(false)
      window.setTimeout(() => closeRef.current?.focus(), 350)
    }
  }, [isOpen])

  const body = items
    .map((item) => `• ${item.name} — ${item.qty} ${item.qty === 1 ? 'unit' : 'units'}`)
    .join('\n')

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    'Enquiry from the Mabò website',
  )}&body=${encodeURIComponent(
    `Buongiorno,\n\nI would like a quote for the following selection:\n\n${body}\n\nName:\nBusiness / address:\nDelivery city:\nPreferred delivery window:\n\nGrazie!`,
  )}`

  const send = () => {
    window.location.href = mailto
    setSent(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            className="cart-overlay"
            aria-label="Close basket"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.aside
            className="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Your enquiry basket"
            initial={reduce ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reduce ? undefined : { x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cart-drawer__head">
              <div>
                <span className="eyebrow eyebrow--plain" style={{ fontSize: '.55rem' }}>
                  Your selection
                </span>
                <h2 className="cart-drawer__title">Enquiry basket</h2>
              </div>
              <button
                ref={closeRef}
                className="icon-btn"
                onClick={close}
                aria-label="Close basket"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="cart-drawer__body">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <img
                    src="/img/art/pasta.png"
                    alt=""
                    className="cart-empty__icon"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                  <p className="h4">Your basket is still empty.</p>
                  <p className="small muted" style={{ marginTop: '.4rem' }}>
                    Add a few products you would like to order. We will price them for you.
                  </p>
                  <button className="btn btn--sm" style={{ marginTop: '1.4rem' }} onClick={close}>
                    <span>Browse the selection</span>
                  </button>
                </div>
              ) : sent ? (
                <div className="cart-sent">
                  <span className="cart-sent__mark">
                    <CheckIcon />
                  </span>
                  <h3 className="h4">Your email is on its way.</h3>
                  <p className="small muted" style={{ marginTop: '.5rem' }}>
                    If your mail app did not open, write to{' '}
                    <a href={`mailto:${site.email}`} style={{ borderBottom: '1px solid' }}>
                      {site.email}
                    </a>{' '}
                    or call {site.phone}. We answer within one business day.
                  </p>
                  <button className="btn btn--sm" style={{ marginTop: '1.2rem' }} onClick={clear}>
                    <span>Start a new selection</span>
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div className="cart-line" key={item.id}>
                    <div className="cart-line__img">
                      <ProductArt art={item.art} alt={item.name} />
                    </div>
                    <div>
                      <p className="cart-line__name">{item.name}</p>
                      <p className="cart-line__meta">{item.group}</p>
                      <div className="qty">
                        <button
                          onClick={() => setQty(item.id, item.qty - 1)}
                          aria-label={`Decrease ${item.name}`}
                        >
                          <MinusIcon />
                        </button>
                        <span>{item.qty}</span>
                        <button
                          onClick={() => setQty(item.id, item.qty + 1)}
                          aria-label={`Increase ${item.name}`}
                        >
                          <PlusIcon />
                        </button>
                      </div>
                    </div>
                    <button className="cart-line__remove" onClick={() => remove(item.id)}>
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && !sent && (
              <div className="cart-drawer__foot">
                <p className="cart-note">
                  <strong>{count}</strong> {count === 1 ? 'product' : 'products'} selected.
                  Prices are quoted per order — there is no online payment. We confirm
                  availability, price and the next delivery window by email.
                </p>
                <button className="btn btn--solid" style={{ width: '100%' }} onClick={send}>
                  <span>Send enquiry</span>
                  <span className="btn__arrow">
                    <ArrowRight />
                  </span>
                </button>
                <p className="small muted" style={{ textAlign: 'center', marginTop: '.7rem', fontSize: '.65rem' }}>
                  Opens your email app · or use the{' '}
                  <Link to="/contatti" onClick={close} style={{ textDecoration: 'underline' }}>
                    contact form
                  </Link>
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
