<script setup lang="ts">
import { useCounterStore, useModals } from "../stores/eduardo";
const count = useCounterStore();
const test = useModals();
</script>
<template>
 <WelcomeModal />
 <TechModal />
 <DocumentModal />
 <ContactsModal />
 <Draggable title="movable" class="tester"> Hello World </Draggable>
 <button @click="test.toggleTechInfoModal">Tech</button>
 <button @click="test.toggleWelcomeModal">Welcome</button>
 <button @click="test.toggleDocumentsModal">documenets</button>
 <button @click="test.toggleContactsModal">documenets</button>
</template>

<style scoped>
#movable {
 top: 52.63157894736842%;
 left: 53.29815303430079%;
}
</style>
