<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const reviews = [
  {
    author: 'John Smith',
    text: 'hello'
  },
  {
    author: 'John Smith',
    text: 'hello'
  },
  {
    author: 'John Smith',
    text: 'hello'
  }
]
</script>

<template>
  <!-- TODO: Add Parallax -->
  <img class="absolute -z-10 overflow-hidden h-96 w-full object-cover" src="/fabric.jpg" />
  <div class="p-16 pb-24">
    <h1 class="text-6xl mb-16">Hear from our customers</h1>
    <div class="w-96 m-auto">
      <carousel :items-to-show="1">
        <Slide class="max-w-96" v-for="slide in reviews" :key="slide">
          <div class="text-left">
            <p>{{ slide.text }}</p>
            <em>- {{ slide.author }}</em>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>
