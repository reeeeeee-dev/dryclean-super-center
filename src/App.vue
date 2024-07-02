<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/locations">Locations</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
