<script setup lang="ts">
//declare state
const useShow = showModal();

const modalDisplay = (e: any) => {
 return e ? displays.block : displays.none;
};
const displays = reactive({
 none: "none",
 block: "block",
});

//documenets reference
const showDocuments = ref(false);
const changeShowDocuments = () => {
 useShow.value = !useShow.value;
 showDocuments.value = useShow.value;
 return;
};
const changeDocumentsModal = () => {
 useShow.value = false;
 showDocuments.value = false;
};

onMounted(() => {
 const docuModal = document.getElementById("documentsModal");
 const doubleTap: any = document.getElementById("documents-folder");
 doubleTap.addEventListener("dblclick", () => {
  changeShowDocuments();
 });

 window.onclick = function (event) {
  switch (event.target) {
   case docuModal:
    changeDocumentsModal();
  }
 };
});
</script>
<template>
 <main>
  <div id="computer-icon">
   <img
    src="https://98.js.org/images/icons/my-computer-32x32.png"
    alt="my computer"
    id="computer-image"
   />
   <span>My Computer</span>
  </div>
  <Modal
   :changing="showDocuments"
   id="documentsModal"
   :class="modalDisplay(showDocuments && useShow)"
  >
   <div class="img-group">
    <img src="../assets/resume.png" alt="" id="resume" />
    <img src="../assets/foodHandlersCard.png" alt="" id="foodhandlers" />
    <img src="../assets/transcript.png" alt="" id="transcript" />
   </div>
  </Modal>

  <Draggable title="folder1" class="drag-pos-1">
   <Icon name="material-symbols:folder" class="dragging-icon icon-shadow" />
   Documents
  </Draggable>

  <Draggable title="folder2" class="drag-pos-2">
   <ProfilePic class="dragging-icon" />
  </Draggable>
  <Draggable title="folder3" class="drag-pos-3">
   <Icon name="material-symbols:folder-shared" class="dragging-icon"
  /></Draggable>
  <Draggable title="documents-folder" class="drag-pos-4">
   <Icon name="material-symbols:snippet-folder" class="dragging-icon" />
   <span class="dragging-text">documents</span>
  </Draggable>
 </main>
</template>

<style lang="scss">
button,
a {
 cursor: pointer;
}
.block {
 display: block;
}
.none {
 display: none;
}
.dragging-icon {
 width: 5rem;
 height: 5rem;
 font-size: 3rem;
 @media only screen and (min-width: 768px) {
  font-size: 4rem;
 }
 @media only screen and (min-width: 992px) {
  font-size: 5rem;
 }
}
.dragging-text {
 font-family: monospace;
 font-size: 15px;
 color: black;
}
.dragging-image {
 width: 5rem;
 height: 5rem;
}
.icon-shadow {
 filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
}
.drag-pos-1 {
 top: 55%;
 right: 40%;
 color: navy;
}
.drag-pos-3 {
 top: 25%;
 right: 32%;
 color: #49a1ff;
}
.drag-pos-2 {
 top: 30%;
 left: 25%;
 color: #7b7b7b;
}
.drag-pos-4 {
 bottom: 30%;
 left: 15%;
 color: rgb(161, 161, 161);
}
#computer-icon {
 position: fixed;
 padding: 0.5rem;
 width: fit-content;
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: 12px;
 img {
  width: 2.5rem;
  height: 2.5rem;
  @media only screen and (min-width: 992px) {
   width: 3rem;
   height: 3rem;
  }
 }
 @media only screen and (min-width: 768px) {
 }
 @media only screen and (min-width: 992px) {
  font-size: 15px;
 }
}
.modal-control {
 font-family: monospace;
 background: #a7a7a7;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0.1rem;
}
</style>
