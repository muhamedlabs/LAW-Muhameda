(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const D = window.PRIVACY_I18N;
  const DEFAULT = 'ru';
  const KEY = 'lang';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = matchMedia('(hover: none)').matches;
  const root = document.documentElement;
  root.classList.add('js');

  const store = {
    get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  };
  function detectLang() {
    const saved = store.get();
    if (saved && D[saved]) return saved;
    const nav = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
    const code = nav.split('-')[0];
    return D[code] ? code : DEFAULT;
  }

  const pad = n => String(n + 1).padStart(2, '0');
  const LI = { prohibited: ['fa-solid fa-xmark'], notcollect: ['fa-solid fa-xmark'], collect: ['fa-solid fa-id-badge', 'fa-solid fa-keyboard', 'fa-solid fa-microchip', 'fa-solid fa-credit-card'], purposes: ['fa-solid fa-gears', 'fa-solid fa-shield-halved', 'fa-solid fa-life-ring', 'fa-solid fa-chart-line', 'fa-solid fa-credit-card', 'fa-solid fa-gavel'], basis: ['fa-solid fa-circle-check', 'fa-solid fa-file-signature', 'fa-solid fa-scale-balanced', 'fa-solid fa-gavel'], sharing: ['fa-solid fa-share-nodes', 'fa-solid fa-server', 'fa-solid fa-credit-card', 'fa-solid fa-building-columns'], storage: ['fa-solid fa-clock', 'fa-solid fa-file-lines', 'fa-solid fa-receipt', 'fa-solid fa-comments'], rights: ['fa-solid fa-eye', 'fa-solid fa-pen', 'fa-solid fa-trash', 'fa-solid fa-hand', 'fa-solid fa-file-export', 'fa-solid fa-flag'], ads: ['fa-solid fa-lock', 'fa-solid fa-bullhorn'], paid: ['fa-solid fa-check', 'fa-solid fa-rotate-left', 'fa-solid fa-receipt', 'fa-solid fa-bullhorn'], contacts: ['fa-brands fa-telegram', 'fa-solid fa-envelope', 'fa-brands fa-discord'] };
  const liIcon = (id, k) => { const a = LI[id]; return a ? a[k % a.length] : 'fa-solid fa-circle-check'; };
  function block(b, id) {
    if (b.p) return `<p>${b.p}</p>`;
    if (b.ul) return `<ul>${b.ul.map((li, k) => `<li><i class="li-i ${liIcon(id, k)}" aria-hidden="true"></i>${li}</li>`).join('')}</ul>`;
    if (b.note) return `<div class="note"><i class="fa-solid fa-circle-info" aria-hidden="true"></i><div>${b.note}</div></div>`;
    if (b.warn) return `<div class="warn"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i><div>${b.warn}</div></div>`;
    return '';
  }
  const renderToc = d => d.sections.map((s, i) => `<a href="#${s.id}"><span>${pad(i)}</span>${s.t}</a>`).join('');
  const ICO = { general:'file-lines', collect:'database', notcollect:'ban', purposes:'bullseye', basis:'scale-balanced', cookies:'cookie-bite', sharing:'share-nodes', third:'link', storage:'hourglass-half', security:'lock', transfers:'globe', rights:'user-shield', children:'child', ads:'bullhorn', changes:'clock-rotate-left', contacts:'envelope' };
  const renderDoc = d => d.sections.map((s, i) =>
    `<section id="${s.id}" class="sec rv" data-n="${pad(i)}"><h2><span class="n">${pad(i)}</span>${s.t}` +
    `<span class="sic" aria-hidden="true"><i class="fa-solid fa-${ICO[s.id] || 'circle'}"></i></span>` +
    `</h2>${s.b.map(b => block(b, s.id)).join('')}</section>`
  ).join('');
  const text = (sel, v) => { const el = $(sel); if (el) el.textContent = v; };

  let lang = DEFAULT;
  function apply(l, persist) {
    if (!D[l]) l = DEFAULT;
    lang = l;
    const d = D[l], ui = d.ui;
    if (persist) {
      store.set(l);
      root.classList.remove('lang-swap'); void root.offsetWidth; root.classList.add('lang-swap');
      setTimeout(() => root.classList.remove('lang-swap'), 520);
    }

    root.lang = d.htmlLang; root.dataset.lang = l;
    document.title = d.meta.title;
    const md = $('meta[name="description"]'); if (md) md.content = d.meta.desc;

    $$('[data-i18n]').forEach(el => {
      const v = el.dataset.i18n.split('.').reduce((o, k) => o && o[k], d);
      if (typeof v === 'string') el.textContent = v;
    });
    [['#h1a', ui.h1a], ['#h1b', ui.h1b]].forEach(([sel, t]) => {
      const el = $(sel); if (el) { el.textContent = t; el.dataset.text = t; }
    });

    $('#toc').innerHTML = renderToc(d);
    $('#doc').innerHTML = renderDoc(d);

    const one = ui.marquee.map(t => `<span>${t}</span>`).join('');
    $('#marquee').innerHTML = one.repeat(4) + one.repeat(4);

    text('.lang-cur', { ru: 'RU', uk: 'UA', en: 'EN' }[l] || l.toUpperCase());
    $$('[data-set-lang]').forEach(b => {
      const on = b.dataset.setLang === l;
      b.classList.toggle('on', on); b.setAttribute('aria-selected', on);
    });
    $('.lang-btn').setAttribute('aria-label', ui.langTitle);
    $('.totop').setAttribute('aria-label', ui.up);
    observe();
  }

  let ioRv, ioToc;
  function observe() {
    if (ioRv) ioRv.disconnect(); if (ioToc) ioToc.disconnect();
    const rv = $$('.rv');
    if ('IntersectionObserver' in window && !reduce) {
      ioRv = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); ioRv.unobserve(e.target); }
      }), { threshold: .06, rootMargin: '0px 0px -40px 0px' });
      rv.forEach(el => ioRv.observe(el));
    } else rv.forEach(el => el.classList.add('in'));

    spy();
  }
  function keepVisible(l) {
    const nav = l.parentElement;
    if (nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: l.offsetLeft - 16, behavior: 'smooth' });
  }
  let spyIdx = -1, forced = -1;
  function spy() {
    const links = $$('#toc a'), secs = $$('.sec');
    if (!links.length || !secs.length) return;
    let idx = 0;
    secs.forEach((s, i) => { if (s.getBoundingClientRect().top <= innerHeight * .3) idx = i; });
    if (scrollY + innerHeight >= root.scrollHeight - 6) idx = secs.length - 1;
    if (forced >= 0) idx = forced;
    if (idx === spyIdx && links[idx].classList.contains('on')) return;
    spyIdx = idx;
    links.forEach((l, i) => l.classList.toggle('on', i === idx));
    const l = links[idx], box = l.closest('.toc');
    if (box && box.scrollHeight > box.clientHeight + 2) {
      const r = l.getBoundingClientRect(), b = box.getBoundingClientRect();
      if (r.top < b.top + 36 || r.bottom > b.bottom - 36) box.scrollTop += r.top - b.top - b.height / 2;
    }
    keepVisible(l);
  }
  addEventListener('scroll', spy, { passive: true });
  addEventListener('resize', spy);
  ['wheel', 'touchstart', 'keydown'].forEach(ev => addEventListener(ev, () => { forced = -1; }, { passive: true }));
  document.addEventListener('click', e => {
    const a = e.target.closest('#toc a'); if (!a) return;
    forced = $$('#toc a').indexOf(a); spy();
  });

  const lg = $('#lang'), lgBtn = $('.lang-btn', lg);
  const openLang = o => { lg.classList.toggle('open', o); lgBtn.setAttribute('aria-expanded', o); };
  lgBtn.addEventListener('click', e => { e.stopPropagation(); openLang(!lg.classList.contains('open')); });
  $$('[data-set-lang]').forEach(b => b.addEventListener('click', () => {
    apply(b.dataset.setLang, true); dispatchEvent(new Event('ma-burst')); openLang(false); lgBtn.focus();
  }));
  document.addEventListener('click', e => { if (!lg.contains(e.target)) openLang(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') openLang(false); });

  const toTop = $('.totop');
  function onScroll() {
    const y = scrollY, h = root.scrollHeight - innerHeight;
    toTop.classList.toggle('show', y > 700);
  }
  addEventListener('scroll', onScroll, { passive: true });
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
  document.addEventListener('click', e => { if (e.target.closest('[data-print]')) print(); });

  let popEl = null, popFrom = null;
  function popClose(now) {
    if (!popEl) return;
    const el = popEl; popEl = null; root.classList.remove('pop-lock');
    if (now) el.remove(); else { el.classList.remove('on'); setTimeout(() => el.remove(), 320); }
    if (popFrom && popFrom.isConnected) popFrom.focus();
  }
  function popOpen(key, from) {
    const P = D[lang].ui.pop && D[lang].ui.pop[key]; if (!P) return;
    popClose(true); popFrom = from;
    popEl = document.createElement('div');
    popEl.className = 'pop'; popEl.setAttribute('role', 'dialog'); popEl.setAttribute('aria-modal', 'true'); popEl.setAttribute('aria-label', P.t);
    popEl.innerHTML =
      '<div class="pop-bd" data-pop-x></div><div class="pop-card">' +
        '<button type="button" class="pop-x" data-pop-x aria-label="' + P.ok + '"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
        '<div class="pop-body"><h3>' + P.t + '</h3><p>' + P.lead + '</p>' + P.groups.map(g => '<div class="pop-g"><h4>' + g.h + '</h4><div class="pop-chips">' + g.items.map(x => '<span class="pop-chip"><i class="' + x.i + '" aria-hidden="true"></i>' + x.t + '</span>').join('') + '</div></div>').join('') + '<p class="pop-foot"><i class="fa-solid fa-circle-info" aria-hidden="true"></i><span>' + P.foot + '</span></p></div>' +
        '<button type="button" class="pop-ok" data-pop-x><span>' + P.ok + '</span></button>' +
        '<i class="pop-c" aria-hidden="true"></i>' +
      '</div>';
    document.body.appendChild(popEl);
    root.classList.add('pop-lock');
    requestAnimationFrame(() => popEl && popEl.classList.add('on'));
    $('.pop-ok', popEl).focus();
  }
  document.addEventListener('click', e => {
    const s = e.target.closest('[data-pop]');
    if (s) { popOpen(s.dataset.pop, s); return; }
    if (e.target.closest('[data-pop-x]')) popClose();
  });
  addEventListener('keydown', e => { if (e.key === 'Escape') popClose(); });

  const sb = $('#sbar'), sbTh = sb.firstElementChild;
  let sbHide = 0;
  const sbPc = $('.sb-pc', sb);
  function sbarDraw() {
    const h = root.scrollHeight, vh = innerHeight;
    if (h <= vh + 4) { sb.style.display = 'none'; return; }
    sb.style.display = '';
    const tr = sb.clientHeight, t = Math.max(44, tr * vh / h);
    sbTh.style.height = t + 'px';
    sbTh.style.transform = `translateY(${(tr - t) * (scrollY / (h - vh))}px)`;
    sbPc.textContent = Math.round(100 * scrollY / (h - vh)) + '%';
  }
  function sbarWake() {
    sb.classList.add('show'); clearTimeout(sbHide);
    sbHide = setTimeout(() => { if (!sb.classList.contains('drag') && !sb.matches(':hover')) sb.classList.remove('show'); }, 1300);
  }
  addEventListener('scroll', () => { sbarDraw(); sbarWake(); }, { passive: true });
  addEventListener('resize', sbarDraw);
  addEventListener('pointermove', e => { if (innerWidth - e.clientX < 22) sbarWake(); }, { passive: true });
  sb.addEventListener('pointerenter', sbarWake);
  sb.addEventListener('pointerleave', sbarWake);
  const sbMove = e => {
    const r = sb.getBoundingClientRect(), t = sbTh.offsetHeight, h = root.scrollHeight - innerHeight;
    const k = Math.min(Math.max((e.clientY - r.top - t / 2) / (r.height - t), 0), 1);
    scrollTo({ top: k * h, behavior: 'instant' });
  };
  sb.addEventListener('pointerdown', e => { sb.setPointerCapture(e.pointerId); sb.classList.add('drag'); sbMove(e); });
  sb.addEventListener('pointermove', e => { if (sb.classList.contains('drag')) sbMove(e); });
  const sbUp = () => { sb.classList.remove('drag'); sbarWake(); };
  sb.addEventListener('pointerup', sbUp); sb.addEventListener('pointercancel', sbUp);
  if ('ResizeObserver' in window) new ResizeObserver(sbarDraw).observe(document.body);
  sbarDraw();

  if (!touch && !reduce) {
    let raf = 0, cx = 0, cy = 0;
    addEventListener('pointermove', e => {
      cx = e.clientX; cy = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        root.style.setProperty('--mx', cx + 'px');
        root.style.setProperty('--my', cy + 'px');
        root.style.setProperty('--px', ((cx / innerWidth - .5) * -26).toFixed(1) + 'px');
        root.style.setProperty('--py', ((cy / innerHeight - .5) * -18).toFixed(1) + 'px');
      });
    }, { passive: true });
  }

  function splitChars(el) {
    if (!el) return;
    const txt = el.textContent;
    el.setAttribute('aria-label', txt);
    el.innerHTML = [...txt].map((c, i) => c === ' ' ? ' ' : `<span class="ch" aria-hidden="true" style="--i:${i}">${c}</span>`).join('');
  }
  const h1 = $('.h1');
  function waveTitle(e) {
    if (reduce || h1.classList.contains('waving')) return;
    const words = $$('.h1 .glitch'), chs = $$('.h1 .ch');
    if (!words.length || !chs.length) return;
    const a = words[0].getBoundingClientRect(), b = words[words.length - 1].getBoundingClientRect();
    const fromLeft = e.clientX < (a.left + b.right) / 2;
    chs.forEach((c, i) => c.style.setProperty('--w', fromLeft ? i : chs.length - 1 - i));
    h1.classList.add('waving');
    setTimeout(() => h1.classList.remove('waving'), 650 + chs.length * 38 + 80);
  }
  $$('.h1 .glitch').forEach(g => g.addEventListener('pointerenter', waveTitle));

  (function fx() {
    const cv = $('#fx');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    const small = matchMedia('(max-width:640px)').matches;
    const TAU = Math.PI * 2, R = (a, b) => a + Math.random() * (b - a);
    const imgs = ['glitch-1', 'glitch-3', 'glitch-6'].map(n => { const i = new Image(); i.src = `/assets/images/background/${n.replace('glitch-', '')}.webp`; return i; });
    let W = 0, H = 0, dust = [], bokeh = [], sparks = [], nodes = [], pulses = [], slices = [], until = 0;
    let mx = .5, my = .5, sx = .5, sy = .5, mpx = -999, mpy = -999, run = true, t = 0;

    const sprite = (rgb, size) => {
      const c = document.createElement('canvas'); c.width = c.height = size;
      const g = c.getContext('2d'), r = size / 2, gr = g.createRadialGradient(r, r, 0, r, r, r);
      gr.addColorStop(0, `rgba(${rgb},1)`); gr.addColorStop(.25, `rgba(${rgb},.45)`); gr.addColorStop(1, `rgba(${rgb},0)`);
      g.fillStyle = gr; g.fillRect(0, 0, size, size);
      return c;
    };
    const PINK = sprite('253,24,67', 64), WHITE = sprite('255,244,246', 64), SOFT = sprite('253,24,67', 256);

    function size() {
      const d = Math.min(devicePixelRatio || 1, small ? 1.5 : 2);
      W = innerWidth; H = innerHeight;
      cv.width = W * d; cv.height = H * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      const area = W * H, k = small ? .5 : 1;
      dust = [];
      [[.25, 1 / 9000], [.55, 1 / 16000], [1, 1 / 36000]].forEach(([z, dens]) => {
        const n = Math.round(area * dens * k);
        for (let i = 0; i < n; i++) dust.push({ z, x: R(0, W), y: R(0, H), r: R(.5, 1.5) * (.6 + z * 1.4), vy: -R(.02, .09) * (.3 + z), ph: R(0, TAU), sp: R(.006, .02), pink: Math.random() < .32 });
      });
      bokeh = Array.from({ length: small ? 4 : 8 }, () => ({ x: R(0, W), y: R(0, H), r: R(70, 190), vx: R(-.05, .05), vy: R(-.04, .03), a: R(.03, .07), ph: R(0, TAU) }));
      nodes = Array.from({ length: Math.max(24, Math.min(small ? 34 : 88, Math.round(area / 15000))) }, () => ({
        x: R(0, W), y: R(0, H), vx: R(-.09, .09), vy: R(-.07, .07), hot: Math.random() < .28
      }));
      sparks = []; pulses = [];
    }
    addEventListener('resize', () => { if (Math.abs(innerWidth - W) > 40 || Math.abs(innerHeight - H) > 160) size(); });
    addEventListener('pointermove', e => { mx = e.clientX / innerWidth; my = e.clientY / innerHeight; mpx = e.clientX; mpy = e.clientY; }, { passive: true });
    document.addEventListener('mouseleave', () => { mpx = mpy = -999; });
    document.addEventListener('visibilitychange', () => { run = !document.hidden; if (run && !reduce) frame(); });

    function burst(strong) {
      const n = strong ? 14 : (4 + (Math.random() * 6 | 0));
      slices = Array.from({ length: n }, () => ({
        img: imgs[Math.random() * imgs.length | 0], y: R(0, H), h: R(H * .01, H * (strong ? .12 : .07)),
        dx: R(-W * .08, W * .08), a: R(.35, .85), pink: Math.random() < .55
      }));
      until = performance.now() + (strong ? 260 : R(90, 200));
    }
    function drawSlices(now) {
      if (!slices.length) return;
      if (now > until) { slices = []; return; }
      ctx.globalCompositeOperation = 'screen';
      for (const s of slices) {
        const im = s.img; if (!im.complete || !im.naturalWidth) continue;
        if (Math.random() < .4) s.dx += R(-8, 8);
        const k = Math.max(W / im.naturalWidth, H / im.naturalHeight);
        const ox = (W - im.naturalWidth * k) / 2, oy = (H - im.naturalHeight * k) / 2;
        ctx.globalAlpha = s.a * R(.6, 1);
        ctx.drawImage(im, -ox / k, (s.y - oy) / k, W / k, s.h / k, s.dx, s.y, W, s.h);
        if (s.pink) { ctx.globalAlpha = s.a * .24; ctx.fillStyle = '#FD1843'; ctx.fillRect(0, s.y, W, s.h); }
      }
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    }
    addEventListener('ma-burst', () => burst(true));
    (function loop() { if (!document.hidden && !reduce) burst(false); setTimeout(loop, R(3500, 8000)); })();

    const LINK = small ? 125 : 175, MOUSE = 210;
    function draw(now) {
      ctx.clearRect(0, 0, W, H);
      sx += (mx - sx) * .04; sy += (my - sy) * .04;
      const ox = sx - .5, oy = sy - .5;

      drawSlices(now);

      ctx.globalCompositeOperation = 'lighter';
      for (const b of bokeh) {
        ctx.globalAlpha = b.a * (.75 + Math.sin(t * .008 + b.ph) * .25);
        ctx.drawImage(SOFT, b.x - b.r - ox * 40, b.y - b.r - oy * 30, b.r * 2, b.r * 2);
      }

      ctx.globalAlpha = 1; ctx.lineWidth = 1;
      const links = [];
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const c = nodes[j], dx = a.x - c.x, dy = a.y - c.y, d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            const k = 1 - Math.sqrt(d2) / LINK;
            ctx.strokeStyle = (a.hot || c.hot) ? `rgba(253,24,67,${k * .5})` : `rgba(255,244,246,${k * .12})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(c.x, c.y); ctx.stroke();
            if (links.length < 500) links.push([a, c]);
          }
        }
        const mdx = a.x - mpx, mdy = a.y - mpy, md = Math.hypot(mdx, mdy);
        if (md < MOUSE) {
          ctx.strokeStyle = `rgba(253,24,67,${(1 - md / MOUSE) * .75})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mpx, mpy); ctx.stroke();
          if (!reduce && md > 1) { a.x += mdx / md * .2; a.y += mdy / md * .2; }
        }
      }
      ctx.globalCompositeOperation = 'source-over';
      for (const n of nodes) {
        ctx.globalAlpha = n.hot ? .95 : .5;
        const g = n.hot ? 16 : 10;
        ctx.drawImage(n.hot ? PINK : WHITE, n.x - g / 2, n.y - g / 2, g, g);
        ctx.globalAlpha = .9; ctx.fillStyle = n.hot ? '#ffd0d9' : '#fff'; ctx.fillRect(n.x - 1, n.y - 1, 2, 2);
      }
      if (!reduce && links.length && pulses.length < (small ? 4 : 9) && Math.random() < .05) {
        const l = links[Math.random() * links.length | 0], rev = Math.random() < .5;
        pulses.push({ a: rev ? l[1] : l[0], b: rev ? l[0] : l[1], p: 0, s: R(.005, .011) });
      }
      ctx.globalCompositeOperation = 'lighter';
      pulses = pulses.filter(p => p.p < 1);
      for (const p of pulses) {
        p.p += p.s;
        for (let k = 0; k < 4; k++) {
          const q = Math.max(0, p.p - k * .035);
          ctx.globalAlpha = (1 - k * .24);
          const s = k === 0 ? 20 : 14 - k * 2;
          ctx.drawImage(WHITE, p.a.x + (p.b.x - p.a.x) * q - s / 2, p.a.y + (p.b.y - p.a.y) * q - s / 2, s, s);
        }
      }

      for (const d of dust) {
        const px = d.x + ox * d.z * 60, py = d.y + oy * d.z * 40;
        ctx.globalAlpha = (.12 + d.z * .42) * (.55 + Math.sin(t * d.sp + d.ph) * .45);
        const s = d.r * (d.z > .8 ? 6 : 3.2);
        ctx.drawImage(d.pink ? PINK : WHITE, px - s / 2, py - s / 2, s, s);
      }

      if (!reduce && sparks.length < (small ? 5 : 12) && Math.random() < .03)
        sparks.push({ x: R(0, W), y: H + 10, vx: R(-.3, .3), vy: -R(.3, .8), life: 1, dec: R(.003, .008), s: R(6, 15), ph: R(0, TAU) });
      for (const sp of sparks) {
        sp.x += sp.vx + Math.sin(t * .03 + sp.ph) * .3; sp.y += sp.vy; sp.life -= sp.dec;
        ctx.globalAlpha = Math.max(0, sp.life) * .85;
        ctx.drawImage(PINK, sp.x - sp.s / 2, sp.y - sp.s / 2, sp.s, sp.s);
        ctx.globalAlpha = Math.max(0, sp.life);
        ctx.drawImage(WHITE, sp.x - sp.s / 5, sp.y - sp.s / 5, sp.s / 2.5, sp.s / 2.5);
      }
      sparks = sparks.filter(sp => sp.life > 0 && sp.y > -20);
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    }
    function step() {
      for (const d of dust) { d.y += d.vy; d.x += Math.sin(t * .004 + d.ph) * .05 * d.z; if (d.y < -10) { d.y = H + 10; d.x = R(0, W); } }
      for (const b of bokeh) {
        b.x += b.vx; b.y += b.vy;
        if (b.x < -b.r) b.x = W + b.r; else if (b.x > W + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = H + b.r; else if (b.y > H + b.r) b.y = -b.r;
      }
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
      }
    }
    function frame(now) {
      if (!run) return;
      step(); draw(now || performance.now()); t++;
      if (!reduce) requestAnimationFrame(frame);
    }
    size();
    if (reduce) draw(performance.now()); else frame();
  })();

  function openPage() {
    root.classList.add('is-open');
    dispatchEvent(new Event('bootgo'));
    setTimeout(() => dispatchEvent(new Event('ma-burst')), 700);
    setTimeout(() => root.classList.add('is-done'), 3600);
  }
  function bootScreen() {
    splitChars($('#h1a')); splitChars($('#h1b'));
    const b = $('.boot'); if (b) b.remove();
    setTimeout(openPage, reduce ? 0 : 120);
  }

  apply(detectLang(), false);
  onScroll();
  bootScreen();
  if (location.hash) {
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el) setTimeout(() => el.scrollIntoView(), 60);
  }
})();
