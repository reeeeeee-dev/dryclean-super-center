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
    text: 'Blog',
    path: '/blog'
  },
  {
    text: 'About Us',
    path: '/about'
  }
]
</script>

<template>
  <header class="z-50 m-8 bg-[var(--primary)] rounded-full">
    <nav class="flex justify-between items-center fade-in pr-8 text-[var(--light)] h-16">
      <RouterLink to="/" class="bg-[var(--light)] rounded-full h-full px-16 ml-[-1px]">
        <img src="/logo.svg" class="h-full p-2" />
      </RouterLink>
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
