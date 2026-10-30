(() => {
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const D = {
    ru: {
      brand: 'Мухамед',
      net: 'Креативная и технологическая сеть',
      bs1: 'Запуск кодекса',
      bs2: 'Главные правила',
      bs3: 'Правила приватности',
      bs4: 'Кодекс готов',
      bhl: 'Кодекс сети',
      edge: 'Мухамед Ads — Главные правила и приватность',
      title: 'Мухамед Ads — креативно-технологическая сеть | Правила',
      desc: 'Единый кодекс правил, политики приватности и принципов защиты данных для всех проектов нашей сети.',
      kick: 'Единый кодекс сети',
      h1a: 'Главные',
      h1b: 'правила',
      h1c: 'и правила приватности всей нашей сети',
      typed: ['Главные правила: что можно и нельзя', 'Правила приватности: что мы храним', 'Правила приватности: как мы защищаем'],
      lead: 'Главные правила и правила приватности — для всех проектов.\nА также правила каждого проекта — в одном месте.',
      f1: 'проектов в сети',
      f2: 'общих документа',
      f3: 'ревизия',
      f4: 'языка интерфейса',
      b1: 'Посмотреть кодекс',
      n1: 'Главные правила',
      n2: 'Правила приватности',
      n3: 'Правила проектов',
      n4: 'Мультиссылка',
      n5: 'Язык',
      n6: 'Частые вопросы',
      s1: 'Игровые новости и обзоры',
      s2: 'Свободная музыка с драйвом',
      s3: 'Эфиры и общение со зрителями',
      s4: 'Обзоры и подборки аниме',
      s5: 'Кино, сериалы и мультфильмы',
      nm3: 'Стримус',
      m1: 'Главные правила — просто и ясно',
      m2: 'Правила приватности — ваши данные под контролем',
      m3: 'Без мелкого шрифта',
      m4: 'Пишем по-человечески',
      m5: 'Мухамед Ads',
      m6: 'Креативная и технологическая сеть',
      m7: 'Ревизия 19.10.2026',
      m8: 'Единый кодекс'
    },
    uk: {
      brand: 'Мухамед',
      net: 'Креативна та технологічна мережа',
      bs1: 'Запуск кодексу',
      bs2: 'Головні правила',
      bs3: 'Правила приватності',
      bs4: 'Кодекс готовий',
      bhl: 'Кодекс мережі',
      edge: 'Мухамед Ads — Головні правила й приватність',
      title: 'Мухамед Ads — креативно-технологічна мережа | Правила',
      desc: 'Єдиний кодекс правил, політики конфіденційності та принципів захисту даних для всіх проєктів нашої мережі.',
      kick: 'Єдиний кодекс мережі',
      h1a: 'Головні',
      h1b: 'правила',
      h1c: 'та правила приватності всієї нашої мережі',
      typed: ['Головні правила: що можна й чого не можна', 'Правила приватності: що ми зберігаємо', 'Правила приватності: як ми захищаємо'],
      lead: 'Головні правила й правила приватності — для всіх проєктів.\nА також правила кожного проєкту — в одному місці.',
      f1: 'проєктів у мережі',
      f2: 'спільні документи',
      f3: 'ревізія',
      f4: 'мови інтерфейсу',
      b1: 'Переглянути кодекс',
      n1: 'Головні правила',
      n2: 'Правила приватності',
      n3: 'Правила проєктів',
      n4: 'Є — посилання',
      n5: 'Мова',
      n6: 'Поширені запитання',
      s1: 'Ігрові новини та огляди',
      s2: 'Вільна музика з драйвом',
      s3: 'Ефіри та спілкування з глядачами',
      s4: 'Огляди та добірки аніме',
      s5: 'Кіно, серіали та мультфільми',
      nm3: 'Стримус',
      m1: 'Головні правила — просто й ясно',
      m2: 'Правила приватності — ваші дані під контролем',
      m3: 'Без дрібного шрифту',
      m4: 'Пишемо по-людськи',
      m5: 'Мухамед Ads',
      m6: 'Креативна та технологічна мережа',
      m7: 'Ревізія 19.10.2026',
      m8: 'Єдиний кодекс'
    },
    en: {
      brand: 'Muhamed',
      net: 'Creative & Technology Network',
      bs1: 'Starting the codex',
      bs2: 'Main rules',
      bs3: 'Privacy rules',
      bs4: 'Codex ready',
      bhl: 'Network codex',
      edge: 'Muhamed Ads — Main rules & privacy',
      title: 'Muhamed Ads — creative & technology network | Rules',
      desc: 'Unified code of rules, privacy policy, and data protection principles for all projects across our network.',
      kick: 'One codex for the network',
      h1a: 'Main',
      h1b: 'rules',
      h1c: 'and privacy rules across the whole network',
      typed: ['Main rules: what you can and can\u2019t do', 'Privacy rules: what data we keep', 'Privacy rules: how we protect it'],
      lead: 'Main rules and privacy rules apply to every project.\nAnd the rules for every project, all in one place.',
      f1: 'projects in the network',
      f2: 'shared documents',
      f3: 'updated',
      f4: 'interface languages',
      b1: 'View the codex',
      n1: 'Main rules',
      n2: 'Privacy rules',
      n3: 'Project rules',
      n4: 'Multilink',
      n5: 'Language',
      n6: 'FAQ',
      s1: 'Gaming news and reviews',
      s2: 'Free music with drive',
      s3: 'Streams and chatting with viewers',
      s4: 'Anime reviews and picks',
      s5: 'Movies, series and cartoons',
      nm3: 'Streamus',
      m1: 'Main rules — simple and clear',
      m2: 'Privacy rules — your data under your control',
      m3: 'Zero fine print',
      m4: 'Plain human language',
      m5: 'Muhamed Ads',
      m6: 'Creative & Technology Network',
      m7: 'Updated 19.10.2026',
      m8: 'One codex'
    }
  };
  const LANGS = ['ru', 'uk', 'en'];
  const store = {
    get() { try { return localStorage.getItem('lang'); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem('lang', v); } catch (e) {} }
  };
  function apply(l) {
    if (!D[l]) l = 'ru';
    const t = D[l];
    document.documentElement.lang = l;
    document.title = t.title;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.content = t.desc;
    $$('[data-i18n]').forEach(el => {
      const v = t[el.dataset.i18n];
      if (v == null) return;
      el.textContent = v;
      if (el.hasAttribute('data-text')) el.setAttribute('data-text', v);
    });
    $$('[data-brand]').forEach(el => {
      el.innerHTML = t.brand + ' <b>Ads</b>';
      el.setAttribute('data-text', t.brand + ' Ads');
    });
    $$('.typed .t').forEach(el => { el.dataset.type = JSON.stringify(t.typed); el.dispatchEvent(new Event('retype')); });
    $$('.lang-cur').forEach(el => el.textContent = l === 'uk' ? 'UA' : l.toUpperCase());
    $$('[data-lang]').forEach(b => {
      const on = b.dataset.lang === l;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on);
    });
  }
  function set(l) { store.set(l); apply(l); document.dispatchEvent(new Event('langchange')); }
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => set(b.dataset.lang)));
  window.setLang = set;
  window.getLangDict = () => D[document.documentElement.lang] || D.ru;
  apply(store.get() || 'ru');
})();
