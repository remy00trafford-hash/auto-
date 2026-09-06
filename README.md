# Auto+

Auto+ est une boutique-vitrine mondiale spécialisée dans les automobiles, pièces et accessoires.

## Modèle

Auto+ n'est pas du dropshipping et ne vend pas directement les produits. Le site présente des produits provenant de marketplaces partenaires et redirige l'utilisateur vers l'offre via un lien affilié.

**Trafic global → Auto+ → Produit → “Voir l'offre →” → Marketplace → Achat → Commission**

## Positionnement

Marque automobile premium, éditoriale et orientée utilité. Les catégories initiales sont : Supports téléphone, Organisation, Nettoyage, Confort, Éclairage et Voyage.

## Marketplace initiale

AliExpress. Le compte affilié est en cours d'examen au 2 septembre 2026.

## Règles produit

- Aucun panier, paiement ou gestion de livraison sur Auto+.
- Les CTA utilisent “Voir l'offre →”.
- Les prix sont présentés comme indicatifs et peuvent changer sur la marketplace.
- Aucun faux avis, aucune fausse note, aucune caractéristique ou promotion inventée.
- Auto+ ne doit jamais se présenter comme AliExpress ou comme le vendeur direct.
- Les liens affiliés passent par des routes internes `/go/...`.

## Stack

Next.js · React · TypeScript · CSS · Vercel

## Organisation

- `src/data/products.ts` : catalogue centralisé
- `src/app/` : pages du site
- `src/app/go/[slug]/route.ts` : redirections affiliées

## Roadmap

1. Validation du compte AliExpress.
2. Sélection des premiers vrais produits.
3. Génération des liens affiliés réels.
4. Remplacement des produits démo et images.
5. Passe complète sur toutes les mentions d'affiliation, disclosure, footer et fiches produit.
6. Vérification responsive et Safari/iPhone.
7. Acquisition de trafic global.
