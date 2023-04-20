<template>
 <Modal name="contacts">
  <WarningUnderConstruction />
  <section></section>
  <section class="retro-border border-4 w-fit p-4 text-md">
   <div>
    <Icon name="mdi:linkedin" /> LinkedIn:
    <span class="">
     <NuxtLink
      to="https://www.linkedin.com/in/alex-espejo-4a604920a/"
      class="text-blue-800 underline"
      >Connect!</NuxtLink
     >
    </span>
   </div>
   <div>
    <Icon name="ic:baseline-discord" /> Discord:
    <span class="text-blue-800 underline">yourpalAlex#7586</span>
   </div>
   <div>
    <Icon name="mdi:instagram" /> Instagram:
    <span class="">
     <NuxtLink
      to="https://www.instagram.com/_yourpalalex/"
      class="text-blue-800 underline"
      >@_yourpalalex</NuxtLink
     >
    </span>
   </div>

   <div>
    <Icon name="material-symbols:mail" /> Email:
    <span class="text-blue-800 underline block indent-4"
     >aespejo102@gmail.com</span
    >
    <span class="text-blue-800 underline block indent-4"
     >aespejo@ccc.student.edu</span
    >
   </div>
  </section>
 </Modal>
</template>
