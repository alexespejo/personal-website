<script setup>
const props = defineProps({
 title: { type: String, required: true },
 href: { type: String, default: "" },
 summary: { type: String, required: true },
 description: { type: String, default: "" },
 tech: { type: Array, default: () => [] },
 detailsOpen: { type: Boolean, default: true },
});
</script>

<template>
 <div>
  <LinkHeader v-if="props.href" :src="props.href">{{ props.title }}</LinkHeader>
  <h1 v-else class="text-xl font-bold mb-2">{{ props.title }}</h1>

  <details :open="props.detailsOpen">
   <summary>{{ props.summary }}</summary>
   <div class="whitespace-pre-line">
    <slot>
     {{ props.description }}
    </slot>
   </div>
  </details>

  <div class="project-box" v-if="props.tech.length">
   <TechItem v-for="item in props.tech" :key="item">{{ item }}</TechItem>
  </div>
 </div>
</template>

<style lang="scss" scoped>
.project-box {
 @apply flex flex-wrap space-x-2 w-fit mb-5;
}

summary {
 @apply cursor-pointer italic;
}
</style>

