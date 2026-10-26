import { asset } from '../lib/asset'
export type Group = {
  slug: string
  name: string
  italian: string
  count: string
  blurb: string
}

export const groups: Group[] = [
  {
    slug: 'dairy',
    name: 'Cheese & dairy',
    italian: 'Latticini',
    count: 'Fresh & aged',
    blurb: 'Burrata, mozzarella, aged cheeses from family caseifici.',
  },
  {
    slug: 'salumi',
    name: 'Cured meats',
    italian: 'Salumi',
    count: 'Cured in Italy',
    blurb: 'Prosciutto, capocollo, ’nduja and slow-cured salumi.',
  },
  {
    slug: 'pasta',
    name: 'Pasta & grains',
    italian: 'Pasta e Riso',
    count: 'Fresh & bronze-drawn',
    blurb: 'Fresh orecchiette, bronze-drawn pasta, riso and farine.',
  },
  {
    slug: 'forno',
    name: 'Bakery',
    italian: 'Forno',
    count: 'Baked through the week',
    blurb: 'Focaccia, taralli, Altamura bread and grissini.',
  },
  {
    slug: 'dispensa',
    name: 'Pantry',
    italian: 'Dispensa',
    count: 'The long shelf',
    blurb: 'San Marzano tomatoes, preserves, olives and vinegar.',
  },
  {
    slug: 'olio',
    name: 'Oils',
    italian: 'Olio',
    count: 'Single estates',
    blurb: 'Extra virgin olive oils, single estates and Coratina.',
  },
  {
    slug: 'cantina',
    name: 'Cellar',
    italian: 'Cantina',
    count: 'Puglia & beyond',
    blurb: 'Primitivo, Negroamaro, bubbles, beers and grappa.',
  },
  {
    slug: 'dolci',
    name: 'Sweets',
    italian: 'Dolci',
    count: 'The sweet end',
    blurb: 'Pasticciotto, cantuccini, chocolate and frozen desserts.',
  },
]

export type Product = {
  id: string
  name: string
  group: string
  origin: string
  note: string
  art: string
  badge?: string
  featured?: boolean
}

/**
 * Curated showcase selection from the Mabò range, which runs to
 * roughly 1,155 references in the trade catalogue.
 */
