<script setup>
const props = defineProps(["class"]);
</script>

<template>
 <div :class="`flex ${props.class}`">
  <slot />
 </div>
</template>
