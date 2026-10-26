(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const HOME = '/';
  const SECONDS = 15;

  const D = {
    ru: {
      title: 'Мухамед Ads — креативно-технологическая сеть | Страница не найдена', kick: 'Ошибка сети', h: 'Страница не найдена',
      lead: 'Такой страницы нет.\nВозможно, она переехала или ссылка введена с ошибкой.',
      auto: 'Автопереход через', sec: 'с'
    },
    uk: {
      title: 'Мухамед Ads — креативно-технологічна мережа | Сторінку не знайдено', kick: 'Помилка мережі', h: 'Сторінку не знайдено',
      lead: 'Такої сторінки немає.\nМожливо, вона переїхала або посилання введено з помилкою.',
      auto: 'Автоперехід через', sec: 'с'
    },
    en: {
      title: 'Muhamed Ads — creative & technology network | Page not found', kick: 'Network error', h: 'Page not found',
      lead: 'This page doesn’t exist.\nIt may have moved, or the link has a typo.',
      auto: 'Auto-redirect in', sec: 's'
    }
  };

  const guess = () => {
    try { const s = localStorage.getItem('lang'); if (s && D[s]) return s; } catch (e) {}
    const list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'ru'];
    for (const l of list) {
      const c = String(l).toLowerCase().slice(0, 2);
      if (D[c]) return c;
    }
    return 'ru';
  };
  const lang = guess();
  const t = D[lang];

  document.documentElement.lang = lang;
  document.title = t.title;
  $$('[data-i18n]').forEach(el => { if (t[el.dataset.i18n] != null) el.textContent = t[el.dataset.i18n]; });

  const label = $('.auto-t'), bar = $('.auto-bar i');
  const total = SECONDS * 1000;
  let left = total, last = performance.now();

  function paint() {
    label.innerHTML = `<span>${t.auto}</span> <b class="sec">${Math.ceil(left / 1000)}</b> <span>${t.sec}</span>`;
    bar.style.transform = `scaleX(${1 - left / total})`;
  }
  function tick(now) {
    left -= now - last; last = now;
    if (left <= 0) { left = 0; paint(); location.replace(HOME); return; }
    paint();
    requestAnimationFrame(tick);
  }
  document.addEventListener('visibilitychange', () => { last = performance.now(); });

  paint();
  requestAnimationFrame(tick);
})();
