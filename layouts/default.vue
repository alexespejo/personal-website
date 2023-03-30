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
   <button class="btn" id="profileImage">
    <ProfilePic />
   </button>
  </div>
 </nav>
 <main class="main-body" id="main-body">
  <slot />
 </main>
 <footer class="footer">Footer</footer>
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
 height: 75vh;
}
.footer {
 height: 13vh;
}
div,
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
 background: #e2e2e2;
 padding: 0.5rem;
}

.btn {
 width: 3rem;
 height: 3rem;
 background: #c6c6c6;
 display: flex;
 align-items: center;
 justify-content: center;
 //  border-width: 2.5px 0px 0px 2.5px;
 //  border-style: solid;
 //  border-color: rgba(211, 211, 211, 0.5);
 //  border-right: solid 1px #bfbfbf;
 //  border-bottom: solid 1px #bfbfbf;
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
  height: 4rem;
  width: 4rem;
  .icon {
   font-size: 3rem;
  }
 }
 @media only screen and (min-width: 1200px) {
  height: 5rem;
  width: 5rem;
  .icon {
   font-size: 4rem;
  }
 }
}

#profileImage {
 filter: blur(1px);
}
.navbar {
 height: fit-content;
 z-index: 9999;
 background-color: #c6c6c6;
 width: 100%;
 display: flex;
 flex-direction: column;
 border-bottom: rgb(155, 155, 155) solid 3px;
 box-shadow: 5px 5px 5px#464646;
 .content {
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
 }
 .linkbar {
  background: #bfbfbf;
  border-bottom: 1px solid rgb(149, 149, 149);
  width: inherit;
  height: 1.5rem;
  box-shadow: inset 3px 3px 3px rgba(227, 227, 227, 0.5);
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
