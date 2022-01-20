<template>
  <v-lazy v-model="isActive">
    <div>
      <div class="daerah-section d-flex justify-center align-center mb-6">
        <h1>TITLE</h1>
      </div>

      <section class="photo-grid animated-grid mb-8">
        <div class="card card-tall rounded">
          <router-link :to="{ name: 'AnimalList' }">
            <a class="">Ikan</a>
          </router-link>
        </div>
        <div class="card card-biasa rounded">
          <router-link :to="{ name: 'AnimalList' }">
            <a class="">Burung</a>
          </router-link>
        </div>
        <div class="card card-wide rounded">
          <router-link :to="{ name: 'AnimalList' }">
            <a class="">Mamalia</a>
          </router-link>
        </div>
        <div class="card card-tall rounded">
          <router-link :to="{ name: 'AnimalList' }">
            <a class="">Amfibi</a>
          </router-link>
        </div>
        <div class="card card-wide rounded">
          <router-link :to="{ name: 'AnimalList' }">
            <a class="">Invertebrata</a>
          </router-link>
        </div>
        <div class="card card-biasa rounded">
          <router-link :to="{ name: 'AnimalList' }">
            <a class="">Reptil</a>
          </router-link>
        </div>
      </section>
    </div>
  </v-lazy>
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
}

.card:hover {
  transform: translateY(-3px) scale(1.1);
}
.animated-grid {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "a  b  c  c  d"
    "a  f  f  e  d";
  --stagger-delay: 100ms;
}

.photo-grid {
  cursor: pointer;
  padding-top: 2.6rem;
  width: 80%;
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
}
.card {
  animation: cardEntrance 700ms ease-out;
  animation-fill-mode: backwards;
}

@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: scale(0.3);
    filter: hue-rotate(180deg);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: hue-rotate(0deg);
  }
}

a {
  color: white !important;
  text-decoration: none !important;
  margin: 0;
}
.card-tall a {
  padding: 14rem 7.3rem !important;
}

.card-wide a {
  padding: 5.8rem 15.5rem !important;
}

.card-biasa a {
  padding: 5.9rem 7.3rem !important;
}

.card:nth-child(1) {
  grid-area: a;
  animation-delay: calc(1 * var(--stagger-delay));
}
.card:nth-child(2) {
  grid-area: b;
  animation-delay: calc(3 * var(--stagger-delay));
}
.card:nth-child(3) {
  grid-area: c;
  animation-delay: calc(5 * var(--stagger-delay));
}
.card:nth-child(4) {
  grid-area: d;
  animation-delay: calc(7 * var(--stagger-delay));
}
.card:nth-child(5) {
  grid-area: e;
  animation-delay: calc(9 * var(--stagger-delay));
}
.card:last-child {
  grid-area: f;
  animation-delay: calc(11 * var(--stagger-delay));
}
.card-tall {
  grid-row: span 2 / auto;
}
.card-wide {
  grid-column: span 2 / auto;
}
</style>
