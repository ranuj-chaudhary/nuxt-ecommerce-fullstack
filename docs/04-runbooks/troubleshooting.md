# Troubleshooting & Diagnostics

## 1. Hydration Mismatch Warnings

### Symptom

Console shows: `[Vue warn]: Hydration node mismatch on...`

### Root Cause

The server rendered DOM does not match the client DOM generated on the first render pass. Common causes:

- Checking `typeof window !== 'undefined'` inside templates or setup functions to toggle layout blocks.
- Rendering dates/timestamps directly with `new Date().toLocaleTimeString()` without a stable seed.
- Browser extensions altering the DOM before Vue initializes.

### Fix

Wrap client-only visual blocks inside `<ClientOnly>`:

````vue
<template>
  <div>
    <ClientOnly>
      <UserCartTimestamp />
      <template #fallback>
        <span class="text-slate-400">Loading timestamp...</span>
      </template>
    </ClientOnly>
  </div>
</template>
2. Tailwind CSS Styles Not Applying ### Symptom Styles are not being applied to elements as
expected. ### Root Cause * Tailwind CSS v4 is configured via `@tailwindcss/vite` and does not use a
`tailwind.config.js` file. Any theme adjustments must be made in `app/assets/css/main.css` using the
`@theme` directive. * Ensure that the `main.css` file is imported in `app.vue` or the relevant
layout file. ### Fix * Verify that `app/assets/css/main.css` contains the correct Tailwind
directives: ```css @theme { --color-primary: #3b82f6; }
````
