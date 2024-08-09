<script setup>
const posts = Object.entries(import.meta.glob('@/blog/*.md', { eager: true })).map(
  ([key, postModule]) => ({
    ...postModule.frontmatter,
    path: postModule.default.__name,
    key
  })
)
</script>

<template>
  <div class="p-16 flex flex-wrap">
    <RouterLink
      v-for="post in posts"
      :key="post.key"
      :to="`/blog/${post.path}`"
      class="rounded-3xl bg-[var(--light)] p-8 h-64 w-96 hover:bg-[var(--accent)] hover:text-[var(--light)] transition-colors"
    >
      <h3 class="text-2xl font-bold mb-4">{{ post.title }}</h3>
      <p>{{ post.summary }}</p>
    </RouterLink>
  </div>
</template>
