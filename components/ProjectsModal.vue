<template>
 <Modal name="projects">
  <div class="flex flex-col-reverse">
   <ProjectItem
    v-for="project in projects"
    :key="project.title"
    :title="project.title"
    :href="project.href"
    :summary="project.summary"
    :description="project.description"
    :tech="project.tech"
   />
  </div>
 </Modal>
</template>

<script setup>
import { projects } from "~/data/projects";
</script>
