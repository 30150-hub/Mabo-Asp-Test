import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'

const photoCredits = [
  {
    title: 'Burrata',
    author: 'Popo le Chien',
    license: 'CC0 1.0',
    href: 'https://commons.wikimedia.org/wiki/File:Burrata2.jpg',
  },
  {
    title: 'Cheese in Italy',
    author: 'Tiia Monto',
    license: 'CC BY-SA 3.0',
    href: 'https://commons.wikimedia.org/wiki/File:Cheese_in_Italy.jpg',
  },
  {
    title: 'Prosciutto di Parma, affettato',
    author: 'Sun Taro',
    license: 'CC BY-SA 2.0',
    href: 'https://commons.wikimedia.org/wiki/File:Prosciutto_di_Parma_-_affettato2.jpg',
  },
  {
    title: 'Trulli in Alberobello',
    author: 'Livioandronico2013',
    license: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:Trulli_in_Alberobello_2015.jpg',
  },
]

export function Crediti() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Colophon</span>
          <h1 className="display h1" style={{ marginTop: '1rem', fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}>
            Credits &amp;
            <br />
            <em className="red">notes.</em>
          </h1>
          <p className="lede" style={{ marginTop: '1.4rem' }}>
            This is an independent showcase site built around the identity of Mabò — Antichi
            Sapori Pugliesi. Brand assets remain the property of the company.
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 'var(--section)' }}>
        <div className="story-intro" style={{ paddingTop: '2rem' }}>
          <Reveal>
            <span className="eyebrow">Brand &amp; imagery</span>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="body-copy" style={{ marginBottom: '1.5rem' }}>
              The Mabò logo, wordmark, product illustrations and photographs of the shop and
              warehouse are used with reference to the public website of Mabò ASP and remain
              © Mabò — Antichi Sapori Pugliesi. The hand-drawn category illustrations in this
              site are original work created for this concept, in the spirit of the existing
              brand line work.
            </p>
            <p className="body-copy" style={{ marginBottom: '2.5rem' }}>
              Supplementary photography comes from Wikimedia Commons under the licences listed
              below. Typefaces: Cormorant Garamond and Jost, both licensed under the SIL Open
              Font License and self-hosted via Fontsource.
            </p>
          </Reveal>
        </div>

        <div className="credits-list">
          {photoCredits.map((credit) => (
            <div className="credits-list__item" key={credit.title}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem' }}>{credit.title}</span>
              <span className="muted">{credit.author}</span>
              <span className="flex gap-s" style={{ alignItems: 'center' }}>
                <span className="caption">{credit.license}</span>
                <a href={credit.href} target="_blank" rel="noreferrer" className="caption">
                  Source ↗
                </a>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-l">
          <p className="small muted" style={{ maxWidth: '58ch' }}>
            Product names, origins and descriptions are indicative and written for this
            showcase. Availability changes with the season. For current references and prices,
            contact the company directly.
          </p>
          <Link to="/contatti" className="link" style={{ marginTop: '1.2rem' }}>
            Contact Mabò
          </Link>
        </div>
      </section>
    </>
  )
}
