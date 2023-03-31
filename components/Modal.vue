<script setup>
const props = defineProps(["changing", "id"]);
const useShow = showModal();

const changeModal = () => {
 useShow.value = false;
 //  props.changingModal = false;
};

onMounted(() => {
 var modal = document.getElementById("myModal");
 window.onclick = function (event) {
  if (event.target == modal) {
   changeModal();
  }
 };
});
</script>

<template>
 <div :id="props.id" class="modal retro-border">
  <div class="modal-content">
   <div class="modal-control retro-border">
    <div class="decorator-buttons">
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
 display: none; /* Hidden by default */
 position: fixed; /* Stay in place */
 z-index: 1; /* Sit on top */
 padding-top: 100px; /* Location of the box */
 left: 0;
 top: 0;
 width: 100%; /* Full width */
 height: 100%; /* Full height */
 overflow: auto; /* Enable scroll if needed */
 background-color: rgb(0, 0, 0); /* Fallback color */
 background-color: rgba(190, 190, 190, 0.4); /* Black w/ opacity */
}

/* Modal Content */

.modal-content {
 position: absolute;
 background-color: #d4d4d4;
 margin: auto;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 border: 1px solid #888;
 width: 100%;
 height: 60%;
 box-shadow: 3px 2.5px 2px rgba(138, 138, 138, 0.5);
 .img-group {
  img {
   position: absolute;
   width: 8rem;
  }
  #resume {
   z-index: 1;
   top: 40%;
   left: 35%;
  }
  #transcript {
   top: 33%;
   bottom: 33%;
  }
  #foodhandlers {
   bottom: 20%;
   right: 10%;
  }
 }

 .modal-text {
  padding: 1rem;
  height: 80%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
   display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
 }
 .decorator-buttons {
  display: flex;
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
  font-family: monospace;
  background: #a7a7a7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem;
 }
 .underline {
  text-decoration: underline;
 }

 @media only screen and (min-width: 768px) {
 }
 @media only screen and (min-width: 992px) {
  width: 75%;
  height: 50%;
 }

 @media only screen and (min-width: 1200px) {
  width: 50%;
 }
}
button {
 cursor: pointer;
 width: fit-content;
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
