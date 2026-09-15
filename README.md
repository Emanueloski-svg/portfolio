# Emanuel Olivera — Portfolio

Sitio de portfolio personal de Emanuel Olivera, diseñador gráfico y artista 3D. Implementado en HTML, CSS y JavaScript vanilla a partir de un diseño de Figma.

## Estructura

- `index.html` — marcado de las secciones Sobre mí, Proyectos y Contacto
- `styles.css` — estilos y diseño responsive
- `script.js` — menú móvil y feedback del formulario de contacto
- `assets/` — imágenes y assets exportados desde Figma

## Uso local

No requiere build ni dependencias. Basta con servir la carpeta con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```

o simplemente abrir `index.html` en el navegador.

## Notas

El formulario de contacto es solo de interfaz (no envía datos a ningún backend todavía). Para que funcione de verdad, conectalo a un servicio como Formspree, un endpoint propio, o similar.
