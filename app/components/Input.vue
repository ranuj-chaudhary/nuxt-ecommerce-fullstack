<template>
    <input
      id="email"
      v-model="model"
      required
      :type="type"
      autocomplete="email"
      :placeholder="placeholder"
      :class="['w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition', inputClass]"
    /> 
</template>

<script setup lang="ts">
interface Props {
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  placeholder?: string;
  inputClass?: string;
  required?: boolean;
  errors?: object;
}
    
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  labelClass: '',
  inputClass: '',
  required: false,
});

const model = defineModel<string>();

</script>

<style lang="scss" scoped>

</style>