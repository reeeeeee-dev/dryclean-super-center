<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const reviews = [
  {
    author: 'John',
    text: 'Very courteous and professional staff and especially Barbara! Love the automation and the text notification that your clothes are ready! My clothes were ready as promised!'
  },
  {
    author: 'Sean',
    text: "This is an awesome cleaner. I'm so glad I found it.  Never had any problems with the people or service.  I would recommend them to everyone."
  },
  {
    author: 'Katie',
    text: 'Great customer service, quick turnaround and easy to drop off and pick up. Highly recommend!'
  }
]
</script>

<template>
  <div
    class="m-8 rounded-3xl p-16 pb-24 bg-[url('/fabric.jpg')] bg-cover"
    v-prlx.background="{ fromBottom: true }"
  >
    <h1 class="text-5xl font-bold mb-16">Hear from our customers</h1>
    <div class="w-96 m-auto">
      <carousel wrap-around pause-autoplay-on-hover :items-to-show="1" autoplay="5000">
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
