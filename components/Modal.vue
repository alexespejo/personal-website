<script setup>
onMounted(() => {
 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");

 // Get the <span> element that closes the modal
 var closeBtn = document.getElementsByClassName("close")[0];
 var minimizeBtn = document.getElementsByClassName("close")[1];

 // When the user clicks the button, open the modal
 btn.onclick = function () {
  modal.style.display = "block";
 };

 // When the user clicks on <closeBtn> (x), close the modal
 // When the user clicks on <closeBtn> (x), close the modal
 closeBtn.onclick = function () {
  modal.style.display = "none";
 };
 minimizeBtn.onclick = function () {
  modal.style.display = "none";
 };

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
  if (event.target == modal) {
   modal.style.display = "none";
  }
 };
});
</script>

<template>
 <button id="myBtn">Open Modal</button>

 <!-- The Modal -->
 <div id="myModal" class="modal retro-border">
  <div class="modal-content">
   <div class="modal-control retro-border">
    <div class="decorator-buttons">
     <span>File</span>
     <span>File</span>
     <span>File</span>
    </div>
    <div class="modal-btn-group">
     <button class="modal-control-btn close">
      <Icon name="mdi:window-minimize" />
     </button>
     <button class="modal-control-btn" disabled>
      <Icon name="mdi:window-maximize" />
     </button>
     <button class="modal-control-btn close">
      <Icon name="mdi:window-close" />
     </button>
    </div>
   </div>
   <div class="modal-text">
    <p>Some text in the Modal..</p>
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
 left: 0;
 right: 0;
 border: 1px solid #888;
 width: 100%;
 height: 50%;

 .modal-text {
  padding: 1rem;
 }
 .decorator-buttons {
  display: flex;
  span {
   margin-right: 1px;
   padding: 0.1rem 0.5rem;
   border: 2px solid #a7a7a7;

   &:hover {
    border-top: 2px solid #cccccc;
    border-right: 2px solid #7b7b7b;
    border-bottom: 2px solid #7b7b7b;
    border-left: 2px solid #cccccc;
   }
  }
 }
 .modal-control {
  background: #a7a7a7;
  padding: 0.2rem 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
 }

 @media only screen and (min-width: 768px) {
 }
 @media only screen and (min-width: 992px) {
  width: 75%;
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
