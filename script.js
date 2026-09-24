const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.getElementById('contact-form');

// Envía el formulario por FormSubmit, que reenvía el mensaje por mail
if (form) {
  const button = form.querySelector('.btn-submit');
  const status = form.querySelector('.form-status');
  const endpoint = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');

  const showStatus = (message, type) => {
    status.textContent = message;
    status.dataset.type = type;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Enviando…';
    showStatus('', '');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) !== 'true') {
        throw new Error(result.message || 'Error al enviar');
      }
      form.reset();
      showStatus('¡Gracias! Tu mensaje fue enviado, te responderé pronto.', 'success');
    } catch (error) {
      showStatus('No se pudo enviar el mensaje. Escríbeme directamente a oliveraemanuel96@gmail.com.', 'error');
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const portrait = document.querySelector('.about-photo img');

// El retrato 3D se inclina levemente hacia donde está el mouse
if (portrait && finePointer && !reduceMotion) {
  const MAX_SHIFT = 14; // px
  const MAX_TILT = 8; // grados
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  let frame = null;

  const render = () => {
    current.x += (target.x - current.x) * 0.08;
    current.y += (target.y - current.y) * 0.08;
    portrait.style.transform =
      `translate3d(${current.x * MAX_SHIFT}px, ${current.y * MAX_SHIFT}px, 0) ` +
      `rotateY(${current.x * MAX_TILT}deg) rotateX(${-current.y * MAX_TILT}deg)`;

    const settled = Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001;
    frame = settled ? null : requestAnimationFrame(render);
  };

  const animate = () => {
    if (!frame) frame = requestAnimationFrame(render);
  };

  const clamp = (value) => Math.max(-1, Math.min(1, value));

  window.addEventListener('mousemove', (event) => {
    const rect = portrait.getBoundingClientRect();
    target.x = clamp((event.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2));
    target.y = clamp((event.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2));
    animate();
  });

  document.documentElement.addEventListener('mouseleave', () => {
    target.x = 0;
    target.y = 0;
    animate();
  });
}
