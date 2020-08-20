<template>
  <div id="app">
    <Header/>
    <contact/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Contact from './contact_me/contact.vue'

export default {
  name: 'App',
  components: {
    Header,
    Contact
  }
}
</script>

<style>
</style>
