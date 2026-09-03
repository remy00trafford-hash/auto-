export type Product = {
  id: string
  slug: string
  name: string
  description: string
  offerLabel: string
  category: string
  affiliatePath: string
  image: string
  featured: boolean
}

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'support-telephone-gravite-ventilation',
    name: 'Support téléphone voiture par gravité',
    description: 'Un support compact pour garder le smartphone visible pendant les trajets et la navigation.',
    offerLabel: 'SÉLECTION',
    category: 'Supports téléphone',
    affiliatePath: '/go/support-telephone-gravite-ventilation',
    image: 'https://static1.hurtel.com/hpeciai/321a4cf54325a3ffeb43b96a8e77ea0e/eng_pm_Baseus-Osculum-SUYL-XP01-gravity-car-holder-for-windshield-or-dashboard-black-37948_12.jpg',
    featured: true,
  },
  {
    id: 'p2',
    slug: 'essager-chargeur-voiture-54w',
    name: 'Chargeur voiture Essager 54W USB / Type-C',
    description: 'Un chargeur voiture compact à double sortie pour alimenter les appareils pendant les trajets.',
    offerLabel: 'PRATIQUE',
    category: 'Énergie',
    affiliatePath: '/go/essager-chargeur-voiture-54w',
    image: 'https://upload.jaknot.com/2025/03/images/products/488c0a/original/essager-charger-mobil-fast-charging-led-pd-qc-30-usb-type-c-54w-eccpq-kx01-p.jpeg',
    featured: true,
  },
  {
    id: 'p3',
    slug: 'joyroom-support-telephone-360',
    name: 'Support téléphone voiture Joyroom 360°',
    description: 'Un support orientable pensé pour ajuster facilement l’angle du smartphone dans l’habitacle.',
    offerLabel: 'PREMIUM',
    category: 'Supports téléphone',
    affiliatePath: '/go/joyroom-support-telephone-360',
    image: 'https://jo-cell.com/cdn/shop/files/Joyroom-JR-ZS283-Mini-Car-Holder-for-Dashboard-70-110mm-Black-6941237173478-17012022-01-p.webp?v=1734435805',
    featured: true,
  },
]
