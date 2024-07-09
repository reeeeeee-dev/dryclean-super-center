<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <HeaderComponent />
  <RouterView class="main" />
  <FooterSection />
</template>

<style scoped>
.main {
  min-height: calc(100vh - 428px /* Footer */ - 64px /* Header */);
}
</style>
