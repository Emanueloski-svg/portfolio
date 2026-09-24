# Emanuel Olivera — Portfolio

Sitio de portfolio personal de Emanuel Olivera, diseñador gráfico y artista 3D. Implementado en HTML, CSS y JavaScript vanilla a partir de un diseño de Figma.

## Estructura

- `index.html` — marcado de las secciones Sobre mí, Proyectos y Contacto
- `proyectos/` — una subpágina por proyecto (descripción, ficha, imagen y navegación anterior/siguiente)
- `styles.css` — estilos y diseño responsive (home y subpáginas). Tipografías de Google Fonts: Syne (títulos) y Manrope (texto)
- `script.js` — menú móvil y feedback del formulario de contacto
- `assets/` — imágenes y assets exportados desde Figma

## Uso local

No requiere build ni dependencias. Basta con servir la carpeta con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```

o simplemente abrir `index.html` en el navegador.

## Agregar imágenes a un proyecto

Guardá la imagen en `assets/` y agregá otro `<figure>` dentro de `.project-gallery` en la subpágina correspondiente:

```html
<figure>
  <img src="../assets/mi-imagen.jpg" alt="Descripción" loading="lazy" />
  <figcaption>Texto opcional</figcaption>
</figure>
```

Usá `<figure class="is-narrow">` para piezas verticales o cuadradas, así no ocupan todo el ancho.

## Notas

El formulario de contacto es solo de interfaz (no envía datos a ningún backend todavía). Para que funcione de verdad, conectalo a un servicio como Formspree, un endpoint propio, o similar.
