export type Product = {
  id: string
  slug: string
  name: string
  description: string
  offerLabel: string
  category: string
  affiliatePath: string
  affiliateUrl: string
  image: string
  featured: boolean
}

export const products: Product[] = [
  {
    id: 'p1', slug: 'support-telephone-gravite-ventilation',
    name: 'Support téléphone voiture par gravité',
    description: 'Un support compact qui maintient le smartphone visible pendant la navigation, avec une installation pratique dans l’habitacle.',
    offerLabel: 'SÉLECTION', category: 'Supports téléphone',
    affiliatePath: '/go/support-telephone-gravite-ventilation',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c3OV9JnP',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sbc5fd46344424783b987a8e6757754030.jpg', featured: true,
  },
  {
    id: 'p2', slug: 'essager-chargeur-voiture-54w',
    name: 'Chargeur voiture Essager 54W USB / Type-C',
    description: 'Un chargeur voiture compact conçu pour alimenter rapidement les appareils compatibles pendant les trajets.',
    offerLabel: 'PRATIQUE', category: 'Énergie',
    affiliatePath: '/go/essager-chargeur-voiture-54w',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c3Ypx32V',
    image: 'https://www.essager3c.com/cdn/shop/files/02_392b3c65-87ce-44ef-9479-9d24869af1f1_1200x1200.jpg', featured: true,
  },
  {
    id: 'p3', slug: 'joyroom-support-telephone-360',
    name: 'Support téléphone voiture Joyroom 360°',
    description: 'Un support orientable permettant d’ajuster facilement la position du smartphone pour le conducteur ou le passager.',
    offerLabel: 'PREMIUM', category: 'Supports téléphone',
    affiliatePath: '/go/joyroom-support-telephone-360',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c4VsBiwD',
    image: 'https://www.joyroom.com/cdn/shop/files/b8421501ceee8ed8defa49d79fc692df_f9c5f4e2-039e-43ee-a1b5-cf29013f38c5.jpg?v=1708596251&width=1300', featured: true,
  },
  {
    id: 'p4', slug: 'support-telephone-long-bras-ventouse',
    name: 'Support téléphone universel à ventouse, bras long',
    description: 'Un support universel à ventouse avec bras réglable, pensé pour garder le téléphone stable et bien visible sur le tableau de bord.',
    offerLabel: 'NOUVEAUTÉ', category: 'Supports téléphone',
    affiliatePath: '/go/support-telephone-long-bras-ventouse',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c3esb3Jf',
    image: 'https://s8.badu.bg/photos/593061/800x800_63e3a8935f640.jpg', featured: true,
  },
  {
    id: 'p5', slug: 'bande-led-fibre-optique-voiture',
    name: 'Bande lumineuse LED ambiante à fibre optique pour voiture',
    description: 'Un éclairage d’ambiance RGB invisible en fibre optique, commande via application, disponible en plusieurs longueurs (2 m à 5 m) pour habiller l’intérieur du véhicule.',
    offerLabel: 'TENDANCE', category: 'Éclairage',
    affiliatePath: '/go/bande-led-fibre-optique-voiture',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c3cweypJ',
    image: 'https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/926f6105984e436e818d886884403c6d~tplv-fhlh96nyum-resize-webp%3A800%3A794.webp?dr=12190&from=2378011839&idc=useast5&ps=933b5bde&shcp=e1be8f53&shp=8dbd94bf&t=555f072d', featured: true,
  },
  {
    id: 'p6', slug: 'housse-volant-led-38cm',
    name: 'Housse de volant LED universelle 38 cm',
    description: 'Une housse de volant orientée confort et style, avec éclairage LED intégré pour donner une touche distinctive à l’habitacle.',
    offerLabel: 'STYLE', category: 'Confort',
    affiliatePath: '/go/housse-volant-led-38cm',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c3JARhch',
    image: 'https://www.seametalco.com/cdn/shop/files/a48511f0-2a2f-488d-8753-75b57a1da842_1024x1024.jpg', featured: true,
  },
  {
    id: 'p7', slug: 'support-camera-embarquee-ventouse',
    name: 'Support de caméra embarquée à ventouse, 5 adaptateurs',
    description: 'Un support à ventouse pour caméra embarquée / enregistreur vidéo, livré avec 5 types d’adaptateurs pour s’adapter à la plupart des modèles de dashcam.',
    offerLabel: 'SÉCURITÉ', category: 'Électronique',
    affiliatePath: '/go/support-camera-embarquee-ventouse',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c3iAOcUN',
    image: 'https://i5.walmartimages.com/asr/b4865acf-fbd4-4500-b577-6cc301e6bf3b.d860b96653d547c9f0aa4d5d6fc0ba23.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768', featured: true,
  },
  {
    id: 'p8', slug: 'organisateur-rangement-siege-auto',
    name: 'Organisateur de rangement entre sièges',
    description: 'Un rangement pratique pour garder téléphone, cartes et petits objets à portée de main sans encombrer l’habitacle.',
    offerLabel: 'ORGANISATION', category: 'Organisation',
    affiliatePath: '/go/organisateur-rangement-siege-auto',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c32iCHW9',
    image: 'https://i.ebayimg.com/images/g/elgAAOSwwJhlSuTZ/s-l1200.jpg', featured: false,
  },
  {
    id: 'p9', slug: 'kit-nettoyage-detailing-auto',
    name: 'Kit de nettoyage et detailing auto',
    description: 'Un ensemble de brosses et accessoires pour les finitions de l’intérieur, les recoins et l’entretien courant du véhicule.',
    offerLabel: 'ENTRETIEN', category: 'Nettoyage',
    affiliatePath: '/go/kit-nettoyage-detailing-auto',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c3xjQNYp',
    image: 'https://www.bigw.com.au/medias/sys_master/images/images/h2c/hf6/119128560238622.jpg', featured: false,
  },
]
