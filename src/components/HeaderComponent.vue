<template>
  <header class="bg-[var(--dark)] shadow-xl sticky top-0 z-50">
    <nav class="flex justify-between items-center fade-in px-8 text-[var(--light)] h-16">
      <h1 class="float-start">Dry Clean Super Center</h1>
      <div>
        <RouterLink class="h-full p-4 place-content-center hover:bg-[var(--tertiary)]" to="/">
          Home
        </RouterLink>
        <RouterLink
          class="h-full p-4 place-content-center hover:bg-[var(--tertiary)] transition-colors"
          to="/locations"
        >
          Locations
        </RouterLink>
        <RouterLink
          class="h-full p-4 place-content-center hover:bg-[var(--tertiary)] transition-colors"
          to="/services"
        >
          Services
        </RouterLink>
        <RouterLink
          class="h-full p-4 place-content-center hover:bg-[var(--tertiary)] transition-colors"
          to="/about"
        >
          About Us
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
