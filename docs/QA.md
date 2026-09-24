# Проверка реализации

Проверки выполнялись 17 сентября 2026 в локальном браузере Codex.

## Проверено

- CSS-композиция и горизонтальное переполнение: 375, 390, 430, 768, 1024, 1440, 1920 px. `scrollWidth` соответствует `clientWidth`, заголовки не выходят за viewport.
- На мобильной ширине — 0 pin-spacer, все четыре описания деталей видимы.
- После возврата на desktop — ровно 4 закреплённые сцены. При resize не накапливаются pin-spacer.
- ScrollTrigger: герой масштабируется, SVG-орбита рисуется, выноски меняются, macro и типографический переход закрепляются.
- Новые reveal: маски двух моделей проходят от скрытого положения до `inset(0)`; macro раскрывается от узкой полосы до полной сцены.
- Меню: открытие, переход по ссылке, закрытие по Escape и возврат фокуса.
- Модели: выбор второй модели меняет `aria-pressed` и живое описание; поддерживаются pointer, focus и click.
- Прямая ссылка `#collection` после загрузки возвращает секцию на ожидаемый отступ 96 px даже после создания закреплённых сцен.
- Все внутренние ссылки ведут на существующие ID, CTA ведут на основной сайт КОСМОС.
- Production export собран и обслужен отдельным локальным HTTP-сервером.

## Reduced motion

В локальном, не публикуемом QA-fixture смоделирован результат `matchMedia` для `prefers-reduced-motion: reduce`. Проверено: 0 закреплённых сцен, opacity героя и трёх глав = 1, все четыре описания видимы. CSS-ветка reduced-motion отключает переходы и smooth scroll. Системные настройки пользователя не изменялись. Устройство с фактически включённой системной опцией отдельно не использовалось.

## Ограничения

- Исходные часы в коллаже имеют около 160 × 290 px на объект. Увеличение исходников в macro выявляет недостаток деталей.
- ИИ-варианты 948 × 1659 px подготовлены отдельно. Они реконструируют мелкие детали и требуют решения о допустимости для прототипа; см. IMAGE-ENHANCEMENT.md.
- Lint, TypeScript и production build выполняются повторно после последних изменений перед публикацией.

## 2026-09-23 — independent concept update

- lint, TypeScript and Next production/static export: PASS.
- Built export inspected in the in-app Chromium browser at localhost:3001.
- Responsive widths 375, 390, 430, 768, 1024, 1440, 1920: no horizontal overflow.
- Desktop has four pin wrappers; resizing to phone/tablet removes all wrappers.
- Mobile: all narrative text and all detail panels opacity 1, visibility visible,
  no text clip-path, including after fast multi-screen downward scroll.
- Desktop detail sequence: first, second, third and fourth panels visible at
  their respective positions; last panel stays visible through exit.
  Reverse scroll correctly restores earlier panel.
- Single 20-screen scroll reaches footer with final heading opacity 1.
- Deep link #details and #collection resolve after fonts/pin layout.
- Mobile selection of MODEL 02 updates description and aria-pressed states.
- No console errors/warnings in the tested production interactions.
- All rendered anchor links are internal; no old watch image references.
- Reduced-motion branch checked with ignored local QA injection of matchMedia
  and equivalent CSS rules: zero pins, all text/models visible. This is a
  controlled fixture, not a real OS preference or physical-device test.
- Actual Yandex, Safari and physical phone performance were not measured.

## 2026-09-23 — remove empty desktop transition tails

- Hero → history and COSMOS → final chapter now share the last viewport of
  each pinned scene. Incoming sections fade in before outgoing visuals disappear.
- Original hero scale ×4 and word scale ×6 are retained, with direct scrubbing.
- At 1440×900, sampled both transitions before/during/after completion and in
  reverse. At hero end, history heading top=173px and chapter opacity=1;
  at word end, final chapter heading top=163px and opacity=1.
- Same completed states verified at 1920×1080; no horizontal overflow.
- At 1024×768, direct #limited navigation lands at completed transition,
  section top≈0px and opacity=1 (scroll-padding offset compensated).
- Resize to 390×844 removes all four pins and restores both section margins
  to 0px, opacity=1, visibility=visible. Reduced-motion fixture likewise passes.
- lint, typecheck and production build: PASS. No runtime errors observed.

## 2026-09-24 — product detail connector anchors

- Replaced viewport-relative endpoints with anchors inside the watch image.
- Image-space targets: dial 41%/53%, case rim 25.7%/48%, hand pivot 49.8%/48.1%,
  lower strap 50%/72%. Anchors inherit the watch rotation and translation.
- SVG paths update after timeline rendering and ScrollTrigger refresh; pathLength=1
  keeps drawing progress independent of changing path length.
- Visually checked case, hands and strap; dial checked during reverse scroll.
- At viewport widths 1024, 1440 and 1920, measured endpoint-to-anchor error <1px.
- Resize to 390 removes pinning and hides all four connector SVGs as before.
- npm run lint, npm run typecheck, npm run build: PASS.

## 2026-09-24 — AntoDev demo banner

- Integrated supplied component and stylesheet; entire banner links to AntoDev.
- Click verified: separate tab at https://antodev.vercel.app/; site tab preserved.
- Close + scroll: banner remains absent; reload restores it.
- At 375px: banner height and header offset both 48px; no horizontal overflow.
- Desktop offset corrected to 44px to match padding plus close-button height.
- lint, typecheck and production build passed.
