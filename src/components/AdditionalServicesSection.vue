<template>
  <div class="m-16 text-center">
    <h1 class="text-7xl">Our Services</h1>
    <h4 class="mt-8 text-4xl">Let our experts take care of all your garmet cleaning needs!</h4>

    <div class="mt-32 grid grid-cols-4 gap-y-24">
      <kinesis-container>
        <kinesis-element :strength="10" type="depth">
          <div class="text-4xl flex flex-col gap-4 items-center">
            <img class="size-32 rounded-full border" src="https://picsum.photos/200?seed=1" />
            <span>Dry Cleaning</span>
          </div>
        </kinesis-element>
      </kinesis-container>
      <kinesis-container>
        <kinesis-element :strength="10" type="depth">
          <div class="text-4xl flex flex-col gap-4 items-center">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=2" />
            <span>Tailoring</span>
          </div>
        </kinesis-element>
      </kinesis-container>
      <kinesis-container>
        <kinesis-element :strength="10" type="depth">
          <div class="text-4xl flex flex-col gap-4 items-center">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=3" />
            <span>Wash, Dry, Fold Laundry Service</span>
          </div>
        </kinesis-element>
      </kinesis-container>
      <kinesis-container>
        <kinesis-element :strength="10" type="depth">
          <div class="text-4xl flex flex-col gap-4 items-center">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=4" />
            <span>Wedding & Formalwear</span>
          </div>
        </kinesis-element>
      </kinesis-container>
      <kinesis-container>
        <kinesis-element :strength="10" type="depth">
          <div class="text-4xl flex flex-col gap-4 items-center">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=5" />
            <span>Bedding</span>
          </div>
        </kinesis-element>
      </kinesis-container>
      <kinesis-container>
        <kinesis-element :strength="10" type="depth">
          <div class="text-4xl flex flex-col gap-4 items-center">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=6" />
            <span>Linens</span>
          </div>
        </kinesis-element>
      </kinesis-container>
      <kinesis-container>
        <kinesis-element :strength="10" type="depth">
          <div class="text-4xl flex flex-col gap-4 items-center">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=7" />
            <span>Shirts</span>
          </div>
        </kinesis-element>
      </kinesis-container>
      <kinesis-container>
        <kinesis-element :strength="10" type="depth">
          <div class="text-4xl flex flex-col gap-4 items-center">
            <img class="size-32 rounded-full" src="https://picsum.photos/200?seed=8" />
            <span>Uniforms & Lab Coats</span>
          </div>
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
</template>
