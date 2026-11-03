export type Product = {
  id: string;
  sku: string;
  category: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  color: 'terracotta' | 'mustard' | 'teal' | 'olive';
  images: string[];
};

export type Project = {
  index: number;
  total: number;
  title: string;
  discipline: string;
  description: string;
  year: string;
  image: string;
  caption: string;
};

export type Faq = {
  number: string;
  question: string;
  answer: string;
};

export const products: Product[] = [
  {
    id: 'kra-001',
    sku: 'KORIA-001',
    category: 'Bolsa de lienzo',
    name: 'Tote / Mascota',
    description:
      'Tote de algodón grueso con la mascota del estudio bordada al frente.',
    price: 480,
    stock: 12,
    color: 'terracotta',
    images: [
      'https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27100518/pexels-photo-27100518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27127406/pexels-photo-27127406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'kra-002',
    sku: 'KORIA-002',
    category: 'Edición infantil',
    name: 'Libro / Mundo mínimo',
    description:
      'Libro ilustrado para primeras lecturas, con interiores de alto contraste.',
    price: 320,
    stock: 8,
    color: 'mustard',
    images: [
      'https://images.pexels.com/photos/8091191/pexels-photo-8091191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7635576/pexels-photo-7635576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/19194587/pexels-photo-19194587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'kra-003',
    sku: 'KORIA-003',
    category: 'Acero inoxidable',
    name: 'Termo / Snoopy day',
    description:
      'Termo de doble pared con gráfica de Snoopy y acabado mate de colección.',
    price: 690,
    stock: 6,
    color: 'teal',
    images: [
      'https://images.pexels.com/photos/30276131/pexels-photo-30276131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/3098620/pexels-photo-3098620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'kra-004',
    sku: 'KORIA-004',
    category: 'Acero inoxidable',
    name: 'Termo / Arnold club',
    description:
      'Edición ilustrada inspirada en Hey Arnold!, pensada para llevar ideas contigo.',
    price: 690,
    stock: 4,
    color: 'olive',
    images: [
      'https://images.pexels.com/photos/3098620/pexels-photo-3098620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/30276131/pexels-photo-30276131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
];

export const projects: Project[] = [
  {
    index: 1,
    total: 2,
    title: 'Editorial',
    discipline: 'Dirección de arte · Diseño editorial',
    description:
      'Una publicación que convierte la investigación en una experiencia de lectura cálida, clara y memorable.',
    year: '2025',
    image:
      'https://images.pexels.com/photos/4271615/pexels-photo-4271615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    caption: 'EDITORIAL / KORIA STUDIO',
  },
  {
    index: 2,
    total: 2,
    title: 'Identidad',
    discipline: 'Branding · Sistema visual',
    description:
      'Construcción de marca desde el concepto hasta cada pieza. Identidad que se sostiene en cualquier escala.',
    year: '2024',
    image:
      'https://images.pexels.com/photos/18936417/pexels-photo-18936417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    caption: 'IDENTIDAD / KORIA STUDIO',
  },
];

export const faqs: Faq[] = [
  {
    number: '01',
    question: '¿Qué hacemos?',
    answer:
      'Creamos identidades, campañas, objetos y experiencias digitales. También cotizamos diseños desde cero.',
  },
  {
    number: '02',
    question: '¿Hacen envíos?',
    answer:
      'Sí, enviamos a todo México con paqueterías rastreadoras. Para otras zonas, escríbenos para cotizar.',
  },
  {
    number: '03',
    question: '¿Cómo puedo pagar?',
    answer:
      'Aceptamos transferencia, tarjetas vía Mercado Pago y efectivo en pickups dentro de la CDMX.',
  },
  {
    number: '04',
    question: '¿Los productos tienen stock real?',
    answer:
      'Las cantidades son referenciales. La disponibilidad exacta se confirma al cotizar cada pieza.',
  },
];
