<template>
  <v-app>
    <v-carousel
      hide-delimiter-background
      show-arrows-on-hover
      cycle
      indeterminate
      interval="4000"
      height="550"
      class="mt-16"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        height="250"
        indeterminate
      >
        <div class="d-flex flex-row justify-space-around align-center">
          <v-card
            :loading="loading"
            class="mx-auto my-14 rounded-lg"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
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

            <v-divider class="mx-8"></v-divider>
            <v-card-title>Test Title</v-card-title>
          </v-card>

          <v-card
            :loading="loading"
            class="mx-auto my-14 rounded-lg"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
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

            <v-divider class="mx-8"></v-divider>
            <v-card-title>Test Title</v-card-title>
          </v-card>

          <v-card
            :loading="loading"
            class="mx-auto my-14 rounded-lg"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
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

            <v-divider class="mx-8"></v-divider>
            <v-card-title>Test Title</v-card-title>
          </v-card>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-app>
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
src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
