<template>
  <div class="all-container">
    <div class="d-flex justify-center pt-11 pb-8">
      <h1>TITLE</h1>
    </div>
    <div class="card-container py-2 my-2 px-16 mx-16">
      <v-card
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        class="rounded-lg elevation-0 mb-16 mx-5"
        min-height="27rem"
        min-width="18rem"
        width="22rem"
      >
        <v-img
          max-height="12rem"
          min-height="6rem"
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
  </div>
</template>

<script>
export default {
  data: () => ({
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

  methods: {},
};
</script>

<style scoped>
.v-card {
  cursor: pointer;
  box-shadow: 0 10px 29px 0 rgb(68 88 144 / 20%) !important;
}

.all-container {
  background: #f5f8fd;
}

.all-container h1 {
  font-size: 2.5rem;
  font-weight: 400;
}

.card-container {
  display: flex !important;
  justify-content: space-around !important;
  flex-direction: row !important;
}

@media only screen and (max-width: 960px) {
  .card-container {
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
  }
}
</style>
