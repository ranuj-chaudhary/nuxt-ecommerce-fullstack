<template>
  <label :for="for" :class="['block text-sm font-medium text-slate-700', labelClass]">{{ label }}</label>
</template>

<script lang="ts" setup>
interface Props {
  label?: string
  labelClass?: string
  for?: string
}

withDefaults(defineProps<Props>(), {
  label: 'Label Name',
  labelClass: '',
  for: ''
})
</script>

<style></style>
