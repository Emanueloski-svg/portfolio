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

## Métricas de visitas

Las visitas se miden con Google Analytics 4 desde `analytics.js`. Para cambiar la propiedad, editá `GA_MEASUREMENT_ID` en ese archivo. El script no se carga si el ID es el de ejemplo ni al abrir el sitio en local. Cuando alguien envía el formulario de contacto se registra el evento `generate_lead`.

## Notas

El formulario de contacto envía los mensajes a oliveraemanuel96@gmail.com a través de [FormSubmit](https://formsubmit.co) (gratis, sin cuenta). En el `action` del formulario se usa el código alias que dio FormSubmit en vez del mail, para no exponer la dirección a bots.

Al actualizar `styles.css` o `script.js`, subí el número de versión (`?v=2`, `?v=3`…) en los `<link>` y `<script>` de las páginas para que los navegadores no usen la versión en caché.
