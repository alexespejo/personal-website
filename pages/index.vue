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

const welcomeModal = ref(true);
const showWelcome = () => {
 useShow.value = !useShow.value;
 welcomeModal.value = useShow.value;
};
//documenets reference
const showDocuments = ref(false);
const changeShowDocuments = () => {
 useShow.value = !useShow.value;
 showDocuments.value = useShow.value;
 return;
};
const showTechnology = ref(false);
const changeshowTechnology = () => {
 useShow.value = !useShow.value;
 showTechnology.value = useShow.value;
 return;
};

const turnOffModal = () => {
 useShow.value = false;
 showDocuments.value = false;
 showTechnology.value = false;
 welcomeModal.value = false;
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
   case techModal:
    turnOffModal();
  }
 };
});
onUpdated(() => {
 if (!useShow.value) {
  turnOffModal();
 }
});
</script>
<template>
 <main>
  <WelcomeModal id="welcomeID" :class="modalDisplay(welcomeModal && useShow)" />

  <span @click="showWelcome" id="computer-icon">
   <img
    src="../assets/computer_explorer-3.png"
    alt="my computer"
    id="computer-image"
   />
   <span style="font-size: 0.7rem; padding: 0.5rem">My Computer</span>
  </span>
  <Modal
   :changing="showDocuments"
   id="documentsModal"
   :class="modalDisplay(showDocuments && useShow)"
  >
   <div class="img-group">
    <div class="document-img">
     <img src="../assets/resume.png" alt="" id="resume" />
     <span>resume</span>
    </div>
    <div class="document-img">
     <img src="../assets/foodHandlersCard.png" alt="" id="foodhandlers" />
     <span>food-handlers-card</span>
    </div>
    <div class="document-img">
     <img src="../assets/transcript.png" alt="" id="transcript" />
     <span>transcript2022</span>
    </div>
   </div>
  </Modal>
  <Modal id="technologyModal" :class="modalDisplay(showTechnology && useShow)">
   <div class="tech-modal-content">
    <div class="tech-stack">
     <span>Tech Stack</span>
     <div class="divider"></div>
     <div>
      <Icon name="logos:vue" />
      <Icon name="vscode-icons:file-type-nuxt" />
      <Icon name="logos:typescript-icon" />
      <Icon name="vscode-icons:file-type-sass" />
     </div>
     <p>
      This is the tech stack of my personal SPA (single-page application). I
      used Nuxt3, TypeScript, and SASS/SCSS to create a fast, modern, and
      beautiful web app. Nuxt3 is a framework that combines Vue3, Vite, and
      Nitro to provide a full-stack solution for building web apps. TypeScript
      is a superset of JavaScript that adds static typing and other features to
      make the code more reliable and maintainable. SASS/SCSS is a preprocessor
      that extends CSS with variables, mixins, nesting, and more to make the
      styling more expressive and modular. Together, these technologies allow me
      to create a SPA that is easy to develop, test, and deploy.
      <br />
      Check out the code on
      <a
       href="https://github.com/alexespejo?tab=overview&from=2022-03-01&to=2022-03-11"
       >Github</a
      >
     </p>
    </div>

    <div class="tech-list">
     <span>Technologies I'm Familiar With</span>
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
     <span>The tools I use in most projects</span>
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
   <img src="../assets/directory_closed-3.png" class="dragging-icon" />
   <span class="dragging-text">technology</span>
  </Draggable>

  <Draggable title="folder2" class="drag-pos-2">
   <ProfilePic class="dragging-icon" />
  </Draggable>
  <Draggable title="folder3" class="drag-pos-3">
   <img src="../assets/directory_closed-3.png" class="dragging-icon"
  /></Draggable>
  <Draggable title="documents-folder" class="drag-pos-4">
   <img src="../assets/directory_closed-3.png" class="dragging-icon" />
   <span class="dragging-text">documents</span>
  </Draggable>
 </main>
</template>

<style lang="scss">
.document-img {
 span {
  font-size: 1rem;
  padding-top: 0.5rem;
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
 display: flex;
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
 cursor: pointer;
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

  p {
   padding: 0.5rem 2rem;
   width: 75%;
   line-height: 2rem;
   font-size: 1rem;
   @media only screen and (min-width: 768px) {
   }
   @media only screen and (min-width: 992px) {
    width: 100%;
    height: 70%;
   }

   @media only screen and (min-width: 1200px) {
    width: 80%;
   }
  }
 }
}
.tech-list {
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;

 .icon-groups {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  svg {
   padding: 0.5rem 0;

   width: 33%;
   font-size: 3rem;
   @media only screen and (min-width: 992px) {
    font-size: 5rem;
   }
  }
 }
 span {
  margin-top: 2rem;
  align-self: flex-start;
  font-size: 1rem;
  @media only screen and (min-width: 992px) {
   font-size: 1.3rem;
  }
 }
}
.tech-stack {
 font-size: 5rem;
 display: flex;
 flex-direction: column;
 width: 100%;

 span {
  margin-top: 2rem;
  align-self: flex-start;
  font-size: 1rem;

  @media only screen and (min-width: 992px) {
   font-size: 1.3rem;
  }
 }
 p {
 }
 svg {
  width: 20%;
  padding: 0 0.5rem;
  font-size: 4rem;
 }
}
</style>
