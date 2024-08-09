<script setup>
const services = [
  {
    title: 'Dry Cleaning',
    img: 'https://picsum.photos/200?seed=1',
    link: '/dry-cleaning'
  },
  {
    title: 'Tailoring',
    img: 'https://picsum.photos/200?seed=2',
    link: '/tailoring'
  },
  {
    title: 'Wash, Dry, Fold Laundry Service',
    img: 'https://picsum.photos/200?seed=3',
    link: '/laundry'
  },
  {
    title: 'Wedding & Formalwear',
    img: 'https://picsum.photos/200?seed=4',
    link: '/formalwear'
  },
  {
    title: 'Bedding',
    img: 'https://picsum.photos/200?seed=5',
    link: '/bedding'
  },
  {
    title: 'Linens',
    img: 'https://picsum.photos/200?seed=6',
    link: '/'
  },
  {
    title: 'Shirts',
    img: 'https://picsum.photos/200?seed=7',
    link: '/'
  },
  {
    title: 'Uniforms & Lab Coats',
    img: 'https://picsum.photos/200?seed=8',
    link: '/'
  }
]
</script>

<template>
  <div class="m-8 p-8 text-center bg-dark shadow-lg rounded-3xl">
    <h1 class="text-7xl font-bold">Our Services</h1>
    <h4 class="mt-8 text-3xl font-light">Let our experts take care of all your garmet needs!</h4>

    <div class="mt-32 grid grid-cols-4 gap-y-24 gap-x-8 max-lg:grid-cols-3 max-sm:grid-cols-1">
      <RouterLink v-for="service in services" :key="service.text" :to="service.link">
        <kinesis-container class="bg-[var(--light)] text-[var(--dark)] rounded-3xl p-8 h-96">
          <div class="text-4xl flex flex-col gap-4 items-center">
            <kinesis-element strength="-10" type="rotate">
              <img class="size-32 rounded-full border" :src="service.img" />
            </kinesis-element>
            <span>{{ service.title }}</span>
          </div>
        </kinesis-container>
      </RouterLink>
    </div>
  </div>
</template>
