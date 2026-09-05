# Icons & UI System

## 1. Overview
Icon rendering is powered by `@nuxt/icon` (`^2.5.1`) with the offline collection `@iconify-json/streamline` (`^1.2.5`).

## 2. Usage Pattern
The `<Icon />` component is auto-imported globally by Nuxt.

```vue
<template>
  <div class="flex items-center gap-3">
    <!-- Streamline Iconify icon syntax -->
    <Icon class="w-6 h-6 text-slate-800" name="streamline:shopping-cart-1"/>
    <Icon class="w-5 h-5 text-green-600" name="streamline:check-circle-1"/>
  </div>
</template>
```