<script setup>
const props = defineProps(["id"]);
const useShow = showModal();
const changeModal = () => {
 useShow.value = false;
};
</script>

<template>
 <div :id="props.id" class="modal">
  <div class="modal-content">
   <div class="modal-control">
    <div class="decorator-buttons">
     <img src="https://98.js.org/images/icons/folder-open-16x16.png" alt="" />
     <span class="decorator-btn"><span class="underline">F</span>ile</span>
     <span class="decorator-btn">E<span class="underline">d</span>it</span>
     <span class="decorator-btn">V<span class="underline">i</span>ew </span>
    </div>
    <div class="modal-btn-group">
     <button class="modal-control-btn close" @click="changeModal">
      <Icon name="mdi:window-minimize" />
     </button>
     <button class="modal-control-btn" disabled>
      <Icon name="mdi:window-maximize" />
     </button>
     <button class="modal-control-btn close" @click="changeModal">
      <Icon name="mdi:window-close" />
     </button>
    </div>
   </div>
   <div class="modal-text">
    <slot />
   </div>
  </div>
 </div>
</template>

<style lang="scss">
body {
 font-family: Arial, Helvetica, sans-serif;
}

/* The Modal (background) */
.modal {
 color: black;
 position: fixed; /* Stay in place */
 z-index: 1; /* Sit on top */
 //  padding: 1rem;
 left: 0;
 top: 0;
 width: 100%; /* Full width */
 height: 100%; /* Full height */
 //  overflow: auto; /* Enable scroll if needed */
 background-color: rgb(0, 0, 0); /* Fallback color */
 background-color: rgba(190, 190, 190, 0.4); /* Black w/ opacity */
}

/* Modal Content */

.modal-content {
 position: relative;
 margin: auto;
 background-color: #d4d4d4;
 border: 1px solid #888;
 width: 100%;
 height: 80%;
 overflow-y: scroll;
 box-shadow: 3px 2.5px 2px rgba(138, 138, 138, 0.5);
 .img-group {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
   Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  div {
   display: flex;
   flex-direction: column;
   span {
    // padding: 0.5rem;
    text-align: center;
   }
  }
  img {
   filter: blur(1px);
   width: 12rem;
  }
 }

 .modal-text {
  color: #7d7c7c;
  height: inherit;
  font-size: 12px;
  padding: 1rem;
  padding-bottom: 2rem;

  ::-webkit-scrollbar {
   width: 2px;
  }
  //   @media only screen and (min-width: 992px) {
  //    height: 70%;
  //   }
 }
 .decorator-buttons {
  display: flex;
  align-items: center;

  img {
   height: 1rem;
  }
  .decorator-btn {
   margin-right: 1px;
   padding: 0.3rem 0.5rem;
   border: 2px solid #a7a7a7;
   font-size: 12px;
   &:hover {
    border-top: 2px solid #cccccc;
    border-right: 2px solid #7b7b7b;
    border-bottom: 2px solid #7b7b7b;
    border-left: 2px solid #cccccc;
   }
  }
 }
 .modal-control {
  position: sticky;
  top: 0;
  z-index: 5;
  font-family: monospace;
  background: #a7a7a7;
  padding: 0.1rem 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #dedede;
  border-right: 2px solid #7b7b7b;
  border-bottom: 2px solid #7b7b7b;
  border-left: 2px solid #dedede;
 }
 .underline {
  text-decoration: underline;
 }

 @media only screen and (min-width: 768px) {
 }
 @media only screen and (min-width: 992px) {
  width: 75%;
  height: 70%;
 }

 @media only screen and (min-width: 1200px) {
  width: 50%;
 }
}
.modal-btn-group {
 display: flex;
}
button {
 cursor: pointer;
 width: fit-content;
 color: black;
 display: flex;
 justify-content: center;
 align-items: center;
 height: fit-content;
 margin-left: 0.2rem;
 background: rgb(223, 223, 223);
 background: linear-gradient(
  132deg,
  rgb(206, 206, 206) 26%,
  rgba(192, 192, 192, 1) 100%
 );
 border-top: 3px solid #dcdcdc;
 border-right: 3px solid #7b7b7b;
 border-bottom: 3px solid #7b7b7b;
 border-left: 3px solid #dcdcdc;

 &:focus {
  background: rgb(223, 223, 223);
  background: linear-gradient(
   340deg,
   rgba(223, 223, 223, 1) 26%,
   rgb(171, 171, 171) 100%
  );
  border-top: 3px solid #cccccc;
  border-right: 3px solid #7b7b7b;
  border-bottom: 3px solid #7b7b7b;
  border-left: 3px solid #cccccc;
 }
}
.retro-border {
 border-top: 3px solid #cccccc;
 border-right: 3px solid #7b7b7b;
 border-bottom: 3px solid #7b7b7b;
 border-left: 3px solid #cccccc;
}
/* The Close Button */
</style>
