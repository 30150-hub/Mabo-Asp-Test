import { groups, type Product } from '../data/catalog'
import { useCart } from '../context/CartContext'
import { ArrowRight } from './Illustrations'
import { ProductArt } from './ProductArt'

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const group = groups.find((g) => g.slug === product.group)
  const isPhoto = product.art.startsWith('/')

  return (
    <article className={`product-card ${product.featured ? 'product-card--featured' : ''}`}>
      <div className={`product-card__media ${isPhoto ? 'product-card__media--photo' : ''}`}>
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
        <ProductArt art={product.art} alt={product.name} />
      </div>
      <div style={{ paddingTop: '.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span className="product-card__cat">{group?.name ?? 'Pantry'}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__origin">{product.origin}</p>
        <p className="small muted" style={{ marginTop: '.35rem', fontSize: '.7rem', lineHeight: 1.5 }}>
          {product.note}
        </p>
        <div className="product-card__foot">
          <span className="product-card__price">Price on request</span>
          <button
            className="add-btn"
            onClick={() =>
              add({
                id: product.id,
                name: product.name,
                art: product.art,
                group: group?.name ?? 'Pantry',
              })
            }
          >
            Add <ArrowRight width={12} height={12} />
          </button>
        </div>
      </div>
    </article>
  )
}
