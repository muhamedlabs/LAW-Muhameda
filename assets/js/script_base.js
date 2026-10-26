(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobileMQ = matchMedia('(max-width:1180px)');
  let setNav = () => {}, setDd = () => {};

  {
    const burger = $('.burger'), nav = $('.nav'), dd = $('.dd'), btn = $('.dd-btn');
    setNav = o => {
      if (!nav || !burger) return;
      nav.classList.toggle('open', o);
      burger.classList.toggle('open', o);
      burger.setAttribute('aria-expanded', o);
    };
    if (burger) burger.addEventListener('click', () => setNav(!nav.classList.contains('open')));
    $$('.nav a').forEach(a => a.addEventListener('click', () => setNav(false)));

    const dds = $$('.dd');
    setDd = (d, o) => {
      d.classList.toggle('open', o);
      $('.dd-btn', d).setAttribute('aria-expanded', o);
    };
    dds.forEach(d => {
      let tm;
      $('.dd-btn', d).addEventListener('click', e => {
        e.stopPropagation();
        const o = !d.classList.contains('open');
        dds.forEach(x => setDd(x, x === d && o));
      });
      d.addEventListener('pointerenter', e => {
        if (e.pointerType === 'mouse' && !mobileMQ.matches) { clearTimeout(tm); dds.forEach(x => setDd(x, x === d)); }
      });
      d.addEventListener('pointerleave', e => {
        if (e.pointerType === 'mouse' && !mobileMQ.matches) tm = setTimeout(() => setDd(d, false), 260);
      });
      d.addEventListener('focusout', e => { if (!d.contains(e.relatedTarget)) setDd(d, false); });
      $$('[data-lang]', d).forEach(b => b.addEventListener('click', () => { setDd(d, false); setNav(false); }));
    });
    document.addEventListener('click', e => dds.forEach(d => { if (!d.contains(e.target)) setDd(d, false); }));
    addEventListener('keydown', e => { if (e.key === 'Escape') { dds.forEach(d => setDd(d, false)); setNav(false); } });
  }

  {
    const root = document.documentElement;
    addEventListener('pointermove', e => {
      root.style.setProperty('--mx', e.clientX + 'px');
      root.style.setProperty('--my', e.clientY + 'px');
    }, { passive: true });
  }

  {
    const cv = $('#bg');
    if (cv) {
      const ctx = cv.getContext('2d');
      const root = document.documentElement;
      let W = 0, H = 0, lw = 0, lh = 0, mx = -999, my = -999, sx = .5, sy = .5, tx = .5, ty = .5, items = [];
      const R = (a, b) => a + Math.random() * (b - a);
      const C = a => `rgba(253,24,67,${a})`;
      const TAU = Math.PI * 2;
      function resize() {
        if (W && innerWidth === lw && Math.abs(innerHeight - lh) < 150) return;
        lw = innerWidth; lh = innerHeight;
        const d = Math.min(devicePixelRatio || 1, 2);
        W = innerWidth; H = innerHeight;
        cv.width = W * d; cv.height = H * d;
        ctx.setTransform(d, 0, 0, d, 0, 0);
        const n = Math.max(22, Math.min(85, W * H / 21000)) | 0;
        items = Array.from({ length: n }, () => ({ x: R(0, W), y: R(0, H), vx: R(-.25, .25), vy: R(-.25, .25), r: R(1.6, 3.2) }));
        if (reduce) draw();
      }
      function draw() {
        ctx.clearRect(0, 0, W, H);
        ctx.lineWidth = 1;
        if (!reduce) for (const p of items) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        }
        for (let i = 0; i < items.length; i++) {
          const a = items[i];
          for (let k = i + 1; k < items.length; k++) {
            const b = items[k], d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < 150) { ctx.strokeStyle = C((1 - d / 150) * .28); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
          }
          const dm = Math.hypot(a.x - mx, a.y - my);
          if (dm < 190) { ctx.strokeStyle = C((1 - dm / 190) * .55); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx, my); ctx.stroke(); }
          ctx.fillStyle = C(.5);
          ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, TAU); ctx.fill();
        }
        sx += (tx - sx) * .06; sy += (ty - sy) * .06;
        root.style.setProperty('--px', ((sx - .5) * 30).toFixed(1) + 'px');
        root.style.setProperty('--py', ((sy - .5) * 20).toFixed(1) + 'px');
      }
      function frame() { draw(); requestAnimationFrame(frame); }
      addEventListener('resize', resize);
      addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; tx = mx / innerWidth; ty = my / innerHeight; }, { passive: true });
      resize();
      if (!reduce) frame();
    }
  }
})();
