import Link from 'next/link'
import { products } from '../data/products'

const categories = ['Supports téléphone','Organisation','Nettoyage','Confort','Éclairage','Voyage']

function ProductCard({p}:{p:(typeof products)[number]}){
 return <article className="card">
  <Link href={`/product/${p.slug}`} className="image-wrap" aria-label={`Voir ${p.name}`}><img className="product-image" src={p.image} alt="" /></Link>
  <div className="card-body">
   <div className="tag">{p.offerLabel}</div>
   <h3>{p.name}</h3>
   <p>{p.description}</p>
   <div className="card-foot"><span className="price-note">Offre et conditions visibles sur le site marchand</span><Link className="offer-link" href={p.affiliatePath}>Voir l’offre <span>→</span></Link></div>
  </div>
 </article>
}

export default function Home(){
 const featured = products.filter(p=>p.featured)
 return <main>
  <header className="header"><div className="nav"><Link href="/" className="brand">AUTO<span>+</span></Link><nav className="desktop-nav"><Link href="/">Accueil</Link><Link href="#selection">Produits</Link><Link href="#categories">Catégories</Link><Link href="/about">À propos</Link></nav><Link href="#selection" className="nav-cta">Explorer <span>→</span></Link></div></header>
  <section className="hero"><div className="hero-copy"><div className="eyebrow">SÉLECTION AUTOMOBILE</div><h1>Des accessoires qui améliorent vraiment votre quotidien en voiture.</h1><p>Découvrez des produits pratiques, utiles et intéressants, sélectionnés pour leur intérêt et utilité au quotidien.</p><div className="hero-actions"><Link className="primary" href="#selection">Découvrir les produits <span>→</span></Link><Link className="secondary" href="#categories">Explorer les catégories</Link></div><div className="trust"><span>✓ Sélection indépendante</span><span>✓ Offre adaptée au pays sur le site marchand</span><span>✓ Achat directement chez le marchand</span></div></div><div className="hero-art" aria-hidden="true"><div className="halo"/><div className="car-shape"><div className="car-cabin"/><div className="car-body"/><div className="wheel left"/><div className="wheel right"/></div><div className="floating-chip chip-one">PRATIQUE</div><div className="floating-chip chip-two">AUTO+</div></div></section>
  <section id="categories" className="section categories"><div className="section-head"><div><span className="eyebrow">EXPLOREZ</span><h2>Choisissez votre besoin.</h2></div><p>Une navigation simple pour passer rapidement de l’idée au produit.</p></div><div className="category-grid">{categories.map((c,i)=><Link href={`/category/${c.toLowerCase().replaceAll(' ','-')}`} className="category" key={c}><span className="category-number">0{i+1}</span><span>{c}</span><span className="arrow">↗</span></Link>)}</div></section>
  <section id="selection" className="section selection"><div className="section-head"><div><span className="eyebrow">À DÉCOUVRIR</span><h2>Nos sélections du moment</h2></div><Link className="text-link" href="/products">Voir tout <span>→</span></Link></div><div className="product-grid">{featured.map(p=><ProductCard p={p} key={p.id}/>)}</div></section>
  <section className="editorial"><div><span className="eyebrow">POURQUOI AUTO+</span><h2>Moins de recherche. Plus de bonnes trouvailles.</h2></div><div className="editorial-copy"><p>Auto+ n’est pas une marketplace et ne vend pas directement les produits. Nous sélectionnons des références à découvrir et vous redirigeons vers l’offre actuelle chez le marchand.</p><Link href="/disclosure" className="text-link">Comprendre l’affiliation <span>→</span></Link></div></section>
  <footer className="footer"><div className="footer-top"><div><div className="brand footer-brand">AUTO<span>+</span></div><p>Accessoires automobiles à découvrir.</p></div><div className="footer-links"><div><b>Explorer</b><Link href="/products">Produits</Link><Link href="#categories">Catégories</Link></div><div><b>Auto+</b><Link href="/about">À propos</Link><Link href="/disclosure">Affiliation</Link><Link href="/privacy">Confidentialité</Link><Link href="/legal">Informations légales</Link></div></div></div><div className="footer-bottom"><span>© 2026 Auto+</span><span>Prix, devise, disponibilité et conditions peuvent varier selon le pays. Voir l’offre actuelle chez le marchand.</span></div></footer>
 </main>
}
