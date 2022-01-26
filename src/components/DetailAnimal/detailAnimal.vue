<template>
  <v-lazy>
    <div class="d-flex flex-column align-center">
      <div class="header mb-16">
        <div class="d-flex justify-space-around pa-16 ma-16">
          <iframe
            contain
            class="rounded-lg"
            width="800"
            height="450"
            src="https://www.youtube.com/embed/Xu1wA7CfhQg"
            title="Rapsodi"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="container-image container2 mt-16">
        <v-img
          class="rounded"
          src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
          min-height="1rem"
          height="48rem"
          min-width="19rem"
          width="28rem"
        >
        </v-img>

        <div class="container2 d-flex flex-column description-class">
          <h1>Deskripsi (in general, alasan langka, habitat, cara hidup) ✓</h1>
          <h2 class="my-4">Nama indonesia (Nama Latin)✓</h2>
          <p class="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            veniam commodi est ex, libero officiis laudantium facilis labore
            repellat esse saepe, quasi error excepturi quod quam dolore iste
            vero earum! Iure dolore sit dolores, nam aspernatur dolor, voluptas
            consequuntur, voluptates pariatur est error aut omnis. Recusandae
            nam quo fugiat nulla?
          </p>
          <p class="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            veniam commodi est ex, libero officiis laudantium facilis labore
            repellat esse saepe, quasi error excepturi quod quam dolore iste
            vero earum! Iure dolore sit dolores, nam aspernatur dolor, voluptas
            consequuntur, voluptates pariatur est error aut omnis. Recusandae
            nam quo fugiat nulla?
          </p>
          <v-chip-group
            class="my-4 chip-container"
            active-class="primary--text"
          >
            <v-chip v-for="tag in tags" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </div>
      </div>
      <div class="divider mt-8">
        <div
          class="container3 d-flex flex-row justify-space-between py-12 align-center"
        >
          <p>Background image sesuai dengan hewan (jika memungkinkan)</p>
          <p>Kata kunci</p>
        </div>
      </div>

      <div class="container2 d-flex justify-center mt-8 align-center">
        <h1 class="description-h1">Kelompok Hewan</h1>
      </div>
      <div class="container-card mt-6 mb-16">
        <div
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          class="maincontainer mb-8"
        >
          <div class="thecard">
            <div class="thefront rounded pt-2 px-8">
              <h1 class="description-h1">{{ items[1] }}</h1>
              <p class="mt-4">
                This is the front of the card. It contains important
                information. Please see overleaf for more details.
              </p>
            </div>

            <div class="theback rounded pt-2 px-8">
              <h1 class="description-h1">{{ tags[1] }}</h1>
              <p class="mt-4">
                Your use of this site is subject to the terms and conditions
                governing this and all transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-lazy>
</template>

<script>
export default {
  data() {
    return {
      items: [" Animal kingdom", " Makanan", " Cara berkembang biak"],
      tags: ["Work", "Carnivore", "berbulu"],
    };
  },
};
</script>

<style scoped>
.description-class {
  margin-left: 1.5rem;
  margin-top: -0.7rem;
}

.container-image {
  display: flex;
}
.description-h1 {
  font-weight: 400;
  text-align: center;
}
.divider {
  background: #2d2b46 !important;
  width: 100% !important;
  color: white;
}
.header {
  width: 100% !important;
  background: #f5f8fd !important;
}

.header2 {
  width: 100% !important;
  background: white;
}

.container {
  width: 70% !important;
  background: #f5f8fd !important;
}
.container2 {
  width: 70% !important;
  background: white !important;
}

.container-card {
  width: 70% !important;
  background: white !important;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  /* align-items: center; */
}

.container3 {
  background: #2d2b46 !important;
  width: 65% !important;
  margin: auto !important;
}

p {
  font-size: 18px;
}
h2 {
  font-weight: 400;
  font-style: italic;
}
.maincontainer {
  width: 20rem;
  height: 28rem;
  background: none;
  top: 50%;
  left: 50%;
}
.v-image {
  transition: all 400ms ease !important;
  box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%) !important;
}
.v-image:hover {
  transform: translateY(-3px) scale(1.05) !important;
  box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%) !important;
}
.thecard {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  box-shadow: 0 10px 29px 0 rgb(68 88 144 / 30%) !important;
}

.thecard:hover {
  transform: rotateY(180deg);
  box-shadow: 0 10px 29px 0 rgb(68 88 144 / 30%) !important;
}

.thefront {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  background: #f5f8fd;
  color: black;
}

.theback {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  background: #f5f8fd;
  color: black;
  transform: rotateY(180deg);
}

.v-slide-group__content {
  box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%) !important;
}

@media only screen and (max-width: 1440px) {
  .description-class h1 {
    font-size: 1.5rem;
  }
  .description-class h2 {
    font-size: 1.25rem;
  }
  .description-class p {
    font-size: 1rem;
  }
  .container-card {
    width: 80% !important;
  }
  .container {
    width: 80% !important;
  }
  .container2 {
    width: 80% !important;
  }
}

@media only screen and (max-width: 1002px) {
  .thecard {
    width: 100%;
  }

  .container-card {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .description-class h1 {
    font-size: 2rem;
    padding-top: 3rem;
  }
  .description-class h2 {
    font-size: 1.5rem;
  }
  .description-class p {
    font-size: 1.25rem;
  }

  .container-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
