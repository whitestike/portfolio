<template>
  <div id="header">
    <Navbar />
    <h1>Hi, I'm Rickert Goyvaerts</h1>
  </div>
</template>

<script>
import Navbar from "./navbar.vue";

export default {
  name: "Header",
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#header {
  width: 100%;
  height: 50vh;
}

#header h1 {
  font-family: "montserrat", sans-serif;
  font-size: 50px;
  margin: 35vh 18%;
  border-bottom: solid 2px transparent;
  border-image: linear-gradient(
    to bottom right,
    rgb(255, 145, 0),
    rgb(255, 136, 0),
    rgb(132, 0, 255)
  );
  border-image-slice: 1;
}
</style>

