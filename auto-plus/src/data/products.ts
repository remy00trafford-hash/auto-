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
    image: 'https://www.wamia.tn/media/tmp/desc/w/u/wuw_z25_10.jpg',
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
    image: 'https://electronix.ma/wp-content/uploads/2024/02/1707152548_1.jpg',
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
    image: 'https://www.joyroom.com/cdn/shop/files/b8421501ceee8ed8defa49d79fc692df_f9c5f4e2-039e-43ee-a1b5-cf29013f38c5.jpg?v=1708596251&width=1300',
    featured: true,
  },
]
