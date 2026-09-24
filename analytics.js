// Google Analytics 4
// ID de medición: en Google Analytics → Administrar → Flujos de datos → Web
const GA_MEASUREMENT_ID = 'G-L6X8JC4CZ9';

(() => {
  const isConfigured = /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID) && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX';
  const isLocal = ['localhost', '127.0.0.1', ''].includes(window.location.hostname);
  if (!isConfigured || isLocal) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
})();
