# Testing Strategy & Quality Assurance

## 1. Verification Layers
* **Static Verification**: TypeScript compile checks via Nuxt types (`npm run postinstall`).
* **Component Verification**: Validating reactive states, props, and emitted events.
* **End-to-End Flow**: Validating multi-step journeys (e.g., Add to Cart -> Checkout).

## 2. Form Testing Rules
When testing forms utilizing Vuelidate:
* Ensure validation error states appear only after the field is touched/blurred (`v$.<field>.$touch`).
* Verify submit handlers are prevented when `v$.$validate()` evaluates to `false`.
* Ensure server validation payloads display cleanly on top-level alerts.

## 3. Pre-Commit Smoke Test
Always run:
```bash
npm run build