import Link from 'next/link';
import { products } from '../../data/products';

export default async function Products({ searchParams }: { searchParams?: Promise<{ category?: string }> }) {
  const params = searchParams ? await searchParams : {};
  const category = params.category;
  const visible = category ? products.filter(p => p.category === category) : products;

  return (
    <main className="inner-page">
      <Link href="/" className="back back-top" aria-label="Retour à l’accueil">
        <span aria-hidden="true">←</span> Retour à l’accueil
      </Link>
      <div className="inner-head">
        <div className="eyebrow">CATALOGUE AUTO+</div>
        <h1>{category ? category : 'Les produits Auto+'}</h1>
        <p>Découvrez notre sélection d’accessoires automobiles pratiques et soigneusement présentés.</p>
      </div>
      <div className="product-grid">
        {visible.map(p => (
          <article className="product-card" key={p.id}>
            <Link href={`/product/${p.slug}`} className="product-image">
              <img src={p.image} alt={p.name} />
              <span>{p.offerLabel}</span>
            </Link>
            <div className="product-body">
              <h2>{p.name}</h2>
              <p>{p.description}</p>
              <div className="product-bottom">
                <Link className="offer-link" href={`/go/${p.slug}`}>Voir l’offre <span>→</span></Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
