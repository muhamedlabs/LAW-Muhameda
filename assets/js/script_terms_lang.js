(() => {
  const ph = s => `<mark class="ph">[${s}]</mark>`;
  const star = (w, k = 'services', first = false) => `<button type="button" class="star${first ? ' star-first' : ''}" data-pop="${k}" aria-haspopup="dialog"><span>${w}</span><i class="fa-solid fa-asterisk" aria-hidden="true"></i></button>\u2060`;

  window.TERMS_I18N = {
    ru: {
      htmlLang: 'ru',
      meta: {
        title: 'Главные правила — Мухамед Ads',
        desc: 'Главные правила сайта, ботов и сервисов креативной и технологической сети Мухамед Ads.'
      },
      ui: {
        eyebrow: 'Кодекс сети',
        pop: { services: { k: 'Расшифровка', t: 'Что такое «сервисы»', lead: 'Всё, что мы ведём под брендом Мухамед Ads — и всё новое, что появится:', groups: [
            { h: 'Сайты', items: [{ i: 'fa-solid fa-globe', t: 'Все наши сайты' }] },
            { h: 'Соцсети и мессенджеры', items: [{ i: 'fa-brands fa-discord', t: 'Discord' }, { i: 'fa-brands fa-telegram', t: 'Telegram' }, { i: 'fa-brands fa-youtube', t: 'YouTube' }, { i: 'fa-brands fa-tiktok', t: 'TikTok' }, { i: 'fa-brands fa-instagram', t: 'Instagram' }, { i: 'fa-brands fa-facebook', t: 'Facebook' }, { i: 'fa-brands fa-x-twitter', t: 'X (Twitter)' }, { i: 'fa-brands fa-vk', t: 'ВКонтакте' }] },
            { h: 'Проекты и услуги', items: [{ i: 'fa-solid fa-robot', t: 'Боты' }, { i: 'fa-solid fa-gamepad', t: 'Игры' }, { i: 'fa-solid fa-bullhorn', t: 'Реклама и платные услуги' }] }
          ], foot: 'Сами соцсети и мессенджеры не наши. Наши — только страницы, каналы и боты в них.', ok: 'Понятно' } },
        home: 'Главная',
        privacy: 'Правила приватности',
        h1a: 'Главные',
        h1b: 'правила',
        sub: 'Одни правила. Без юридической воды.',
        sub2: 'Что можно, чего нельзя и как мы бережём ваши данные — всё о сайте, ботах и других проектах сети. Без мелкого шрифта и скрытых подвохов: честно и по делу.',
        boot: { stamp: '19.10.2026', brand: 'Мухамед', net: 'Креативная и технологическая сеть', bs1: 'Запуск кодекса', bs2: 'Главные правила', bs3: 'Правила приватности', bs4: 'Кодекс готов', bhl: 'Кодекс сети' },
        toc: 'Содержание',
        print: 'Печать',
        side: 'МУХАМЕД ADS — ГЛАВНЫЕ ПРАВИЛА',
        marquee: ['Пишем по-человечески', 'Мухамед Ads', 'Креативная и технологическая сеть', 'Ревизия 19.10.2026'],
        anchor: 'Ссылка на раздел',
        langTitle: 'Язык',
        up: 'Наверх'
      },
      sections: [
        { id: 'general', t: 'Общие положения', b: [
          { p: `Эти правила — для всего, что мы делаем под брендом Мухамед Ads: сайты, боты, игровые и развлекательные проекты, наш контент на видеоплатформах, реклама и платные услуги. Всё это вместе мы называем ${star('сервисами')}.` },
          { p: `<b>Коротко:</b>` },
          { ul: [`Пользуйтесь честно и не вредите другим.`, `Мы стараемся изо всех сил, но «идеально всегда» не обещаем.`, `Всё про ваши данные — в отдельном документе: <a href="/documents/privacy">правила приватности</a>.`, `Любой вопрос можно задать нам — контакты в конце страницы.`] },
          { note: `Если какой-то пункт непонятен — это наша недоработка, а не ваша. Напишите нам, и мы перепишем его человеческим языком.` }
        ]},
        { id: 'acceptance', t: 'Принятие правил', b: [
          { p: `Зашли на сайт, запустили бота или оплатили услугу — значит, вы согласились с этими правилами и с <a href="/documents/privacy">правилами приватности</a>. Пользуетесь — принимаете.` },
          { p: `Не согласны? Просто не пользуйтесь сервисами. Никаких обид.` },
          { note: `У отдельных проектов могут быть свои дополнительные правила. Если они спорят с этими правилами — главнее эти правила.` }
        ]},
        { id: 'age', t: 'Возраст и допуск', b: [
          { p: `Пользоваться сервисами можно с 13 лет. Если закон вашей страны требует больше — работает он. Если вам нет 18, нужно согласие родителей или законных представителей.` },
          { p: `Паспорт мы не просим. Но если выяснится, что вы не подходите по возрасту, мы можем закрыть доступ.` }
        ]},
        { id: 'services', t: 'Как всё работает', b: [
          { p: `Мы делаем всё, чтобы сервисы работали быстро и без сбоев. Но они предоставляются «как есть»: мы не обещаем, что не будет перерывов, ошибок и что каждая функция останется навсегда.` },
          { p: `Живые проекты меняются: что-то появляется, что-то ломается, а что-то мы убираем, когда оно себя изжило. Мы чиним и улучшаем — это нормально.` }
        ]},
        { id: 'account', t: 'Аккаунт и безопасность', b: [
          { p: `Многие сервисы работают через ваш аккаунт на других платформах. Аккаунт ваш, поэтому и отвечаете за него вы — в том числе за всё, что сделано от вашего имени.` },
          { ul: [`Не передавайте доступ к аккаунту другим людям.`, `Давайте только правдивые данные — и только там, где без них не обойтись.`, `Заметили взлом или утечку? Сразу напишите нам: чем раньше, тем лучше.`] }
        ]},
        { id: 'duties', t: 'Что нужно делать', b: [
          { ul: [`Соблюдайте закон своей страны и правила платформ, на которых работают сервисы.`, `Уважайте других участников и нас.`, `Не выдавайте себя за другого человека — и тем более за нас.`, `Нашли баг или нарушение — сообщите, а не пользуйтесь этим.`] }
        ]},
        { id: 'prohibited', t: 'Что запрещено', b: [
          { p: `В сервисах нельзя:` },
          { ul: [`взламывать, обходить защиту, перегружать и любым способом ломать их;`, `запускать ботов и скрипты для накрутки, спама и злоупотребления функциями;`, `публиковать вредный, незаконный, оскорбительный или обманный контент, а также любой контент, который нарушает права детей;`, `заниматься фишингом, мошенничеством и собирать чужие данные без согласия;`, `копировать и перепродавать материалы проектов без письменного разрешения.`] },
          { warn: `За нарушение этого раздела доступ могут закрыть сразу, без предупреждения.` }
        ]},
        { id: 'content', t: 'Ваш контент', b: [
          { p: `Всё, что вы публикуете в сервисах (сообщения, изображения, заявки, идеи), остаётся вашим. Вы лишь разрешаете нам показывать и хранить это — ровно настолько, насколько нужно для работы проекта.` },
          { p: `Вы подтверждаете, что имеете право это публиковать и что контент не нарушает чужие права. Если он нарушает правила — мы можем его удалить.` }
        ]},
        { id: 'ip', t: 'Авторские права', b: [
          { p: `Дизайн, тексты, графика, код, логотипы и другие материалы сервисов принадлежат нам или используются на законных основаниях. Название и логотип «Мухамед Ads» — наши.` },
          { p: `Использовать наши материалы можно только с разрешения автора и со ссылкой на источник. Думаете, что мы нарушили ваши права? Напишите — разберёмся.` }
        ]},
        { id: 'paid', t: 'Реклама и платные услуги', b: [
          { p: `Часть услуг (реклама, размещение, подписки, доступ к функциям) платная. Цену и условия мы называем до оплаты — никаких сюрпризов потом.` },
          { ul: [`Услуга, полностью оказанная вам, возврату не подлежит.`, `Если мы не оказали услугу по своей вине — вернём деньги или сделаем это позже.`, `Налоги и комиссии платёжных систем платит пользователь, если не сказано иначе.`, `Реклама не должна нарушать закон и раздел «Что запрещено».`] }
        ]},
        { id: 'third', t: 'Сторонние платформы и ссылки', b: [
          { p: `Сервисы работают поверх сторонних платформ и могут вести на чужие сайты. Что там происходит, мы не контролируем и за это не отвечаем.` },
          { p: `Там действуют свои правила — читайте их так же внимательно, как наши.` }
        ]},
        { id: 'liability', t: 'Ответственность', b: [
          { p: `Насколько это разрешает закон, мы не отвечаем за косвенные убытки, упущенную выгоду, потерю данных, сбои сторонних платформ и действия других пользователей.` },
          { p: `Вы пользуетесь сервисами на свой риск. При этом мы не ограничиваем права, которые закон ограничить не позволяет.` }
        ]},
        { id: 'termination', t: 'Блокировка и выход', b: [
          { p: `Если вы нарушите правила, мы можем ограничить или закрыть вам доступ к сервисам. Считаете, что блокировка ошибочна? Напишите — рассмотрим.` },
          { p: `Вы тоже можете уйти в любой момент и попросить удалить ваши данные (см. <a href="/documents/privacy#rights">правила приватности</a>).` }
        ]},
        { id: 'law', t: 'Закон и споры', b: [
          { p: `Мы работаем в Украине — на этом всё. Соблюдать нужно закон страны, в которой вы живёте. Эти правила его не заменяют и не ограничивают права, которые он вам даёт (например, защиту персональных данных и прав потребителей).` },
          { p: `Споры мы сначала пытаемся решить переговорами. Не вышло — тогда в порядке, который предусматривает закон вашей страны.` },
          { note: `Доступность отдельных функций и услуг может зависеть от страны. Следить, чтобы пользование сервисами не нарушало местные законы, нужно вам.` }
        ]},
        { id: 'changes', t: 'Изменения правил', b: [
          { p: `Мы можем обновлять правила. Свежая версия всегда на этой странице, дата последней ревизии — 19.10.2026. Продолжаете пользоваться сервисами после изменений — значит, принимаете новую редакцию.` }
        ]},
        { id: 'contacts', t: 'Контакты', b: [
          { p: `Есть вопрос, жалоба или идея? Пишите — отвечаем сами:` },
          { ul: [`Telegram-канал: <a href="https://t.me/muhamedlabs" target="_blank" rel="noopener">t.me/muhamedlabs</a>`, `Почта: <a href="mailto:partners@muhamedlabs.pro">partners@muhamedlabs.pro</a>`, `Discord: <a href="https://discord.com/users/768782555171782667" target="_blank" rel="noopener">admirall_times</a>`] }
        ]}
      ]
    },

    uk: {
      htmlLang: 'uk',
      meta: {
        title: 'Головні правила — Мухамед Ads',
        desc: 'Головні правила сайту, ботів і сервісів креативної та технологічної мережі Мухамед Ads.'
      },
      ui: {
        eyebrow: 'Кодекс мережі',
        pop: { services: { k: 'Розшифровка', t: 'Що таке «сервіси»', lead: 'Усе, що ми ведемо під брендом Мухамед Ads — і все нове, що з’явиться:', groups: [
            { h: 'Сайти', items: [{ i: 'fa-solid fa-globe', t: 'Усі наші сайти' }] },
            { h: 'Соцмережі та месенджери', items: [{ i: 'fa-brands fa-discord', t: 'Discord' }, { i: 'fa-brands fa-telegram', t: 'Telegram' }, { i: 'fa-brands fa-youtube', t: 'YouTube' }, { i: 'fa-brands fa-tiktok', t: 'TikTok' }, { i: 'fa-brands fa-instagram', t: 'Instagram' }, { i: 'fa-brands fa-facebook', t: 'Facebook' }, { i: 'fa-brands fa-x-twitter', t: 'X (Twitter)' }, { i: 'fa-brands fa-vk', t: 'ВКонтакте' }] },
            { h: 'Проєкти та послуги', items: [{ i: 'fa-solid fa-robot', t: 'Боти' }, { i: 'fa-solid fa-gamepad', t: 'Ігри' }, { i: 'fa-solid fa-bullhorn', t: 'Реклама та платні послуги' }] }
          ], foot: 'Самі соцмережі та месенджери не наші. Наші — лише сторінки, канали й боти в них.', ok: 'Зрозуміло' } },
        home: 'Головна',
        privacy: 'Правила приватності',
        h1a: 'Головні',
        h1b: 'правила',
        sub: 'Одні правила. Без юридичної води.',
        sub2: 'Що можна, чого не можна і як ми бережемо ваші дані — усе про сайт, ботів та інші проєкти мережі. Без дрібного шрифту й прихованих підступів: чесно й по ділу.',
        boot: { stamp: '19.10.2026', brand: 'Мухамед', net: 'Креативна та технологічна мережа', bs1: 'Запуск кодексу', bs2: 'Головні правила', bs3: 'Правила приватності', bs4: 'Кодекс готовий', bhl: 'Кодекс мережі' },
        toc: 'Зміст',
        print: 'Друк',
        side: 'МУХАМЕД ADS — ГОЛОВНІ ПРАВИЛА',
        marquee: ['Пишемо по-людськи', 'Мухамед Ads', 'Креативна та технологічна мережа', 'Ревізія 19.10.2026'],
        anchor: 'Посилання на розділ',
        langTitle: 'Мова',
        up: 'Нагору'
      },
      sections: [
        { id: 'general', t: 'Загальні положення', b: [
          { p: `Ці правила — для всього, що ми робимо під брендом Мухамед Ads: сайти, боти, ігрові та розважальні проєкти, наш контент на відеоплатформах, реклама та платні послуги. Усе це разом ми називаємо ${star('сервісами')}.` },
          { p: `<b>Коротко:</b>` },
          { ul: [`Користуйтеся чесно й не шкодьте іншим.`, `Ми стараємося з усіх сил, але «ідеально завжди» не обіцяємо.`, `Усе про ваші дані — в окремому документі: <a href="/documents/privacy">правила приватності</a>.`, `Будь-яке питання можна поставити нам — контакти в кінці сторінки.`] },
          { note: `Якщо якийсь пункт незрозумілий — це наша недоробка, а не ваша. Напишіть нам, і ми перепишемо його людською мовою.` }
        ]},
        { id: 'acceptance', t: 'Прийняття правил', b: [
          { p: `Зайшли на сайт або запустили бота — отже, прочитали й прийняли ці правила та <a href="/documents/privacy">правила приватності</a>. Не згодні? Тоді просто не користуйтеся сервісами — без образ.` },
          { note: `В окремих проєктів можуть бути власні додаткові правила. Якщо вони суперечать цим правилам — головніші ці правила.` }
        ]},
        { id: 'age', t: 'Вік і допуск', b: [
          { p: `Користуватися сервісами можна з 13 років — або з віку, якого вимагає закон вашої країни, якщо він вищий. Якщо вам немає 18, потрібна згода батьків або законних представників.` },
          { p: `Паспорт ми не просимо, але якщо з’ясується, що вікову вимогу порушено, ми можемо обмежити доступ.` }
        ]},
        { id: 'services', t: 'Як усе працює', b: [
          { p: `Ми робимо все, щоб усе працювало швидко й без збоїв, але сервіси надаються «як є»: без обіцянок вічного аптайму та ідеальних функцій.` },
          { p: `Щось може ламатися, з’являтися й зникати. Для живих проєктів це нормально: ми полагодимо, покращимо, а інколи приберемо те, що себе віджило.` }
        ]},
        { id: 'account', t: 'Акаунт і безпека', b: [
          { p: `Частина сервісів працює через ваш акаунт на інших платформах. Він ваш — і ви відповідаєте за його безпеку та за все, що робиться від вашого імені.` },
          { ul: [`Не віддавайте доступ до акаунта іншим людям.`, `Вказуйте лише правдиві дані — там, де вони взагалі потрібні.`, `Помітили злом або витік? Одразу напишіть нам — чим раніше, тим краще.`] }
        ]},
        { id: 'duties', t: 'Обов’язки користувача', b: [
          { ul: [`Дотримуйтеся законодавства країни, в якій ви живете, та правил платформ, на яких працюють сервіси.`, `Будьте шанобливі до учасників спільноти та до нас.`, `Не видавайте себе за іншу людину, а тим паче за нас.`, `Знайшли баг чи порушення — повідомте, а не використовуйте у своїх цілях.`] }
        ]},
        { id: 'prohibited', t: 'Заборонені дії', b: [
          { ul: [`Злом, обхід захисту, перевантаження та будь-які спроби зламати їх.`, `Боти й скрипти для накрутки, спаму та зловживання функціями.`, `Шкідливий, незаконний, образливий чи оманливий контент — і будь-який контент, що порушує права дітей.`, `Фішинг, шахрайство та збір чужих даних без згоди.`, `Копіювання й перепродаж матеріалів проєктів без письмового дозволу.`] },
          { warn: `За порушення цього розділу доступ можуть закрити одразу, без попередження.` }
        ]},
        { id: 'content', t: 'Користувацький контент', b: [
          { p: `Усе, що ви публікуєте в сервісах (повідомлення, зображення, заявки, ідеї), залишається вашим. Нам ви надаєте невиключне право показувати й зберігати це рівно в тому обсязі, який потрібен для роботи проєкту.` },
          { p: `Ви підтверджуєте, що маєте право публікувати цей контент і він не порушує чужих прав. Якщо він порушує правила — ми можемо його видалити.` }
        ]},
        { id: 'ip', t: 'Інтелектуальна власність', b: [
          { p: `Дизайн, тексти, графіка, код, логотипи та інші матеріали сервісів належать нам або використовуються на законних підставах. Назва й логотип «Мухамед Ads» — наші.` },
          { p: `Брати матеріали можна лише з дозволу автора та з посиланням на джерело. Вважаєте, що ми зачепили ваші права? Напишіть — ми все перевіримо.` }
        ]},
        { id: 'paid', t: 'Реклама та платні послуги', b: [
          { p: `Частина послуг (реклама, розміщення, підписки, доступ до функцій) платна. Вартість і умови ми називаємо до оплати — жодних сюрпризів після.` },
          { ul: [`Послуга, надана в повному обсязі, поверненню не підлягає.`, `Якщо ми не надали послугу з власної вини — повернемо гроші або зробимо її пізніше.`, `Податки й комісії платіжних систем сплачує користувач, якщо не вказано інше.`, `Реклама не повинна порушувати закон і розділ «Заборонені дії».`] }
        ]},
        { id: 'third', t: 'Сторонні платформи та посилання', b: [
          { p: `Сервіси живуть поверх сторонніх платформ і можуть вести на чужі ресурси. Що там відбувається — ми не контролюємо й за це не відповідаємо.` },
          { p: `Там діють їхні власні умови й правила — читайте їх так само уважно, як наші.` }
        ]},
        { id: 'liability', t: 'Відмова від гарантій і відповідальність', b: [
          { p: `Наскільки це дозволяє закон, ми не відповідаємо за непрямі збитки, упущену вигоду, втрату даних, збої сторонніх платформ і дії інших користувачів.` },
          { p: `Ви користуєтеся сервісами на власний ризик. Водночас ми не обмежуємо права, які закон обмежити не дозволяє.` }
        ]},
        { id: 'termination', t: 'Блокування та припинення', b: [
          { p: `Якщо ви порушите правила, ми можемо обмежити або закрити доступ до сервісів. Вважаєте блокування помилковим? Напишіть — розглянемо звернення.` },
          { p: `Ви теж можете піти будь-коли й попросити видалити свої дані (див. <a href="/documents/privacy#rights">правила приватності</a>).` }
        ]},
        { id: 'law', t: 'Застосовне право та спори', b: [
          { p: `Ми працюємо в Україні — на цьому все. Закон, який потрібно дотримуватися, — це законодавство країни, в якій ви живете. Ці правила його не замінюють і не обмежують права, які він вам надає (наприклад, захист персональних даних і прав споживачів).` },
          { p: `Спори ми спершу намагаємося вирішити переговорами; якщо не вдалося — вони розглядаються в порядку, який передбачає закон країни, в якій ви живете.` },
          { note: `Доступність окремих функцій і послуг може залежати від країни, де ви перебуваєте. Ви самі відповідаєте за те, щоб користування сервісами не порушувало місцеві закони.` }
        ]},
        { id: 'changes', t: 'Зміни правил', b: [
          { p: `Ми можемо оновлювати правила. Свіжа версія завжди на цій сторінці, дата останньої ревізії — 19.10.2026. Продовжуєте користуватися сервісами після змін — отже, приймаєте нову редакцію.` }
        ]},
        { id: 'contacts', t: 'Контакти', b: [
          { p: `Є питання, скарга чи ідея? Пишіть — відповідаємо самі:` },
          { ul: [`Telegram-канал: <a href="https://t.me/muhamedlabs" target="_blank" rel="noopener">t.me/muhamedlabs</a>`, `Пошта: <a href="mailto:partners@muhamedlabs.pro">partners@muhamedlabs.pro</a>`, `Discord: <a href="https://discord.com/users/768782555171782667" target="_blank" rel="noopener">admirall_times</a>`] }
        ]}
      ]
    },

    en: {
      htmlLang: 'en',
      meta: {
        title: 'Main Rules — Muhamed Ads',
        desc: 'The Main Rules for the website, bots and services of the Muhamed Ads creative and technology network.'
      },
      ui: {
        eyebrow: 'Network code',
        pop: { services: { k: 'Explained', t: 'What are “services”', lead: 'Everything we run under the Muhamed Ads brand — and anything new that appears:', groups: [
            { h: 'Websites', items: [{ i: 'fa-solid fa-globe', t: 'All our websites' }] },
            { h: 'Social networks and messengers', items: [{ i: 'fa-brands fa-discord', t: 'Discord' }, { i: 'fa-brands fa-telegram', t: 'Telegram' }, { i: 'fa-brands fa-youtube', t: 'YouTube' }, { i: 'fa-brands fa-tiktok', t: 'TikTok' }, { i: 'fa-brands fa-instagram', t: 'Instagram' }, { i: 'fa-brands fa-facebook', t: 'Facebook' }, { i: 'fa-brands fa-x-twitter', t: 'X (Twitter)' }, { i: 'fa-brands fa-vk', t: 'VKontakte' }] },
            { h: 'Projects and offers', items: [{ i: 'fa-solid fa-robot', t: 'Bots' }, { i: 'fa-solid fa-gamepad', t: 'Games' }, { i: 'fa-solid fa-bullhorn', t: 'Advertising and paid offers' }] }
          ], foot: 'The networks and messengers themselves are not ours. Only our pages, channels and bots on them are.', ok: 'Got it' } },
        home: 'Home',
        privacy: 'Privacy Rules',
        h1a: 'Main',
        h1b: 'Rules',
        sub: 'One ruleset. No legal fog.',
        sub2: 'What is allowed, what is not and how we protect your data — everything about the website, our bots and the other projects. No fine print, no hidden catches: honest and to the point.',
        boot: { stamp: '19.10.2026', brand: 'Muhamed', net: 'Creative & Technology Network', bs1: 'Starting the codex', bs2: 'Main rules', bs3: 'Privacy rules', bs4: 'Codex ready', bhl: 'Network codex' },
        toc: 'Contents',
        print: 'Print',
        side: 'MUHAMED ADS — MAIN RULES',
        marquee: ['Written like a human', 'Muhamed Ads', 'Creative & Technology Network', 'Revision 19.10.2026'],
        anchor: 'Link to section',
        langTitle: 'Language',
        up: 'Back to top'
      },
      sections: [
        { id: 'general', t: 'General provisions', b: [
          { p: `These rules cover everything we do under the Muhamed Ads brand: websites, bots, game and entertainment projects, our content on video platforms, and advertising and paid offers. All of it together we call ${star('services')}.` },
          { p: `<b>In short:</b>` },
          { ul: [`Use things fairly and don’t harm others.`, `We try our best, but we don’t promise “perfect all the time”.`, `Everything about your data lives in a separate document: the <a href="/documents/privacy">privacy rules</a>.`, `You can ask us anything — contacts are at the bottom of the page.`] },
          { note: `If a clause is unclear, that is our fault, not yours. Write to us and we will rewrite it in plain language.` }
        ]},
        { id: 'acceptance', t: 'Acceptance of the rules', b: [
          { p: `Visited the site or started a bot? Then you have read and accepted these rules and the <a href="/documents/privacy">privacy rules</a>. Don’t agree? Simply don’t use the services — no hard feelings.` },
          { note: `Individual projects may have extra rules of their own. If they clash with these rules, these rules win.` }
        ]},
        { id: 'age', t: 'Age and eligibility', b: [
          { p: `You may use the services from age 13, or from the minimum age set by the law of your country if it is higher. If you are under 18, you need the consent of a parent or legal guardian.` },
          { p: `We don’t ask for your passport, but if it turns out the age requirement was not met, we may restrict access.` }
        ]},
        { id: 'services', t: 'How it all works', b: [
          { p: `We do our best to keep everything fast and stable, but the services are provided “as is” — no promises of endless uptime or flawless features.` },
          { p: `Things may break, appear or disappear. That is normal for living projects: we fix, improve and sometimes retire what has run its course.` }
        ]},
        { id: 'account', t: 'Account and security', b: [
          { p: `Some services run through your account on other platforms. It is yours — and so is the responsibility for keeping it safe and for everything done in your name.` },
          { ul: [`Do not hand your account over to anyone else.`, `Give truthful details only — and only where they are needed.`, `Spotted a hack or a leak? Tell us right away — the sooner the better.`] }
        ]},
        { id: 'duties', t: 'User obligations', b: [
          { ul: [`Follow the laws of the country where you live and the rules of the platforms the services run on.`, `Be respectful to community members and to us.`, `Do not pretend to be someone else — least of all us.`, `Found a bug or a violation? Report it instead of exploiting it.`] }
        ]},
        { id: 'prohibited', t: 'Prohibited conduct', b: [
          { ul: [`Hacking, bypassing protection, overloading or any attempt to break them.`, `Bots and scripts for boosting, spam or abusing features.`, `Harmful, illegal, abusive or deceptive content — and any content that violates the rights of children.`, `Phishing, fraud and collecting other people’s data without consent.`, `Copying and reselling project materials without written permission.`] },
          { warn: `Breaking this section can get your access shut off immediately, without warning.` }
        ]},
        { id: 'content', t: 'User content', b: [
          { p: `Everything you post in the services (messages, images, applications, ideas) stays yours. You give us a non-exclusive right to display and store it, only as far as the project needs to work.` },
          { p: `You confirm that you have the right to post it and that it does not infringe anyone else’s rights. If it breaks the rules, we may remove it.` }
        ]},
        { id: 'ip', t: 'Intellectual property', b: [
          { p: `The design, text, graphics, code, logos and other materials of the services belong to us or are used lawfully. The “Muhamed Ads” name and logo are ours.` },
          { p: `Materials may be used only with the author’s permission and with credit to the source. Think we touched your rights? Write to us — we will look into it.` }
        ]},
        { id: 'paid', t: 'Advertising and paid services', b: [
          { p: `Some things we offer (advertising, placements, subscriptions, access to features) are paid. We state the price and terms before you pay — no surprises afterwards.` },
          { ul: [`Anything already delivered in full is not refundable.`, `If we fail to deliver what you paid for through our own fault, we will refund you or deliver it later.`, `Taxes and payment-system fees are paid by the user unless stated otherwise.`, `Advertising must not break the law or the “Prohibited conduct” section.`] }
        ]},
        { id: 'third', t: 'Third-party platforms and links', b: [
          { p: `The services run on top of third-party platforms and may link to other people’s resources. We don’t control what happens there and are not responsible for it.` },
          { p: `Their own terms and rules apply there — read them as carefully as ours.` }
        ]},
        { id: 'liability', t: 'Disclaimer and liability', b: [
          { p: `To the extent permitted by law, we are not liable for indirect damages, lost profit, data loss, third-party platform outages or the actions of other users.` },
          { p: `You use the services at your own risk. This does not limit any rights that the law does not allow to be limited.` }
        ]},
        { id: 'termination', t: 'Suspension and termination', b: [
          { p: `If you break the rules, we may restrict or shut off access to the services. Think a block was a mistake? Write to us and we will review it.` },
          { p: `You can leave at any time too, and ask us to delete your data (see the <a href="/documents/privacy#rights">privacy rules</a>).` }
        ]},
        { id: 'law', t: 'Governing law and disputes', b: [
          { p: `We operate in Ukraine — and that is all. The law you must follow is the law of the country where you live. These rules do not replace it and do not limit the rights it gives you (for example, data protection and consumer rights).` },
          { p: `We first try to settle disputes through negotiation; if that fails, they are handled in the manner provided by the law of the country where you live.` },
          { note: `Availability of some features and paid options may depend on the country you are in. You are responsible for making sure your use of the services does not break local law.` }
        ]},
        { id: 'changes', t: 'Changes to the rules', b: [
          { p: `We may update the rules. The latest version is always on this page; the date of the last revision is 19.10.2026. If you keep using the services after changes, you accept the new version.` }
        ]},
        { id: 'contacts', t: 'Contacts', b: [
          { p: `Got a question, a complaint or an idea? Write to us — we answer personally:` },
          { ul: [`Telegram channel: <a href="https://t.me/muhamedlabs" target="_blank" rel="noopener">t.me/muhamedlabs</a>`, `Email: <a href="mailto:partners@muhamedlabs.pro">partners@muhamedlabs.pro</a>`, `Discord: <a href="https://discord.com/users/768782555171782667" target="_blank" rel="noopener">admirall_times</a>`] }
        ]}
      ]
    }
  };
  const RX = { ru: /(?<![\p{L}>])([Сс]ервис\p{L}*)/gu, uk: /(?<![\p{L}>])([Сс]ервіс\p{L}*)/gu, en: /(?<![\p{L}>"])([Ss]ervices)(?![\p{L}])/g };
  Object.keys(RX).forEach(l => {
    const w = t => t.replace(RX[l], m => star(m));
    window.TERMS_I18N[l].sections.forEach(sec => sec.b.forEach(x => {
      ['p', 'note', 'warn'].forEach(k => { if (x[k]) x[k] = w(x[k]); });
      if (x.ul) x.ul = x.ul.map(w);
    }));
  });
})();
