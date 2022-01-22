<template>
  <div class="background">
    <v-lazy v-model="isActive">
      <div class="container">
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            cols="12"
            sm="4"
          >
            <v-hover v-slot="{ hover }">
              <router-link :to="{ name: 'DetailAnimal' }">
                <v-card
                  class="elevation-0 rounded-lg"
                  box-shadow="0 10px 29px 0 rgb(68 88 144 / 10%"
                >
                  <v-img class="rounded-lg" :src="item.src" height="350px">
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex flex-row justsify-space-between transition-fast-in-fast-out darken-2 v-card--reveal white--text"
                      >
                        <v-card-title> Lorem, ipsum dolor</v-card-title>
                      </div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </router-link>
            </v-hover>
          </v-col>
        </v-row>
      </div>
    </v-lazy>
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
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
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
    ],
    tags: ["Work", "Carnivore", "berbulu"],
    description:
      "Karena spesiesnya yang sangat banyak, kamu bisa menggolongkan hewan menjadi beberapa jenis berdasarkan dengan kelas, cara berjalan, serta cara hewan bernapas. Yuk, cari tahu beragam jenis hewan berdasarkan berbagai golongan di sini!Hewan merupakan salah satu makhluk hidup yang tinggal dan berkembang biak di bumi.Saking banyaknya spesies hewan di dunia, kamu bisa mengklasifikasikannya berdasarkan berbagai jenis golongan.Kamu bisa menggolongkan hewan berdasarkan kelasnya, tempat hidupnya, dan bahkan kulitnya, lo!",
  }),

  methods: {},
};
</script>

<style scoped>
.background {
  background: #f5f8fd;
}
.expanded {
  margin: auto !important;
}
.container {
  width: 70% !important;
  background: white;
}
h1 {
  color: black;
}

p {
  width: 70%;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25) !important;
  position: absolute;
  width: 100% !important;
}
</style>
