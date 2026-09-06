import Link from 'next/link'
import { products } from '../../data/products'
import ProductImage from '../../components/ProductImage'

export default async function Products({ searchParams }: { searchParams?: Promise<{ category?: string }> }) {
  const params = searchParams ? await searchParams : {}
  const category = params.category
  const list = category ? products.filter((p) => p.category === category) : products
  return <main>
    <header className="header"><div className="nav"><Link href="/" className="brand">AUTO<span>+</span></Link><nav className="desktop-nav"><Link href="/">Accueil</Link><Link href="/products">Produits</Link><Link href="/#categories">Catégories</Link><Link href="/about">À propos</Link></nav></div></header>
    <section className="section catalogue"><Link className="back" href="/">← Retour à l’accueil</Link><div className="section-head"><div><span className="eyebrow">CATALOGUE</span><h1>{category ? category : 'Les produits Auto+'}</h1></div><p>{list.length} produit{list.length > 1 ? 's' : ''} sélectionné{list.length > 1 ? 's' : ''}.</p></div><div className="product-grid">{list.map((p) => <article className="card" key={p.id}><Link href={`/product/${p.slug}`} className="image-wrap"><ProductImage src={p.image} alt={p.name} /><span className="tag image-tag">{p.offerLabel}</span></Link><div className="card-body"><h2>{p.name}</h2><p>{p.description}</p><Link className="offer-link" href={`/product/${p.slug}`}>Voir le produit <span>→</span></Link></div></article>)}</div></section>
  </main>
}
