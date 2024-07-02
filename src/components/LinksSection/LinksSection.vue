<script setup>
import LinkComponent from '@/components/LinksSection/LinkComponent.vue'
</script>

<template>
  <div class="bg-dark p-12 flex flex-row align-middle justify-evenly text-center w-screen">
    <LinkComponent title="Locations" icon="pi-map">2 Convenient Locations</LinkComponent>
    <LinkComponent class="border-l-2" title="Pickup & Delivery" icon="pi-truck">
      Stuff
    </LinkComponent>
    <LinkComponent class="border-l-2" title="Services" icon="pi-shopping-bag">Stuff</LinkComponent>
    <LinkComponent class="border-l-2" title="About Us" icon="pi-user">Stuff</LinkComponent>
  </div>
</template>
