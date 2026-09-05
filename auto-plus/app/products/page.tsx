import Link from 'next/link';
import { products } from '../../data/products';

export default function Products(){
  return <main className="inner-page catalog-page">
    <Link href="/" className="back catalog-back">← Retour à l’accueil</Link>
    <div className="inner-head">
      <div className="eyebrow">CATALOGUE AUTO+</div>
      <h1>Les produits Auto+</h1>
      <p>Découvrez notre sélection d’accessoires automobiles pratiques, esthétiques et utiles au quotidien.</p>
    </div>
    <div className="product-grid">
      {products.map(p=><article className="product-card" key={p.id}>
        <Link href={`/product/${p.slug}`} className="product-image">
          <img src={p.image} alt={p.name}/>
          <span>{p.offerLabel}</span>
        </Link>
        <div className="product-body">
          <h2>{p.name}</h2>
          <p>{p.shortDescription}</p>
          <div className="product-bottom">
            <span className="price-note">Découvrir le produit</span>
            <Link className="offer-link" href={`/go/${p.slug}`}>Voir l’offre <span>→</span></Link>
          </div>
        </div>
      </article>)}
    </div>
  </main>
}