# Brief para Claude Code: actualizar portfolio

Repo: el de https://emanueloski-svg.github.io/portfolio/ (GitHub Pages, sitio estático en español).

## Objetivo
Actualizar contenido y estructura de la web para reflejar mi dirección actual: diseño gráfico, web y marketing digital. Los textos definitivos están en `copy-portfolio-v1.md` (proyecto "Portfolio web" de claude.ai; copiarlo a la raíz del repo o pegarlo en el chat).

## Instrucciones
1. Leé primero el código actual (HTML/CSS/JS, carpetas de proyectos, metadatos OpenGraph/Twitter) y resumime la estructura antes de tocar nada.
2. Mantené la estética, tipografías, colores y componentes existentes. No rediseñes el estilo visual.
3. Nueva estructura de la home: Inicio (hero) · Sobre mí · Servicios · Proyectos · Experiencia y herramientas · Contacto.
4. Proyectos: usá la sección 4 de `copy-portfolio-v1.md`, en este orden: Feria del Libro, Altana, ENERXIAUY, Lo Tengo, Mozzafiato, Congreso Uruguayo de Cirugía Plástica, Auron. Los NFT (Customer service of your dreams, Operators Dream To, Yesterday I Had That Dream About the Snow) van en una subsección "Arte 3D y NFT". Conservá los enlaces a las páginas de cada caso ya existentes.
5. Cada caso usa la plantilla Cliente · Rol · Qué hice · Resultado. Auron debe mostrarse como "proyecto conceptual" (marca ficticia), no como cliente real.
6. No incluir Adminova ni "My last 3D works".
7. Reemplazá title, meta description y etiquetas OpenGraph/Twitter con los textos de `copy-portfolio-v1.md`.
8. Usá los textos tal cual; los que estén entre [corchetes] son datos pendientes: dejalos como comentario HTML `<!-- TODO -->`.
9. Mantené el sitio responsive, accesible (alt en imágenes, jerarquía de headings) y sin dependencias nuevas salvo que sean necesarias.
10. Trabajá en una rama `update-contenido`, hacé commits chicos y no hagas push a main sin que yo lo revise. Mostrame el diff al final.

## Material gráfico (carpeta local `Desktop\cosas`, a copiar al repo por mí)
No se puede copiar solo: yo agrego las imágenes al repo después. Dejá en cada caso un espacio con la imagen principal y una galería lista para completar, con `alt` descriptivo y un comentario `<!-- TODO imagen -->`.

| Caso | Carpeta | Archivos útiles |
|---|---|---|
| Altana | `Logo Altana Uy` | `Versiones con fondo transparente/*.png`, `Manual de identidad corporativa ALTANA.pdf`, `Fotos de perfil 400x400/*.jpg` |
| Lo Tengo | `Lo Tengo` | `Versiones con fondo transparente/1080x1080/*.png`, `Manual de identidad corporativa Lo Tengo/Manual de marca Lo Tengo.pdf`, `Logos vectorizados/SVG/*.svg` |
| Mozzafiato | `Mozzafiato` | `Logo vectorizado svg.svg`, `Mozzafiato foto de perfil.jpg` |
| Congreso | `Congreso Uruguayo de Cirugía Plástica` | `cliente/Versiones con fondo transparente/*.png`, `cliente/Logos vectorizados/SVG/*.svg`, `Manual de identidad corporativa.pdf` |
| Auron | `ia` | `pf del behance.jpg` (portada), `publicidad con ia auron.mov`, `davinci_a_minimal_futuristic_product_advertisement_of_wire.png` |
| ENERXIAUY | no está en esta carpeta | el autor lo aporta |

Para la web, convertir a .webp o .jpg optimizados; el video de Auron, si se incluye, en .mp4 liviano.

## Pendientes que me faltan aportar
- Imágenes finales de cada caso.
- Herramientas exactas de Altana, Lo Tengo, Mozzafiato y ENERXIAUY.
- Proyectos de la Cámara Uruguaya del Libro / Antera para sumar.
- Herramientas web que uso.
- Si querés versión en inglés.
