<template>
  <div class="d-flex flex-column justify-center">
    <v-card
      class="rounded-lg d-flex flex-row ma-6 elevation-8"
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    >
      <v-img
        width="400"
        class="rounded-lg rounded-r-0 elevation-8"
        :src="item.src"
      >
      </v-img>
      <div class="d-flex flex-column">
        <v-card-text>
          <h1 class="my-4">Italian, Cafe</h1>
          <p>
            {{ description }}
          </p>
          <div class="mt-16 pt-12 width">
            <v-chip-group active-class="primary--text" column>
              <v-chip v-for="tag in tags" :key="tag">
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </div>
        </v-card-text>
      </div>
      <div class="d-flex justify-center align-center mr-16 pr-16">
        <router-link :to="{ name: 'DetailAnimal' }">
          <v-btn class="primary rounded"> Pelajari Lebih Lanjut </v-btn>
        </router-link>
      </div>
    </v-card>
  </div>
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
    tags: ["Work", "Carnivore", "berbulu"],
    description:
      "Karena spesiesnya yang sangat banyak, kamu bisa menggolongkan hewan menjadi beberapa jenis berdasarkan dengan kelas, cara berjalan, serta cara hewan bernapas. Yuk, cari tahu beragam jenis hewan berdasarkan berbagai golongan di sini!Hewan merupakan salah satu makhluk hidup yang tinggal dan berkembang biak di bumi.Saking banyaknya spesies hewan di dunia, kamu bisa mengklasifikasikannya berdasarkan berbagai jenis golongan.Kamu bisa menggolongkan hewan berdasarkan kelasnya, tempat hidupnya, dan bahkan kulitnya, lo!",
  }),
};
</script>
<style scoped>
h1 {
  color: black;
}

p {
  width: 70%;
}

.width {
  width: 70%;
}
</style>
