<script setup lang="ts">
//declare state
const useShow = showModal();

const modalDisplay = (e: any) => {
 return e ? displays.block : displays.none;
};
const displays = reactive({
 none: "none",
 block: "block",
});

//documenets reference
const showDocuments = ref(false);
const changeShowDocuments = () => {
 useShow.value = !useShow.value;
 showDocuments.value = useShow.value;
 return;
};
const changeDocumentsModal = () => {
 useShow.value = false;
 showDocuments.value = false;
};
const showTechnology = ref(false);
const changeshowTechnology = () => {
 useShow.value = !useShow.value;
 showTechnology.value = useShow.value;
 return;
};
const changeTechnologyModal = () => {
 useShow.value = false;
 showTechnology.value = false;
};

onMounted(() => {
 const docuModal = document.getElementById("documentsModal");
 const doubleTapDocu: any = document.getElementById("documents-folder");
 doubleTapDocu.addEventListener("dblclick", () => {
  changeShowDocuments();
 });
 const techModal = document.getElementById("technologyModal");
 const doubleTapTech: any = document.getElementById("tech-folder");
 doubleTapTech.addEventListener("dblclick", () => {
  changeshowTechnology();
 });

 window.onclick = function (event) {
  switch (event.target) {
   case docuModal:
    changeDocumentsModal();
   case techModal:
    changeTechnologyModal();
  }
 };
});
</script>
<template>
 <main>
  <div id="computer-icon">
   <img
    src="https://98.js.org/images/icons/my-computer-32x32.png"
    alt="my computer"
    id="computer-image"
   />
   <span>My Computer</span>
  </div>
  <Modal
   :changing="showDocuments"
   id="documentsModal"
   :class="modalDisplay(showDocuments && useShow)"
  >
   <div class="img-group">
    <div>
     <img src="../assets/resume.png" alt="" id="resume" />
     <span>resume</span>
    </div>
    <div>
     <img src="../assets/foodHandlersCard.png" alt="" id="foodhandlers" />
     <span>food-handlers-card</span>
    </div>
    <div>
     <img src="../assets/transcript.png" alt="" id="transcript" />
     <span>transcript2022</span>
    </div>
    <div>
     <ProfilePic />
     <span>thats me</span>
    </div>
   </div>
  </Modal>
  <Modal
   :changing="showTechnology"
   id="technologyModal"
   :class="modalDisplay(showTechnology && useShow)"
  >
   <div class="tech-modal-content">
    <div>
     <Icon name="logos:nuxt" />
     <p>
      The entire thing was built with the Vue.js 3 JavaScript framework on top
      of the Nuxt3 Metaframework to handle all of the interactive components
     </p>
    </div>

    <div>
     <Icon name="vscode-icons:file-type-sass" />
     <p>
      All of the CSS and styling in this app were handled using vanillas CSS and
      SASS/SCSS -- yes I am bad at writing vanilla CSS
     </p>
    </div>
    <div>
     <Icon name="logos:typescript-icon" />
     <p>
      Using Nuxt3 technically means I have to use TypeScript but I like to
      include it to make this list longer ¯\_(ツ)_/¯
     </p>
    </div>

    <div class="tech-list">
     <span>Familiar Technologies</span>
     <div class="divider"></div>
     <div class="icon-groups">
      <Icon name="mdi:language-html5" />
      <Icon name="mdi:language-css3" />
      <Icon name="mdi:language-javascript" />
      <Icon name="mdi:language-python" />
      <Icon name="mdi:tailwind" />
      <Icon name="mdi:language-typescript" />
      <Icon name="mdi:sass" />
      <Icon name="mdi:react" />
      <Icon name="mdi:vuejs" />
      <Icon name="mdi:firebase" />
      <Icon name="mdi:material-design" />
      <Icon name="mdi:bootstrap" />
      <Icon name="simple-icons:opencv" />
      <Icon name="simple-icons:flask" />
      <Icon name="tabler:brand-nextjs" />
      <Icon name="tabler:brand-nuxt" />
     </div>
     <span>I took a class for these so I'm gonna count them</span>
     <div class="divider"></div>
     <div class="icon-groups">
      <Icon name="mdi:language-java" />
      <Icon name="bxl:c-plus-plus" />
     </div>
     <span>Frequent Tools</span>
     <div class="divider"></div>
     <div class="icon-groups">
      <Icon name="akar-icons:vscode-fill" />
      <Icon name="simple-icons:vim" />
      <Icon name="tabler:brand-openai" />
      <Icon name="mdi:git" />
      <Icon name="mdi:github" />
      <Icon name="tabler:brand-figma" />
     </div>

     <span>Technologies I plan to learn</span>
     <div class="divider"></div>
     <div class="icon-groups">
      <Icon name="file-icons:go-old" />
      <Icon name="bxl:aws" />
      <Icon name="simple-icons:pocketbase" />
      <Icon name="carbon:logo-svelte" />
      <Icon name="akar-icons:postgresql-fill" />
      <Icon name="simple-icons:astro" />
      <Icon name="simple-icons:supabase" />
      <Icon name="simple-icons:tensorflow" />
      <Icon name="mdi:language-rust" />
      <Icon name="simple-icons:cockroachlabs" />
     </div>
     <span>I'm a Jack of all trades master of none :/</span>
    </div>
   </div>
  </Modal>

  <Draggable title="tech-folder" class="drag-pos-1">
   <img
    src="https://98.js.org/images/icons/folder-32x32.png"
    class="dragging-icon"
   />
   <span class="dragging-text">technology</span>
  </Draggable>

  <Draggable title="folder2" class="drag-pos-2">
   <ProfilePic class="dragging-icon" />
  </Draggable>
  <Draggable title="folder3" class="drag-pos-3">
   <img
    src="https://98.js.org/images/icons/folder-32x32.png"
    class="dragging-icon"
  /></Draggable>
  <Draggable title="documents-folder" class="drag-pos-4">
   <img
    src="https://98.js.org/images/icons/folder-32x32.png"
    class="dragging-icon"
   />
   <span class="dragging-text">documents</span>
  </Draggable>
 </main>
