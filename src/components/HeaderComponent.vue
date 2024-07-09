<template>
  <header>
    <div>
      <nav class="flex justify-end items-center px-8 bg-[var(--dark)] text-white h-16">
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
      </nav>
    </div>
  </header>
</template>
