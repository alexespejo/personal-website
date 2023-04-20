<template>
 <Modal name="documents">
  <div class="img-group">
   <div class="document-img">
    <img
     src="../assets/resume.png"
     class="blur-sm hover:blur-0 cursor-pointer"
     alt=""
     id="resume"
    />
    <span>resume</span>
   </div>
   <div class="document-img">
    <img
     src="../assets/foodHandlersCard.png"
     alt=""
     id="foodhandlers"
     class="blur-sm"
    />
    <span>food-handlers-card</span>
   </div>
   <div class="document-img">
    <img
     src="../assets/transcript.png"
     alt=""
     id="transcript"
     class="blur-sm"
    />
    <span>transcript2022</span>
   </div>
   <div class="document-img">
    <NuxtLink to="/pig">
     <img
      src="../assets/pigs.png"
      alt=""
      id="transcript"
      class="blur-sm hover:blur-0"
     />
    </NuxtLink>
    <span>pigs</span>
   </div>
  </div>
 </Modal>
</template>

<style lang="scss">
.img-group {
 @apply flex gap-2 flex-wrap;
 .document-img {
  @apply w-1/3 h-1/3;
  span {
   @apply text-zinc-500 text-xs;
  }
  img {
   @apply w-full h-full;
  }
 }
}
</style>
