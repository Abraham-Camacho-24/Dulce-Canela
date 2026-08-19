import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { obtenerProducto, productos } from "@/data/productos";

const whatsappNumber = "523327883444";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productos.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const producto = obtenerProducto(slug);

  return producto
    ? { title: `${producto.nombre} | Dulce Canela`, description: producto.descripcion }
    : { title: "Producto no encontrado | Dulce Canela" };
}

function formatoPrecio(precio: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(precio);
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const producto = obtenerProducto(slug);

  if (!producto) notFound();

  const mensaje = `Hola, vi ${producto.nombre} en la página de Dulce Canela y me gustaría pedir información.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

  return (
    <main className="product-detail-page">
      <header className="site-header">
        <nav className="nav container detail-nav" aria-label="Navegación principal">
          <Link className="brand" href="/" aria-label="Dulce Canela, ir al inicio">
            <span className="brand-mark">DC</span>
            <span>Dulce Canela</span>
          </Link>
          <Link className="back-link" href="/#postres">← Volver a postres</Link>
        </nav>
      </header>

      <section className="detail-hero">
        <div className="detail-sprinkle detail-sprinkle-one" />
        <div className="detail-sprinkle detail-sprinkle-two" />
        <div className="container detail-hero-grid">
          <div className="detail-image-wrap">
            <Image
              className="detail-image"
              src={producto.imagen}
              alt={`Fotografía de ${producto.nombre.toLowerCase()}`}
              fill
              priority
              sizes="(max-width: 700px) calc(100vw - 30px), 48vw"
            />
            <span className="detail-image-label">{producto.detalle}</span>
          </div>
          <div className="detail-info">
            <p className="eyebrow"><span>✦</span> Preparado con cariño</p>
            <h1>{producto.nombre}</h1>
            <p className="detail-description">{producto.descripcion}</p>
            {producto.precioDesde !== undefined && (
              <div className="detail-price">
                <span>Desde</span>
                <strong>{formatoPrecio(producto.precioDesde)}</strong>
              </div>
            )}

            <div className="detail-options">
              {!!producto.tamanos?.length && (
                <article className="detail-panel">
                  <p className="detail-kicker">Opciones</p>
                  <h2>Presentaciones y precios</h2>
                  <div className="price-list">
                    {producto.tamanos.map((tamano) => (
                      <div key={tamano.nombre}>
                        <span>{tamano.nombre}</span><i aria-hidden="true" />
                        <strong>{formatoPrecio(tamano.precio)}</strong>
                      </div>
                    ))}
                  </div>
                </article>
              )}

              {!!producto.presentaciones?.length && (
                <article className="detail-panel">
                  <p className="detail-kicker">Elige la tuya</p>
                  <h2>Presentaciones</h2>
                  <ul className="option-list presentation-list">
                    {producto.presentaciones.map((presentacion) => <li key={presentacion}>{presentacion}</li>)}
                  </ul>
                </article>
              )}

              {!!producto.sabores?.length && (
                <article className="detail-panel">
                  <p className="detail-kicker">Para elegir</p>
                  <h2>Sabores disponibles</h2>
                  <ul className="option-list">
                    {producto.sabores.map((sabor) => <li key={sabor}>{sabor}</li>)}
                  </ul>
                </article>
              )}

              {!!producto.saboresPremium?.length && (
                <article className="detail-panel detail-panel-premium">
                  <p className="detail-kicker">Un toque especial</p>
                  <h2>Sabores premium</h2>
                  <p className="additional-cost-label">Costo adicional</p>
                  <ul className="priced-options">
                    {producto.saboresPremium.map((sabor) => (
                      <li key={sabor.nombre}><span>{sabor.nombre}</span><strong>+{formatoPrecio(sabor.extra)}</strong></li>
                    ))}
                  </ul>
                </article>
              )}

              {!!producto.extras?.length && (
                <article className="detail-panel">
                  <p className="detail-kicker">Personaliza tu pedido</p>
                  <h2>Extras</h2>
                  <p className="additional-cost-label">Costo adicional</p>
                  <ul className="priced-options">
                    {producto.extras.map((extra) => (
                      <li key={extra.nombre}><span>{extra.nombre}</span><strong>+{formatoPrecio(extra.precio)}</strong></li>
                    ))}
                  </ul>
                </article>
              )}

              {!!producto.notas?.length && (
                <aside className="detail-notes">
                  <span aria-hidden="true">♡</span>
                  <div><h2>Antes de hacer tu pedido</h2>{producto.notas.map((nota) => <p key={nota}>{nota}</p>)}</div>
                </aside>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="detail-content section">
        <div className="container">
          <section className="detail-order" aria-labelledby="order-title">
            <span className="detail-order-heart" aria-hidden="true">♡</span>
            <p className="detail-kicker">Hecho especialmente para ti</p>
            <h2 id="order-title">¿Ya elegiste tu favorito?</h2>
            <p>
              Ahora que conoces todas las opciones, cuéntanos qué se te antojó y con gusto
              preparamos tu pedido.
            </p>
            <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
              Pedir por WhatsApp <span aria-hidden="true">→</span>
            </a>
            <small>Te responderemos lo más pronto posible ♡</small>
          </section>
        </div>
      </section>

      <footer className="detail-footer">
        <div className="container footer-inner">
          <Link className="brand" href="/"><span className="brand-mark">DC</span><span>Dulce Canela</span></Link>
          <p>© Dulce Canela <span>•</span> Postres hechos con cariño.</p>
          <Link href="/#postres">Ver más postres ↑</Link>
        </div>
      </footer>
    </main>
  );
}
