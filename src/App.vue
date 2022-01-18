<template>
  <v-app>
    <navbar />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
