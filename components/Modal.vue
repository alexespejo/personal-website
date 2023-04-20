<script setup>
import { useModals } from "~~/stores/eduardo";
const props = defineProps(["name"]);
const id = ref(props.name + "-id");
const useShow = useModals();

onUpdated(() => {
 const modalRef = document.getElementById(props.name + "-id");
 window.onclick = function (event) {
  if (event.target === modalRef) {
   useShow.toggleOff();
  }
 };
});
</script>

<template>
 <div :id="id" class="modal block" v-show="useShow.modals[props.name].active">
  <div
   style="margin: auto"
   class="bg-neutral-300 w-full lg:w-2/3 h-3/4 border-4"
  >
   <div class="p-1 font-mono" style="height: 10%">
    <div
     class="p-1 text-gray-300 flex items-center justify-between bg-blue-800"
    >
     <div class="flex text-xs gap-1 px-1">
      <img src="../assets/directory_open_cool-1.png" alt="" class="w-4 h-4" />
      <div class="">{{ props.name }}</div>
     </div>

     <div class="flex gap-1">
      <button class="modal-control-btn close" @click="useShow.toggleOff">
       <Icon name="mdi:window-minimize" class="w-3 h-3" />
      </button>
      <button class="modal-control-btn" disabled>
       <Icon name="mdi:window-maximize" />
      </button>
      <button class="modal-control-btn close" @click="useShow.toggleOff">
       <Icon name="mdi:window-close" />
      </button>
     </div>
    </div>
   </div>
   <div style="height: 90%" class="px-1 pb-1 sm:px-3 sm:pb-3">
    <div class="p-2 sm:p-3 retro-border border-4 bg-zinc-300 h-full">
     <div
      class="p-2 border-r-slate-200 border-b-slate-200 border-l-neutral-400 border-t-neutral-400 border-neutral-300 border-4 h-full overflow-y-scroll relative text-slate-600"
     >
      <slot />
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<style lang="scss">
body {
 font-family: Arial, Helvetica, sans-serif;
}

/* The Modal (background) */
.modal {
 color: black;
 position: fixed; /* Stay in place */
 z-index: 1; /* Sit on top */
 //  padding: 1rem;

 left: 0;
 top: 0;
 width: 100%; /* Full width */
 height: 100%; /* Full height */
 //  overflow: auto; /* Enable scroll if needed */
 background-color: rgb(0, 0, 0); /* Fallback color */
 background-color: rgba(190, 190, 190, 0.4); /* Black w/ opacity */
}
.decorator-btn {
 @apply bg-neutral-300 text-neutral-700  border-r-slate-500 border-b-slate-500 border-l-neutral-200 border-t-neutral-200 border-2 border-neutral-300 flex items-center justify-center px-1;
}
.modal-control-btn {
 @apply bg-neutral-300 text-neutral-700 w-6 h-6 border-r-slate-500 border-b-slate-500 border-l-neutral-200 border-t-neutral-200 border-4 border-neutral-300 flex items-center justify-center;
 svg {
  @apply w-4 h-4;
 }
}
</style>
