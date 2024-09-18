<template>
 <Modal name="projects">
  <div class="flex flex-col-reverse">
   <div>
    <LinkHeader src="https://github.com/alexespejo/project-argus-frontend"
     >Project Argus</LinkHeader
    >
    <details open>
     <summary>Senior Year Capstone Project</summary>
     Senior year a smart door access system utilizing a Raspberry Pi and Camera
     Module for facial recognition. The camera continuously streams video and
     identifies individuals by name or "unknown," storing this data in a
     database. Verified users receive app notifications to grant door access
     upon confirmation. The accompanying web app, featuring a Ring-inspired
     design, offers live video streaming, a log of door-related events, and
     customizable camera settings. Admin users can manage access, privileges,
     and user details through the app. The project aims to enhance security and
     convenience by combining IoT technology and web development.
    </details>
    <div class="project-box">
     <TechItem>React</TechItem>
     <TechItem>Flask</TechItem>
     <TechItem>SCSS</TechItem>
     <TechItem>Bootstrap</TechItem>
     <TechItem>Raspberry PI</TechItem>
     <TechItem>OpenCV</TechItem>
     <TechItem>Firebase</TechItem>
    </div>
   </div>
   <div>
    <LinkHeader src="https://github.com/alexespejo/mimibase"
     >Mimibase</LinkHeader
    >
    <details open>
     <summary>Personal Project</summary>
     Designed to mimic the structure of a NoSQL/Document database like MongoDB
     or Firestore
    </details>
    <div class="project-box">
     <TechItem>React</TechItem>
     <TechItem>Flask</TechItem>
     <TechItem>Material UI</TechItem>
     <TechItem>Figma</TechItem>
    </div>
   </div>
   <div>
    <LinkHeader
     src="https://devpost.com/software/ani-x-mate?ref_content=my-projects-tab&ref_feature=my_projects"
     >Ani x Mate</LinkHeader
    >
    <details open>
     <summary>Hack at UCI</summary>
     As a team of random college students, we really wanted to build a project
     that we all had an interest in and would have fun with. After taking a
     quick glance at each other's water bottles, laptops, and bags, we started
     to bond over our goofy little anime stickers. Which ultimately led us to
     build an application regarding anime.
    </details>
    <div class="project-box">
     <TechItem>React</TechItem>
     <TechItem>Flask</TechItem>
     <TechItem>Material UI</TechItem>
     <TechItem>Figma</TechItem>
    </div>
   </div>
   <div>
    <LinkHeader
     src="https://devpost.com/software/local-cuisine?ref_content=my-projects-tab&ref_feature=my_projectss"
     >LocalCusine</LinkHeader
    >
    <details open>
     <summary>LA Hacks</summary>
     With the decline of COVID, and the spark of interest in travel, we wanted
     to showcase the diverse cultures around the world and how they are
     expressed through their food.
    </details>
    <div class="project-box">
     <TechItem>Nuxt</TechItem>
     <TechItem>TypeScript</TechItem>
     <TechItem>OpenAI</TechItem>
     <TechItem>TailwindCSS</TechItem>
    </div>
   </div>

   <div>
    <LinkHeader src="https://alexespejo.vercel.app/"
     >Personal Website</LinkHeader
    >
    <details open>
     <summary>ME!</summary>
     I thought it would be fun :P
    </details>
    <div class="project-box">
     <TechItem>Nuxt</TechItem>
     <TechItem>TypeScript</TechItem>
     <TechItem>OpenAI</TechItem>
     <TechItem>TailwindCSS</TechItem>
    </div>
   </div>

   <div>
    <LinkHeader src="https://csa150-course-reader.vercel.app/w01/A#A"
     >CS150 Course Reader</LinkHeader
    >
    <details open>
     <summary>Orange Coast College</summary>
     This project is intended to build upon the existing CS150 Course Reader,
     bringing upon new features and designs!
    </details>
    <div class="project-box">
     <TechItem>Astro</TechItem>
     <TechItem>Vue</TechItem>
     <TechItem>TailwindCSS</TechItem>
     <TechItem>Python</TechItem>
    </div>
   </div>

   <div>
    <LinkHeader src="https://devpost.com/software/insightfullanterns">
     InsightfulLanterns
    </LinkHeader>
    <details open>
     <summary>IrvineHacks 2024</summary>
     Making the therapy accessible
    </details>
    <div class="project-box">
     <TechItem>NextJS</TechItem>
     <TechItem>Flask</TechItem>
     <TechItem>Google Cloud</TechItem>
     <TechItem>Natural Language Processing</TechItem>
    </div>
   </div>

   <div>
    <LinkHeader src="https://devpost.com/software/insightfullanterns">
     PoliAI
    </LinkHeader>
    <details open>
     <summary>LAHacks 2024</summary>
     Helping news readers fight against misinformation
    </details>
    <div class="project-box">
     <TechItem>React</TechItem>
     <TechItem>Flask</TechItem>
     <TechItem>Google Chrome Extension</TechItem>
     <TechItem>Gemini AI</TechItem>
     <TechItem>Natural Language Processing</TechItem>
    </div>
   </div>

   <div>
    <LinkHeader src="">Data Structure Visualizer </LinkHeader>
    <details open>
     <summary>Orange Coast College</summary>
     Helping students learn data structures and algorithms
    </details>
    <div class="project-box">
     <TechItem>Svelte</TechItem>
     <TechItem>TalwindCSS</TechItem>
     <TechItem>Vite</TechItem>
    </div>
   </div>
  </div>
 </Modal>
</template>

<style lang="scss" scoped>
.project-box {
 @apply flex flex-wrap space-x-2 w-fit mb-5;
}

summary {
 @apply cursor-pointer italic;
}
</style>
