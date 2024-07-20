<template>
  <footer class="h-[428] bg-[var(--dark)] text-white flex justify-evenly p-16">
    <div class="flex flex-col gap-4 text-2xl">
      <RouterLink to="/locations"><i class="pi pi-map-marker" />&nbsp;&nbsp;Locations</RouterLink>
      <a><i class="pi pi-phone" />&nbsp;&nbsp;Call</a>
      <a><i class="pi pi-envelope" />&nbsp;&nbsp;Email</a>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-2xl mb-3">Services</h5>
      <a>Dry Cleaning</a>
      <a>Tailoring</a>
      <a>Wash, Dry, Fold Laundry Service</a>
      <a>Wedding & Formalwear</a>
      <a>Bedding</a>
      <a>Linens</a>
      <a>Uniforms & Lab Coats</a>
      <a>Shirts</a>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-2xl mb-3">Why Dry Clean Super Center?</h5>
      <a>Dry Cleaning</a>
      <a>Dry Cleaning</a>
      <a>Dry Cleaning</a>
      <a>Dry Cleaning</a>
      <a>Dry Cleaning</a>
      <a>Dry Cleaning</a>
      <a>Dry Cleaning</a>
    </div>
    <div class="flex flex-col gap-2 self-center text-center">
      <h1 class="text-4xl">Dry Clean Super Center</h1>
      <p>© {{ new Date().getFullYear() }} Dry Clean Super Center.</p>
      <p>All Rights Reserved.</p>
      <div>
        <RouterLink to="legal">Privacy Policy</RouterLink>
        &nbsp; | &nbsp; Made by <a href="https://reetikpatel.me" target="_blank">Reetik Patel</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
