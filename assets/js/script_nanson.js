(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var I18N = window.GQ_I18N || {};
  var lang = 'en';

  function t(k) { var d = I18N[lang] || {}; return d[k] != null ? d[k] : (I18N.ru || {})[k]; }

  function split(el) {
    var text = el.textContent.replace(/\s+/g, ' ').trim(), mode = el.getAttribute('data-split'), i = 0;
    var vis = document.createElement('span'); vis.setAttribute('aria-hidden', 'true');
    text.split(' ').forEach(function (word, wi, all) {
      var w = document.createElement('span'); w.className = 'sw';
      var parts = mode === 'char' ? Array.from(word) : [word];
      parts.forEach(function (p) {
        var c = document.createElement('span'); c.className = 'sc'; c.style.setProperty('--i', i++); c.textContent = p; w.appendChild(c);
      });
      vis.appendChild(w);
      if (wi < all.length - 1) vis.appendChild(document.createTextNode(' '));
    });
    el.textContent = ''; el.appendChild(vis);
  }
  function splitAll() {
    $$('[data-split]').forEach(split);
    $$('h1, h2').forEach(function (h) { h.setAttribute('aria-label', h.textContent.replace(/\s+/g, ' ').trim()); });
  }

  function applyLang(l, save) {
    if (!I18N[l]) l = 'en';
    lang = l;
    $$('[data-i18n]').forEach(function (el) { var v = t(el.getAttribute('data-i18n')); if (v != null) el.textContent = v; });
    $$('[data-i18n-label]').forEach(function (el) { var v = t(el.getAttribute('data-i18n-label')); if (v != null) el.setAttribute('aria-label', v); });
    splitAll();
    root.lang = l;
    var tt = t('title'); if (tt) document.title = tt;
    var dd = t('desc'), m = $('meta[name="description"]'); if (dd && m) m.setAttribute('content', dd);
    var og = { 'og:title': 'title', 'og:description': 'desc', 'twitter:title': 'title', 'twitter:description': 'desc' };
    Object.keys(og).forEach(function (k) { var m2 = $('meta[property="' + k + '"], meta[name="' + k + '"]'); if (m2 && t(og[k])) m2.setAttribute('content', t(og[k])); });
    var loc = $('meta[property="og:locale"]'); if (loc) loc.setAttribute('content', { ru: 'ru_RU', uk: 'uk_UA', en: 'en_US' }[l]);
    var nm = $('#langName'); if (nm) nm.textContent = t('langname');
    $$('.lang__opt').forEach(function (o) { o.setAttribute('aria-checked', o.getAttribute('data-lang') === l ? 'true' : 'false'); });
    if (save) { try { localStorage.setItem('nanson_lang', l); } catch (e) {} }
    layoutRail();
  }

  function detect() {
    var q = /[?&]lang=(ru|uk|en)\b/.exec(location.search); if (q) return q[1];
    var s = null; try { s = localStorage.getItem('nanson_lang'); } catch (e) {}
    return (s && I18N[s]) ? s : 'en';
  }

  var langBox = $('#lang'), langBtn = $('#langBtn');
  function setLang(open) { langBox.classList.toggle('open', open); langBtn.setAttribute('aria-expanded', String(open)); }
  if (langBox && langBtn) {
    langBtn.addEventListener('click', function (e) { e.stopPropagation(); setLang(!langBox.classList.contains('open')); });
    $$('.lang__opt').forEach(function (o) {
      o.addEventListener('click', function () { applyLang(o.getAttribute('data-lang'), true); setLang(false); langBtn.focus(); });
    });
    document.addEventListener('click', function (e) { if (!langBox.contains(e.target)) setLang(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setLang(false); });
  }

  var totop = $('#totop');
  var rail = $('#rail'), track = $('#railTrack'), lens = $('.rail__lens'), fill = $('.rail__fill');
  var ticksBox = $('#railTicks'), nameBox = $('#railName');
  var chaps = $$('.chap'), ticks = [], labels = [];
  var xs = [0, 1], fs = [0, 1];
  var cur = 0, target = 0, dragging = false, looping = false, lastIdx = -1, hoverIdx = -1;

  function maxScroll() { return Math.max(1, root.scrollHeight - window.innerHeight); }
  function trackH() { return track ? track.clientHeight : 0; }
  function docTop(el) { var y = 0; while (el) { y += el.offsetTop; el = el.offsetParent; } return y; }
  function interp(v, from, to) {
    if (v <= from[0]) return to[0];
    for (var i = 1; i < from.length; i++) {
      if (v <= from[i]) { var k = (v - from[i - 1]) / Math.max(1e-6, from[i] - from[i - 1]); return to[i - 1] + k * (to[i] - to[i - 1]); }
    }
    return to[to.length - 1];
  }
  function activeIdx() {
    var y = window.pageYOffset, idx = 0;
    for (var i = 0; i < xs.length && i <= chaps.length; i++) { if (xs[i] <= y + 2) idx = i; }
    return idx;
  }

  function setName(text, hover) {
    if (!nameBox) return;
    var cur = nameBox.firstChild;
    if (cur && cur.textContent === text) { nameBox.classList.toggle('is-hover', !!hover); return; }
    nameBox.textContent = '';
    var b = document.createElement('b'); b.textContent = text; nameBox.appendChild(b);
    nameBox.classList.toggle('is-hover', !!hover);
  }

  function update(force) {
    var y = window.pageYOffset, p = Math.min(1, Math.max(0, y / maxScroll()));
    if (totop) totop.classList.toggle('show', y > 480);
    var idx = activeIdx();
    ticks.forEach(function (b, i) { b.classList.toggle('is-on', i === idx); b.classList.toggle('is-passed', i < idx); });
    chaps.forEach(function (c, i) { c.classList.toggle('is-active', i + 1 === idx); });
    $$('.toc__i').forEach(function (a, i) { a.classList.toggle('is-on', i + 1 === idx); });
    if (track) {
      var label = labels[idx] || '';
      track.setAttribute('aria-valuetext', label);
      track.setAttribute('aria-valuenow', String(Math.round(p * 100)));
      if (hoverIdx < 0) setName(label, false);
      target = interp(y, xs, fs);
      if (!looping) { looping = true; requestAnimationFrame(loop); }
    }
    lastIdx = idx;
  }

  function loop() {
    var d = target - cur;
    cur = (dragging || Math.abs(d) < 0.0004) ? target : cur + d * 0.2;
    var h = trackH();
    if (lens) lens.style.top = (cur * h) + 'px';
    if (fill) fill.style.height = (cur * h) + 'px';
    if (Math.abs(target - cur) > 0.0004) requestAnimationFrame(loop); else looping = false;
  }

  function layoutRail() {
    if (!track || !ticksBox) return;
    ticksBox.innerHTML = ''; ticks = [];
    var n = chaps.length, max = maxScroll(), h = trackH() || 1, k;
    rail.classList.toggle('off', root.scrollHeight - window.innerHeight < 220);

    xs = [0];
    chaps.forEach(function (c) { xs.push(Math.max(0, docTop(c) - window.innerHeight * 0.3)); });
    for (k = n; k >= 1; k--) xs[k] = Math.min(xs[k], max - (n - k) * 6);
    for (k = 1; k <= n; k++) xs[k] = Math.max(xs[k], xs[k - 1] + 4);
    fs = xs.map(function (_, i) { return i / n; });
    if (max > xs[n] + 1) { xs.push(max); fs.push(1); }

    labels = [t('start')];
    chaps.forEach(function (c) { var h2 = $('h2', c); labels.push(h2.getAttribute('aria-label') || h2.textContent.trim()); });

    labels.forEach(function (label, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'rail__tick'; b.style.top = ((i / n) * h) + 'px';
      b.setAttribute('aria-label', label);
      if (i === 0) b.appendChild(document.createElement('i')); else b.textContent = String(i);
      b.addEventListener('click', function (e) { e.stopPropagation(); window.scrollTo({ top: xs[i], behavior: reduce ? 'auto' : 'smooth' }); });
      b.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
      b.addEventListener('pointerenter', function () { hoverIdx = i; setName(label, true); });
      b.addEventListener('pointerleave', function () { hoverIdx = -1; setName(labels[activeIdx()] || '', false); });
      ticksBox.appendChild(b); ticks.push(b);
    });
    lastIdx = -1;
    update(true);
    cur = target; loop();
  }

  function setFromPointer(e) {
    var r = track.getBoundingClientRect(), n = chaps.length;
    var f = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)), snap = -1, i;
    for (i = 0; i <= n; i++) { if (Math.abs(i / n - f) * r.height < 12) { snap = i; break; } }
    var top = snap >= 0 ? xs[snap] : interp(f, fs, xs);
    window.scrollTo({ top: top, behavior: 'instant' });
    update(true);
  }
  if (track) {
    track.addEventListener('pointerdown', function (e) {
      dragging = true; rail.classList.add('drag');
      try { track.setPointerCapture(e.pointerId); } catch (x) {}
      setFromPointer(e); e.preventDefault();
    });
    track.addEventListener('pointermove', function (e) { if (dragging) setFromPointer(e); });
    var end = function (e) { if (!dragging) return; dragging = false; rail.classList.remove('drag'); try { track.releasePointerCapture(e.pointerId); } catch (x) {} update(true); };
    track.addEventListener('pointerup', end);
    track.addEventListener('pointercancel', end);
    track.addEventListener('keydown', function (e) {
      var k = e.key, y = window.pageYOffset, vh = window.innerHeight, to = null, idx = activeIdx();
      if (k === 'ArrowDown' || k === 'ArrowRight') to = y + vh * 0.25;
      else if (k === 'ArrowUp' || k === 'ArrowLeft') to = y - vh * 0.25;
      else if (k === 'PageDown') to = xs[Math.min(chaps.length, idx + 1)];
      else if (k === 'PageUp') to = xs[Math.max(0, idx - 1)];
      else if (k === 'Home') to = 0;
      else if (k === 'End') to = maxScroll();
      if (to !== null) { e.preventDefault(); window.scrollTo({ top: to, behavior: reduce ? 'auto' : 'smooth' }); }
    });
  }

  var mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1001px)');
  function railMode() { root.classList.toggle('rail-on', mq.matches); setTimeout(layoutRail, 30); }
  railMode();
  if (mq.addEventListener) mq.addEventListener('change', railMode); else if (mq.addListener) mq.addListener(railMode);

  if (totop) totop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () { ticking = false; update(false); });
  }, { passive: true });

  $$('.chap').forEach(function (c) { $$('.pt', c).forEach(function (p, i) { p.style.setProperty('--d', (i * 110) + 'ms'); }); });
  $$('.toc__i').forEach(function (a, i) { a.style.setProperty('--d', (i * 70) + 'ms'); });
  var rv = $$('[data-reveal]');
  var io = null;
  function show(el) {
    if (el.classList.contains('in')) return;
    var d = parseInt(el.style.getPropertyValue('--d'), 10) || 0;
    el.classList.add('in');
    if (io) io.unobserve(el);
    setTimeout(function () { el.style.setProperty('--d', '0ms'); }, d + 1500);
  }
  function sweep() {
    var h = window.innerHeight || document.documentElement.clientHeight;
    rv.forEach(function (el) {
      if (el.classList.contains('in')) return;
      var r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < h * 1.05) show(el);
    });
  }
  if ('IntersectionObserver' in window && !reduce) {
    io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) show(x.target); });
    }, { threshold: 0, rootMargin: '0px 0px 10% 0px' });
    rv.forEach(function (el) { io.observe(el); });
    var sw = 0;
    function queue() { if (!sw) sw = requestAnimationFrame(function () { sw = 0; sweep(); }); }
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    window.addEventListener('load', function () { sweep(); setTimeout(sweep, 600); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sweep);
    sweep();
  } else rv.forEach(function (el) { el.classList.add('in'); });

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    chaps.forEach(function (c) {
      c.addEventListener('pointermove', function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
      }, { passive: true });
    });
  }

  applyLang(detect(), false);
  var rl; window.addEventListener('resize', function () { clearTimeout(rl); rl = setTimeout(layoutRail, 120); });
  window.addEventListener('load', layoutRail);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutRail);
  if ('ResizeObserver' in window) { var doc = $('#doc'); if (doc) new ResizeObserver(function () { clearTimeout(rl); rl = setTimeout(layoutRail, 60); }).observe(doc); }
})();

