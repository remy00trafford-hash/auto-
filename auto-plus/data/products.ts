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
    id: 'p1', slug: 'support-telephone-gravite-ventilation', name: 'Support téléphone voiture par gravité', shortDescription: 'Gardez le smartphone visible pendant les trajets.', description: 'Un support compact destiné à maintenir le smartphone à portée de vue dans l’habitacle.', image: 'https://ae-pic-a1.aliexpress-media.com/kf/S6e08790aabba4469a66b50e9bd88ca64j.png_.avif', offerLabel: 'Sélection', category: 'Supports téléphone', affiliatePath: '/go/support-telephone-gravite-ventilation', featured: true,
  },
  {
    id: 'p2', slug: 'essager-chargeur-voiture-54w', name: 'Chargeur voiture Essager 54W USB / Type-C', shortDescription: 'Une solution compacte pour recharger les appareils en voiture.', description: 'Un chargeur voiture double port pensé pour les trajets quotidiens et les besoins de recharge à bord.', image: 'https://upload.jaknot.com/2025/03/images/products/488c0a/original/essager-charger-mobil-fast-charging-led-pd-qc-30-usb-type-c-54w-eccpq-kx01-p.jpeg', offerLabel: 'Pratique', category: 'Énergie', affiliatePath: '/go/essager-chargeur-voiture-54w', featured: true,
  },
  {
    id: 'p3', slug: 'joyroom-support-telephone-360', name: 'Support téléphone voiture Joyroom 360°', shortDescription: 'Ajustez facilement l’angle du téléphone dans l’habitacle.', description: 'Un support orientable avec ventouse, pensé pour une installation et un réglage simples.', image: 'https://jo-cell.com/cdn/shop/files/Joyroom-JR-ZS283-Mini-Car-Holder-for-Dashboard-70-110mm-Black-6941237173478-17012022-01-p.webp?v=1734435805', offerLabel: 'Premium', category: 'Supports téléphone', affiliatePath: '/go/joyroom-support-telephone-360', featured: true,
  },
  {
    id: 'p4', slug: 'support-telephone-universel-long-bras', name: 'Support téléphone universel à ventouse, bras long', shortDescription: 'Bras flexible et fixation par ventouse pour garder le téléphone à portée de vue.', description: 'Un support universel à bras long, conçu pour une fixation sur pare-brise ou tableau de bord.', image: 'https://ae-pic-a1.aliexpress-media.com/kf/S6e08790aabba4469a66b50e9bd88ca64j.png_.avif', offerLabel: 'Tendance', category: 'Supports téléphone', affiliatePath: '/go/support-telephone-universel-long-bras', featured: true,
  },
  {
    id: 'p5', slug: 'led-ambiance-rgb-voiture', name: 'Lampes LED RGB Atmosphère pour Voiture', shortDescription: 'Éclairage RGB d’ambiance USB pour personnaliser l’intérieur.', description: 'Une bande lumineuse d’ambiance RGB pensée pour l’habitacle, avec contrôle selon le modèle.', image: 'https://ae01.alicdn.com/kf/Hc3a527d8556d4304997a40563a9b54d1f.jpg_100x100.jpg_.webp', offerLabel: 'Tendance', category: 'Éclairage', affiliatePath: '/go/led-ambiance-rgb-voiture', featured: true,
  },
  {
    id: 'p6', slug: 'housse-volant-seametal-38cm', name: 'Housse de volant universelle 38 cm — SEAMETAL', shortDescription: 'Protection universelle du volant avec prise en main antidérapante.', description: 'Une housse de volant de 38 cm destinée à améliorer la prise en main et protéger le volant.', image: 'https://ae01.alicdn.com/kf/S5f9f6d4a6f544f1a8f0c3e6c0d7d1b2a.jpg', offerLabel: 'Sélection', category: 'Intérieur', affiliatePath: '/go/housse-volant-seametal-38cm', featured: true,
  },
  {
    id: 'p7', slug: 'organisateur-siege-auto', name: 'Organisateur de siège voiture multifonction', shortDescription: 'Rangez facilement les accessoires utiles dans l’habitacle.', description: 'Un rangement multifonction à plusieurs compartiments pour garder les petits accessoires organisés.', image: 'https://ae01.alicdn.com/kf/S8c6a4d0f3d4f4c2a9e0d7b1c5a8f6e3d.jpg', offerLabel: 'Pratique', category: 'Rangement', affiliatePath: '/go/organisateur-siege-auto', featured: false,
  },
  {
    id: 'p8', slug: 'kit-brosses-detailing-auto', name: 'Kit de brosses de detailing automobile', shortDescription: 'Un ensemble de brosses pour les zones difficiles à nettoyer.', description: 'Des brosses destinées au nettoyage de précision de l’intérieur et des petites zones de la voiture.', image: 'https://ae01.alicdn.com/kf/H01eafffd1c404b8082f42ea5c5bc129fI.jpg_100x100.jpg_.webp', offerLabel: 'Pratique', category: 'Entretien', affiliatePath: '/go/kit-brosses-detailing-auto', featured: false,
  },
];
