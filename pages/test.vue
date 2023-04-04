<script setup lang="ts">
onMounted(() => {
 const box: any = document.getElementById("box");
 const center: any = document.getElementById("center");

 box.addEventListener("touchmove", function (e: any) {
  var touchLocation = e.targetTouches[0];

  box.style.left = touchLocation.pageX + "px";
  box.style.top = touchLocation.pageY + "px";
 });

 box.addEventListener("touchend", function (e: any) {
  // current box position.
  var x = parseInt(box.style.left);
  var y = parseInt(box.style.top);
 });
});
</script>

<template>
 <div id="container">
  <p>
   Toggle your browser device toolbar and change device to any mobile or tablet
   from your browser inspect.
  </p>
  <div id="box">
   <div id="center">H</div>
  </div>
 </div>
</template>

<style>
#box {
 position: absolute;
 width: 100px;
 height: 100px;
 background-color: #ccc;
}
#center {
 position: absolute;
 bottom: 0;
}
</style>
