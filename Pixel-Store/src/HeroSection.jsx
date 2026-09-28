export function HeroBanner() {
  return (
    <section className="hero home-hero">
      <div className="hero-copy">
        <span className="eyebrow">★ NUEVO LANZAMIENTO</span>
        <h1>
          Descubre una nueva forma de <span>jugar.</span>
        </h1>
        <p>
          Compra y descubre videojuegos para PlayStation, Xbox y Nintendo desde
          una sola plataforma.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="explorar.html">
            Explorar catálogo
          </a>
          <a className="btn btn-secondary" href="ofertas.html">
            Ver ofertas
          </a>
        </div>
      </div>
      <div className="hero-art">
        <img src="/banner.jpg" alt="Videojuegos" />
      </div>
    </section>
  );
}

const popularGamesData = [
  {
    id: 'mario-kart-8-deluxe',
    gameKey: 'mario kart 8 deluxe',
    platform: 'Nintendo Switch',
    platformKey: 'nintendo switch',
    title: 'Mario Kart 8 Deluxe',
    genre: 'Carreras',
    price: '$289.900',
    discount: '-30%',
    image: '/mariokart.jpg',
    link: 'portadamario.html',
  },
  {
    id: 'mortal-kombat-1',
    gameKey: 'mortal kombat 1',
    platform: 'PS5',
    platformKey: 'ps5',
    title: 'Mortal Kombat 1',
    genre: 'Lucha y acción',
    price: '$259.900',
    discount: '-15%',
    image: '/mk1.jpg',
    link: 'portadamortalkombat.html',
  },
  {
    id: 'resident-evil-4',
    gameKey: 'resident evil 4',
    platform: 'PS5',
    platformKey: 'ps5',
    title: 'Resident Evil 4',
    genre: 'Terror y acción',
    price: '$239.900',
    discount: null,
    image: '/resident4.jpg',
    link: 'portadaresident.html',
  },
  {
    id: 'spiderman-2',
    gameKey: "marvel's spider-man 2",
    platform: 'PS5',
    platformKey: 'ps5',
    title: "Marvel's Spider-Man 2",
    genre: 'Acción y aventura',
    price: '$279.900',
    discount: '-20%',
    image: '/spiderman2.jpg',
    link: 'portadaspiderman.html',
  },
  {
    id: 'halo-infinite',
    gameKey: 'halo infinite',
    platform: 'Xbox Series X|S',
    platformKey: 'xbox series x|s',
    title: 'Halo Infinite',
    genre: 'Acción y shooter',
    price: '$199.900',
    discount: '-45%',
    image: '/halo.jpg',
    link: 'portadahalo.html',
  },
  {
    id: 'fc-25',
    gameKey: 'ea sports fc 25',
    platform: 'PS5',
    platformKey: 'ps5',
    title: 'EA Sports FC 25',
    genre: 'Deportes',
    price: '$249.900',
    discount: null,
    image: '/fc25.jpg',
    link: 'portadadefc25.html',
  },
];

export function PopularGames({ games = popularGamesData }) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">CATÁLOGO</span>
          <h2>Juegos populares</h2>
        </div>
        <a className="text-link" href="explorar.html">
          Ver todo <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <article
            key={game.id}
            className="game-card"
            data-game={game.gameKey}
            data-platform={game.platformKey}
          >
            <a className="game-image" href={game.link}>
              <img src={game.image} alt={game.title} />
              {game.discount && (
                <span className="discount-badge">{game.discount}</span>
              )}
            </a>
            <div className="game-info">
              <span className="game-platform">{game.platform}</span>
              <h3>{game.title}</h3>
              <p>{game.genre}</p>
              <div className="game-bottom">
                <strong>{game.price}</strong>
                <a className="small-link" href={game.link}>
                  Ver juego
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const platformsData = [
  {
    id: 'ps',
    name: 'PlayStation',
    icon: 'fa-brands fa-playstation',
    description: 'Descubre aventuras para PS4 y PS5.',
    link: 'play.html',
  },
  {
    id: 'xbox',
    name: 'Xbox',
    icon: 'fa-brands fa-xbox',
    description: 'Acción, carreras y grandes historias.',
    link: 'xbox.html',
  },
  {
    id: 'nintendo',
    name: 'Nintendo',
    icon: 'fa-solid fa-gamepad',
    description: 'La magia de Nintendo en un solo lugar.',
    link: 'Nintendo.html',
  },
];

export function PlatformsSection({ platforms = platformsData }) {
  return (
    <section className="section platforms-section">
      <div className="section-heading centered">
        <div>
          <span className="eyebrow">ELIGE TU PLATAFORMA</span>
          <h2>Juega como quieras</h2>
        </div>
      </div>
      <div className="platform-grid">
        {platforms.map((plat) => (
          <a key={plat.id} className="platform-tile" href={plat.link}>
            <span>
              <i className={plat.icon}></i>
            </span>
            <h3>{plat.name}</h3>
            <p>{plat.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function PromoSection() {
  return (
    <section className="promo">
      <div>
        <span className="eyebrow">OFERTA ESPECIAL</span>
        <h2>Hasta 70% de descuento</h2>
        <p>
          Encuentra grandes juegos a precios especiales por tiempo limitado.
        </p>
        <a className="btn btn-primary" href="ofertas.html">
          Ver ofertas
        </a>
      </div>
      <img src="/controller.jpg" alt="Control de videojuegos" />
    </section>
  );
}

export default function HeroSection({ onlyHero = false }) {
  if (onlyHero) {
    return <HeroBanner />;
  }

  return (
    <main>
      <HeroBanner />
      <PopularGames />
      <PlatformsSection />
      <PromoSection />
    </main>
  );
}
