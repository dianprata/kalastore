<template>
  <div id="app">
    <navbar />
    <div class="content">
      <router-view/>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    FooterBar: Footer,
  },
};
</script>
