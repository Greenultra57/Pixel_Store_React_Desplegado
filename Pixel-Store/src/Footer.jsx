export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-icon">
              <i className="fa-solid fa-gamepad"></i>
            </span>
            <span>PIXEL STORE</span>
          </div>
          <p>Tu espacio para descubrir, comprar y disfrutar videojuegos.</p>
        </div>

        <div className="footer-column">
          <h4>Explorar</h4>
          <a href="index.html">Inicio</a>
          <a href="explorar.html">Explorar</a>
          <a href="ofertas.html">Ofertas</a>
        </div>

        <div className="footer-column">
          <h4>Plataformas</h4>
          <a href="play.html">PlayStation</a>
          <a href="xbox.html">Xbox</a>
          <a href="Nintendo.html">Nintendo</a>
        </div>

        <div className="footer-column">
          <h4>Cuenta</h4>
          <a href="iniciar.html">Mi perfil</a>
          <a href="carrito.html">Carrito</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Pixel Store</span>
        <span>Hecho para nuestro proyecto escolar</span>
      </div>
    </footer>
  );
}
