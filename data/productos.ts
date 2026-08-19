export type OpcionConPrecio = {
  nombre: string;
  precio: number;
};

export type SaborPremium = {
  nombre: string;
  extra: number;
};

export type Producto = {
  nombre: string;
  slug: string;
  descripcion: string;
  imagen: string;
  detalle: string;
  precioDesde?: number;
  tamanos?: OpcionConPrecio[];
  sabores?: string[];
  saboresPremium?: SaborPremium[];
  extras?: OpcionConPrecio[];
  presentaciones?: string[];
  notas?: string[];
};

export const productos: Producto[] = [
  {
    nombre: "Chocoflan",
    slug: "chocoflan",
    descripcion:
      "La mezcla perfecta entre pastel de chocolate y flan napolitano cremoso.",
    imagen: "/imagenes/Chocoflan1.jpg",
    detalle: "Delicioso y cremoso",
    precioDesde: 300,
    tamanos: [
      { nombre: "Chico (6 a 8 porciones)", precio: 300 },
      { nombre: "Grande (12 a 15 porciones)", precio: 480 },
    ],
    extras: [
      { nombre: "Fruta de temporada", precio: 45 },
      { nombre: "Dedicatoria de chocolate", precio: 30 },
    ],
    notas: ["Solicita tu pedido con al menos 48 horas de anticipación."],
  },
  {
    nombre: "Galletas de mantequilla",
    slug: "galletas-de-mantequilla",
    descripcion: "Crujientes, doraditas y con un irresistible sabor casero.",
    imagen: "/imagenes/Galletas_Mantequilla.png",
    detalle: "Hechas a tu gusto",
    precioDesde: 95,
    presentaciones: ["Bolsa de 8 piezas", "Caja de 15 piezas"],
    sabores: ["Vainilla", "Canela", "Naranja"],
    extras: [{ nombre: "Caja con listón", precio: 35 }],
  },
  {
    nombre: "Empanadas",
    slug: "empanadas",
    descripcion:
      "Empanadas artesanales recién horneadas y preparadas con diferentes rellenos.",
    imagen: "/imagenes/Empanadas.png",
    detalle: "Recién horneadas",
    precioDesde: 35,
    tamanos: [
      { nombre: "Individual", precio: 35 },
      { nombre: "Caja de 6", precio: 190 },
      { nombre: "Caja de 12", precio: 360 },
    ],
    sabores: ["Fresa", "Piña", "Cajeta", "Chocolate"],
    saboresPremium: [
      { nombre: "Nutella", extra: 10 },
      { nombre: "Queso crema con zarzamora", extra: 15 },
    ],
    extras: [{ nombre: "Decoración especial", precio: 30 }],
  },
  {
    nombre: "Roles de canela",
    slug: "roles-de-canela",
    descripcion: "Esponjosos, suaves y con el toque perfecto de canela y glaseado.",
    imagen: "/imagenes/roles.png",
    detalle: "Suaves y esponjosos",
    precioDesde: 45,
    tamanos: [
      { nombre: "Individual", precio: 45 },
      { nombre: "Caja de 6", precio: 250 },
    ],
    saboresPremium: [
      { nombre: "Nuez", extra: 12 },
      { nombre: "Chocolate", extra: 10 },
    ],
    notas: ["El glaseado puede pedirse aparte."],
  },
  {
    nombre: "Cheesecake",
    slug: "cheesecake",
    descripcion: "Textura ultracremosa sobre una crocante base de galleta.",
    imagen: "/imagenes/chessecake.png",
    detalle: "Suave y cremoso",
    precioDesde: 320,
    tamanos: [
      { nombre: "Mediano (8 porciones)", precio: 320 },
      { nombre: "Grande (14 porciones)", precio: 490 },
    ],
    sabores: ["Natural", "Fresa", "Zarzamora", "Limón"],
    saboresPremium: [{ nombre: "Nutella", extra: 40 }],
    notas: ["La decoración puede variar según la fruta disponible."],
  },
];

export function obtenerProducto(slug: string) {
  return productos.find((producto) => producto.slug === slug);
}