</template>

<style lang="scss">
.tech-list {
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 color: #7d7c7c;
 .icon-groups {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  svg {
   padding: 0.5rem 0;
  }
 }
 span {
  margin-top: 2rem;
  align-self: flex-start;
  font-size: 1.3rem;
 }
}
.divider {
 width: 100%;
 height: 1px;
 border-radius: 5px;
 margin: 0.5rem 0;
 background: rgb(122, 122, 122);
}
button,
a {
 cursor: pointer;
}
.block {
 display: block;
}
.none {
 display: none;
}

.dragging-icon {
 width: 4rem;
 height: 4rem;
 font-size: 3rem;
 @media only screen and (min-width: 768px) {
  font-size: 4rem;
 }
 @media only screen and (min-width: 992px) {
  font-size: 4rem;
 }
}
.dragging-text {
 font-family: monospace;
 font-size: 15px;
 color: rgb(255, 255, 255);
}
.dragging-image {
 width: 5rem;
 height: 5rem;
}
.icon-shadow {
 filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
}
.drag-pos-1 {
 top: 55%;
 right: 40%;
}
.drag-pos-3 {
 top: 25%;
 right: 32%;
}
.drag-pos-2 {
 top: 30%;
 left: 25%;
}
.drag-pos-4 {
 bottom: 30%;
 left: 15%;
}
#computer-icon {
 color: whitesmoke;
 position: fixed;
 padding: 0.5rem;
 width: fit-content;
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: 12px;
 img {
  width: 2.5rem;
  height: 2.5rem;
  @media only screen and (min-width: 992px) {
   width: 3rem;
   height: 3rem;
  }
 }
 @media only screen and (min-width: 768px) {
 }
 @media only screen and (min-width: 992px) {
  font-size: 15px;
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
.tech-modal-content {
 font-size: 5rem;
 div {
  display: flex;
  align-items: center;

  svg {
   font-size: 5rem;
   width: 30%;
  }
  p {
   padding: 0.5rem 2rem;
   width: 50%;
   font-size: 1rem;
  }
 }
}
</style>
