import { useState, useEffect, useRef } from 'react';

export default function Header({ cartCount: initialCartCount = 0 }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartCount] = useState(() => {
    try {
      const cart = JSON.parse(localStorage.getItem('pixelStoreCart')) || [];
      return cart.reduce((acc, item) => acc + (item.qty || 1), 0);
    } catch {
      return initialCartCount;
    }
  });
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Cerrar dropdown si se hace clic afuera
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const q = searchTerm.trim().toLowerCase();
      window.location.href = `explorar.html${q ? `?q=${encodeURIComponent(q)}` : ''}`;
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="index.html">
          <span className="brand-icon">
            <i className="fa-solid fa-gamepad"></i>
          </span>
          <span>PIXEL STORE</span>
        </a>

        <nav className="main-nav">
          <a href="index.html" className="active">
            Inicio
          </a>
          <a href="explorar.html">Explorar</a>
          <a href="ofertas.html">Ofertas</a>

          <div
            ref={dropdownRef}
            className={`category-dropdown ${dropdownOpen ? 'open' : ''}`}
          >
            <button
              className="category-trigger"
              type="button"
              onClick={toggleDropdown}
            >
              Plataformas <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className="category-menu">
              <a href="play.html">
                <i className="fa-brands fa-playstation"></i>
                <span>PlayStation</span>
              </a>
              <a href="xbox.html">
                <i className="fa-brands fa-xbox"></i>
                <span>Xbox</span>
              </a>
              <a href="Nintendo.html">
                <i className="fa-solid fa-gamepad"></i>
                <span>Nintendo</span>
              </a>
            </div>
          </div>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              data-search
              type="search"
              placeholder="Buscar juegos..."
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchSubmit}
            />
          </div>

          <a
            className="header-icon cart-link"
            href="carrito.html"
            title="Carrito"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count" data-cart-count>
              {cartCount}
            </span>
          </a>

          <a className="login-btn" href="iniciar.html">
            Iniciar sesión
          </a>
        </div>
      </div>
    </header>
  );
}
