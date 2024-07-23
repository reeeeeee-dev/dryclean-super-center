<script setup>
const links = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Locations',
    path: '/locations'
  },
  {
    text: 'Services',
    path: '/services'
  },
  {
    text: 'About Us',
    path: '/about'
  }
]
</script>

<template>
  <header class="z-50">
    <nav class="flex justify-between items-center fade-in px-8 text-[var(--dark)] h-16">
      <h1 class="float-start">Dry Clean Super Center</h1>
      <div>
        <RouterLink
          v-for="route in links"
          :key="route.path"
          :to="route.path"
          class="h-full p-4 place-content-center hover:bg-[var(--light)] rounded-full"
        >
          {{ route.text }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
