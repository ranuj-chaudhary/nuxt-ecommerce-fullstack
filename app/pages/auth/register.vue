<template>
    <div class="max-w-md mx-auto mt-10 p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h2 class="text-2xl font-bold text-gray-900 text-center mb-6">Create an Account</h2>
      
      <form @submit.prevent="handleRegister" class="space-y-5 mb-4">
        <!-- Name Field -->
        <BaseInput :errors="v$.name.$errors" v-model="form.name" label="Name" type="text" required />
        <BaseInput :errors="v$.email.$errors" v-model="form.email" label="Email" type="email" required />
        <BaseInput :errors="v$.password.$errors" v-model="form.password" label-class="capitalize" label="password" type="text" required />
        <BaseInput :errors="v$.confirmPassword.$errors" v-model="form.confirmPassword" label="Confirm Password" type="text" required />
  
        <!-- Submit Button -->
        <button 
          type="submit" 
          class="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? 'Registering...' : 'Register' }}
        </button>
      </form>
      <div class="text-center">
        <p class="text-sm text-slate-500">
          Already have an account?
          <NuxtLink
            to="/auth/login"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
            >Sign in</NuxtLink
          >
        </p>
      </div>
    
    </div>
    
  </template>
  
  <script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

  definePageMeta({
    layout: 'auth',
  })
  
  const form = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const rules = {
  name:{required},
  email: { required, email },
  password: { required },
  confirmPassword:{required}
};


  const v$ = useVuelidate(rules, form);

const showPassword = ref(false);
const isLoading = ref(false);
const errorMessage = ref("");

const handleRegister = async () => {
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