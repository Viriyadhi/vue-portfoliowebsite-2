<template>
  <v-app>
    <carousel id="home" />
    <animal-card id="card" />
    <grid-view />
  </v-app>
</template>

<script>
import AnimalCard from "../components/AnimalCard/animalCard.vue";
import Carousel from "../components/Carousel.vue";

import GridView from "../components/GridView/gridView.vue";

export default {
  name: "Home",

  components: {
    Carousel,
    AnimalCard,

    GridView,
  },
};
</script>

<style scoped></style>
