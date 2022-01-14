<template>
  <v-carousel
    hide-delimiter-background
    show-arrows-on-hover
    cycle
    interval="4000"
    height="975"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
