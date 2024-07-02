<template>
  <div class="flex flex-row gap-40 w-screen p-16 items-center">
    <div class="bubble" />
    <div class="w-[50%]">
      <h1 class="text-9xl">Dryclean Super Center</h1>
      <h4 class="mt-6 text-xl">Dry all your worries away</h4>
    </div>
    <div class="w-[50%] flex justify-center">
      <img src="/blankets.jpg" class="object-cover rounded-full h-[70vh] w-[70vh]" />
    </div>
  </div>
</template>

<style scoped>
.bubble {
  background: url('/bubble.jpg');
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  filter: blur(100px);
}
</style>
