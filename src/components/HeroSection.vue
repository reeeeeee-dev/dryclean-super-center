<script setup>
import CTAButton from './CTAButton.vue'
</script>

<template>
  <div class="flex flex-row gap-40 p-16 items-center justify-evenly h-[50vh]">
    <div class="flex flex-col gap-4">
      <h3 class="mt-6 text-4xl font-bold">For all your dry cleaning needs</h3>
      <h5>Pickup & Delivery Service - 2 Convenient Locations</h5>
      <RouterLink to="/locations">
        <CTAButton class="w-max">Find Us →</CTAButton>
      </RouterLink>
    </div>
    <div class="flex justify-center">
      <kinesis-container>
        <kinesis-element :strength="5" type="rotate">
          <img src="/logo.svg" class="object-contain w-[30vw]" />
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
</template>

<style scoped>
.mask {
  mask-image: linear-gradient(to bottom, black, transparent);
}
</style>
