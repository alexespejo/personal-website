<script setup lang="ts">
import { useCounterStore, useModals } from "../stores/eduardo";
const count = useCounterStore();
const test = useModals();
</script>
<template>
 <WelcomeModal />
 <TechModal />
 <DocumentModal />
 <ContactsModal />
 <Draggable title="movable" class="tester"> Hello World </Draggable>
 <button @click="test.toggleWelcomeModal">Welcome</button>
 <button @click="test.toggleDocumentsModal">documenets</button>
 <button @click="test.toggleContactsModal">documenets</button>
 <div class="pinia">
  <div class="rotate-45 w-fit">Hello world</div>
 </div>
</template>

<style scoped>
.animated-div {
 animation: growShrink 1s infinite ease-in-out alternate;
}
/* Define the keyframes for the animation */
@keyframes growShrink {
 0% {
  transform: scale(1) rotate(45deg);
 }
 100% {
  transform: scale(1.2) rotate(45deg);
 }
}
</style>
