<script setup>
const props = defineProps(["title"]);

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
  document.onmouseenter = console.log("mousedown");
  document.onmouseup = closeDragElement;
  // call a function whenever the cursor moves:
  document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  console.log([pos1, pos2, pos3, pos4]);
  // set the element's new position:
  if (
   !(
    pos4 < topBrkPt.value + 30 ||
    pos4 >= bottomBrkPt.value - 30 ||
    pos3 <= 44 ||
    pos3 >= rightBrkPt.value - 50
   )
  ) {
   elmnt.style.top = elmnt.offsetTop - pos2 + "px";
   elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }
 }

 function closeDragElement() {
  /* stop moving when mouse button is released:*/
  document.onmouseup = null;
  document.onmousemove = null;
 }
}
onMounted(() => {
 const doubleTap = document.getElementById(props.title);
 dragElement(doubleTap);
 doubleTap.addEventListener("dblclick", (e) => {
  console.log("Hello World");
 });
});
</script>

<template>
 <div :id="props.title" class="draggable-element">
  <div class="icon-container">
   <div :id="props.title + 'header'"><slot /></div>
  </div>
 </div>
</template>

<style lang="scss">
img {
 @media only screen and (max-width: 600px) {
  /* styles for extra small devices */
 }

 /* Small devices (portrait tablets and large phones, 600px and up) */
 @media only screen and (min-width: 600px) {
  /* styles for small devices */
 }

 /* Medium devices (landscape tablets, 768px and up) */
 @media only screen and (min-width: 768px) {
  width: 3rem;
  height: 3rem;
 }

 /* Large devices (laptops/desktops, 992px and up) */
 @media only screen and (min-width: 992px) {
  height: 3rem;
  width: 3rem;
 }

 /* Extra large devices (large laptops and desktops, 1200px and up) */
 @media only screen and (min-width: 1200px) {
  /* styles for extra large devices */
  height: 3rem;
  width: 3rem;
 }
}
/* Extra small devices (phones, 600px and down) */
#doubleTap {
 cursor: pointer;
}
.draggable-element {
 padding: 0.25rem;
 cursor: pointer;
 font-size: 12px;
 position: absolute;
 z-index: 9;
 text-align: center;
 display: flex;
 flex-direction: column;
}
.icon-container {
 border-color: grey;
 border-spacing: 0.01rem;
 border-style: dotted;
 position: absolute;
 display: flex;
 flex-direction: column;
 align-items: center;
 @media only screen and (max-width: 600px) {
  /* styles for extra small devices */
 }

 /* Small devices (portrait tablets and large phones, 600px and up) */
 @media only screen and (min-width: 600px) {
  /* styles for small devices */
 }

 /* Medium devices (landscape tablets, 768px and up) */
 @media only screen and (min-width: 768px) {
  width: 3rem;
  height: 3rem;
 }

 /* Large devices (laptops/desktops, 992px and up) */
 @media only screen and (min-width: 992px) {
  height: 3rem;
  width: 3rem;
 }

 /* Extra large devices (large laptops and desktops, 1200px and up) */
 @media only screen and (min-width: 1200px) {
  /* styles for extra large devices */
  height: 3rem;
  width: 3rem;
 }
}
</style>
