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
   active: false,
  },
  techinfo: {
   name: "techinfo",
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
 });

 function modalDisplay(e: any) {
  return e ? displays.block : displays.none;
 }
 function toggleWelcomeModal() {
  toggleOff();
  modals.welcome.active = true;
 }
 function toggleTechInfoModal() {
  toggleOff();
  modals.techinfo.active = true;
 }
 function toggleDocumentsModal() {
  toggleOff();
  modals.documents.active = true;
 }
 function toggleContactsModal() {
  toggleOff();
  modals.contacts.active = true;
 }
 function toggleOff() {
  head_control.value = false;
  modals.welcome.active = false;
  modals.techinfo.active = false;
  modals.documents.active = false;
  modals.contacts.active = false;
 }

 return {
  modals,
  toggleWelcomeModal,
  toggleTechInfoModal,
  toggleDocumentsModal,
  toggleContactsModal,
  toggleOff,
  modalDisplay,
 };
});