export const products: Product[] = [
  {
    id: 'burrata-andria',
    name: 'Burrata di Andria IGP',
    group: 'dairy',
    origin: 'Andria, Puglia',
    note: 'Creamy stracciatella heart, handmade each morning.',
    art: asset('/img/photos/burrata.webp'),
    badge: 'Fresh',
    featured: true,
  },
  {
    id: 'mozzarella-bufala',
    name: 'Mozzarella di Bufala DOP',
    group: 'dairy',
    origin: 'Caserta, Campania',
    note: 'Buffalo milk, knotted by hand. Delivered chilled.',
    art: 'mozzarella',
    badge: 'Fresh',
  },
  {
    id: 'parmigiano',
    name: 'Parmigiano Reggiano 24 mesi',
    group: 'dairy',
    origin: 'Emilia-Romagna',
    note: 'Twenty-four months in the caseificio. Deep, crystalline.',
    art: 'wheel',
  },
  {
    id: 'caciocavallo',
    name: 'Caciocavallo Silano DOP',
    group: 'dairy',
    origin: 'Calabria',
    note: 'Aged in pairs, tied at the top, sweet and savoury.',
    art: 'cheese',
  },
  {
    id: 'prosciutto-parma',
    name: 'Prosciutto di Parma DOP 24 mesi',
    group: 'salumi',
    origin: 'Parma, Emilia-Romagna',
    note: 'Sea salt only. Sliced to order for the counter.',
    art: asset('/img/photos/prosciutto.webp'),
    badge: 'Signature',
  },
  {
    id: 'capocollo',
    name: 'Capocollo di Martina Franca',
    group: 'salumi',
    origin: 'Martina Franca, Puglia',
    note: 'Dry-cured with black pepper and a little Salento wine.',
    art: asset('/img/art/salami.png'),
  },
  {
    id: 'nduja',
    name: '’Nduja di Spilinga',
    group: 'salumi',
    origin: 'Spilinga, Calabria',
    note: 'Spreadable, fiery, made with local peperoncino.',
    art: 'nduja',
  },
  {
    id: 'bresaola',
    name: 'Bresaola della Valtellina IGP',
    group: 'salumi',
    origin: 'Valtellina, Lombardy',
    note: 'Lean beef, air-dried in the mountain air.',
    art: 'salumi',
  },
  {
    id: 'orecchiette',
    name: 'Orecchiette fresche',
    group: 'pasta',
    origin: 'Bari, Puglia',
    note: 'Hand-rolled each week. The classic cime di rapa pairing.',
    art: asset('/img/art/pasta.png'),
    badge: 'Fresh',
  },
  {
    id: 'spaghetti-gragnano',
    name: 'Spaghetti di Gragnano IGP',
    group: 'pasta',
    origin: 'Gragnano, Campania',
    note: 'Bronze-drawn, slow-dried, extraordinary bite.',
    art: 'pasta',
  },
  {
    id: 'carnaroli',
    name: 'Riso Carnaroli',
    group: 'pasta',
    origin: 'Piedmont',
    note: 'The grain that holds its shape in a proper risotto.',
    art: 'rice',
  },
  {
    id: 'focaccia',
    name: 'Focaccia barese',
    group: 'forno',
    origin: 'Bari, Puglia',
    note: 'Dimpled, olive-oiled, baked on the day of delivery.',
    art: asset('/img/art/bread.png'),
    badge: 'Fresh',
  },
  {
    id: 'taralli',
    name: 'Taralli pugliesi',
    group: 'forno',
    origin: 'Puglia',
    note: 'Boiled then baked, with fennel seed or black pepper.',
    art: 'taralli',
  },
  {
    id: 'altamura',
    name: 'Pane di Altamura DOP',
    group: 'forno',
    origin: 'Altamura, Puglia',
    note: 'Durum wheat, wood-fired crust, a golden crumb.',
    art: 'bread',
  },
  {
    id: 'san-marzano',
    name: 'Pomodori San Marzano DOP',
    group: 'dispensa',
    origin: 'Agro Nocerino-Sarnese',
    note: 'Sweet, low-acid, peeled whole. The only tomato for ragù.',
    art: 'can',
    badge: 'Signature',
  },
  {
    id: 'carciofi',
    name: 'Carciofi sott’olio',
    group: 'dispensa',
    origin: 'Puglia',
    note: 'Tender violet artichokes, packed in olive oil and herbs.',
    art: 'preserve',
  },
  {
    id: 'aceto-malpighi',
    name: 'Aceto Balsamico Malpighi IGP',
    group: 'dispensa',
    origin: 'Modena, Emilia-Romagna',
    note: 'Aged in cherry, oak and juniper barrels. Dense and sweet.',
    art: 'oil',
  },
  {
    id: 'olio-coratina',
    name: 'Olio extravergine Coratina',
    group: 'olio',
    origin: 'Corato, Puglia',
    note: 'Grassy, peppery, pressed from the first harvest.',
    art: asset('/img/art/oil.png'),
    badge: 'Signature',
  },
  {
    id: 'primitivo',
    name: 'Primitivo di Manduria DOP',
    group: 'cantina',
    origin: 'Manduria, Puglia',
    note: 'Sun-dried fruit, velvet tannins. The wine of the Salento.',
    art: 'wine',
  },
  {
    id: 'negroamaro',
    name: 'Negroamaro del Salento',
    group: 'cantina',
    origin: 'Salento, Puglia',
    note: 'Dark, savoury and made for a plate of orecchiette.',
    art: 'bottle',
  },
  {
    id: 'pasticciotto',
    name: 'Pasticciotto leccese',
    group: 'dolci',
    origin: 'Lecce, Puglia',
    note: 'Shortcrust, cooling custard, the morning ritual of Lecce.',
    art: 'pastry',
  },
  {
    id: 'cantuccini',
    name: 'Cantuccini alle mandorle',
    group: 'dolci',
    origin: 'Tuscany',
    note: 'Twice-baked, almond-heavy. Made for Vin Santo.',
    art: asset('/img/art/biscuits.png'),
  },
  {
    id: 'caffe',
    name: 'Caffè napoletano',
    group: 'dispensa',
    origin: 'Naples, Campania',
    note: 'A dark, round blend for espresso and the moka.',
    art: 'coffee',
  },
  {
    id: 'alici',
    name: 'Alici del Mar Adriatico',
    group: 'dispensa',
    origin: 'Adriatic coast',
    note: 'Fresh anchovies and marinated fillets, delivered chilled.',
    art: 'fish',
    badge: 'Fresh',
  },
]

export const hamperItems = [
  {
    id: 'box-puglia',
    name: 'La Puglia in una cassa',
    tag: 'The classic',
    desc: 'Orecchiette, Coratina oil, San Marzano tomatoes, taralli and a bottle of Primitivo.',
    price: 'On request',
    art: asset('/img/art/oil.png'),
    props: [asset('/img/art/oil.png'), asset('/img/art/pasta.png'), asset('/img/art/bread.png')],
    size: 'Box of 6',
  },
  {
    id: 'box-aperitivo',
    name: 'Aperitivo Pugliese',
    tag: 'To share',
    desc: 'Taralli, olives, capocollo, caciocavallo and a chilled bottle of Falanghina.',
    price: 'On request',
    art: asset('/img/art/salami.png'),
    props: [asset('/img/art/salami.png'), asset('/img/art/glass.png'), asset('/img/art/bread.png')],
    size: 'Box of 7',
  },
  {
    id: 'box-natale',
    name: 'Natale 2026',
    tag: 'Limited',
    desc: 'Panettone, cantuccini, pasticciotto, balsamico and a selection of festive salumi.',
    price: 'On request',
    art: asset('/img/art/biscuits.png'),
    props: [asset('/img/art/biscuits.png'), asset('/img/art/glass.png'), asset('/img/art/salami.png')],
    size: 'Box of 9',
  },
]

export const legacyCategories = [
  'Natale 2026',
  'Dairy products',
  'Cured meats & salaisons',
  'Fresh meats',
  'Frozen meats',
  'Frozen fish',
  'Frozen vegetables',
  'Pasta & rice',
  'Taralli, bread, focaccia & snacks',
  'Frozen rotisserie',
  'Flours & semolina',
  'Preserves',
  'Oils',
  'Spices & dried pulses',
  'Dessert preparations',
  'Coffee & bar preparations',
  'Biscuits & chocolate',
  'Frozen desserts & cakes',
  'Soft drinks',
  'Beers',
  'Wines & bubbles',
  'Liqueurs & grappas',
  'Baby food',
  'Non-food',
]
