# Engineering Coding Guidelines

## 1. Vue & Nuxt Best Practices

- **Single File Components (SFC)**: Always use `<script setup lang="ts">`.
- **Imports**: Leverage Nuxt 4 auto-imports for Vue APIs (`ref`, `computed`, `watch`) and application composables. Only manually import external third-party helpers that Nuxt does not scan.
- **Component Names**: Use multi-word PascalCase for components (e.g., `ProductCard.vue`, `CheckoutDrawer.vue`).

## 2. Styling with Tailwind CSS v4

Tailwind v4 is integrated via `@tailwindcss/vite`.

- **CSS Entrypoint**: `app/assets/css/main.css` utilizes standard `@import "tailwindcss";` syntax.
- **No `tailwind.config.js`**: Configure theme adjustments directly in `app/assets/css/main.css` using the `@theme` directive.
- **Class Organization**: Utility classes must be grouped logically:
  1. Layout & Display (`flex`, `grid`, `block`)
  2. Positioning (`relative`, `absolute`, `inset-0`)
  3. Spacing & Sizing (`w-full`, `p-4`, `m-2`)
  4. Typography (`text-sm`, `font-bold`, `text-slate-900`)
  5. Visuals & States (`bg-white`, `border`, `hover:bg-slate-50`)

## 3. TypeScript Guidelines

- Strict typing is required. Never use `any` unless wrapping an untyped legacy payload.
- Define reusable API interfaces and form contracts inside a dedicated `app/types/` folder.
