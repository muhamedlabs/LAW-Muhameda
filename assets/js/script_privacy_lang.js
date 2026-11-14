(() => {
  const ph = s => `<mark class="ph">[${s}]</mark>`;
  const star = (w, k = 'services', first = false) => `<button type="button" class="star${first ? ' star-first' : ''}" data-pop="${k}" aria-haspopup="dialog"><span>${w}</span><i class="fa-solid fa-asterisk" aria-hidden="true"></i></button>\u2060`;

  window.PRIVACY_I18N = {
    ru: {
      htmlLang: 'ru',
      meta: {
        title: 'Правила приватности — Мухамед Ads',
        desc: 'Правила приватности сайта, ботов и сервисов креативной и технологической сети Мухамед Ads: какие данные мы получаем, зачем и какие у вас права.'
      },
      ui: {
        eyebrow: 'Кодекс сети',
        pop: { services: { k: 'Расшифровка', t: 'Что такое «сервисы»', lead: 'Всё, что мы ведём под брендом Мухамед Ads — и всё новое, что появится:', groups: [
            { h: 'Сайты', items: [{ i: 'fa-solid fa-globe', t: 'Все наши сайты' }] },
            { h: 'Соцсети и мессенджеры', items: [{ i: 'fa-brands fa-discord', t: 'Discord' }, { i: 'fa-brands fa-telegram', t: 'Telegram' }, { i: 'fa-brands fa-youtube', t: 'YouTube' }, { i: 'fa-brands fa-tiktok', t: 'TikTok' }, { i: 'fa-brands fa-instagram', t: 'Instagram' }, { i: 'fa-brands fa-facebook', t: 'Facebook' }, { i: 'fa-brands fa-x-twitter', t: 'X (Twitter)' }, { i: 'fa-brands fa-vk', t: 'ВКонтакте' }] },
            { h: 'Проекты и услуги', items: [{ i: 'fa-solid fa-robot', t: 'Боты' }, { i: 'fa-solid fa-gamepad', t: 'Игры' }, { i: 'fa-solid fa-bullhorn', t: 'Реклама и платные услуги' }] }
          ], foot: 'Сами соцсети и мессенджеры не наши. Наши — только страницы, каналы и боты в них.', ok: 'Понятно' } },
        home: 'Главная',
        rules: 'Главные правила',
        h1a: 'Правила',
        h1b: 'приватности',
        sub: 'Ваши данные — ваши.',
        sub2: 'Какие данные мы получаем, зачем они нужны, кому передаём и как вы можете их проверить, исправить или удалить. Ничего не продаём и не прячем в мелком шрифте: прозрачно и по делу.',
        boot: { stamp: '19.10.2026', brand: 'Мухамед', net: 'Креативная и технологическая сеть', bs1: 'Запуск кодекса', bs2: 'Правила приватности', bs3: 'Главные правила', bs4: 'Кодекс готов', bhl: 'Кодекс сети' },
        toc: 'Содержание',
        print: 'Печать',
        side: 'МУХАМЕД ADS — ПРАВИЛА ПРИВАТНОСТИ',
        marquee: ['Ваши данные — ваши', 'Мухамед Ads', 'Креативная и технологическая сеть', 'Ревизия 19.10.2026'],
        anchor: 'Ссылка на раздел',
        langTitle: 'Язык',
        up: 'Наверх'
      },
      sections: [
        { id: 'general', t: 'Общие положения', b: [
          { p: `Эти правила приватности объясняют, какие данные мы получаем, зачем они нужны и что вы можете с ними сделать. Они действуют для всего, что мы делаем под брендом Мухамед Ads: сайты, боты, игровые и развлекательные проекты, наш контент на видеоплатформах, реклама и платные услуги. Всё это вместе мы называем ${star('сервисами')}.` },
          { p: `<b>Коротко:</b>` },
          { ul: [`Берём только то, без чего сервисы не работают.`, `Ваши данные не продаём — никому и никогда.`, `Вы всегда можете узнать, что мы о вас храним, исправить это или удалить.`, `Правила пользования — в отдельном документе: <a href="/documents/terms">главные правила</a>.`] },
          { note: `Если что-то написано непонятно — это наша недоработка. Напишите, и мы объясним по-человечески.` }
        ]},
        { id: 'collect', t: 'Какие данные мы получаем', b: [
          { p: `Набор зависит от того, чем вы пользуетесь. Обычно это три группы:` },
          { ul: [`<b>Данные с платформы.</b> Если сервис работает через Discord, Telegram или другую платформу — публичный ID, ник, аватар и язык интерфейса.`, `<b>То, что вы пишете сами.</b> Сообщения боту, заявки, отзывы, предложения, переписка с нами, материалы для рекламы.`, `<b>Технические данные.</b> IP-адрес, тип устройства и браузера, время визита, служебные записи (логи) об ошибках и сбоях.`, `<b>Данные для оплаты.</b> Что именно оплачено, когда и на какую сумму. Номера карт мы не видим и не храним — платёж проходит через платёжную систему.`] }
        ]},
        { id: 'notcollect', t: 'Чего мы не собираем', b: [
          { ul: [`паспортные данные и документы — мы не проверяем личность;`, `пароли от ваших аккаунтов, коды из SMS и любые секретные данные;`, `точную геолокацию и содержимое вашего устройства;`, `данные о здоровье, политических взглядах, религии и другие особо чувствительные сведения — просим и не публиковать их в сервисах.`] },
          { warn: `Никто из нашей команды не попросит у вас пароль или код подтверждения. Если просят — это мошенники, не отвечайте.` }
        ]},
        { id: 'purposes', t: 'Зачем нам данные', b: [
          { ul: [`<b>Чтобы сервисы работали:</b> запускать боты, показывать ваши настройки, выдавать доступ к функциям.`, `<b>Чтобы вас защищать:</b> бороться со спамом, накруткой, взломами и мошенничеством.`, `<b>Чтобы помогать:</b> отвечать на обращения и разбирать жалобы.`, `<b>Чтобы улучшаться:</b> понимать, что ломается и чем люди пользуются чаще всего.`, `<b>Чтобы принимать оплату</b> и выполнять платные услуги и рекламные заказы.`, `<b>Чтобы соблюдать закон</b>, если этого требует государство.`] }
        ]},
        { id: 'basis', t: 'На каком основании', b: [
          { p: `Мы обрабатываем данные, только когда для этого есть причина:` },
          { ul: [`вы дали согласие — например, когда пишете нам или запускаете бота;`, `это нужно, чтобы выполнить то, о чём мы договорились (оказать услугу);`, `у нас есть законный интерес — защищать сервисы и пользователей от злоупотреблений;`, `этого требует закон.`] },
          { p: `Согласие можно отозвать в любой момент — см. раздел «Ваши права».` }
        ]},
        { id: 'cookies', t: 'Cookies и память браузера', b: [
          { p: `Сайт использует минимум: браузер запоминает выбранный вами язык, чтобы не спрашивать каждый раз. Это техническая настройка, она остаётся у вас на устройстве.` },
          { p: `Рекламных трекеров для слежки за вами по сайтам мы не ставим. Если когда-нибудь подключим аналитику, обновим правила и заметно скажем об этом.` },
          { note: `Хранилище браузера можно очистить в его настройках — сайт продолжит работать, просто заново предложит выбрать язык.` }
        ]},
        { id: 'sharing', t: 'Кому мы передаём данные', b: [
          { p: `Данные не продаются и не сдаются в аренду. Передаём их только тем, без кого не обойтись:` },
          { ul: [`<b>Платформам</b> (Discord, Telegram, YouTube и др.) — сервисы работают поверх них;`, `<b>хостингу и инфраструктуре</b>, на которых работают сайт и боты;`, `<b>платёжным системам</b> — чтобы провести оплату;`, `<b>государственным органам</b> — только по законному запросу.`] },
          { p: `Всем перечисленным мы передаём ровно столько, сколько нужно для их задачи.` }
        ]},
        { id: 'third', t: 'Сторонние платформы и ссылки', b: [
          { p: `Платформы, через которые вы заходите к нам, собирают данные по своим правилам — мы на это не влияем. Читайте их политики приватности так же внимательно, как наши.` },
          { p: `Сервисы могут вести на чужие сайты. За то, что там происходит с вашими данными, мы не отвечаем.` }
        ]},
        { id: 'storage', t: 'Сколько мы храним данные', b: [
          { p: `Столько, сколько нужно для цели, ради которой мы их получили:` },
          { ul: [`пока вы пользуетесь сервисом или пока действует услуга;`, `служебные записи — только пока они нужны для защиты и отладки;`, `сведения об оплатах — столько, сколько требует закон;`, `переписка и заявки — пока не решён вопрос и ещё немного после, на случай уточнений.`] },
          { p: `Потом мы удаляем данные или обезличиваем их так, чтобы по ним нельзя было узнать человека.` }
        ]},
        { id: 'security', t: 'Как мы их защищаем', b: [
          { p: `Соединение с сайтом защищено шифрованием, доступ к данным ограничен небольшим кругом людей, а программы и серверы мы обновляем.` },
          { p: `Идеальной защиты не бывает, и мы не будем обещать невозможное. Если случится утечка, которая может вам навредить, мы сообщим об этом и расскажем, что делать.` },
          { note: `Заметили подозрительное — уязвимость, чужие данные, странную активность? Сразу напишите нам.` }
        ]},
        { id: 'transfers', t: 'Данные за границей', b: [
          { p: `Платформы и серверы, которыми мы пользуемся, могут находиться в других странах. Поэтому ваши данные могут обрабатываться за пределами страны, где вы живёте.` },
          { p: `Мы выбираем проверенные сервисы и передаём им только необходимое.` }
        ]},
        { id: 'rights', t: 'Ваши права', b: [
          { p: `Это ваши данные, и вы решаете, что с ними происходит. Вы можете:` },
          { ul: [`узнать, какие данные о вас у нас есть, и получить их копию;`, `исправить неточные данные;`, `попросить удалить данные или ограничить их использование;`, `возразить против обработки и отозвать согласие;`, `попросить передать данные вам в удобном виде;`, `подать жалобу в орган по защите персональных данных вашей страны.`] },
          { p: `Как это сделать: напишите нам по контактам внизу. Мы можем попросить подтвердить, что запрос идёт от вас — чтобы чужой человек не получил ваши данные. Отвечаем в разумный срок, обычно в течение 30 дней.` }
        ]},
        { id: 'children', t: 'Дети', b: [
          { p: `Сервисами можно пользоваться с 13 лет (или с возраста, который установлен законом вашей страны, если он выше). Данные детей младше этого возраста мы сознательно не собираем.` },
          { p: `Если вы родитель и считаете, что ребёнок оставил нам данные, напишите — мы их удалим.` }
        ]},
        { id: 'ads', t: 'Реклама и платные услуги', b: [
          { p: `Если вы заказываете рекламу или другую платную услугу, нам нужны ваши контакты, суть заказа и материалы. Используем их только для этого заказа.` },
          { ul: [`Данные заказчиков мы не продаём и не публикуем без вашего согласия.`, `Всё, что вы отправляете для размещения, станет публичным в момент публикации — подумайте, прежде чем отправлять личное.`] }
        ]},
        { id: 'changes', t: 'Изменения правил', b: [
          { p: `Мы можем обновлять правила приватности. Свежая версия всегда на этой странице, дата последней ревизии — 19.10.2026. Если изменения важные, предупредим заранее в наших каналах. Продолжаете пользоваться сервисами после изменений — значит, принимаете новую редакцию.` }
        ]},
        { id: 'contacts', t: 'Контакты', b: [
          { p: `По любым вопросам о данных — пишите, отвечаем сами:` },
          { ul: [`Telegram-канал: <a href="https://t.me/muhamedlabs" target="_blank" rel="noopener">t.me/muhamedlabs</a>`, `Почта: <a href="mailto:partners@muhamedlabs.pro">partners@muhamedlabs.pro</a>`, `Discord: <a href="https://discord.com/users/768782555171782667" target="_blank" rel="noopener">admirall_times</a>`] }
        ]}
      ]
    },

    uk: {
      htmlLang: 'uk',
      meta: {
        title: 'Правила приватності — Мухамед Ads',
        desc: 'Правила приватності сайту, ботів і сервісів креативної та технологічної мережі Мухамед Ads: які дані ми отримуємо, навіщо та які у вас права.'
      },
      ui: {
        eyebrow: 'Кодекс мережі',
        pop: { services: { k: 'Розшифровка', t: 'Що таке «сервіси»', lead: 'Усе, що ми ведемо під брендом Мухамед Ads — і все нове, що з’явиться:', groups: [
            { h: 'Сайти', items: [{ i: 'fa-solid fa-globe', t: 'Усі наші сайти' }] },
            { h: 'Соцмережі та месенджери', items: [{ i: 'fa-brands fa-discord', t: 'Discord' }, { i: 'fa-brands fa-telegram', t: 'Telegram' }, { i: 'fa-brands fa-youtube', t: 'YouTube' }, { i: 'fa-brands fa-tiktok', t: 'TikTok' }, { i: 'fa-brands fa-instagram', t: 'Instagram' }, { i: 'fa-brands fa-facebook', t: 'Facebook' }, { i: 'fa-brands fa-x-twitter', t: 'X (Twitter)' }, { i: 'fa-brands fa-vk', t: 'ВКонтакте' }] },
            { h: 'Проєкти та послуги', items: [{ i: 'fa-solid fa-robot', t: 'Боти' }, { i: 'fa-solid fa-gamepad', t: 'Ігри' }, { i: 'fa-solid fa-bullhorn', t: 'Реклама та платні послуги' }] }
          ], foot: 'Самі соцмережі та месенджери не наші. Наші — лише сторінки, канали й боти в них.', ok: 'Зрозуміло' } },
        home: 'Головна',
        rules: 'Головні правила',
        h1a: 'Правила',
        h1b: 'приватності',
        sub: 'Ваші дані — ваші.',
        sub2: 'Які дані ми отримуємо, навіщо вони потрібні, кому передаємо і як ви можете їх перевірити, виправити чи видалити. Нічого не продаємо й не ховаємо в дрібному шрифті: прозоро й по ділу.',
        boot: { stamp: '19.10.2026', brand: 'Мухамед', net: 'Креативна та технологічна мережа', bs1: 'Запуск кодексу', bs2: 'Головні правила', bs3: 'Правила приватності', bs4: 'Кодекс готовий', bhl: 'Кодекс мережі' },
        toc: 'Зміст',
        print: 'Друк',
        side: 'МУХАМЕД ADS — ПРАВИЛА ПРИВАТНОСТІ',
        marquee: ['Ваші дані — ваші', 'Мухамед Ads', 'Креативна та технологічна мережа', 'Ревізія 19.10.2026'],
        anchor: 'Посилання на розділ',
        langTitle: 'Мова',
        up: 'Нагору'
      },
      sections: [
        { id: 'general', t: 'Загальні положення', b: [
          { p: `Ці правила приватності пояснюють, які дані ми отримуємо, навіщо вони потрібні і що ви можете з ними зробити. Вони діють для всього, що ми робимо під брендом Мухамед Ads: сайти, боти, ігрові та розважальні проєкти, наш контент на відеоплатформах, реклама і платні послуги. Усе це разом ми називаємо ${star('сервісами')}.` },
          { p: `<b>Коротко:</b>` },
          { ul: [`Беремо лише те, без чого сервіси не працюють.`, `Ваші дані не продаємо — нікому і ніколи.`, `Ви завжди можете дізнатися, що ми про вас зберігаємо, виправити це або видалити.`, `Правила користування — в окремому документі: <a href="/documents/terms">головні правила</a>.`] },
          { note: `Якщо щось написано незрозуміло — це наша недоробка. Напишіть, і ми пояснимо по-людськи.` }
        ]},
        { id: 'collect', t: 'Які дані ми отримуємо', b: [
          { p: `Набір залежить від того, чим ви користуєтеся. Зазвичай це чотири групи:` },
          { ul: [`<b>Дані з платформи.</b> Якщо сервіс працює через Discord, Telegram чи іншу платформу — публічний ID, нік, аватар і мова інтерфейсу.`, `<b>Те, що ви пишете самі.</b> Повідомлення боту, заявки, відгуки, пропозиції, листування з нами, матеріали для реклами.`, `<b>Технічні дані.</b> IP-адреса, тип пристрою та браузера, час візиту, службові записи (логи) про помилки й збої.`, `<b>Дані для оплати.</b> Що саме оплачено, коли і на яку суму. Номерів карток ми не бачимо й не зберігаємо — платіж проходить через платіжну систему.`] }
        ]},
        { id: 'notcollect', t: 'Чого ми не збираємо', b: [
          { ul: [`паспортні дані та документи — ми не перевіряємо особу;`, `паролі від ваших акаунтів, коди з SMS і будь-які секретні дані;`, `точну геолокацію та вміст вашого пристрою;`, `дані про здоров’я, політичні погляди, релігію та інші особливо чутливі відомості — просимо й не публікувати їх у сервісах.`] },
          { warn: `Ніхто з нашої команди не попросить у вас пароль чи код підтвердження. Якщо просять — це шахраї, не відповідайте.` }
        ]},
        { id: 'purposes', t: 'Навіщо нам дані', b: [
          { ul: [`<b>Щоб сервіси працювали:</b> запускати ботів, показувати ваші налаштування, видавати доступ до функцій.`, `<b>Щоб вас захищати:</b> боротися зі спамом, накруткою, зламами й шахрайством.`, `<b>Щоб допомагати:</b> відповідати на звернення та розглядати скарги.`, `<b>Щоб удосконалюватися:</b> розуміти, що ламається і чим люди користуються найчастіше.`, `<b>Щоб приймати оплату</b> і виконувати платні послуги та рекламні замовлення.`, `<b>Щоб дотримуватися закону</b>, якщо цього вимагає держава.`] }
        ]},
        { id: 'basis', t: 'На якій підставі', b: [
          { p: `Ми обробляємо дані лише тоді, коли для цього є причина:` },
          { ul: [`ви дали згоду — наприклад, коли пишете нам чи запускаєте бота;`, `це потрібно, щоб виконати те, про що ми домовилися (надати послугу);`, `у нас є законний інтерес — захищати сервіси й користувачів від зловживань;`, `цього вимагає закон.`] },
          { p: `Згоду можна відкликати будь-коли — див. розділ «Ваші права».` }
        ]},
        { id: 'cookies', t: 'Cookies і пам’ять браузера', b: [
          { p: `Сайт використовує мінімум: браузер запам’ятовує обрану вами мову, щоб не питати щоразу. Це технічне налаштування, воно залишається на вашому пристрої.` },
          { p: `Рекламних трекерів для стеження за вами по сайтах ми не ставимо. Якщо колись підключимо аналітику, оновимо правила й помітно про це скажемо.` },
          { note: `Сховище браузера можна очистити в його налаштуваннях — сайт далі працюватиме, просто знову запропонує обрати мову.` }
        ]},
        { id: 'sharing', t: 'Кому ми передаємо дані', b: [
          { p: `Дані не продаються й не здаються в оренду. Передаємо їх лише тим, без кого не обійтися:` },
          { ul: [`<b>платформам</b> (Discord, Telegram, YouTube та ін.) — сервіси працюють поверх них;`, `<b>хостингу та інфраструктурі</b>, на яких працюють сайт і боти;`, `<b>платіжним системам</b> — щоб провести оплату;`, `<b>державним органам</b> — лише за законним запитом.`] },
          { p: `Усім перерахованим ми передаємо рівно стільки, скільки потрібно для їхнього завдання.` }
        ]},
        { id: 'third', t: 'Сторонні платформи та посилання', b: [
          { p: `Платформи, через які ви заходите до нас, збирають дані за своїми правилами — ми на це не впливаємо. Читайте їхні політики приватності так само уважно, як наші.` },
          { p: `Сервіси можуть вести на чужі сайти. За те, що там відбувається з вашими даними, ми не відповідаємо.` }
        ]},
        { id: 'storage', t: 'Скільки ми зберігаємо дані', b: [
          { p: `Стільки, скільки потрібно для мети, заради якої ми їх отримали:` },
          { ul: [`доки ви користуєтеся сервісом або діє послуга;`, `службові записи — лише доки вони потрібні для захисту й налагодження;`, `відомості про оплати — стільки, скільки вимагає закон;`, `листування й заявки — доки не вирішено питання і ще трохи після, на випадок уточнень.`] },
          { p: `Потім ми видаляємо дані або знеособлюємо їх так, щоб за ними не можна було впізнати людину.` }
        ]},
        { id: 'security', t: 'Як ми їх захищаємо', b: [
          { p: `З’єднання із сайтом захищене шифруванням, доступ до даних обмежений невеликим колом людей, а програми та сервери ми оновлюємо.` },
          { p: `Ідеального захисту не буває, і ми не обіцятимемо неможливого. Якщо станеться витік, який може вам зашкодити, ми повідомимо про це й розповімо, що робити.` },
          { note: `Помітили підозріле — вразливість, чужі дані, дивну активність? Одразу напишіть нам.` }
        ]},
        { id: 'transfers', t: 'Дані за кордоном', b: [
          { p: `Платформи й сервери, якими ми користуємося, можуть перебувати в інших країнах. Тому ваші дані можуть оброблятися за межами країни, де ви живете.` },
          { p: `Ми обираємо перевірені сервіси й передаємо їм лише необхідне.` }
        ]},
        { id: 'rights', t: 'Ваші права', b: [
          { p: `Це ваші дані, і ви вирішуєте, що з ними відбувається. Ви можете:` },
          { ul: [`дізнатися, які дані про вас у нас є, і отримати їхню копію;`, `виправити неточні дані;`, `попросити видалити дані або обмежити їх використання;`, `заперечити проти обробки та відкликати згоду;`, `попросити передати дані вам у зручному вигляді;`, `подати скаргу до органу із захисту персональних даних вашої країни.`] },
          { p: `Як це зробити: напишіть нам за контактами внизу. Ми можемо попросити підтвердити, що запит від вас, — щоб сторонній не отримав ваші дані. Відповідаємо в розумний строк, зазвичай протягом 30 днів.` }
        ]},
        { id: 'children', t: 'Діти', b: [
          { p: `Сервісами можна користуватися з 13 років (або з віку, встановленого законом вашої країни, якщо він вищий). Дані дітей молодшого віку ми свідомо не збираємо.` },
          { p: `Якщо ви з батьків і вважаєте, що дитина залишила нам дані, напишіть — ми їх видалимо.` }
        ]},
        { id: 'ads', t: 'Реклама та платні послуги', b: [
          { p: `Якщо ви замовляєте рекламу чи іншу платну послугу, нам потрібні ваші контакти, суть замовлення та матеріали. Використовуємо їх лише для цього замовлення.` },
          { ul: [`Дані замовників ми не продаємо й не публікуємо без вашої згоди.`, `Усе, що ви надсилаєте для розміщення, стане публічним у момент публікації — подумайте, перш ніж надсилати особисте.`] }
        ]},
        { id: 'changes', t: 'Зміни правил', b: [
          { p: `Ми можемо оновлювати правила приватності. Свіжа версія завжди на цій сторінці, дата останньої ревізії — 19.10.2026. Якщо зміни важливі, попередимо заздалегідь у наших каналах. Продовжуєте користуватися сервісами після змін — отже, приймаєте нову редакцію.` }
        ]},
        { id: 'contacts', t: 'Контакти', b: [
          { p: `З будь-яких питань про дані — пишіть, відповідаємо самі:` },
          { ul: [`Telegram-канал: <a href="https://t.me/muhamedlabs" target="_blank" rel="noopener">t.me/muhamedlabs</a>`, `Пошта: <a href="mailto:partners@muhamedlabs.pro">partners@muhamedlabs.pro</a>`, `Discord: <a href="https://discord.com/users/768782555171782667" target="_blank" rel="noopener">admirall_times</a>`] }
        ]}
      ]
    },

    en: {
      htmlLang: 'en',
      meta: {
        title: 'Privacy rules — Muhamed Ads',
        desc: 'Privacy rules for the website, bots and services of the Muhamed Ads creative and technology network: what data we receive, why, and what rights you have.'
      },
      ui: {
        eyebrow: 'Network code',
        pop: { services: { k: 'Explained', t: 'What are “services”', lead: 'Everything we run under the Muhamed Ads brand — and anything new that appears:', groups: [
            { h: 'Websites', items: [{ i: 'fa-solid fa-globe', t: 'All our websites' }] },
            { h: 'Social networks and messengers', items: [{ i: 'fa-brands fa-discord', t: 'Discord' }, { i: 'fa-brands fa-telegram', t: 'Telegram' }, { i: 'fa-brands fa-youtube', t: 'YouTube' }, { i: 'fa-brands fa-tiktok', t: 'TikTok' }, { i: 'fa-brands fa-instagram', t: 'Instagram' }, { i: 'fa-brands fa-facebook', t: 'Facebook' }, { i: 'fa-brands fa-x-twitter', t: 'X (Twitter)' }, { i: 'fa-brands fa-vk', t: 'VKontakte' }] },
            { h: 'Projects and offers', items: [{ i: 'fa-solid fa-robot', t: 'Bots' }, { i: 'fa-solid fa-gamepad', t: 'Games' }, { i: 'fa-solid fa-bullhorn', t: 'Advertising and paid offers' }] }
          ], foot: 'The networks and messengers themselves are not ours. Only our pages, channels and bots on them are.', ok: 'Got it' } },
        home: 'Home',
        rules: 'Main rules',
        h1a: 'Privacy',
        h1b: 'rules',
        sub: 'Your data stays yours.',
        sub2: 'What data we receive, why we need it, who gets it and how you can check, correct or delete it. We sell nothing and hide nothing in fine print: transparent and to the point.',
        boot: { stamp: '19.10.2026', brand: 'Muhamed', net: 'Creative & technology network', bs1: 'Starting the codex', bs2: 'Main rules', bs3: 'Privacy rules', bs4: 'Codex ready', bhl: 'Network codex' },
        toc: 'Contents',
        print: 'Print',
        side: 'MUHAMED ADS — PRIVACY RULES',
        marquee: ['Your data stays yours', 'Muhamed Ads', 'Creative & technology network', 'Revision 19.10.2026'],
        anchor: 'Link to section',
        langTitle: 'Language',
        up: 'Back to top'
      },
      sections: [
        { id: 'general', t: 'General provisions', b: [
          { p: `These privacy rules explain which data we receive, why we need it and what you can do with it. They cover everything we run under the Muhamed Ads brand: websites, bots, game and entertainment projects, our video-platform content, advertising and paid services. Together we call all of that the ${star('services')}.` },
          { p: `<b>In short:</b>` },
          { ul: [`We take only what the services need to work.`, `We never sell your data — to anyone.`, `You can always find out what we keep about you, fix it or delete it.`, `The rules of use are in a separate document: the <a href="/documents/terms">main rules</a>.`] },
          { note: `If something is unclear, that is on us, not you. Write to us and we will explain it in plain words.` }
        ]},
        { id: 'collect', t: 'What data we receive', b: [
          { p: `It depends on what you use. Usually it falls into four groups:` },
          { ul: [`<b>Platform data.</b> If a service works through Discord, Telegram or another platform — your public ID, nickname, avatar and interface language.`, `<b>What you write yourself.</b> Messages to a bot, applications, reviews, suggestions, conversations with us, materials for advertising.`, `<b>Technical data.</b> IP address, device and browser type, visit time, and service logs about errors and failures.`, `<b>Payment data.</b> What was paid for, when and how much. We never see or store card numbers — the payment goes through the payment provider.`] }
        ]},
        { id: 'notcollect', t: 'What we do not collect', b: [
          { ul: [`passport data and documents — we do not verify identity;`, `passwords for your accounts, SMS codes or any secret credentials;`, `precise location or the contents of your device;`, `health, political, religious or other especially sensitive information — please do not post it in the services either.`] },
          { warn: `Nobody on our team will ever ask for your password or a confirmation code. If someone does, they are a scammer — do not reply.` }
        ]},
        { id: 'purposes', t: 'Why we need data', b: [
          { ul: [`<b>To make the services work:</b> run bots, show your settings, grant access to features.`, `<b>To protect you:</b> fight spam, cheating, hacking and fraud.`, `<b>To help:</b> answer requests and look into complaints.`, `<b>To improve:</b> see what breaks and what people use most.`, `<b>To take payment</b> and deliver paid services and ad orders.`, `<b>To obey the law</b> when the state requires it.`] }
        ]},
        { id: 'basis', t: 'On what basis', b: [
          { p: `We process data only when there is a reason to:` },
          { ul: [`you gave consent — for example, by writing to us or starting a bot;`, `it is needed to do what we agreed on (to provide a service);`, `we have a legitimate interest — protecting the services and users from abuse;`, `the law requires it.`] },
          { p: `You can withdraw consent at any time — see “Your rights”.` }
        ]},
        { id: 'cookies', t: 'Cookies and browser storage', b: [
          { p: `The website uses the bare minimum: your browser remembers the language you chose so we do not ask every time. It is a technical setting and stays on your device.` },
          { p: `We do not install advertising trackers that follow you across websites. If we ever add analytics, we will update the rules and tell you clearly.` },
          { note: `You can clear browser storage in its settings — the site keeps working and simply asks you to choose a language again.` }
        ]},
        { id: 'sharing', t: 'Who we share data with', b: [
          { p: `Data is never sold or rented out. We share it only with those we cannot work without:` },
          { ul: [`<b>platforms</b> (Discord, Telegram, YouTube, etc.) — the services run on top of them;`, `<b>hosting and infrastructure</b> that run the website and bots;`, `<b>payment providers</b> — to process a payment;`, `<b>public authorities</b> — only on a lawful request.`] },
          { p: `Each of them gets only as much as its task requires.` }
        ]},
        { id: 'third', t: 'Third-party platforms and links', b: [
          { p: `The platforms you use to reach us collect data under their own rules — we have no influence over that. Read their privacy policies as carefully as ours.` },
          { p: `The services may link to other websites. We are not responsible for what happens to your data there.` }
        ]},
        { id: 'storage', t: 'How long we keep data', b: [
          { p: `As long as the purpose we collected it for requires:` },
          { ul: [`while you use a service or a paid service is active;`, `service logs — only while needed for protection and debugging;`, `payment records — as long as the law requires;`, `conversations and requests — until the matter is solved, and a little longer in case of follow-up questions.`] },
          { p: `After that we delete the data or anonymize it so it cannot identify a person.` }
        ]},
        { id: 'security', t: 'How we protect it', b: [
          { p: `The connection to the website is encrypted, access to data is limited to a small circle of people, and we keep software and servers up to date.` },
          { p: `No protection is perfect and we will not promise the impossible. If a leak happens that could harm you, we will tell you and explain what to do.` },
          { note: `Noticed something suspicious — a vulnerability, someone else’s data, strange activity? Write to us right away.` }
        ]},
        { id: 'transfers', t: 'Data abroad', b: [
          { p: `The platforms and servers we use may be located in other countries, so your data may be processed outside the country where you live.` },
          { p: `We choose proven services and pass them only what is necessary.` }
        ]},
        { id: 'rights', t: 'Your rights', b: [
          { p: `It is your data and you decide what happens to it. You can:` },
          { ul: [`find out what data we hold about you and get a copy;`, `correct inaccurate data;`, `ask us to delete data or restrict its use;`, `object to processing and withdraw consent;`, `ask for your data in a portable form;`, `complain to the data-protection authority of your country.`] },
          { p: `How: write to us using the contacts below. We may ask you to confirm the request is really yours — so nobody else can get your data. We reply within a reasonable time, usually within 30 days.` }
        ]},
        { id: 'children', t: 'Children', b: [
          { p: `The services can be used from age 13 (or the age set by the law of your country, if higher). We do not knowingly collect data from younger children.` },
          { p: `If you are a parent and think your child left us data, write to us — we will delete it.` }
        ]},
        { id: 'ads', t: 'Advertising and paid services', b: [
          { p: `If you order advertising or another paid service, we need your contacts, the essence of the order and your materials. We use them only for that order.` },
          { ul: [`We do not sell or publish customer data without your consent.`, `Anything you send for placement becomes public once published — think twice before sending anything personal.`] }
        ]},
        { id: 'changes', t: 'Changes to the rules', b: [
          { p: `We may update the privacy rules. The latest version is always on this page; the date of the last revision is 19.10.2026. If a change is important, we will warn you in advance in our channels. If you keep using the services after changes, you accept the new version.` }
        ]},
        { id: 'contacts', t: 'Contacts', b: [
          { p: `For any question about data — write to us, we answer personally:` },
          { ul: [`Telegram channel: <a href="https://t.me/muhamedlabs" target="_blank" rel="noopener">t.me/muhamedlabs</a>`, `Email: <a href="mailto:partners@muhamedlabs.pro">partners@muhamedlabs.pro</a>`, `Discord: <a href="https://discord.com/users/768782555171782667" target="_blank" rel="noopener">admirall_times</a>`] }
        ]}
      ]
    }
  };
  const RX = { ru: /(?<![\p{L}>])([Сс]ервис\p{L}*)/gu, uk: /(?<![\p{L}>])([Сс]ервіс\p{L}*)/gu, en: /(?<![\p{L}>"])([Ss]ervices)(?![\p{L}])/g };
  Object.keys(RX).forEach(l => {
    const w = t => t.replace(RX[l], m => star(m));
    window.PRIVACY_I18N[l].sections.forEach(sec => sec.b.forEach(x => {
      ['p', 'note', 'warn'].forEach(k => { if (x[k]) x[k] = w(x[k]); });
      if (x.ul) x.ul = x.ul.map(w);
    }));
  });
})();
