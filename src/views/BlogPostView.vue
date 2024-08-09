<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({ postName: String })
const Markdown = defineAsyncComponent(() => import(`@/blog/${props.postName}.md`))
</script>

<template>
  <div>
    <div class="m-auto rounded-3xl p-8 bg-[var(--light)] w-max h-min">
      <Markdown class="prose" />
    </div>
  </div>
</template>
