<script setup>
import { useModals } from "~~/stores/eduardo";

const modal = useModals();
let topBrkPt = useTopBrkPt();
let rightBrkPt = useRightBrkPt();
let bottomBrkPt = useBottomBrkPt();
onMounted(() => {
 const ele = document.getElementById("main-body");
 var boxTop = ele.getBoundingClientRect();
 topBrkPt.value = boxTop.top;
 rightBrkPt.value = boxTop.right;
 bottomBrkPt.value = boxTop.bottom;
});
</script>

<template>
 <Head>
  <Title>Alexander Espejo</Title>
  <Meta
   name="description"
   content="My name is Alexander Espejo, I'm a first year computer science major at Orange Coast College 🎓 I'm a self-taught frontend developer 👨‍💻 and aspring software engineer ⚙️ (check out my Github if you get the chance 🤩)profile picture
I love to develop software 🖥️ and build apps 📱 that can make a positive impact on the world 🌍. I'm always eager to learn and practice new skills 🏋️‍♂️ and technologies, and I enjoy collaborating with other passionate coders 🤝. I'm excited to share my projects and ideas with you! 🫶"
  />
 </Head>
 <nav class="navbar bg-neutral-300 text-zinc-500" id="navbar">
  <WarningUnderConstruction />

  <div class="linkbar">
   <NuxtLink to="/" class="retro-border-hover">alexander espejo</NuxtLink>
   <button class="retro-border-hover">Q n A</button>
   <NuxtLink class="retro-border-hover">issues?</NuxtLink>
  </div>
  <div class="content flex items-center p-2 border-t-2 border-t-neutral-500">
   <div class="btn-group flex gap-2">
    <a
     href="https://github.com/alexespejo?tab=overview&from=2022-03-01&to=2022-03-11"
     class="btn"
    >
     <Icon name="mdi:github" class="icon" />
    </a>
    <a href="https://www.linkedin.com/in/alex-espejo-4a604920a/" class="btn">
     <Icon name="mdi:linkedin" class="icon" />
    </a>
    <button class="btn" @click="modal.toggleContactsModal">
     <Icon name="mdi:account-group" class="icon" />
    </button>
    <button class="btn" @click="modal.toggleWordleModal">
     <Icon name="mdi:gamepad-square-outline" class="icon" />
    </button>
   </div>
  </div>
 </nav>
 <main class="main-body" id="main-body">
  <WordleModal />
  <ContactsModal />
  <slot />
 </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900");
body {
 font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 box-sizing: border-box;
 padding: 0;
 margin: 0;
 overflow: hidden;
}
nav {
 height: 16vh;
}
main {
 height: 84vh;
}

.layout-body {
 display: flex;
 flex-direction: column;
}
.main-body {
 background: #00888a;
 //  padding: 0.5rem;
}
.navbar {
 @apply border-4 border-r-slate-500 border-b-slate-500 border-l-gray-200 border-t-gray-200;
 .linkbar {
  @apply flex gap-1 text-xs sm:text-sm h-1/4 p-0.5 bg-stone-300;
  a,
  button {
   @apply flex items-center px-1  border-2 border-stone-300 hover:border-r-slate-500 hover:border-b-slate-500 hover:border-l-slate-200 hover:border-t-slate-200 bg-neutral-300 underline text-purple-800;
  }
 }
 .content {
  @apply px-2 h-3/4;

  .btn {
   @apply border-4 border-r-slate-500 border-b-slate-500 border-l-neutral-200 border-t-neutral-200 flex items-center bg-neutral-300 p-0.5 hover:text-neutral-400;
   svg {
    @apply h-12 w-12 sm:h-14 sm:w-14 2xl:h-16 2xl:w-16;
   }
  }
 }
}
.retro-border {
 @apply border-r-slate-500 border-b-slate-500 border-l-neutral-200 border-t-neutral-200  border-neutral-300;
}
//
// .btn {
//  @apply w-9 h-9;
//  background: #c6c6c6;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  border-top: 3px solid #dcdcdc;
//  border-right: 3px solid #7b7b7b;
//  border-bottom: 3px solid #7b7b7b;
//  border-left: 3px solid #dcdcdc;
//  box-shadow: 3px 3px 3px rgba(114, 114, 114, 0.5),
//   inset 1px 1px 3px rgba(227, 227, 227, 0.4);
//  cursor: pointer;
//
//  &:hover {
//   box-shadow: 1px 1px 3px rgba(114, 114, 114, 0.5),
//    inset 2px 2px 2px rgba(227, 227, 227, 0.5);
//  }
//  .icon {
//   font-size: 2.5rem;
//   color: #5c5c5c;
//
//   &:hover {
//    color: #747474;
//   }
//  }
//  @media only screen and (min-width: 768px) {
//   width: 3rem;
//   height: 3rem;
//  }
//  @media only screen and (min-width: 992px) {
//   height: 3rem;
//   width: 3rem;
//   .icon {
//    font-size: 2.5rem;
//   }
//  }
//  @media only screen and (min-width: 1200px) {
//   height: 3.5rem;
//   width: 3.5rem;
//   .icon {
//    font-size: 3rem;
//   }
//  }
// }
//
// #profileImage {
//  border-top: 3px solid #cccccc;
//  border-right: 3px solid #7b7b7b;
//  border-bottom: 3px solid #7b7b7b;
//  border-left: 3px solid #cccccc;
// }
// .navbar {
//  background: #bfbfbf;
//  border-top: 3px solid #dcdcdc;
//  border-right: 3px solid #7b7b7b;
//  border-bottom: 3px solid #7b7b7b;
//  border-left: 3px solid #dcdcdc;
//  .content {
//  }
//  .linkbar {
//   @apply flex justify-start border-b-2 border-b-neutral-500;
//   a {
//    //  font-size: 0.5rem;
//    @apply bg-inherit flex items-center justify-center p-1;
//   }
//  }
//  .btn-group {
//   a {
//   }
//  }
// }
// .retor-border {
//  border-top: 2px solid #dedede;
//  border-right: 2px solid #7b7b7b;
//  border-bottom: 2px solid #7b7b7b;
//  border-left: 2px solid #dedede;
// }
// .retro-border-hover {
//  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//   Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//  //  font-size: 0.75rem;
//  border: 2px solid #bfbfbf;
//
//  &:hover {
//   border-top: 2px solid #dedede;
//   border-right: 2px solid #7b7b7b;
//   border-bottom: 2px solid #7b7b7b;
//   border-left: 2px solid #dedede;
//  }
// }
</style>
