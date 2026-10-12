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
    precioDesde: 200,
    tamanos: [
      { nombre: "Chico (5 a 6 porciones)", precio: 200 },
      { nombre: "Grande (10 a 12 porciones)", precio: 300 },
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
    imagen: "/imagenes/redonda galleta mantequilla.jpg",
    detalle: "Hechas a tu gusto",
    precioDesde: 95,
    presentaciones: ["Bolsa de 8 piezas", "Caja de 15 piezas"],
    sabores: ["Vainilla"],
    extras: [{ nombre: "Caja con listón", precio: 35 }],
  },
  {
    nombre: "Empanadas",
    slug: "empanadas",
    descripcion:
      "Empanadas artesanales recién horneadas y preparadas con diferentes rellenos.",
    imagen: "/imagenes/Cajeta_Empanadas.png",
    detalle: "Recién horneadas",
    precioDesde: 14,
    tamanos: [
      { nombre: "Individual", precio: 14 },
      { nombre: "Caja de 10", precio: 120 },
      { nombre: "Caja de 15", precio: 180 },
    ],
    sabores: ["Fresa", "Piña", "Cajeta", "Zarzamora"],
    saboresPremium: [
      { nombre: "Nutella", extra: 10 },
      { nombre: "Queso crema con zarzamora", extra: 5 },
      { nombre: "Pay de Manzana", extra: 5 },
    ],
  },
  {
    nombre: "Pan de Chocolate con Nuez",
    slug: "Pan-de-Chocolate",
    descripcion:
      "Delicioso pan de chocolate cubierto con una suave cobertura de chocolate y trozos de nuez.",
    imagen: "/imagenes/Pastel de chocolate con nuez.jpg",
    detalle: "Intenso sabor a chocolate con un toque crujiente de nuez.",
    precioDesde: 350,
    tamanos: [
      { nombre: "Grande (10 a 12 porciones)", precio: 350 },
    ],
    extras: [
      { nombre: "Fruta de temporada", precio: 45 },
    ],
    notas: ["Solicita tu pedido con al menos 48 horas de anticipación."],
  },
  {
    nombre: "Pan de Limon",
    slug: "Pan-de-Limon",
    descripcion:
      "Delicioso pan de limón, con una textura suave y esponjosa y un ligero toque cítrico.",
    imagen: "/imagenes/Pastel de limon.jpg",
    detalle: "Suave, esponjoso y con un refrescante sabor a limón.",
    precioDesde: 220,
    tamanos: [
      { nombre: "Grande (10 a 12 porciones)", precio: 220 },
    ],
    extras: [
      { nombre: "Fruta de temporada", precio: 45 },
    ],
    notas: ["Solicita tu pedido con al menos 48 horas de anticipación."],
  },
  {
    nombre: "Cheesecake",
    slug: "cheesecake",
    descripcion: "Textura ultracremosa sobre una crocante base de galleta.",
    imagen: "/imagenes/Cheesecake-original.png",
    detalle: "Suave y cremoso",
    precioDesde: 280,
    tamanos: [
      { nombre: "Chico (5 a 6 porciones)", precio: 280 },
      { nombre: "Grande (10 a 12 porciones)", precio: 420 },
    ],
    sabores: ["Frutos rojos", "Estilo Tortuga"],
    notas: ["La decoración puede variar según la fruta disponible."],
  },
  
];

export function obtenerProducto(slug: string) {
  return productos.find((producto) => producto.slug === slug);
}
