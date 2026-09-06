import Link from 'next/link'
import { products } from '../data/products'

const categories = ['Supports téléphone','Énergie','Organisation','Nettoyage','Confort','Éclairage','Électronique']

function ProductCard({ p }: { p: (typeof products)[number] }) {
  return <article className="card">
    <Link href={`/product/${p.slug}`} className="image-wrap" aria-label={`Voir ${p.name}`}>
      <img src={p.image} alt={p.name} loading="lazy" />
      <span className="tag image-tag">{p.offerLabel}</span>
    </Link>
    <div className="card-body">
      <h3>{p.name}</h3>
      <p>{p.description}</p>
      <Link className="offer-link" href={`/product/${p.slug}`}>Voir le produit <span>→</span></Link>
    </div>
  </article>
}

export default function Home() {
  const featured = products.filter((p) => p.featured)
  return <main>
    <header className="header"><div className="nav">
      <Link href="/" className="brand">AUTO<span>+</span></Link>
      <nav className="desktop-nav"><Link href="/">Accueil</Link><Link href="/products">Produits</Link><Link href="#categories">Catégories</Link><Link href="/about">À propos</Link></nav>
      <Link href="/products" className="nav-cta">Explorer <span>→</span></Link>
    </div></header>

    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">AUTO+ / ACCESSOIRES AUTOMOBILES</div>
        <h1>Des accessoires qui rendent chaque trajet plus agréable.</h1>
        <p>Une sélection de produits pratiques, esthétiques et utiles pour améliorer votre voiture au quotidien.</p>
        <div className="hero-actions"><Link className="primary" href="/products">Voir nos produits <span>→</span></Link><Link className="secondary" href="#categories">Explorer les catégories</Link></div>
      </div>
      <div className="hero-art" aria-hidden="true"><div className="glow glow-a"/><div className="glow glow-b"/><div className="hero-card"><span>AUTO+</span><b>DRIVE.<br/>UPGRADE.<br/>ENJOY.</b><i>Des trouvailles pour votre voiture.</i></div></div>
    </section>

    <section id="selection" className="section selection"><div className="section-head"><div><span className="eyebrow">SÉLECTION</span><h2>Les produits du moment</h2></div><Link className="text-link" href="/products">Voir tout <span>→</span></Link></div><div className="product-grid">{featured.map((p) => <ProductCard p={p} key={p.id}/>)}</div></section>

    <section id="categories" className="section categories"><div className="section-head"><div><span className="eyebrow">EXPLORER</span><h2>Trouvez selon votre besoin.</h2></div></div><div className="category-grid">{categories.map((c, i) => <Link href={`/products?category=${encodeURIComponent(c)}`} className="category" key={c}><span className="category-number">0{i + 1}</span><strong>{c}</strong><span className="arrow">↗</span></Link>)}</div></section>

    <section className="editorial"><div><span className="eyebrow">AUTO+</span><h2>Moins de recherche. Plus de bonnes trouvailles.</h2></div><p>Parcourez rapidement une sélection d’accessoires automobiles avec une présentation claire, des images de produits et une fiche dédiée pour chaque référence.</p></section>

    <footer className="footer"><div className="footer-top"><div><div className="brand footer-brand">AUTO<span>+</span></div><p>Accessoires automobiles à découvrir.</p></div><div className="footer-links"><div><b>Explorer</b><Link href="/products">Produits</Link><Link href="#categories">Catégories</Link></div><div><b>Auto+</b><Link href="/about">À propos</Link><Link href="/privacy">Confidentialité</Link><Link href="/legal">Informations légales</Link></div></div></div><div className="footer-bottom"><span>© 2026 Auto+</span><span>Découvrez les offres directement depuis chaque fiche produit.</span></div></footer>
  </main>
}
