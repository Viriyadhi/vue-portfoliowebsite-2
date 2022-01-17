<template>
  <v-app>
    <carousel id="home" />
    <animal-card id="card" />
    <Footer />
  </v-app>
</template>

<script>
import AnimalCard from "../components/AnimalCard/animalCard.vue";
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  name: "Home",

  components: {
    Carousel,
    AnimalCard,
    Footer,
  },
};
</script>

<style scoped></style>
