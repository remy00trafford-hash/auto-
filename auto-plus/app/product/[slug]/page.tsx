import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '../../../data/products';

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=products.find(x=>x.slug===slug);
  if(!p)notFound();
  return <main className="inner-page product-detail">
    <Link href="/products" className="back">← Retour au catalogue</Link>
    <div className="detail-grid">
      <div className="detail-image"><img src={p.image} alt={p.name}/></div>
      <div>
        <div className="eyebrow">{p.offerLabel}</div>
        <h1>{p.name}</h1>
        <p>{p.description}</p>
        <h2>À propos du produit</h2>
        <ul>
          <li>Conçu pour un usage automobile quotidien.</li>
          <li>Présentation claire des caractéristiques essentielles.</li>
          <li>Consultez l’offre pour voir les variantes et les conditions disponibles.</li>
        </ul>
        <Link className="primary" href={`/go/${p.slug}`}>Voir l’offre <span>→</span></Link>
      </div>
    </div>
  </main>
}