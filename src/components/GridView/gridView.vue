<template>
  <div>
    <v-lazy v-model="isActive">
      <div>
        <div class="daerah-section d-flex justify-center align-center mb-6">
          <h1>TITLE</h1>
        </div>

        <section class="photo-grid animated-grid mb-8">
          <router-link
            class="card card-tall rounded"
            :to="{ name: 'AnimalList' }"
          >
            <a class="">Ikan</a>
          </router-link>

          <router-link
            class="card card-biasa rounded"
            :to="{ name: 'AnimalList' }"
          >
            <a class="">Burung</a>
          </router-link>

          <router-link
            class="card card-wide rounded"
            :to="{ name: 'AnimalList' }"
          >
            <a class="">Mamalia</a>
          </router-link>

          <router-link
            class="card card-tall rounded"
            :to="{ name: 'AnimalList' }"
          >
            <a class="">Amfibi</a>
          </router-link>
          <router-link
            class="card card-wide rounded"
            :to="{ name: 'AnimalList' }"
          >
            <a class="">Reptil</a>
          </router-link>

          <router-link
            class="card card-biasa rounded"
            :to="{ name: 'AnimalList' }"
          >
            <a class="">Invertebrata</a>
          </router-link>
        </section>
      </div>
    </v-lazy>
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
};
</script>

<style scoped>
.card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #353535;
  font-size: 2rem;
  color: #fff;
  height: 100%;
  width: 100%;
  transition: all 300ms;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%) !important;
}

.card:hover {
  transform: translateY(-3px) scale(1.1);
}
.animated-grid {
  --stagger-delay: 100ms;
}

.photo-grid {
  padding-top: 2.6rem;
  width: 76%;
  margin: auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 240px;
}

.daerah-section {
  display: flex;
  margin-top: 3.5rem !important;
  justify-content: center;
}

.daerah-section h1 {
  font-size: 42px;
  font-weight: 400;
}
.card {
  animation: cardEntrance 700ms ease-out;
  animation-fill-mode: backwards;
}
.card-tall {
  grid-row: span 2 / auto;
}
.card-wide {
  grid-column: span 2 / auto;
}

@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: scale(0.2);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

a {
  color: white !important;
  text-decoration: none !important;
}
.card:nth-child(1) {
  animation-delay: calc(1 * var(--stagger-delay));
}
.card:nth-child(2) {
  animation-delay: calc(3 * var(--stagger-delay));
}
.card:nth-child(3) {
  animation-delay: calc(5 * var(--stagger-delay));
}
.card:nth-child(4) {
  animation-delay: calc(7 * var(--stagger-delay));
}
.card:nth-child(5) {
  animation-delay: calc(9 * var(--stagger-delay));
}
.card:nth-child(6) {
  animation-delay: calc(11 * var(--stagger-delay));
}

@media only screen and (min-width: 3042px) {
  .card-tall {
    grid-row: span 2 / auto;
  }
  .card-wide {
    grid-column: span 3 / auto;
  }
}

@media only screen and (min-width: 2337px) {
  .photo-grid {
    width: 73%;
    gap: 1.25rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 5fr));
    grid-auto-rows: 300px;
  }
}
@media only screen and (max-width: 1664px) {
  .card-tall {
    grid-row: span 2 / auto;
  }
  .card-wide {
    grid-column: span 2 / auto;
  }
  .photo-grid {
    width: 76%;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-auto-rows: 180px;
  }
}

@media only screen and (max-width: 1226px) {
  .card-tall {
    grid-row: span 2 / auto;
  }
  .card-wide {
    grid-column: span 2 / auto;
  }
  .photo-grid {
    width: 93%;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-auto-rows: 180px;
  }
  .card {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 1002px) {
  .card-tall {
    grid-row: span 1 / auto;
  }
  .card-wide {
    grid-column: span 1 / auto;
  }
  .photo-grid {
    width: 93%;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 240px;
  }
}
</style>
