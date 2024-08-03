<script setup>
import LinkComponent from '@/components/LinksSection/LinkComponent.vue'
import CTAButton from '@/components/CTAButton.vue'
</script>

<template>
  <div class="m-8 rounded-3xl bg-dark p-12 flex flex-row align-middle justify-evenly text-center">
    <LinkComponent title="Locations" icon="pi-map">
      2 Convenient Locations
      <RouterLink to="/locations">
        <CTAButton class="w-max self-center">Find Us →</CTAButton>
      </RouterLink>
    </LinkComponent>
    <LinkComponent class="border-l-2" title="Pickup & Delivery" icon="pi-truck">
      Stuff
    </LinkComponent>
    <LinkComponent class="border-l-2" title="Services" icon="pi-shopping-bag">Stuff</LinkComponent>
    <LinkComponent class="border-l-2" title="About Us" icon="pi-user">Stuff</LinkComponent>
  </div>
</template>
