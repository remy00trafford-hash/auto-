export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  offerLabel: string;
  category: string;
  affiliatePath: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'support-telephone-gravite-ventilation',
    name: 'Support téléphone voiture par gravité',
    shortDescription: 'Gardez le smartphone visible pendant les trajets.',
    description: 'Un support compact destiné à maintenir le smartphone à portée de vue dans l’habitacle.',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S6e08790aabba4469a66b50e9bd88ca64j.png_.avif',
    offerLabel: 'Sélection',
    category: 'Supports téléphone',
    affiliatePath: '/go/support-telephone-gravite-ventilation',
    featured: true,
  },
  {
    id: 'p2',
    slug: 'essager-chargeur-voiture-54w',
    name: 'Chargeur voiture Essager 54W USB / Type-C',
    shortDescription: 'Une solution compacte pour recharger les appareils en voiture.',
    description: 'Un chargeur voiture double port pensé pour les trajets quotidiens et les besoins de recharge à bord.',
    image: 'https://upload.jaknot.com/2025/03/images/products/488c0a/original/essager-charger-mobil-fast-charging-led-pd-qc-30-usb-type-c-54w-eccpq-kx01-p.jpeg',
    offerLabel: 'Pratique',
    category: 'Énergie',
    affiliatePath: '/go/essager-chargeur-voiture-54w',
    featured: true,
  },
  {
    id: 'p3',
    slug: 'joyroom-support-telephone-360',
    name: 'Support téléphone voiture Joyroom 360°',
    shortDescription: 'Ajustez facilement l’angle du téléphone dans l’habitacle.',
    description: 'Un support orientable avec ventouse, pensé pour une installation et un réglage simples.',
    image: 'https://jo-cell.com/cdn/shop/files/Joyroom-JR-ZS283-Mini-Car-Holder-for-Dashboard-70-110mm-Black-6941237173478-17012022-01-p.webp?v=1734435805',
    offerLabel: 'Premium',
    category: 'Supports téléphone',
    affiliatePath: '/go/joyroom-support-telephone-360',
    featured: true,
  },
];
