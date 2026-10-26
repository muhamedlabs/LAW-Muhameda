(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  {
    $$('[data-type]').forEach(el => {
      let i = 0, j = 0, del = false, id = 0;
      const words = () => JSON.parse(el.dataset.type);
      const run = () => {
        const my = ++id;
        i = 0; j = 0; del = false;
        if (reduce) { el.textContent = words()[0]; return; }
        (function tick() {
          if (my !== id) return;
          const s = words()[i];
          el.textContent = s.slice(0, j);
          if (!del && j < s.length) { j++; setTimeout(tick, 65); }
          else if (!del) { del = true; setTimeout(tick, 1600); }
          else if (j > 0) { j--; setTimeout(tick, 30); }
          else { del = false; i = (i + 1) % words().length; setTimeout(tick, 300); }
        })();
      };
      el.addEventListener('retype', run);
      run();
    });
  }

  {
    const root = document.documentElement;
    const boot = $('.boot');
    if (boot && root.classList.contains('js') && !root.classList.contains('noboot') && !reduce) {
      root.classList.add('boot-on');
      const T = window.getLangDict ? window.getLangDict() : {};
      const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
      const brand = T.brand || 'Muhamed';
      const net = esc(T.net || 'Creative & Technology Network');
      const steps = [T.bs1 || 'System init', T.bs2 || 'Loading rules', T.bs3 || 'Securing data', T.bs4 || 'Access granted'];
      const dEl = $('[data-date]');
      const stamp = dEl ? dEl.dataset.date : '';
      let n = 0;
      const word = (w, cls) => `<span class="bw ${cls}">${[...w].map(ch => `<span class="bl" style="--i:${n++}">${ch}</span>`).join('')}</span>`;
      const layer = () => { n = 0; return word(brand, '') + '<span class="bsp"></span>' + word('Ads', 'ads'); };
      if (!$('.boot-panel', boot)) boot.innerHTML = '<i class="boot-panel boot-panel-l"></i><i class="boot-panel boot-panel-r"></i>';
      $$('.boot-c', boot).forEach(x => x.remove());
      boot.insertAdjacentHTML('beforeend',
        '<div class="boot-c">' +
          '<i class="boot-grid"></i><i class="boot-scan"></i>' +
          '<i class="boot-cn boot-cn-tl"></i><i class="boot-cn boot-cn-tr"></i><i class="boot-cn boot-cn-bl"></i><i class="boot-cn boot-cn-br"></i>' +
          '<span class="boot-hud boot-hud-l">' + esc(T.bhl || 'Access protocol') + '</span>' +
          '<span class="boot-hud boot-hud-r">' + esc(stamp) + '</span>' +
          '<div class="boot-t"><span class="boot-ol">' + layer() + '</span><span class="boot-fl">' + layer() + '</span><i class="boot-edge"></i></div>' +
          '<small>' + net + '</small>' +
        '</div>' +
        '<div class="boot-flash"></div>' +
        '<i class="boot-ring"></i><i class="boot-seam"></i>' +
        '<div class="boot-pct">' +
          '<b class="boot-num"><span class="bn"><i>00</i>0</span><em>%</em></b><i class="boot-line"></i>' +
          '<div class="boot-status"><span class="bst-n"></span><span class="bst-t"></span></div>' +
          '<div class="boot-steps"><i></i><i></i><i></i><i></i></div>' +
        '</div>');
      const num = $('.bn', boot);

      const st = $('.boot-status', boot), stN = $('.bst-n', boot), stT = $('.bst-t', boot);
      const dots = $$('.boot-steps i', boot);
      let stage = -1;
      const setStage = s => {
        stage = s;
        stN.textContent = '0' + (s + 1) + '/04';
        stT.textContent = steps[s];
        dots.forEach((d, i) => d.classList.toggle('on', i <= s));
        st.classList.remove('sw'); void st.offsetWidth; st.classList.add('sw');
        st.classList.toggle('ok', s === 3);
      };
      setStage(0);

      const G = { lat: 'ABCDEFGHJKLMNPRSTUVXYZ0123456789#%/<>*+=', cyr: 'АБВГДЕЖЗИКЛМНПРСТУФХЦЧШЭЮЯ0123456789#%/<>*+=' };
      const lets = {};
      $$('.bl', boot).forEach(el => { const k = +el.style.getPropertyValue('--i'); (lets[k] = lets[k] || []).push(el); });
      const info = Object.keys(lets).map(k => {
        const els = lets[k], ch = els[0].textContent;
        return { els, ch, start: 120 + k * 110, tick: -1, done: false, set: G[/[а-яіїєґё]/i.test(ch) ? 'cyr' : 'lat'] };
      });
      const tb = performance.now();
      (function scr(now) {
        const el = now - tb;
        let left = 0;
        info.forEach(o => {
          if (o.done) return;
          const t = el - o.start;
          if (t < 0) { left++; return; }
          if (o.tick < 0) {
            const w = o.els[0].offsetWidth;
            o.els.forEach(e => { e.style.width = w + 'px'; e.style.textAlign = 'center'; e.classList.add('scr'); });
          }
          if (t >= 620) {
            o.els.forEach(e => { e.textContent = o.ch; e.classList.remove('scr'); });
            o.done = true;
            return;
          }
          const tk = Math.floor(t / 55);
          if (tk !== o.tick) {
            o.tick = tk;
            const g = o.set[Math.floor(Math.random() * o.set.length)];
            o.els.forEach(e => { e.textContent = g; });
          }
          left++;
        });
        if (left) requestAnimationFrame(scr);
      })(tb);

      const keys = [[0, 0], [.26, .38], [.40, .45], [.74, .9], [.88, .94], [1, 1]];
      const ease = t => {
        for (let i = 1; i < keys.length; i++) {
          if (t <= keys[i][0]) {
            const [t1, p1] = keys[i - 1], [t2, p2] = keys[i];
            const k = (t - t1) / (t2 - t1);
            return p1 + (p2 - p1) * (1 - Math.cos(Math.PI * k)) / 2;
          }
        }
        return 1;
      };
      const t0 = performance.now() + 600, dur = 3300;
      let last = -1;
      (function step(now) {
        const t = Math.max(0, Math.min((now - t0) / dur, 1));
        const p = ease(t);
        boot.style.setProperty('--p', p.toFixed(4));
        const v = Math.round(p * 100);
        if (v !== last) {
          last = v;
          const s = String(v);
          num.innerHTML = (s.length < 3 ? '<i>' + '0'.repeat(3 - s.length) + '</i>' : '') + s;
        }
        const g = p >= .97 ? 3 : p >= .6 ? 2 : p >= .3 ? 1 : 0;
        if (g !== stage) setStage(g);
        if (t < 1) requestAnimationFrame(step); else finish();
      })(t0);

      function finish() {
        boot.classList.add('full');
        setTimeout(() => boot.classList.add('out'), 1100);
        setTimeout(() => boot.classList.add('open'), 1700);
        setTimeout(() => {
          root.classList.add('go');
          document.dispatchEvent(new Event('bootgo'));
        }, 2100);
        setTimeout(() => boot.remove(), 3300);
      }
    } else {
      root.classList.add('go');
    }
  }

  {
    const els = $$('[data-count],[data-date]');
    const bootOn = document.documentElement.classList.contains('boot-on');
    const ease = t => 1 - Math.pow(1 - t, 4);
    els.forEach(el => {
      const isDate = !!el.dataset.date;
      const target = isDate ? el.dataset.date.split('.').map(Number) : [Number(el.dataset.count)];
      const fmt = v => target.map(n => String(Math.round(n * v)).padStart(2, '0')).join(isDate ? '.' : '');
      if (reduce) { el.textContent = fmt(1); return; }
      el.textContent = fmt(0);
      const dur = isDate ? 2000 : 1500;
      const begin = () => setTimeout(() => {
        const t0 = performance.now();
        (function f(now) {
          const t = Math.min((now - t0) / dur, 1);
          el.textContent = fmt(ease(t));
          if (t < 1) requestAnimationFrame(f); else el.classList.add('done');
        })(t0);
      }, bootOn ? 600 : 650);
      if (bootOn) document.addEventListener('bootgo', begin, { once: true }); else begin();
    });
  }

  {
    $$('.facts>div').forEach(c => c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--sx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--sy', (e.clientY - r.top) + 'px');
    }));
  }

  {
    const els = $$('[data-ago]');
    const T = {
      ru: ['сегодня', 'вчера', n => `${n} дн. назад`],
      uk: ['сьогодні', 'вчора', n => `${n} дн. тому`],
      en: ['today', 'yesterday', n => `${n} days ago`]
    };
    const upd = () => {
      const t = T[document.documentElement.lang] || T.ru;
      els.forEach(el => {
        const [d, m, y] = el.dataset.ago.split('.').map(Number);
        const n = Math.max(0, Math.floor((Date.now() - new Date(2000 + y, m - 1, d)) / 864e5));
        el.textContent = n === 0 ? t[0] : n === 1 ? t[1] : t[2](n);
      });
    };
    document.addEventListener('langchange', upd);
    upd();
  }
})();
