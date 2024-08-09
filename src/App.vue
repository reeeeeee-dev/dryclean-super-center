<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <HeaderComponent />
  <div
    class="mask absolute top-0 left-0 w-full -z-10 h-screen bg-[url('/iron.jpg')] bg-cover"
    v-prlx.background="{ fromBottom: true }"
  />
  <router-view v-slot="{ Component }">
    <Transition>
      <component class="main" :is="Component" />
    </Transition>
  </router-view>
  <FooterSection />
</template>

<style scoped>
.main {
  min-height: calc(100vh - 428px /* Footer */ - 64px /* Header */);
}

.mask {
  mask-image: linear-gradient(to bottom, black, transparent);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
