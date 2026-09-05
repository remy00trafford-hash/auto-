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
  { id: 'p1', slug: 'support-telephone-gravite-ventilation', name: 'Support téléphone voiture par gravité', shortDescription: 'Gardez le smartphone visible pendant les trajets.', description: 'Un support compact destiné à maintenir le smartphone à portée de vue dans l’habitacle.', image: '/products/phone-holder.svg', offerLabel: 'Sélection', category: 'Supports téléphone', affiliatePath: '/go/support-telephone-gravite-ventilation', featured: true },
  { id: 'p2', slug: 'essager-chargeur-voiture-54w', name: 'Chargeur voiture Essager 54W USB / Type-C', shortDescription: 'Une solution compacte pour recharger les appareils en voiture.', description: 'Un chargeur voiture double port pensé pour les trajets quotidiens et les besoins de recharge à bord.', image: '/products/charger.svg', offerLabel: 'Pratique', category: 'Énergie', affiliatePath: '/go/essager-chargeur-voiture-54w', featured: true },
  { id: 'p3', slug: 'joyroom-support-telephone-360', name: 'Support téléphone voiture Joyroom 360°', shortDescription: 'Ajustez facilement l’angle du téléphone dans l’habitacle.', description: 'Un support orientable avec ventouse, pensé pour une installation et un réglage simples.', image: '/products/joyroom-holder.svg', offerLabel: 'Premium', category: 'Supports téléphone', affiliatePath: '/go/joyroom-support-telephone-360', featured: true },
  { id: 'p4', slug: 'support-telephone-universel-voiture', name: 'Support Téléphone Universel pour Voiture', shortDescription: 'Bras long et fixation ventouse pour garder le téléphone accessible.', description: 'Un support universel à ventouse avec bras réglable, adapté aux usages quotidiens en voiture.', image: '/products/universal-phone-holder.svg', offerLabel: 'Nouveau', category: 'Supports téléphone', affiliatePath: '/go/support-telephone-universel-voiture', featured: true },
  { id: 'p5', slug: 'lampes-led-atmosphere-voiture', name: 'Lampes LED Atmosphère pour Voiture', shortDescription: 'Ajoutez une ambiance RGB à l’intérieur de votre véhicule.', description: 'Un éclairage d’ambiance multicolore USB pensé pour personnaliser l’habitacle.', image: '/products/led-light.svg', offerLabel: 'Tendance', category: 'Éclairage', affiliatePath: '/go/lampes-led-atmosphere-voiture', featured: true },
  { id: 'p6', slug: 'housse-volant-avec-led', name: 'Housse Volant avec LED', shortDescription: 'Une housse décorative pour moderniser le volant.', description: 'Une housse de volant proposée avec finition LED et plusieurs styles de matière.', image: '/products/steering-wheel-led.svg', offerLabel: 'Tendance', category: 'Confort', affiliatePath: '/go/housse-volant-avec-led', featured: true },
  { id: 'p7', slug: 'support-dash-cam-camera-voiture', name: 'Support Dash Cam / Caméra de Voiture', shortDescription: 'Fixez une caméra avec un support réglable à ventouse.', description: 'Un support flexible et réglable destiné aux caméras de voiture et dash cams.', image: '/products/dash-cam-mount.svg', offerLabel: 'Pratique', category: 'Supports téléphone', affiliatePath: '/go/support-dash-cam-camera-voiture', featured: false },
  { id: 'p8', slug: 'organisateur-rangement-siege-auto', name: 'Organisateur / Rangement de Siège Auto', shortDescription: 'Gardez les petits objets organisés entre ou derrière les sièges.', description: 'Un rangement automobile compact pour les accessoires et objets du quotidien.', image: '/products/seat-organizer.svg', offerLabel: 'Organisation', category: 'Organisation', affiliatePath: '/go/organisateur-rangement-siege-auto', featured: false },
  { id: 'p9', slug: 'kit-nettoyage-detailing-auto', name: 'Kit Nettoyage / Détailing Auto', shortDescription: 'Les accessoires essentiels pour garder l’habitacle propre.', description: 'Un ensemble d’accessoires de nettoyage et de microfibre destiné à l’entretien automobile.', image: '/products/cleaning-kit.svg', offerLabel: 'Entretien', category: 'Nettoyage', affiliatePath: '/go/kit-nettoyage-detailing-auto', featured: false },
];
