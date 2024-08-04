<script setup></script>

<template>
  <div class="m-8 p-8 text-left bg-dark shadow-lg rounded-3xl flex flex-col gap-16">
    <div class="flex gap-16 items-center justify-evenly">
      <h3 class="text-4xl font-bold">Our Mission</h3>
      <p class="max-w-prose">
        At Dry Clean Super Center, we are committed to providing top-notch dry cleaning and laundry
        services with unmatched convenience and quality. We understand your busy lifestyle, and our
        goal is to make your life easier by taking care of your garment care needs with precision
        and care.
      </p>
    </div>

    <div class="flex gap-16 items-center justify-evenly">
      <div>
        <h3 class="text-2xl font-bold mb-2">Quality Guarantee</h3>
        <p class="max-w-prose">
          We use state-of-the-art equipment and environmentally friendly cleaning solutions to
          ensure your garments are treated with the utmost care. Our experienced staff is trained to
          handle even the most delicate fabrics, ensuring that your clothes look their best, every
          time.
        </p>
      </div>

      <img
        v-prlx.background="{ speed: 0.7 }"
        src="https://picsum.photos/400/300"
        class="rounded-3xl shadow-lg h-[300px] w-[400px]"
      />
    </div>

    <p class="text-2xl max-w-prose text-center m-auto">
      Experience the convenience and quality of Dry Clean Super Center. Visit us today and see why
      we’re the preferred choice for dry cleaning and laundry services!
    </p>
  </div>
</template>
