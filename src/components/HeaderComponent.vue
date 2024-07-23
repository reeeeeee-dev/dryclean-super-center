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
  <header class="z-50 m-8 bg-[var(--dark)] rounded-full">
    <nav class="flex justify-between items-center fade-in px-8 text-[var(--light)] h-16">
      <h1 class="float-start font-bold text-xl">Dry Clean Super Center</h1>
      <div>
        <RouterLink
          v-for="route in links"
          :key="route.path"
          :to="route.path"
          class="h-full p-4 place-content-center hover:bg-[var(--light)] hover:text-[var(--dark)] transition-colors rounded-full"
        >
          {{ route.text }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
