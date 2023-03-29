<script setup>
let topBrkPt = useTopBrkPt();
let rightBrkPt = useRightBrkPt();
let bottomBrkPt = useBottomBrkPt();
onMounted(() => {
 const ele = document.getElementById("main-body");
 var boxTop = ele.getBoundingClientRect();
 console.log(boxTop.right);
 topBrkPt.value = boxTop.top;
 rightBrkPt.value = boxTop.right;
 bottomBrkPt.value = boxTop.bottom;
});
</script>

<template>
 <nav class="navbar" id="navbar">
  <div class="linkbar"></div>
  <div class="content">
   <div class="btn-group">
    <button class="btn"></button>
    <button class="btn"></button>
    <button class="btn"></button>
    <button class="btn"></button>
   </div>
   <button class="btn" id="profileImage"></button>
  </div>
 </nav>
 <main class="main-body" id="main-body">
  <slot />
 </main>
 <footer class="footer">Footer</footer>
</template>

<style lang="scss">
body {
 background-color: #e8e8e8;
 box-sizing: border-box;
 padding: 0;
 margin: 0;
 overflow: hidden;
}
nav {
 height: 12vh;
}
main {
 height: 80vh;
}
footer {
 height: 8vh;
}
button,
input[type="submit"],
input[type="reset"] {
 background: none;
 color: inherit;
 border: none;
 padding: 0;
 font: inherit;
 cursor: pointer;
 outline: inherit;
}
.layout-body {
 display: flex;
 flex-direction: column;
}
.main-body {
 padding: 0.5rem;
}
.btn {
 width: 3rem;
 height: 3rem;
 background: #c6c6c6;
 border-width: 1px 0px 0px 1px;
 border-style: solid;
 border-color: rgb(211, 211, 211);
 border-right: solid 1px #bfbfbf;
 border-bottom: solid 1px #bfbfbf;
 box-shadow: 2px 2px 3px rgba(114, 114, 114, 0.9),
  inset 1px 1px 1px rgba(227, 227, 227, 0.3);
 cursor: pointer;

 &:hover {
  border-color: rgba(230, 230, 230, 0.5);
  border-right: solid 1px #bfbfbf;
  border-bottom: solid 1px #bfbfbf;
  box-shadow: 1px 1px 2px rgba(114, 114, 114, 0.9),
   inset 0.5px 0.5px 1px rgba(227, 227, 227, 0.5);
 }
}

.navbar {
 height: fit-content;
 z-index: 9999;
 background-color: #c6c6c6;
 border: 2px solid #a8a8a8;
 box-shadow: 4px 4px 5px rgba(105, 105, 105, 0.5);
 width: 100%;
 display: flex;
 flex-direction: column;
 .content {
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
 }
 .linkbar {
  background: #bfbfbf;
  border: 1px solid rgb(149, 149, 149);
  width: inherit;
  height: 1.5rem;
 }
 .btn-group {
  display: flex;
  gap: 0.5rem;
 }
}
.footer {
 background: #bfbfbf;
}
</style>
