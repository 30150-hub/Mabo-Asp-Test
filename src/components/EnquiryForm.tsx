import { useState, type FormEvent } from 'react'
import { site } from '../data/site'
import { ArrowRight, CheckIcon } from './Illustrations'

type EnquiryFormProps = {
  variant?: 'dark' | 'light'
  subject?: string
  submitLabel?: string
  showBusiness?: boolean
}

export function EnquiryForm({
  variant = 'light',
  subject = 'Enquiry from the Mabò website',
  submitLabel = 'Send enquiry',
  showBusiness = true,
}: EnquiryFormProps) {
  const [sent, setSent] = useState(false)
  const [mailto, setMailto] = useState('')
  const slug = subject.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const business = String(data.get('business') ?? '')
    const email = String(data.get('email') ?? '')
    const phone = String(data.get('phone') ?? '')
    const city = String(data.get('city') ?? '')
    const message = String(data.get('message') ?? '')

    const body = [
      'Buongiorno,',
      '',
      `Name: ${name}`,
      business ? `Business: ${business}` : '',
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      city ? `City: ${city}` : '',
      '',
      message,
      '',
      'Grazie!',
    ]
      .filter(Boolean)
      .join('\n')

    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setMailto(href)
    setSent(true)
    window.location.href = href
  }

  if (sent) {
    return (
      <div className="form-success">
        <span className="cart-sent__mark" style={{ flexShrink: 0 }}>
          <CheckIcon />
        </span>
        <div>
          <h3>Grazie mille.</h3>
          <p>
            Your email app should be open with the request ready to send. Prefer to write
            directly? Reach us at{' '}
            <a href={`mailto:${site.email}`} style={{ borderBottom: '1px solid currentColor' }}>
              {site.email}
            </a>{' '}
            or {site.phone}. We reply within one business day.
          </p>
          <a
            className="btn btn--sm"
            style={{ marginTop: '1.2rem' }}
            href={mailto}
          >
            <span>Open the email again</span>
            <span className="btn__arrow">
              <ArrowRight />
            </span>
          </a>
          <button
            className="link"
            style={{ marginLeft: '1.2rem', marginTop: '1rem' }}
            onClick={() => setSent(false)}
          >
            Edit request
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      className={`form-grid ${variant === 'dark' ? 'form-light' : ''}`}
      onSubmit={onSubmit}
    >
      <div className="field">
        <label htmlFor={`${slug}-name`}>Your name *</label>
        <input id={`${slug}-name`} name="name" required placeholder="Maria Rossi" />
      </div>
      {showBusiness ? (
        <div className="field">
          <label htmlFor={`${slug}-business`}>Restaurant / business</label>
          <input id={`${slug}-business`} name="business" placeholder="Trattoria Mabò" />
        </div>
      ) : (
        <div className="field">
          <label htmlFor={`${slug}-city`}>City</label>
          <input id={`${slug}-city`} name="city" placeholder="Brussels" />
        </div>
      )}
      <div className="field">
        <label htmlFor={`${slug}-email`}>Email *</label>
        <input
          id={`${slug}-email`}
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </div>
      <div className="field">
        <label htmlFor={`${slug}-phone`}>Phone</label>
        <input id={`${slug}-phone`} name="phone" type="tel" placeholder="+32 …" />
      </div>
      {showBusiness && (
        <div className="field">
          <label htmlFor={`${slug}-city`}>Delivery city</label>
          <input id={`${slug}-city`} name="city" placeholder="Brussels" />
        </div>
      )}
      <div className="field field--full">
        <label htmlFor={`${slug}-message`}>What are you looking for?</label>
        <textarea
          id={`${slug}-message`}
          name="message"
          placeholder="A weekly selection of fresh cheeses, pasta and pantry staples for 40 covers…"
        />
      </div>
      <div className="field--full">
        <button className={`btn ${variant === 'dark' ? 'btn--red' : 'btn--solid'}`} type="submit">
          <span>{submitLabel}</span>
          <span className="btn__arrow">
            <ArrowRight />
          </span>
        </button>
        <p
          className="small"
          style={{
            marginTop: '.8rem',
            fontSize: '.62rem',
            color: variant === 'dark' ? 'rgba(247,240,228,.45)' : 'var(--muted)',
          }}
        >
          No payment online. We reply with availability, price and the next delivery window.
        </p>
      </div>
    </form>
  )
}
