import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '../../../data/products'
import ProductImage from '../../../components/ProductImage'

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = products.find((item) => item.slug === slug)
  if (!p) notFound()
  return <main>
    <header className="header"><div className="nav"><Link href="/" className="brand">AUTO<span>+</span></Link><Link href="/products" className="nav-cta">Catalogue <span>→</span></Link></div></header>
    <section className="detail"><Link href="/products" className="back">← Retour au catalogue</Link><div className="detail-grid"><div className="detail-image"><ProductImage src={p.image} alt={p.name} /></div><div className="detail-copy"><div className="tag">{p.offerLabel}</div><h1>{p.name}</h1><p className="lead">{p.description}</p><div className="why"><h2>À propos du produit</h2><p>{p.description} Cette fiche présente les caractéristiques principales du produit afin de vous permettre de décider rapidement s’il correspond à votre besoin.</p></div><Link className="primary detail-cta" href={p.affiliatePath}>Voir l’offre <span>→</span></Link></div></div></section>
  </main>
}
