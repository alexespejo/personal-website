<script setup>
const useShow = showModal();

const show = ref(false);
const show2 = ref(false);

const changeShow = () => {
 useShow.value = !useShow.value;
 show.value = useShow.value;
 return;
};
const changeShow2 = () => {
 useShow.value = !useShow.value;
 show2.value = useShow.value;
 return;
};

const changeModal = () => {
 show.value = false;
 useShow.value = false;
 //  props.changingModal = false;
};
const changeModal2 = () => {
 show2.value = false;
 useShow.value = false;
 //  props.changingModal = false;
};
const displays = reactive({
 none: {
  display: "none",
 },
 block: {
  display: "block",
 },
});
onMounted(() => {
 let modal1 = document.getElementById("myModal");
 let modal2 = document.getElementById("myModal2");
 window.onclick = function (event) {
  switch (event.target) {
   case modal1:
    changeModal();
   case modal2:
    changeModal2();
  }
 };
});
onUpdated(() => {
 alert("update");
});
</script>
<template>
 <Modal
  :changing="show"
  id="myModal"
  :style="show && useShow ? displays.block : displays.none"
 >
  Hello World
 </Modal>
 <Modal
  :changing="show2"
  id="myModal2"
  :style="show2 && useShow ? displays.block : displays.none"
 >
  Hello World 2
 </Modal>
 <button @click="changeShow">Change</button>
 <button @click="changeShow2">Change 2</button>
 Show 2: {{ show2 }} Show 1: {{ show }}
 {{ useShow }}
</template>

<style>
img {
 width: 5rem;
 height: 5rem;
}
</style>
