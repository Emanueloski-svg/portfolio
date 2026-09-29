# Emanuel Olivera — Portfolio

Sitio de portfolio personal de Emanuel Olivera, diseñador gráfico y artista 3D. Implementado en HTML, CSS y JavaScript vanilla a partir de un diseño de Figma.

## Estructura

- `index.html` — home con las secciones Inicio (hero), Sobre mí, Servicios, Proyectos (con la subsección "Arte 3D y NFT"), Experiencia y herramientas, y Contacto
- `proyectos/` — una página por caso: Qué hice / Resultado, ficha (Cliente · Rol · Año · Herramientas · Behance), imagen principal, galería y navegación anterior/siguiente
- `claude-code-brief.md` — instrucciones de la actualización de contenido
- `copy-portfolio-v1.md` — textos fuente del sitio. Los datos pendientes están marcados en el HTML con comentarios `<!-- TODO: … -->`
- `styles.css` — estilos y diseño responsive (home y subpáginas). Tipografías de Google Fonts: Syne (títulos) y Manrope (texto)
- `script.js` — menú móvil, envío del formulario y animación del retrato
- `analytics.js` — Google Analytics 4
- `assets/` — imágenes, logo, íconos e imágenes para compartir (`assets/og/`)

## Uso local

No requiere build ni dependencias. Basta con servir la carpeta con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```

o simplemente abrir `index.html` en el navegador.

## Agregar imágenes a los proyectos

Cada caso tiene espacios provisorios ("Imagen pendiente") en la home y en su página. Junto a cada uno hay un comentario `<!-- TODO imagen: … -->` con la ruta esperada y la etiqueta `<img>` (o `<video>`) lista, con su `alt`.

Para completar un espacio:

1. Guardá el archivo optimizado (`.webp` o `.jpg`; el video en `.mp4` liviano) en la ruta que indica el comentario.
2. Reemplazá el `<div class="media-placeholder" …>` por la etiqueta del comentario y borrá el comentario.
3. Si la imagen principal cambia, regenerá su imagen para compartir en `assets/og/`.

Archivos esperados:

| Caso | Carpeta | Archivos |
|---|---|---|
| 44ª Feria Internacional del Libro de Montevideo | `assets/proyectos/feria-del-libro/` | `galeria-01.webp`, `galeria-02.webp`, `galeria-03.webp`, `galeria-04.webp`, `galeria-05.webp` |
| Altana | `assets/proyectos/altana/` | `galeria-01.webp`, `galeria-02.webp`, `galeria-03.webp` |
| ENERXIAUY | `assets/proyectos/enerxiauy/` | `galeria-01.webp`, `galeria-02.webp` |
| Lo Tengo | `assets/proyectos/lo-tengo/` | `portada.webp` (principal), `galeria-01.webp`, `galeria-02.webp`, `galeria-03.webp` |
| Mozzafiato | `assets/proyectos/mozzafiato/` | `portada.webp` (principal), `galeria-01.webp` |
| Congreso Uruguayo de Cirugía Plástica | `assets/proyectos/congreso-cirugia-plastica/` | `portada.webp` (principal), `galeria-01.webp`, `galeria-02.webp`, `galeria-03.webp` |
| Auron | `assets/proyectos/auron/` | `portada.webp` (principal), `spot.mp4`, `galeria-01.webp` |
| Customer service of your dreams | `assets/proyectos/customer-service-of-your-dreams/` | `video.mp4` (principal), `portada.webp` (tarjeta de la home) |

Feria del Libro, Altana, ENERXIAUY, Operators Dream To y Yesterday I Had That Dream About the Snow ya usan como imagen principal las que están en `assets/proj-*`.

## Vista previa al compartir e íconos

- `assets/og/` tiene una imagen de 1200×630 por página, que es la que muestran WhatsApp, LinkedIn, Facebook, etc. al compartir un link (etiquetas `og:` en el `<head>`).
- `assets/favicon.svg`, `favicon-32.png` y `apple-touch-icon.png` son el ícono de la pestaña y del acceso directo en celulares.
- Si cambiás el texto de un proyecto, actualizá también su `description` y `og:description`.

## Métricas de visitas

Las visitas se miden con Google Analytics 4 desde `analytics.js`. Para cambiar la propiedad, editá `GA_MEASUREMENT_ID` en ese archivo. El script no se carga si el ID es el de ejemplo ni al abrir el sitio en local. Cuando alguien envía el formulario de contacto se registra el evento `generate_lead`.

## Notas

El formulario de contacto envía los mensajes a oliveraemanuel96@gmail.com a través de [FormSubmit](https://formsubmit.co) (gratis, sin cuenta). En el `action` del formulario se usa el código alias que dio FormSubmit en vez del mail, para no exponer la dirección a bots.

Al actualizar `styles.css` o `script.js`, subí el número de versión (`?v=2`, `?v=3`…) en los `<link>` y `<script>` de las páginas para que los navegadores no usen la versión en caché.
