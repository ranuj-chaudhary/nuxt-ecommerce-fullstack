<template>
  <div>
    <Label v-if="label" :labelClass="labelClass">{{ label }}</Label>
    <FormErrors :errors="errors">
      <Input v-model="model" :type="type" :placeholder="placeholder" :inputClass="inputClass" />
    </FormErrors>
  </div>
</template>

<script lang="ts" setup>
import FormErrors from './FormErrors.vue'
import Label from './Label.vue'

interface Props {
  password?: string
  placeholder?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  label: string
  labelClass?: string
  inputClass?: string
  required?: boolean
  errors?: object
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  labelClass: '',
  inputClass: '',
  required: false
})

const model = defineModel<string>()
</script>

<style></style>
