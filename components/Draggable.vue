<script setup>
const props = defineProps(["title"]);
const onHold = ref(false);

//temp

let topBrkPt = useTopBrkPt();
let rightBrkPt = useRightBrkPt();
let bottomBrkPt = useBottomBrkPt();
function dragElement(elmnt) {
 var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;
 if (document.getElementById(props.title + "header")) {
  /* if present, the header is where you move the DIV from:*/
  document.getElementById(props.title + "header").onmousedown = dragMouseDown;
 } else {
  /* otherwise, move the DIV from anywhere inside the DIV:*/
  elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  // get the mouse cursor position at startup:
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  // call a function whenever the cursor moves:
  document.onmousemove = elementDrag;
 }
 function elementDrag(e) {
  onHold.value = true;
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  //   console.log([pos1, pos2, pos3, pos4]);
  // set the element's new position:
  if (
   !(
    pos4 < topBrkPt.value + 50 ||
    pos4 >= bottomBrkPt.value - 50 ||
    pos3 <= 44 ||
    pos3 >= rightBrkPt.value - 50
   )
  ) {
   elmnt.style.top = elmnt.offsetTop - pos2 + "px";
   elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  } else if (
   pos4 <= topBrkPt.value + 50 ||
   pos4 >= bottomBrkPt.value - 50 ||
   pos3 <= 44 ||
   pos3 >= rightBrkPt.value - 50
  ) {
   closeDragElement();
  }
  let position = elmnt.getBoundingClientRect();
  let posLef = (position.left / window.innerWidth) * 100 + "%";
  let posTop = (position.top / window.innerHeight) * 100 + "%";
  elmnt.style.top = posTop;
  elmnt.style.left = posLef;
 }

 function closeDragElement() {
  /* stop moving when mouse button is released:*/
  onHold.value = false;
  document.onmouseup = null;
  document.onmousemove = null;
 }
}
onMounted(() => {
 const doubleTap = document.getElementById(props.title);

 dragElement(doubleTap);
 doubleTap.addEventListener("touchmove", function (e) {
  var touchLocation = e.targetTouches[0];
  var elementWidth = doubleTap.offsetWidth;
  var elementHeight = doubleTap.offsetHeight;

  doubleTap.style.left = touchLocation.pageX - elementWidth / 2 + "px";
  doubleTap.style.top = touchLocation.pageY - elementHeight / 2 + "px";
 });

 doubleTap.addEventListener("touchend", function (e) {
  // current doubleTap position.
  var x = parseInt(doubleTap.style.left);
  var y = parseInt(doubleTap.style.top);
 });
});
</script>

<template>
 <div :id="props.title" class="draggable-element flex flex-col items-center">
  <div
   class="icon-container text-center p-3"
   :class="onHold ? 'dotted-border z-over ' : ''"
  >
   <div
    :id="props.title + 'header'"
    class="flex flex-col items-center justify-center text-white text-xs font-mono"
   >
    <slot />
   </div>
  </div>
 </div>
</template>

<style lang="scss">
@media only screen and (max-width: 600px) {
 /* styles for extra small devices */
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
 /* styles for small devices */
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
 /* styles for extra large devices */
}
/* Extra small devices (phones, 600px and down) */
img {
 @apply w-14 h-14;
}
.draggable-element {
 cursor: pointer;
 width: fit-content;
 height: fit-content;
 padding: 0.25rem;
 position: absolute;
 text-align: center;
 display: flex;
 flex-direction: column;
}
.dotted-border {
 border: rgb(212, 212, 212) 2.5px;
 border-style: dotted;
}
// .icon-container {
//  padding: 0.5rem;
//  position: absolute;
//  display: flex;
//  flex-direction: column;
//  align-items: center;
// }

.z-over {
 z-index: 100;
}
</style>
