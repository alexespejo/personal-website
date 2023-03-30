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

  <Draggable title="folder1" class="drag-pos-1">
   <Icon name="material-symbols:folder" class="dragging-icon icon-shadow"
  /></Draggable>
  <Draggable title="folder2" class="drag-pos-2">
   <Icon name="material-symbols:folder" class="dragging-icon icon-shadow"
  /></Draggable>
  <Draggable title="folder3" class="drag-pos-3">
   <Icon name="material-symbols:folder-shared" class="dragging-icon"
  /></Draggable>
  <Draggable title="folder4" class="drag-pos-4">
   <Icon name="ic:baseline-folder" class="dragging-icon icon-shadow"
  /></Draggable>
 </main>
</template>

<style lang="scss">
.dragging-icon {
 font-size: 5rem;
}
.icon-shadow {
 filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
}
.drag-pos-1 {
 top: 55%;
 right: 40%;
}
.drag-pos-2 {
 top: 25%;
 right: 32%;
 color: #7b7b7b;
}
.drag-pos-3 {
 top: 25%;
 left: 25%;
 color: #49a1ff;
}
.drag-pos-4 {
 bottom: 30%;
 left: 15%;
 color: black;
}
#computer-icon {
 position: fixed;
 padding: 0.5rem;
 width: fit-content;
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: 15px;
 img {
  width: 3rem;
  height: 3rem;
 }
}
</style>
