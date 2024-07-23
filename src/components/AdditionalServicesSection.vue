<script setup>
const services = [
  {
    text: 'Dry Cleaning',
    img: 'https://picsum.photos/200?seed=1',
    link: '/'
  },
  {
    text: 'Tailoring',
    img: 'https://picsum.photos/200?seed=2',
    link: '/'
  },
  {
    text: 'Wash, Dry, Fold Laundry Service',
    img: 'https://picsum.photos/200?seed=3',
    link: '/'
  },
  {
    text: 'Wedding & Formalwear',
    img: 'https://picsum.photos/200?seed=4',
    link: '/'
  },
  {
    text: 'Bedding',
    img: 'https://picsum.photos/200?seed=5',
    link: '/'
  },
  {
    text: 'Linens',
    img: 'https://picsum.photos/200?seed=6',
    link: '/'
  },
  {
    text: 'Shirts',
    img: 'https://picsum.photos/200?seed=7',
    link: '/'
  },
  {
    text: 'Uniforms & Lab Coats',
    img: 'https://picsum.photos/200?seed=8',
    link: '/'
  }
]
</script>

<template>
  <div class="m-16 text-center">
    <h1 class="text-7xl font-bold">Our Services</h1>
    <h4 class="mt-8 text-4xl">Let our experts take care of all your garmet cleaning needs!</h4>

    <div class="mt-32 grid grid-cols-4 gap-y-24">
      <kinesis-container v-for="service in services" :key="service.text">
        <div class="text-4xl flex flex-col gap-4 items-center">
          <kinesis-element :strength="10" type="depth">
            <img class="size-32 rounded-full border" :src="service.img" />
          </kinesis-element>
          <span>{{ service.text }}</span>
        </div>
      </kinesis-container>
    </div>
  </div>
</template>
