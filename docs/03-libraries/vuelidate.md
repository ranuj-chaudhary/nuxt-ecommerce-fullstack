# Form Validation with Vuelidate (Composition API)

## 1. Overview

We handle client-side form validation using `@vuelidate/core` and `@vuelidate/validators`. We adhere to the **Alternative Composition API syntax**, passing reactive state and computed validation rules directly into `useVuelidate()`.

## 2. Dependencies

Defined in `package.json`:

- `@vuelidate/core: ^2.0.3`
- `@vuelidate/validators: ^2.0.4`

[Vuelidate Composition API Examples](https://vuelidate-next.netlify.app/examples.html#composition-api)

## 3. Standard Implementation Pattern

```vue
<!-- app/components/auth/LoginForm.vue -->
<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

const formState = reactive({
  email: '',
  password: ''
})

const rules = computed(() => ({
  email: {
    required: helpers.withMessage('Email is required', required),
    email: helpers.withMessage('Enter a valid email address', email)
  },
  password: {
    required: helpers.withMessage('Password cannot be blank', required),
    minLength: helpers.withMessage('Password must be at least 8 characters', minLength(8))
  }
}))

const v$ = useVuelidate(rules, formState)

const onSubmit = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) return

  // Proceed with submission logic
  console.log('Valid credentials payload:', formState)
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-4 max-w-sm">
    <div>
      <label class="block text-sm font-medium text-slate-700">Email</label>
      <input
        v-model="formState.email"
        type="email"
        @blur="v$.email.$touch"
        class="mt-1 block w-full rounded border px-3 py-2 text-sm"
        :class="v$.email.$error ? 'border-red-500' : 'border-slate-300'"
      />
      <p v-if="v$.email.$error" class="text-xs text-red-600 mt-1">
        {{ v$.email.$errors[0]?.$message }}
      </p>
    </div>

    <div>
      <label class="block text-sm font-medium text-slate-700">Password</label>
      <input
        v-model="formState.password"
        type="password"
        @blur="v$.password.$touch"
        class="mt-1 block w-full rounded border px-3 py-2 text-sm"
        :class="v$.password.$error ? 'border-red-500' : 'border-slate-300'"
      />
      <p v-if="v$.password.$error" class="text-xs text-red-600 mt-1">
        {{ v$.password.$errors[0]?.$message }}
      </p>
    </div>

    <button
      type="submit"
      class="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700"
    >
      Sign In
    </button>
  </form>
</template>
```
