<script setup>
import { reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import BaseInput from "~/components/BaseInput.vue";

definePageMeta({
  layout: "auth",
});

const form = reactive({
  email: "",
  password: "",
  rememberMe: false,
});

const rules = {
  email: { required, email }, // Matches state.email
  password: { required }, // Matches state.password
  rememberMe: { required },
};

const v$ = useVuelidate(rules, form);

const showPassword = ref(false);
const isLoading = ref(false);
const errorMessage = ref("");

const handleLogin = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  //   try {
  //     // Replace with your actual auth API call
  //     console.log("Logging in with:", form);
  //     await new Promise((resolve) => setTimeout(resolve, 1500));

  //     alert('registration successfull')
  //     // Example redirection / state update:
  //     // router.push('/dashboard')
  //   } catch (err) {
  //     errorMessage.value = "Invalid email or password. Please try again.";
  //   } finally {
  //     isLoading.value = false;
  //   }
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8"
  >
    <div
      class="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
    >
      <div class="text-center">
        <div
          class="mx-auto h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md"
        >
          <svg
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 class="mt-4 text-2xl font-bold tracking-tight text-slate-900">
          Welcome back
        </h2>
        <p class="mt-1 text-sm text-slate-500">
          Please enter your credentials to sign in.
        </p>
      </div>

      <form class="mt-8 space-y-5" @submit.prevent="handleLogin">
        <BaseInput :errors="v$.email.$errors" v-model="form.email" label="Email address" type="email" required />
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium text-slate-700"
              >Password</label
            >
            <a
              href="#"
              class="text-xs font-semibold text-indigo-600 hover:text-indigo-500"
              >Forgot password?</a
            >
          </div>
          <div class="mt-1 relative">
            <BaseInput
              :errors="v$.password.$errors"
              v-model="form.password"
              label="Password"
              type="password"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              <svg
                v-if="!showPassword"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                v-else
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="remember-me"
            v-model="form.rememberMe"
            type="checkbox"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded cursor-pointer"
          />
          <label
            for="remember-me"
            class="ml-2 block text-sm text-slate-600 cursor-pointer"
          >
            Remember me for 30 days
          </label>
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          @submit.prevent="handleLogin"
          class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <span v-if="isLoading" class="flex items-center gap-2">
            <svg
              class="animate-spin h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Signing in...
          </span>
          <span v-else>Sign in</span>
        </button>
      </form>

      <div class="text-center">
        <p class="text-sm text-slate-500">
          Don't have an account?
          <NuxtLink
            to="/auth/register"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
            >Sign up</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>


