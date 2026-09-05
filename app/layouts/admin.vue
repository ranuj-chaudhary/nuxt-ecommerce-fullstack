<script lang="ts" setup>
const layoutName = ref('Admin Layout')
</script>

<template>
  <div class="bg-slate-500 h-screen">
    <h1>{{ layoutName }}</h1>
    <slot />
  </div>
</template>

<style lang="postcss" scoped></style>
