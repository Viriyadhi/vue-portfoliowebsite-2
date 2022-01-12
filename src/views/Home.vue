<template>
  <v-app>
    <carousels />
    <div class="d-flex flex-row"></div>
  </v-app>
</template>

<script>
import Carousels from "../components/Carousels.vue";

export default {
  name: "Home",

  components: {
    Carousels,
  },
};
</script>

<style scoped></style>
