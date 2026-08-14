const productos = [
  {
    nombre: "Brownies",
    descripcion:
      "Brownies suaves y chocolatosos, preparados para disfrutar en cualquier momento.",
    precio: "Desde $--",
    imagen: "brownie",
    detalle: "Chocolate intenso",
  },
  {
    nombre: "Pasteles",
    descripcion:
      "Pasteles personalizados para cumpleaños, reuniones y momentos especiales.",
    precio: "Desde $--",
    imagen: "pastel",
    detalle: "Hechos a tu gusto",
  },
  {
    nombre: "Galletas",
    descripcion:
      "Galletas artesanales con distintos sabores y presentaciones.",
    precio: "Desde $--",
    imagen: "galletas",
    detalle: "Recién horneadas",
  },
  {
    nombre: "Pays",
    descripcion: "Postres cremosos y frescos para compartir.",
    precio: "Desde $--",
    imagen: "pay",
    detalle: "Suaves y cremosos",
  },
];

const categorias = ["Pasteles", "Brownies", "Galletas", "Pays", "Postres especiales"];

// Reemplaza estos datos cuando estén listas las redes y el número del negocio.
const whatsappNumber = "523327883444";
const whatsappMessage =
  "Hola, vi la página de Dulce Canela y me gustaría hacer un pedido.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const redes = [
  { nombre: "Instagram", url: "#", inicial: "ig" },
  { nombre: "Facebook", url: "#", inicial: "f" },
  { nombre: "TikTok", url: "#", inicial: "♪" },
];

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 1c1.3 9.8 5.2 13.7 15 15-9.8 1.3-13.7 5.2-15 15C14.7 21.2 10.8 17.3 1 16 10.8 14.7 14.7 10.8 16 1Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m7.5 4.5 5.5 5.5-5.5 5.5M3 10h10" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.3 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="nav container" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="Dulce Canela, ir al inicio">
            <span className="brand-mark">DC</span>
            <span>Dulce Canela</span>
          </a>
          <div className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#postres">Postres</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#pedidos">Pedidos</a>
          </div>
          <a className="button button-small" href={whatsappUrl} target="_blank" rel="noreferrer">
            Hacer pedido
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-sprinkle sprinkle-one" />
        <div className="hero-sprinkle sprinkle-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span>✦</span> Un detalle dulce para cada momento</p>
            <h1>Postres hechos para <em>endulzar</em> tus momentos</h1>
            <p className="hero-text">
              Detalles dulces, sabores especiales y postres hechos con cariño para
              compartir en cualquier ocasión.
            </p>
            <div className="hero-actions">
              <a className="button" href="#postres">Conoce nuestros postres <ArrowIcon /></a>
              <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                Hacer un pedido <span>→</span>
              </a>
            </div>
            <div className="made-with-love"><span>♡</span> Preparado artesanalmente con mucho cariño</div>
          </div>

          <div className="hero-art" aria-label="Ilustración decorativa de un pastel">
            <Sparkle className="sparkle sparkle-top" />
            <Sparkle className="sparkle sparkle-side" />
            <span className="doodle doodle-one">⌁</span>
            <span className="doodle doodle-two">⌁</span>
            <div className="cake-plate" />
            <div className="cake">
              <div className="cake-top"><span /><span /><span /><span /><span /></div>
              <div className="cake-icing"><i /><i /><i /><i /></div>
              <div className="cake-body"><span>♡</span></div>
            </div>
            <div className="hero-note"><span>hecho con</span><strong>mucho amor ♡</strong></div>
          </div>
        </div>
        <div className="hero-wave" />
      </section>

      <section className="section favorites" id="postres">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>✦</span> Para consentirte</p>
              <h2>Postres</h2>
            </div>
           
          </div>
          <div className="product-grid">
            {productos.map((producto, index) => (
              <article className="product-card" key={producto.nombre}>
                <div className={`product-image product-${producto.imagen}`}>
                  <span className="product-number">0{index + 1}</span>
                  <span className="product-label">{producto.detalle}</span>
                  <div className="dessert" aria-hidden="true"><i /><i /><i /></div>
                </div>
                <div className="product-content">
                  <div className="product-title"><h3>{producto.nombre}</h3><span>♡</span></div>
                  <p>{producto.descripcion}</p>
                  <strong>{producto.precio}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="categories" aria-labelledby="categorias-title">
        <div className="container category-inner">
          <div>
            <p className="eyebrow light"><span>✦</span> Algo para cada antojo</p>
            <h2 id="categorias-title">Encuentra tu favorito</h2>
          </div>
          <div className="category-list">
            {categorias.map((categoria, index) => (
              <div className="category-pill" key={categoria}>
                <span>{["♜", "▰", "●", "◒", "✦"][index]}</span>{categoria}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="nosotros">
        <div className="container about-grid">
          <div className="about-art" aria-hidden="true">
            <div className="blob" />
            <Sparkle className="about-sparkle" />
            <div className="whisk"><span /><i /><i /><i /></div>
            <div className="bowl"><span>♥</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span>✦</span> Nuestra historia</p>
            <h2>Hecho con cariño</h2>
            <p>Dulce Canela nació con la idea de compartir postres preparados con dedicación y mucho cariño. Cada pedido busca convertirse en un pequeño detalle especial para nuestros clientes, ya sea para celebrar un momento importante o simplemente para disfrutar algo dulce.</p>
            <div className="values"><span><i>♡</i> Ingredientes elegidos</span><span><i>✦</i> Detalles especiales</span></div>
          </div>
        </div>
      </section>

      <section className="section order" id="pedidos">
        <div className="container order-card">
          <Sparkle className="order-sparkle" />
          <span className="order-doodle">⌁</span>
          <div className="order-icon"><HeartIcon /></div>
          <p className="eyebrow"><span>✦</span> Hagamos algo delicioso</p>
          <h2>¿Se te antojó algo dulce?</h2>
          <p>Cuéntanos qué postre buscas y con gusto podemos ayudarte con tu pedido.</p>
          <a className="button whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">
            <span className="whatsapp-icon">◔</span> Pedir por WhatsApp <ArrowIcon />
          </a>
          <small>Te responderemos lo más pronto posible ♡</small>
        </div>
      </section>

      <section className="social-section" aria-labelledby="redes-title">
        <div className="container social-inner">
          <div><p className="eyebrow"><span>✦</span> Síguenos</p><h2 id="redes-title">Más antojos por aquí</h2></div>
          <div className="social-links">
            {redes.map((red) => <a href={red.url} key={red.nombre}><span>{red.inicial}</span>{red.nombre}</a>)}
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#inicio"><span className="brand-mark">DC</span><span>Dulce Canela</span></a>
          <p>© Dulce Canela <span>•</span> Postres hechos con cariño.</p>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </main>
  );
}
