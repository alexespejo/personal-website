<script setup></script>
<template>
 <Modal name="techstack">
  <div class="tech-modal-content text-xs leading-relaxed sm:text-sm">
   <div class="tech-stack">
    <span class="text-lg sm:text-xl">Tech Stack</span>
    <div class="divider"></div>
    <div class="flex justify-center gap-3 icon-groups">
     <Icon name="logos:vue" />
     <Icon name="vscode-icons:file-type-nuxt" />
     <Icon name="logos:typescript-icon" />
     <Icon name="vscode-icons:file-type-sass" />
     <Icon name="vscode-icons:file-type-tailwind" />
    </div>
    <p class="p-2">
     Here is tech stack of my personal SPA (single-page application). I used
     Nuxt3, TypeScript, and SASS/SCSS to create a fast, modern, and beautiful
     web app. Nuxt3 is a framework that combines Vue3, Vite, and Nitro to
     provide a full-stack solution for building web apps. TypeScript is a
     superset of JavaScript that adds static typing and other features to make
     the code more reliable and maintainable. SASS/SCSS is a preprocessor that
     extends CSS with variables, mixins, nesting, and more to make the styling
     more expressive and modular. Together, these technologies allow me to
     create a SPA that is easy to develop, test, and deploy.
     <br />
     Check out the code on
     <a
      class="text-blue-800 underline"
      href="https://github.com/alexespejo?tab=overview&from=2022-03-01&to=2022-03-11"
      >Github</a
     >
    </p>
   </div>

   <div class="tech-list">
    <span>Technologies and languges I'm Familiar With</span>
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
   </div>
  </div>
 </Modal>
</template>

<style lang="scss">
.divider {
 @apply m-2;
}
.icon-groups {
 @apply flex gap-5 mb-3 flex-wrap;
 svg {
  @apply w-10 h-10 text-neutral-400;
 }
}
.tech-list {
 span {
  @apply text-lg sm:text-xl;
 }
}
</style>
