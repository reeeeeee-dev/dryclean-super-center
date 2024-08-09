<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({ postName: String })
const Markdown = defineAsyncComponent(() => import(`@/blog/${props.postName}.md`))
</script>

<template>
  <div class="m-auto w-max">
    <RouterLink to="/blog" class="underline hover:text-[var(--accent)] transition-colors">
      ← Back to blog
    </RouterLink>
    <br />
    <br />
    <div class="m-auto rounded-3xl p-8 bg-[var(--light)] w-max h-min">
      <Markdown class="prose" />
    </div>
  </div>
</template>
