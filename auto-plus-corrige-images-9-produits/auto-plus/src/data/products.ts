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
    image: 'https://www.wamia.tn/media/tmp/desc/w/u/wuw_z25_10.jpg', featured: true,
  },
  {
    id: 'p2', slug: 'essager-chargeur-voiture-54w',
    name: 'Chargeur voiture Essager 54W USB / Type-C',
    description: 'Un chargeur voiture compact conçu pour alimenter rapidement les appareils compatibles pendant les trajets.',
    offerLabel: 'PRATIQUE', category: 'Énergie',
    affiliatePath: '/go/essager-chargeur-voiture-54w',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c3Ypx32V',
    image: 'https://electronix.ma/wp-content/uploads/2024/02/1707152548_1.jpg', featured: true,
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
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c3JARhch',
    image: 'https://s8.badu.bg/photos/593061/800x800_63e3a8935f640.jpg', featured: true,
  },
  {
    id: 'p5', slug: 'lampes-led-ambiance-voiture-rgb',
    name: 'Lampes LED d’ambiance RGB pour voiture',
    description: 'Un éclairage d’ambiance multicolore pour personnaliser l’intérieur de la voiture et créer une atmosphère plus dynamique.',
    offerLabel: 'TENDANCE', category: 'Éclairage',
    affiliatePath: '/go/lampes-led-ambiance-voiture-rgb',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c3esb3Jf',
    image: 'https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/926f6105984e436e818d886884403c6d~tplv-fhlh96nyum-resize-webp%3A800%3A794.webp?dr=12190&from=2378011839&idc=useast5&ps=933b5bde&shcp=e1be8f53&shp=8dbd94bf&t=555f072d', featured: true,
  },
  {
    id: 'p6', slug: 'housse-volant-led-38cm',
    name: 'Housse de volant LED universelle 38 cm',
    description: 'Une housse de volant orientée confort et style, avec éclairage LED intégré pour donner une touche distinctive à l’habitacle.',
    offerLabel: 'STYLE', category: 'Confort',
    affiliatePath: '/go/housse-volant-led-38cm',
    affiliateUrl: 'https://s.click.aliexpress.com/e/_c3cweypJ',
    image: 'https://contentassets.autozone.com/product_image/USA/57008/DKLF/SW534692-6/SW534692-6-02.jpg?imwidth=1920', featured: true,
  },
  {
    id: 'p7', slug: 'support-dashcam-ventouse-360',
    name: 'Support Dash Cam à ventouse 360°',
    description: 'Un support réglable à ventouse permettant d’orienter une caméra embarquée selon l’angle de prise de vue souhaité.',
    offerLabel: 'SÉCURITÉ', category: 'Électronique',
    affiliatePath: '/go/support-dashcam-ventouse-360',
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
