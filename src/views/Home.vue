<template>
  <v-app>
    <carousel id="home" />
    <div id="about" class="d-flex flex-row justify-space-around">
      <animal-card />
    </div>
  </v-app>
</template>

<script>
import AnimalCard from "../components/AnimalCard/animalCard.vue";
import Carousel from "../components/Carousel.vue";

export default {
  name: "Home",

  components: {
    Carousel,
    AnimalCard,
  },
};
</script>

<style scoped></style>
