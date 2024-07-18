<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'
const MAPS_API_KEY = 'AIzaSyDnVPefEgyKOvXeHHPuRemarCQVurfRo9w'
const colliervilleMarker = {
  position: { lat: 35.053719522949784, lng: -89.69167306911073 }
}
const southavenMarker = {
  position: { lat: 34.964451578835465, lng: -89.92062262709256 }
}
const roughMidpoint = { lat: 35.026005785199175, lng: -89.82968555807594 }
</script>

<template>
  <div class="m-16">
    <div class="mb-16">
      <h1 class="text-7xl mb-4">Two Convenient Locations</h1>
      <p class="max-w-prose">
        At Dry Clean Super Center, we understand the importance of convenience in your busy life.
        That’s why we offer two easily accessible locations in Memphis to serve you better. No
        matter where you are in the city, you’re never far from exceptional dry cleaning services.
      </p>
    </div>

    <div class="flex">
      <div class="flex flex-col gap-3">
        <h3 class="text-3xl">Collierville</h3>
        <a href="tel:9018535540" class="text-xl hover:underline hover:cursor-pointer">
          (901) 853-5540
        </a>
        <p class="font-bold">
          520 Market Blvd <br />
          Collierville, TN 38017
        </p>
        <p>
          Monday-Friday: 7 AM to 7 PM
          <br />
          Saturday: 8 AM to 4 PM
          <br />
          Sunday: Closed
        </p>
      </div>
      <div>TODO: Insert Photo</div>
    </div>

    <hr class="border border-dashed border-[var(--secondary)] my-16" />

    <div class="flex">
      <div class="flex flex-col gap-3">
        <h3 class="text-3xl">Southaven</h3>
        <a href="tel:6628938142" class="text-xl hover:underline hover:cursor-pointer">
          (662) 893-8142
        </a>
        <p class="font-bold">
          3964 Goodman Rd E #103 <br />
          Southaven, MS 38672
        </p>
        <p>
          Monday-Friday: 7 AM to 6 PM
          <br />
          Saturday: 8 AM to 4 PM
          <br />
          Sunday: Closed
        </p>
      </div>
      <div>TODO: Insert Photo</div>
    </div>

    <br class="my-16" />

    <GoogleMap class="h-96 w-full" :zoom="11" :center="roughMidpoint" :api-key="MAPS_API_KEY">
      <Marker :options="colliervilleMarker" />
      <Marker :options="southavenMarker" />
    </GoogleMap>
  </div>
</template>
