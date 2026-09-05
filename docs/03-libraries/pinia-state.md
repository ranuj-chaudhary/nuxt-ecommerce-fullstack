# Application State Management

## 1. Overview & Approach
State in this Nuxt 4 application is categorized into two tiers:
1. **Shared SSR State**: Managed via Nuxt's built-in `useState()` composable to guarantee SSR-to-client hydration parity without cross-request state pollution.
2. **Local Component State**: Managed via standard Vue `ref()` and `reactive()`.

## 2. Nuxt State Pattern (`useState`)
For globally shared client-side state across layouts and pages (e.g., Cart Drawer toggle, user session info), place composables inside `app/composables/`:

```ts
// app/composables/useCartDrawer.ts
export const useCartDrawer = () => {
  const isOpen = useState<boolean>('cart-drawer-open', () => false)

  const openCart = () => { isOpen.value = true }
  const closeCart = () => { isOpen.value = false }
  const toggleCart = () => { isOpen.value = !isOpen.value }

  return {
    isOpen,
    openCart,
    closeCart,
    toggleCart
  }
}
```