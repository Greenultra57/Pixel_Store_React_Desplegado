# Pixel-Store-React

Tienda virtual de videojuegos desarrollada con React y Vite, basada en el diseño y prototipo de referencia de **Pixel Store**.

---

## Documentación de la arquitectura del proyecto

### 1. ¿De qué está conformado el proyecto?

El proyecto es una aplicación web interactiva desarrollada con **React 19** y empaquetada mediante **Vite**. Se estructura de forma modular dividiendo la interfaz de referencia (`index.html`) en componentes reutilizables:

* **Componentes Principales (`src/components/` y `src/`):**
  * **`Header.jsx`**: Encabezado global de la tienda. Incluye:
    * Logotipo e identidad de marca con íconos de Font Awesome.
    * Menú de navegación principal (Inicio, Explorar, Ofertas).
    * Menú desplegable interactivo de Categorías (PlayStation, Xbox, Nintendo) con control de estado y cierre al hacer clic fuera.
    * Barra de búsqueda interactiva.
    * Indicador con contador dinámico de artículos en el carrito de compras.
    * Botón de acceso / inicio de sesión.
  * **`HeroSection.jsx`**: Sección principal (`<main>`) del sitio web, conformada por:
    * *Hero Banner*: Presentación principal con título de bienvenida, descripción, botones de llamada a la acción (*Explorar catálogo* y *Ver ofertas*) e imagen promocional.
    * *Juegos Populares (`PopularGames`)*: Cuadrícula con las tarjetas de los títulos más destacados (Mario Kart 8 Deluxe, Mortal Kombat 1, Resident Evil 4, Marvel's Spider-Man 2, Halo Infinite, EA Sports FC 25), con badges de descuento, plataforma, precio y enlaces.
    * *Plataformas (`PlatformsSection`)*: Tarjetas de acceso directo por plataforma (PlayStation, Xbox, Nintendo).
    * *Banner Promocional (`PromoSection`)*: Sección de ofertas especiales con hasta 70% de descuento.
  * **`Footer.jsx`**: Pie de página informativo que contiene la identidad del proyecto, enlaces a secciones clave (Explorar, Plataformas, Cuenta) y derechos de autor del proyecto escolar.

* **Estilos y Assets:**
  * **`src/pixel-store.css` & `src/index.css`**: Estilos CSS personalizados con variables de colores en modo oscuro, acentos rojos (`--red`), efectos de resplandor ambiental (`ambient-one`, `ambient-two`), grid responsivo y tipografía *Poppins*.
  * **`public/`**: Contiene todas las imágenes de referencia utilizadas por la tienda (`banner.jpg`, `mariokart.jpg`, `controller.jpg`, portadas de juegos, etc.).
  * **`index.html`**: Punto de entrada de la aplicación Vite, enlazando la fuente de Google Fonts (*Poppins*) y los iconos vectoriales de *Font Awesome 6*.

---

### 2. Carpeta en la cual se puede iniciar `npm run dev`

El entorno de ejecución de Vite y las dependencias del proyecto se encuentran en la carpeta:

📁 **`Pixel-Store-React`**

#### Pasos para iniciar el servidor de desarrollo:

1. Abrir la terminal en la raíz del repositorio y navegar a la carpeta del proyecto:
   ```bash
   cd Pixel-Store-React
   ```
2. Instalar dependencias (si aún no se han instalado):
   ```bash
   npm install
   ```
3. Iniciar el servidor local de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir en el navegador la URL proporcionada por Vite (habitualmente `http://localhost:5173/`).

---

## Enlaces

* **Link vercel proyecto:** [Pendiente / Por agregar]
* **Link de github del react y html:** https://github.com/Greenultra57/final_pixel_store_Greenultra57.git