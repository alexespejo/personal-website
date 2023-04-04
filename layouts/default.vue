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
  <div class="linkbar">
   <span class="retro-border">alexander espejo</span>
   <span class="retro-border">inspiration?</span>
   <span class="retro-border">issues?</span>
   <span class="retro-border">games?</span>
  </div>
  <div class="content">
   <div class="btn-group">
    <a
     href="https://github.com/alexespejo?tab=overview&from=2022-03-01&to=2022-03-11"
     class="btn"
    >
     <Icon name="mdi:github" class="icon" />
    </a>
    <a href="https://www.linkedin.com/in/alex-espejo-4a604920a/" class="btn">
     <Icon name="mdi:linkedin" class="icon" />
    </a>
    <a href="https://www.instagram.com/_yourpalalex/" class="btn">
     <Icon name="carbon:user-avatar-filled-alt" class="icon" />
    </a>
    <a href="https://www.instagram.com/_yourpalalex/" class="btn">
     <Icon name="mdi:instagram" class="icon" />
    </a>
   </div>
  </div>
 </nav>
 <main class="main-body" id="main-body">
  <slot />
 </main>
</template>

<style lang="scss">
body {
 font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
 height: 88vh;
}

.layout-body {
 display: flex;
 flex-direction: column;
}
.main-body {
 background: #00888a;
 padding: 0.5rem;
}

.btn {
 width: 3rem;
 height: 3rem;
 background: #c6c6c6;
 display: flex;
 align-items: center;
 justify-content: center;
 border-top: 3px solid #dcdcdc;
 border-right: 3px solid #7b7b7b;
 border-bottom: 3px solid #7b7b7b;
 border-left: 3px solid #dcdcdc;
 box-shadow: 3px 3px 3px rgba(114, 114, 114, 0.5),
  inset 1px 1px 3px rgba(227, 227, 227, 0.4);
 cursor: pointer;

 &:hover {
  box-shadow: 1px 1px 3px rgba(114, 114, 114, 0.5),
   inset 2px 2px 2px rgba(227, 227, 227, 0.5);
 }
 .icon {
  font-size: 2.5rem;
  color: #5c5c5c;

  &:hover {
   color: #747474;
  }
 }
 @media only screen and (min-width: 768px) {
  width: 3rem;
  height: 3rem;
 }
 @media only screen and (min-width: 992px) {
  height: 3rem;
  width: 3rem;
  .icon {
   font-size: 2.5rem;
  }
 }
 @media only screen and (min-width: 1200px) {
  height: 4rem;
  width: 4rem;
  .icon {
   font-size: 3rem;
  }
 }
}

#profileImage {
 border-top: 3px solid #cccccc;
 border-right: 3px solid #7b7b7b;
 border-bottom: 3px solid #7b7b7b;
 border-left: 3px solid #cccccc;
}
.navbar {
 height: fit-content;
 z-index: 9999;
 background-color: #c6c6c6;
 display: flex;
 flex-direction: column;
 border-top: 3px solid #cccccc;
 border-right: 3px solid #7b7b7b;
 border-bottom: 3px solid #7b7b7b;
 border-left: 3px solid #cccccc;
 box-shadow: 5px 5px 5px#464646;
 .content {
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
 }
 .linkbar {
  background: #bfbfbf;
  border-bottom: 1px solid rgb(149, 149, 149);
  padding: 0.1rem 0.1rem;
  width: inherit;
  height: 1.5rem;
  display: flex;
 }
 .btn-group {
  display: flex;
  gap: 0.5rem;
 }
}

.retro-border {
 font-family: monospace;
 padding: 0.1rem 0.5rem;
 font-size: 0.75rem;
 border: 2px solid #bfbfbf;
 &::first-letter {
  text-decoration: underline;
 }
 &:hover {
  border-top: 2px solid #dedede;
  border-right: 2px solid #7b7b7b;
  border-bottom: 2px solid #7b7b7b;
  border-left: 2px solid #dedede;
 }
}
</style>
