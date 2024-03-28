<template>
 <Head>
  <Title>Alexander Espejo</Title>
  <Meta
   name="description"
   content="My name is Alexander Espejo, I'm a first year computer science major at Orange Coast College 🎓 I'm a self-taught frontend developer 👨‍💻 and aspring software engineer ⚙️ (check out my Github if you get the chance 🤩)profile picture
I love to develop software 🖥️ and build apps 📱 that can make a positive impact on the world 🌍. I'm always eager to learn and practice new skills 🏋️‍♂️ and technologies, and I enjoy collaborating with other passionate coders 🤝. I'm excited to share my projects and ideas with you! 🫶"
  />
 </Head>
 <Modal name="welcome">
  <div class="welcome-content font-serif">
   <div class="flex flex-col lg:flex-row relative border-b-2">
    <div
     class="flex space-x-3 lg:space-x-0 lg:flex-col lg:space-y-5 lg:w-2/4 xl:w-1/4 lg:border-r-2 items-center border-slate-800"
    >
     <div
      class="w-1/2 flex flex-col items-center justify-center sm:flex-row md:flex-col sm:space-x-2 lg:w-full"
     >
      <img
       src="../assets/profile.png"
       alt="My Pfp"
       class="w-40 h-40 sm:w-48 sm:h-48 border-4 border-r-slate-500 border-b-slate-500 border-l-gray-200 border-t-gray-200 p-2"
      />
      <h1 class="text-xl flex flex-col">
       <span class="sm:text-sm text-lg"> Hiya!! my name is</span>
       <span class="block text-2xl"> Alex Espejo</span>
      </h1>
     </div>
     <ul
      class="w-1/2 text-xs lg:w-full sm:text-sm lg:flex flex-col space-y-2 pr-1"
     >
      <label class="font-bold">Skills:</label>
      <li class="">
       JavaScript: 100%
       <div class="hover:w-full h-1 bg-slate-800"></div>
      </li>
      <li class="">
       HTML/CSS: 100%
       <div class="w-full h-1 bg-slate-800"></div>
      </li>
      <li class="">
       Python: 100%
       <div class="w-full h-1 bg-slate-800"></div>
      </li>
      <li class="">
       Vue: 100%
       <div class="w-full h-1 bg-slate-800"></div>
      </li>
      <li class="">
       Firebase: 100%
       <div class="w-full h-1 bg-slate-800"></div>
      </li>
      <li class="">
       React: 80%
       <div class="w-5/6 h-1 bg-slate-800"></div>
      </li>
      <li class="">
       C++: 60%
       <div class="w-4/6 h-1 bg-slate-800"></div>
      </li>
      <li class="">
       Go: 50%
       <div class="w-1/2 h-1 bg-slate-800"></div>
      </li>
     </ul>
    </div>
    <div
     class="lg:w-3/4 sm:p-3 space-y-3 sm:text-xl h-full flex flex-col justify-center"
    >
     <div class="">
      I'm a self-taught frontend developer and student at
      <span class="text-blue-600 font-bold">Orange Coast College</span> 🎓
      majoring in <span class="text-blue-600 font-bold">Computer Science</span>.
      👨‍💻
     </div>
     <div class="">
      I love to develop software and build applications that can make a
      <span class="text-blue-600 font-bold">positive</span> impact on the world
      🌍. I'm always eager to learn new skills and I enjoy
      <span class="text-blue-600 font-bold">collaborating</span> 🤝 with other
      passionate developers!
     </div>
     <div class="text-sm sm:text-xl">
      I like to add an unorthodox
      <span class="text-blue-600 font-bold">spin</span> to my personal work 🖌️
     </div>
     <div class="font-bold self-center">
      <span class="rainbow-shadow">Enjoy!!</span> 😄
     </div>
     <img
      src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
      alt=""
      class="w-1/2 h-3/4 self-center mt-20"
     />
    </div>
   </div>
  </div>
 </Modal>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap");
.welcome-content {
 display: flex;
 position: relative;
 flex-direction: column;

 p {
  font-size: 1rem;
  line-height: 2rem;
  a {
   color: blue;
  }
 }

 #profilePicture {
  position: absolute;
  top: 0;
  right: 3px;
  object-fit: cover;
  width: 10%;
 }
 .welcome-text {
  font-family: "Comic Neue", cursive;

  font-size: 2rem;
  align-self: center;
 }
}
.animated-shadow {
 $color1: #ff0000;
 $color2: #00ff00;
 $color3: #0000ff;

 @keyframes animated-text-shadow {
  0% {
   text-shadow: 0 0 10px $color1;
  }
  33% {
   text-shadow: 0 0 10px $color2;
  }
  66% {
   text-shadow: 0 0 10px $color3;
  }
 }

 .animated-text-shadow {
  animation: animated-text-shadow 2s infinite;
 }
}
.rainbow-shadow {
 background-image: -webkit-linear-gradient(
  left,
  #f00,
  #ff2b00,
  #f50,
  #ff8000,
  #fa0,
  #ffd500,
  #ff0,
  #d4ff00,
  #af0,
  #80ff00,
  #5f0,
  #2bff00,
  #0f0,
  #00ff2a,
  #0f5,
  #00ff80,
  #0fa,
  #00ffd5,
  #0ff,
  #00d5ff,
  #0af,
  #0080ff,
  #05f,
  #002aff,
  #00f,
  #2b00ff,
  #50f,
  #8000ff,
  #a0f,
  #d400ff,
  #f0f,
  #ff00d4,
  #f0a,
  #ff0080,
  #f05,
  #ff002b,
  #f00
 );
 -webkit-animation: animatedBackground_a 5s linear infinite alternate;
 -webkit-background-clip: text;
 -webkit-text-fill-color: #0000;
 background-clip: text;
}

@keyframes animatedBackground_a {
 0% {
  background-position: 0 0;
 }
 100% {
  background-position: -500px 0;
 }
}
.animated-div {
 animation: growShrink 1s infinite ease-in-out alternate;
}
/* Define the keyframes for the animation */
@keyframes growShrink {
 0% {
  transform: scale(1);
 }
 100% {
  transform: scale(1.2);
 }
}
</style>
