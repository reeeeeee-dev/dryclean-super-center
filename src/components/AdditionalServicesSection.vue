<template>
  <div class="m-16 text-center">
    <h1 class="text-7xl font-bold">Our Services</h1>
    <h4 class="mt-8 text-4xl">Let our experts take care of all your garmet cleaning needs!</h4>

    <div class="mt-32 grid grid-cols-4 gap-y-24">
      <kinesis-container>
        <div class="text-4xl flex flex-col gap-4 items-center">
          <kinesis-element :strength="10" type="depth">
            <img class="size-32 rounded-full border" src="https://picsum.photos/200?seed=1" />
          </kinesis-element>
          <span>Dry Cleaning</span>
        </div>
      </kinesis-container>
      <kinesis-container>
        <div class="text-4xl flex flex-col gap-4 items-center">
          <kinesis-element :strength="10" type="depth">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=2" />
          </kinesis-element>
          <span>Tailoring</span>
        </div>
      </kinesis-container>
      <kinesis-container>
        <div class="text-4xl flex flex-col gap-4 items-center">
          <kinesis-element :strength="10" type="depth">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=3" />
          </kinesis-element>
          <span>Wash, Dry, Fold Laundry Service</span>
        </div>
      </kinesis-container>
      <kinesis-container>
        <div class="text-4xl flex flex-col gap-4 items-center">
          <kinesis-element :strength="10" type="depth">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=4" />
          </kinesis-element>
          <span>Wedding & Formalwear</span>
        </div>
      </kinesis-container>
      <kinesis-container>
        <div class="text-4xl flex flex-col gap-4 items-center">
          <kinesis-element :strength="10" type="depth">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=5" />
          </kinesis-element>
          <span>Bedding</span>
        </div>
      </kinesis-container>
      <kinesis-container>
        <div class="text-4xl flex flex-col gap-4 items-center">
          <kinesis-element :strength="10" type="depth">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=6" />
          </kinesis-element>
          <span>Linens</span>
        </div>
      </kinesis-container>
      <kinesis-container>
        <div class="text-4xl flex flex-col gap-4 items-center">
          <kinesis-element :strength="10" type="depth">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=7" />
          </kinesis-element>
          <span>Shirts</span>
        </div>
      </kinesis-container>
      <kinesis-container>
        <div class="text-4xl flex flex-col gap-4 items-center">
          <kinesis-element :strength="10" type="depth">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=8" />
          </kinesis-element>
          <span>Uniforms & Lab Coats</span>
        </div>
      </kinesis-container>
    </div>
  </div>
</template>
