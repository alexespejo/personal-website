<script setup lang="ts">
//declare state
import { useModals } from "../stores/eduardo";

const modal = useModals();
// let topBrkPt = useTopBrkPt();
// let rightBrkPt = useRightBrkPt();
// let bottomBrkPt = useBottomBrkPt();
//
// onUpdated(() => {
//  const ele: any = document.getElementById("main-body");
//  var boxTop = ele.getBoundingClientRect();
//  topBrkPt.value = boxTop.top;
//  rightBrkPt.value = boxTop.right;
//  bottomBrkPt.value = boxTop.bottom;
//  console.log("update");
// });
onUpdated(() => {
 console.log("update");
});
</script>
<template>
 <NuxtLayout>
  <main class="">
   <WelcomeModal />
   <TechModal />
   <DocumentModal />
   <TrashModal />
   <div class="flex flex-col w-fit items-center p-3 static-icons">
    <div
     class="flex flex-col items-center justify-center w-fit cursor-pointer"
     id="computer-icon"
     @click="modal.toggleWelcomeModal"
    >
     <img
      alt="my computer"
      id="computer-image"
      src="../assets/computer_explorer-3.png"
     />
     <span style="font-size: 0.7rem; padding: 0.5rem" class="text-zinc-300"
      >Hello World</span
     >
    </div>
    <div
     class="flex flex-col items-center justify-center w-fit cursor-pointer"
     id="computer-icon "
    >
     <img
      alt="my computer"
      id="computer-image"
      src="../assets/recycle_bin_full-3.png"
      @click="modal.toggleTrashModal"
     />
     <span style="font-size: 0.7rem; padding: 0.5rem" class="text-zinc-300"
      >Trash</span
     >
    </div>
    <div
     class="flex flex-col items-center justify-center w-fit cursor-pointer"
     id="computer-icon "
    >
     <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
     >
      <img
       alt="my computer"
       id="computer-image"
       src="../assets/help_book_cool-3.png"
      />
     </a>

     <span style="font-size: 0.7rem; padding: 0.5rem" class="text-zinc-300"
      >???</span
     >
    </div>
   </div>

   <Draggable
    title="tech-folder"
    class="drag-pos-1"
    @dblclick="modal.toggletechtackModal"
   >
    <img src="../assets/directory_control_panel-3.png" class="dragging-icon" />
    <span class="dragging-text" id="press-test">technology</span>
   </Draggable>
   <Draggable title="folder3" class="drag-pos-3">
    <img src="../assets/directory_closed-3.png" class="dragging-icon" />
    <span class="dragging-text">im broken</span>
   </Draggable>
   <Draggable title="folder2" class="drag-pos-2">
    <ProfilePic class="dragging-icon" />
   </Draggable>

   <!-- <Draggable title="folder3" class="drag-pos-3"> </Draggable> -->
   <Draggable
    title="documents-folder"
    class="drag-pos-4"
    @dblclick="modal.toggleDocumentsModal"
   >
    <img
     src="../assets/directory_open_file_mydocs_2k-3.png"
     class="dragging-icon"
    />
    <span class="dragging-text">documents</span>
   </Draggable>
  </main>
 </NuxtLayout>
</template>

<style lang="scss">
// .document-img {
//  span {
//   font-size: 1rem;
//   padding-top: 0.5rem;
//  }
// }
//
// .divider {
//  width: 100%;
//  height: 1px;
//  border-radius: 5px;
//  margin: 0.5rem 0;
//  background: rgb(122, 122, 122);
// }
// button,
// a {
//  cursor: pointer;
// }
.static-icons {
 img {
  @apply w-8 h-8 sm:w-12 sm:h-12;
 }
}
.block {
 display: flex;
}
.none {
 display: none;
}

// .dragging-icon {
//  width: 4rem;
//  height: 4rem;
//  font-size: 3rem;
//  @media only screen and (min-width: 768px) {
//   font-size: 4rem;
//  }
//  @media only screen and (min-width: 992px) {
//   font-size: 4rem;
//  }
// }
// .dragging-text {
//  font-family: monospace;
//  font-size: 15px;
//  color: rgb(255, 255, 255);
// }
// .dragging-image {
//  width: 5rem;
//  height: 5rem;
// }
// .icon-shadow {
//  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
// }
.drag-pos-1 {
 top: 70%;
 left: 15%;
}
.drag-pos-3 {
 top: 25%;
 left: 30%;
}
.drag-pos-2 {
 top: 40%;
 left: 45%;
}
.drag-pos-4 {
 top: 55%;
 left: 60%;
}
// #computer-icon {
//  cursor: pointer;
//  color: whitesmoke;
//  position: fixed;
//  padding: 0.5rem;
//  width: fit-content;
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  font-size: 12px;
//
//  img {
//   width: 2.5rem;
//   height: 2.5rem;
//   @media only screen and (min-width: 992px) {
//    width: 3rem;
//    height: 3rem;
//   }
//  }
//  @media only screen and (min-width: 768px) {
//  }
//  @media only screen and (min-width: 992px) {
//   font-size: 15px;
//  }
// }
// .modal-control {
//  font-family: monospace;
//  background: #a7a7a7;
//  display: flex;
//  justify-content: space-between;
//  align-items: center;
//  padding: 0.1rem;
// }
// .tech-modal-content {
//  font-size: 5rem;
//  div {
//   display: flex;
//   align-items: center;
//
//   p {
//    padding: 0.5rem 2rem;
//    width: 75%;
//    line-height: 2rem;
//    font-size: 1rem;
//    @media only screen and (min-width: 768px) {
//    }
//    @media only screen and (min-width: 992px) {
//     width: 100%;
//     height: 70%;
//    }
//
//    @media only screen and (min-width: 1200px) {
//     width: 80%;
//    }
//   }
//  }
// }
// .tech-list {
//  display: flex;
//  flex-direction: column;
//  flex-wrap: wrap;
//
//  .icon-groups {
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   svg {
//    padding: 0.5rem 0;
//
//    width: 33%;
//    font-size: 3rem;
//    @media only screen and (min-width: 992px) {
//     font-size: 5rem;
//    }
//   }
//  }
//  span {
//   margin-top: 2rem;
//   align-self: flex-start;
//   font-size: 1rem;
//   @media only screen and (min-width: 992px) {
//    font-size: 1.3rem;
//   }
//  }
// }
// .tech-stack {
//  font-size: 5rem;
//  display: flex;
//  flex-direction: column;
//  width: 100%;
//
//  span {
//   margin-top: 2rem;
//   align-self: flex-start;
//   font-size: 1rem;
//
//   @media only screen and (min-width: 992px) {
//    font-size: 1.3rem;
//   }
//  }
//
//  svg {
//   width: 20%;
//   padding: 0 0.5rem;
//   font-size: 4rem;
//  }
// }
</style>
