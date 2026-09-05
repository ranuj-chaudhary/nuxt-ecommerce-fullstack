<template>
  <div class="mt-1" :class="{ error: errors.length }">
    <div :class="{ error: errors.length }">
      <slot></slot>
      <div class="input-errors" v-for="error of errors" :key="error.$uid">
        <div class="error-msg text-red-800">{{ error.$message }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(['errors'])
</script>
