<template>
  <div id="app">
    <Header />
    <About />
    <contact />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Contact from "./contact_me/contact.vue";
import About from "./about_me/about_me.vue";

export default {
  name: "App",
  components: {
    Header,
    Contact,
    About,
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  background-image: linear-gradient(
    -120deg,
    rgb(197, 206, 255),
    rgb(255, 235, 255)
  );
}
</style>
