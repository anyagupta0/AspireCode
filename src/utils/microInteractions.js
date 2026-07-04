// Micro interactions: ripples, magnetic, card depth, glass reflection, hero tilt, cursor spotlight
// Uses a single RAF loop and lerp interpolation for smooth motion.

function lerp(a, b, t) { return a + (b - a) * t; }

export function initButtonRipples() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('pointerdown', e => {
      const rect = btn.getBoundingClientRect();
      let ripple = btn.querySelector('.ripple');
      if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        btn.appendChild(ripple);
      }
      const size = Math.max(rect.width, rect.height) * 0.6;
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      ripple.classList.remove('animate');
      // force reflow
      void ripple.offsetWidth;
      ripple.classList.add('animate');
      setTimeout(() => { ripple.classList.remove('animate'); }, 700);
    });
  });
}

export function initCursorInteractions() {
  const state = {
    pointer: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    pointerSmoothed: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    magnets: [],
    depthCards: [],
    heroes: [],
    spotlight: null,
    running: false,
  };

  // Create spotlight element
  const spotlight = document.createElement('div');
  spotlight.className = 'cursor-spotlight';
  document.body.appendChild(spotlight);
  state.spotlight = spotlight;

  // Track pointer
  window.addEventListener('pointermove', e => {
    state.pointer.x = e.clientX;
    state.pointer.y = e.clientY;
  }, { passive: true });

  // Register magnetic buttons
  document.querySelectorAll('.btn.magnetic').forEach(el => {
    state.magnets.push({ el, rect: null, active: false, tx: 0, ty: 0, vx: 0, vy: 0 });
    el.addEventListener('pointerenter', () => { 
      const m = state.magnets.find(m => m.el === el); if (m) m.active = true; 
    });
    el.addEventListener('pointerleave', () => { const m = state.magnets.find(m => m.el === el); if (m) m.active = false; });
  });

  // Register depth-react cards (glass-card)
  document.querySelectorAll('.glass-card').forEach(el => {
    state.depthCards.push({ el, rect: null, rx: 0, ry: 0, rz: 0, vx: 0, vy: 0 });
    el.addEventListener('pointerenter', () => el.classList.add('depth-hover'));
    el.addEventListener('pointerleave', () => el.classList.remove('depth-hover'));
  });

  // Register hero areas
  document.querySelectorAll('.hero').forEach(hero => {
    const content = hero.querySelector('.hero-content');
    if (content) state.heroes.push({ hero, content, rect: null, rx: 0, ry: 0, vx: 0, vy: 0 });
  });

  // Resize observer to refresh rects
  function refreshRects() {
    state.magnets.forEach(m => { m.rect = m.el.getBoundingClientRect(); });
    state.depthCards.forEach(c => { c.rect = c.el.getBoundingClientRect(); });
    state.heroes.forEach(h => { h.rect = h.hero.getBoundingClientRect(); h.contentRect = h.content.getBoundingClientRect(); });
  }
  window.addEventListener('resize', refreshRects);
  refreshRects();

  // RAF loop
  const ease = 0.16;
  function loop() {
    // smooth pointer
    state.pointerSmoothed.x = lerp(state.pointerSmoothed.x, state.pointer.x, 0.18);
    state.pointerSmoothed.y = lerp(state.pointerSmoothed.y, state.pointer.y, 0.18);

    // spotlight follows pointer with slight lag
    const sx = state.pointerSmoothed.x;
    const sy = state.pointerSmoothed.y;
    state.spotlight.style.transform = `translate3d(${sx}px, ${sy}px, 0)`;

    // magnets
    state.magnets.forEach(m => {
      if (!m.rect) return;
      const cx = m.rect.left + m.rect.width / 2;
      const cy = m.rect.top + m.rect.height / 2;
      const dx = (state.pointerSmoothed.x - cx) / m.rect.width;
      const dy = (state.pointerSmoothed.y - cy) / m.rect.height;
      const strength = m.active ? 20 : 6;
      const targetX = dx * strength;
      const targetY = dy * strength;
      m.tx = lerp(m.tx, targetX, ease);
      m.ty = lerp(m.ty, targetY, ease);
      m.el.style.transform = `translate3d(${m.tx}px, ${m.ty}px, 0) scale(${m.active ? 1.03 : 1})`;
    });

    // depth cards
    state.depthCards.forEach(c => {
      if (!c.rect) return;
      const cx = c.rect.left + c.rect.width / 2;
      const cy = c.rect.top + c.rect.height / 2;
      const px = (state.pointerSmoothed.x - cx) / c.rect.width; // -0.5 .. 0.5
      const py = (state.pointerSmoothed.y - cy) / c.rect.height;
      const maxRot = 6; // degrees
      const targetRx = -py * maxRot;
      const targetRy = px * maxRot;
      c.rx = lerp(c.rx, targetRx, ease);
      c.ry = lerp(c.ry, targetRy, ease);
      // reflection position in percent
      const refX = Math.max(5, Math.min(95, ((state.pointerSmoothed.x - c.rect.left) / c.rect.width) * 100));
      const refY = Math.max(5, Math.min(95, ((state.pointerSmoothed.y - c.rect.top) / c.rect.height) * 100));
      c.el.style.transform = `perspective(1200px) rotateX(${c.rx}deg) rotateY(${c.ry}deg) translateZ(0)`;
      c.el.style.setProperty('--ref-x', `${refX}%`);
      c.el.style.setProperty('--ref-y', `${refY}%`);
    });

    // hero tilt
    state.heroes.forEach(h => {
      if (!h.rect) return;
      const cx = h.rect.left + h.rect.width / 2;
      const cy = h.rect.top + h.rect.height / 2;
      const px = (state.pointerSmoothed.x - cx) / h.rect.width;
      const py = (state.pointerSmoothed.y - cy) / h.rect.height;
      const max = 4; // degrees
      h.rx = lerp(h.rx || 0, -py * max, ease);
      h.ry = lerp(h.ry || 0, px * max, ease);
      h.content.style.transform = `translateZ(8px) rotateX(${h.rx}deg) rotateY(${h.ry}deg)`;
    });

    state.running = true;
    requestAnimationFrame(loop);
  }

  // Start loop
  if (!state.running) requestAnimationFrame(loop);
}

export function initButtonMagnetic() {
  // keep for compatibility (magnetic class handled by cursor interactions)
  // but ensure pointer events are enabled
  document.querySelectorAll('.btn.magnetic').forEach(btn => {
    btn.style.willChange = 'transform';
  });
}
