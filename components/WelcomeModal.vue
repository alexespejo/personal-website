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
  <div class="welcome-content">
   <span class="rainbow-shadow welcome-text">Welcome!!</span>
   <p>
    HIYA!!👋 😁 welcome to my website!!! 💯💯🔥🔥🔥🥳🇵🇭🤙
    <br />
    <span>
     My name is Alexander Espejo, I'm a first year computer science major at
     <a class="underline" href="https://orangecoastcollege.edu/"
      >Orange Coast College</a
     >
     🎓 I'm a self-taught frontend developer 👨‍💻 and aspring software engineer ⚙️
     (check out my
     <a
      class="underline"
      href="https://github.com/alexespejo?tab=overview&from=2022-03-01&to=2022-03-11"
      >Github</a
     >
     if you get the chance 🤩)
    </span>

    <img
     src="../assets/realProfilePic.png"
     alt="profile picture"
     id="profilePicture"
    />

    <br />
    I love to develop software 🖥️ and build apps 📱 that can make a positive
    impact on the world 🌍. I'm always eager to learn and practice new skills 🏋️‍♂️
    and technologies, and I enjoy collaborating with other passionate coders 🤝.
    I'm excited to share my projects and ideas with you! 🫶
    <br />
   </p>
   <img
    src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
    alt=""
    class="h-1/2 w-14"
   />
   <br />
   <span>I hope my irony landed otherwise this is really cringe -.-''</span>
  </div>
 </Modal>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap");
.welcome-content {
 font-family: "Comic Neue", cursive;

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
 img {
  align-self: center;
  width: 50%;
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
 font-size: 42px;
 font-family: Arial Black, Gadget, sans-serif;

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
</style>
