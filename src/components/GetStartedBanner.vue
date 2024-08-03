<script setup>
import CTAButton from '@/components/CTAButton.vue'
</script>

<template>
  <div
    class="m-8 rounded-full bg-[var(--dark)] text-[var(--light)] flex justify-center gap-16 h-16 items-center"
  >
    <h4>Connect with a garment care expert today!</h4>
    <RouterLink to="/locations">
      <CTAButton><i class="pi pi-phone" />&nbsp; Call Now</CTAButton>
    </RouterLink>
  </div>
</template>
