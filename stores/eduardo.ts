export const useCounterStore = defineStore("counter", () => {
 const count = ref(0);
 const names = reactive({
  alex: "alex",
  gabe: "gabe",
 });
 const doubleCount = computed(() => count.value * 2);

 function increment() {
  count.value++;
 }

 return { count, names, doubleCount, increment };
});

export const useModals = defineStore("modals", () => {
 const head_control = ref(true);

 const displays = reactive({
  none: "none",
  block: "block",
 });
 const modals = reactive({
  welcome: {
   name: "welcome",
   active: true,
  },
  techstack: {
   name: "techstack",
   active: false,
  },
  documents: {
   name: "documents",
   active: false,
  },
  contacts: {
   name: "contacts",
   active: false,
  },
  trash: {
   name: "trash",
   active: false,
  },
  wordle: {
   name: "wordle",
   active: false,
  },
 });

 function modalDisplay(e: any) {
  return e ? displays.block : displays.none;
 }
 function toggleWelcomeModal() {
  toggleOff();
  modals.welcome.active = true;
 }
 function toggletechtackModal() {
  toggleOff();
  modals.techstack.active = true;
 }
 function toggleDocumentsModal() {
  toggleOff();
  modals.documents.active = true;
 }
 function toggleContactsModal() {
  toggleOff();
  modals.contacts.active = true;
 }
 function toggleTrashModal() {
  toggleOff();
  modals.trash.active = true;
 }
 function toggleWordleModal() {
  toggleOff();
  modals.wordle.active = true;
 }
 function toggleOff() {
  head_control.value = false;
  modals.welcome.active = false;
  modals.techstack.active = false;
  modals.documents.active = false;
  modals.contacts.active = false;
  modals.trash.active = false;
  modals.wordle.active = false;
 }

 return {
  modals,
  toggleWelcomeModal,
  toggletechtackModal,
  toggleDocumentsModal,
  toggleContactsModal,
  toggleTrashModal,
  toggleWordleModal,
  toggleOff,
  modalDisplay,
 };
});
