<template>
  <main>
    <div class="daerah-section d-flex justify-center align-center mb-6">
      <h1>TITLE</h1>
    </div>

    <div class="photo-grid mb-8">
      <div class="card card-tall">
        <router-link :to="{ name: 'AnimalList' }">
          <a class="">Ikan</a>
        </router-link>
      </div>
      <div class="card-biasa">
        <router-link :to="{ name: 'AnimalList' }">
          <a class="">Burung</a>
        </router-link>
      </div>
      <div class="card card-wide">
        <router-link :to="{ name: 'AnimalList' }">
          <a class="">Mamalia</a>
        </router-link>
      </div>
      <div class="card card-tall">
        <router-link :to="{ name: 'AnimalList' }">
          <a class="">Amfibi</a>
        </router-link>
      </div>
      <div class="card card-wide">
        <router-link :to="{ name: 'AnimalList' }">
          <a class="">Invertebrata</a>
        </router-link>
      </div>
      <div class="card-biasa">
        <router-link :to="{ name: 'AnimalList' }">
          <a class="">Reptil</a>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #353535;
  font-size: 2rem;
  color: #fff;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: all 500ms;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-biasa {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #353535;
  font-size: 2rem;
  color: #fff;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: all 500ms;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card:hover,
.card-biasa:hover {
  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
    rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
  transform: translateY(-3px) scale(1.1);
}

.daerah-section {
  display: flex;
  margin-top: 3.5rem !important;
  justify-content: center;
}

.daerah-section h1 {
  font-size: 42px;
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

.card-tall a {
  padding: 14rem 7.3rem !important;
}

.card-wide a {
  padding: 5.8rem 15.5rem !important;
}

.card-biasa a {
  padding: 5.9rem 7.3rem !important;
}

a {
  color: white !important;
  text-decoration: none !important;
  margin: 0;
}

.card-tall {
  grid-row: span 2 / auto;
}

.card-wide {
  grid-column: span 2 / auto;
}
</style>
