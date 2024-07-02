<script setup>
defineProps(['title', 'icon'])
</script>

<template>
  <div class="text-center w-full flex flex-col gap-4">
    <i class="pi text-9xl" :class="icon" />
    <h1 class="text-4xl">{{ title }}</h1>
    <slot />
  </div>
</template>