(function () {
  'use strict';
  var c = document.getElementById('fx');
  if (!c) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { c.remove(); return; }

  // Фон-«звук»: эквалайзер снизу, две плавные волны и всплывающие ноты. Бит — 120 BPM.
  var ctx = c.getContext('2d'), W = 0, H = 0, bars = 0, bw = 0, gap = 0, maxH = 0, hs = [], pk = [], notes = [];
  var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  var GLYPH = ['♪', '♫', '♬', '♩'];
  var last = 0, raf = 0, STEP = 1000 / 30, BEAT = 0.5;

  function newNote(first) {
    return { x: Math.random() * W, y: first ? Math.random() * H : H + 20, s: 14 + Math.random() * 16, v: 0.25 + Math.random() * 0.45,
             a: Math.random() * 6.28, f: 0.6 + Math.random() * 0.9, g: GLYPH[(Math.random() * GLYPH.length) | 0] };
  }
  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    c.width = Math.round(W * dpr); c.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    gap = W < 760 ? 4 : 5; bw = W < 760 ? 9 : 12;
    bars = Math.ceil(W / (bw + gap)); maxH = Math.min(H * 0.3, 260);
    hs = []; pk = []; for (var i = 0; i < bars; i++) { hs.push(0); pk.push(0); }
    notes = []; var n = W < 760 ? 7 : 12; for (i = 0; i < n; i++) notes.push(newNote(true));
    ctx.textBaseline = 'middle';
  }

  function frame(ms) {
    raf = requestAnimationFrame(frame);
    if (ms - last < STEP) return; last = ms;
    var t = ms / 1000, ph = (t % BEAT) / BEAT, kick = Math.exp(-ph * 5.5), i, x, y;
    ctx.clearRect(0, 0, W, H);

    // эквалайзер
    var g = ctx.createLinearGradient(0, H - maxH, 0, H);
    g.addColorStop(0, 'rgba(226, 201, 255, .0)'); g.addColorStop(.35, 'rgba(176, 106, 245, .55)'); g.addColorStop(1, 'rgba(120, 36, 210, .95)');
    for (i = 0; i < bars; i++) {
      var u = i / (bars - 1), centre = 0.55 + 0.45 * Math.exp(-Math.pow((u - 0.5) / 0.38, 2));
      var tone = 0.5 + 0.5 * Math.sin(t * 2.3 + i * 0.42) * Math.sin(t * 0.9 + i * 0.13);
      var target = Math.min(1, (0.1 + 0.7 * tone * centre + 0.38 * kick * centre) * (0.85 + 0.15 * Math.sin(i * 12.9898)));
      hs[i] += (target - hs[i]) * (target > hs[i] ? 0.55 : 0.18);
      pk[i] = Math.max(hs[i], pk[i] - 0.012);
      var h = Math.max(3, hs[i] * maxH); x = i * (bw + gap);
      ctx.fillStyle = g; ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, H - h, bw, h, 3) : ctx.rect(x, H - h, bw, h); ctx.fill();
      ctx.fillStyle = 'rgba(236, 224, 255, .8)'; ctx.fillRect(x, H - pk[i] * maxH - 6, bw, 2);
    }

    // две волны над эквалайзером
    for (var w = 0; w < 2; w++) {
      ctx.beginPath();
      for (x = 0; x <= W; x += 8) {
        y = H - maxH * (1.05 + w * 0.25) + Math.sin(x * 0.008 + t * (1.2 + w * 0.5) + w * 2) * (10 + 14 * kick) + Math.sin(x * 0.019 - t * 1.7) * 5;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = w ? 'rgba(201, 160, 255, .16)' : 'rgba(201, 160, 255, .28)'; ctx.lineWidth = 1.5; ctx.stroke();
    }

    // ноты
    for (i = 0; i < notes.length; i++) {
      var n = notes[i];
      n.y -= n.v; n.a += 0.02 * n.f;
      var px = n.x + Math.sin(n.a) * 18, k = n.y / H, alpha = Math.max(0, Math.min(1, k * 1.6)) * Math.min(1, (H - n.y) / 90) * 0.5;
      ctx.font = n.s + 'px "Segoe UI Symbol", "DejaVu Sans", "Noto Sans Symbols", sans-serif';
      ctx.fillStyle = 'rgba(220, 190, 255,' + alpha.toFixed(3) + ')'; ctx.fillText(n.g, px, n.y);
      if (n.y < -30) notes[i] = newNote(false);
    }
  }
  function start() { if (!raf) raf = requestAnimationFrame(frame); }
  function stop() { cancelAnimationFrame(raf); raf = 0; }
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(resize, 150); });
  resize(); start();
})();
