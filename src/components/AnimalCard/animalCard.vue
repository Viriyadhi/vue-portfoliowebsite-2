<template>
  <v-carousel
    hide-delimiter-background
    show-arrows-on-hover
    indeterminate
    interval="4000"
    cycle
    height="550"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <div class="d-flex justify-center">
        <h1>MAMALS</h1>
      </div>
      <div class="d-flex justify-space-around py-2 my-2 px-16 mx-16">
        <v-card :loading="loading" class="rounded-lg" max-width="374">
          <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-text>
            <div class="mb-4 text-subtitle-1">Italian, Cafe</div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-2"></v-divider>
          <v-card-title>Test Title</v-card-title>
        </v-card>

        <v-card :loading="loading" class="rounded-lg" max-width="374">
          <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-text>
            <div class="mb-4 text-subtitle-1">Italian, Cafe</div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-2"></v-divider>
          <v-card-title>Test Title</v-card-title>
        </v-card>
        <v-card :loading="loading" class="rounded-lg" max-width="374">
          <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-text>
            <div class="mb-4 text-subtitle-1">Italian, Cafe</div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-2"></v-divider>
          <v-card-title>Test Title</v-card-title>
        </v-card>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,

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
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style></style>
