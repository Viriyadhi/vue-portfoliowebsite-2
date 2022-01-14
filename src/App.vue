<template>
  <v-app>
    <v-main>
      <navbar />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  name: "App",

  components: {
    Navbar,
  },
};
</script>

<style></style>
