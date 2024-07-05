<script setup></script>

<template>
  <div class="flex flex-row gap-40 w-screen p-16 items-center">
    <img class="absolute top-[10vh] left-0 w-screen -z-10 blur-[100px]" src="/bubble.jpg" />
    <div class="w-[50%]">
      <h1 class="text-9xl">Dryclean Super Center</h1>
      <h4 class="mt-6 text-xl">Dry all your worries away</h4>
    </div>
    <div class="w-[50%] flex justify-center">
      <kinesis-container>
        <kinesis-element :strength="10" type="depth">
          <img
            src="/blankets.jpg"
            class="border-2 object-cover rounded-full max-h-[70vh] w-[70vh] aspect-square"
          />
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
</template>
