# Палаточный лагерь «Седой Кшурт»

![Preview](https://via.placeholder.com/1200x600.png?text=Седой+Кшурт+·+Лагерь)  
_Лендинг-презентация лагеря в Северной Осетии_

> **«Седой Кшурт»** – идеальное место для отдыха на природе! Окунитесь в атмосферу уюта и приключений среди живописных гор и чистых рек.  
> Мы предлагаем комфортное размещение в палатках, походы, мастер-классы, спортивные игры, экскурсии и вечерние костры.  
> Добро пожаловать в сердце Северной Осетии – где каждый найдёт отдых по душе!

---

## Технологии

| Стек                | Описание                                                      |
| ------------------- | ------------------------------------------------------------- |
| **Astro**           | Статическая генерация (SSG) – быстрый, лёгкий, без лишнего JS |
| **Tailwind CSS**    | Утилитарный CSS, полностью кастомизированный дизайн           |
| **PHP + PHPMailer** | Обработка формы обратной связи (SMTP Yandex)                  |
| **Vite**            | Быстрая dev-среда, проксирование `/api` в режиме разработки   |

---

## Особенности

- **Полностью статичный** сайт – `astro build` → `dist/`
- **Адаптивный** дизайн (мобайл-first)
- **Toast-уведомления** без библиотек (чистый JS + Tailwind)
- **Форма отправки** → `POST /api/send.php` (Yandex SMTP)
- **Проксирование** `/api` → `localhost:8000` **только в dev**
- **Определение среды** через `import.meta.env.DEV/PROD`

---

## Установка и запуск

```bash
# Клонировать
git clone https://github.com/ВАШ_НИК/sedoy-kshurt.git
cd sedoy-kshurt

# Установить зависимости
npm install

# Запустить PHP-сервер (в отдельном терминале)
php -S localhost:8000 -t public

# Запустить dev-сервер Astro
npm run dev
# → http://localhost:4321
npm run build
# → папка dist/
npm run preview   # локальный просмотр
```

## Структура проекта

```text
.
├── public/                     # Статические файлы (копируются в dist/ как есть)
│   └── api/
│       ├── phpmailer/          # Библиотека PHPMailer
│       └── send.php            # Обработчик формы (POST → Yandex SMTP)
│
├── src/
│   ├── assets/                 # Изображения, иконки, шрифты
│   │   ├── fonts/
│   │   │   ├── Inter/
│   │   │   └── Raleway/
│   │   ├── icons/              # SVG-иконки
│   │   └── images/
│   │       ├── cards/          # Карточки
│   │       ├── form-ill.png
│   │       ├── gallery/        # Галерея
│   │       ├── hero-ill.png
│   │       ├── logos/
│   │       ├── moments-ill.png
│   │       ├── placement-ill.png
│   │       └── rules/          # Правила
│   │
│   ├── components/             # Переиспользуемые компоненты
│   │   ├── Accordion.astro
│   │   ├── Anchor.astro
│   │   ├── AnchorButton.astro
│   │   ├── BurderMenu.astro     # Бургер-меню
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── SectionHeading.astro
│   │
│   ├── constants/              # Данные (TS)
│   │   ├── accordions.ts
│   │   ├── links.ts
│   │   └── rules.ts
│   │
│   ├── layouts/
│   │   └── MainLayout.astro    # Основной layout
│   │
│   ├── pages/
│   │   └── index.astro         # Главная страница
│   │
│   ├── sections/               # Секции страницы
│   │   ├── About.astro
│   │   ├── Conditions.astro
│   │   ├── Entertainments.astro
│   │   ├── Form.astro
│   │   ├── Gallery.astro
│   │   ├── Moments.astro
│   │   ├── Placement.astro
│   │   └── Rules.astro
│   │
│   ├── styles/
│   │   ├── fonts.css           # Подключение шрифтов
│   │   └── global.css          # Глобальные стили
│   │
│   └── utils/
│       └── image.ts            # Утилиты для работы с изображениями
│
├── astro.config.mjs            # Конфиг Astro + прокси (dev)
├── tailwind.config.js          # Настройки Tailwind
├── tsconfig.json               # TypeScript
├── package.json
└── README.md
```
