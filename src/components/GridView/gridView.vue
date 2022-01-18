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

.navbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10rem;
  height: 5.5rem;
  text-align: center;
  align-items: center;
}

.navbar a {
  cursor: pointer;
  margin-right: 6rem;
  font-size: 1.25rem;
}

.navbar img {
  margin-right: 81rem;
  width: 4rem;
  height: 4rem;
  border-radius: 3rem;
}

.navbar a:hover {
  background: orange;
  border-radius: 2rem;
}

main {
  background-size: cover;
  background-repeat: no-repeat;
}

.profile {
  display: flex;
  background-color: white;
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  width: 38%;
  margin: auto;
  padding: 1rem 0 7rem 0;
  margin-top: 7rem;
}

.profile h1 {
  padding-top: 1rem;
}

.profile-img {
  width: 11rem;
  height: 11rem;
  border-radius: 6rem;
}

.profile-desc {
  padding-top: 1rem;
  text-align: center;
  width: 70%;
}

.medsos {
  margin-top: 2rem;
  cursor: pointer;
  height: 3rem;
  width: 3rem;
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

.container-footer {
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  margin: auto;
}

.kiri-footer {
  display: flex;
  width: 30%;
  flex-direction: column;
  text-align: center;
  margin-top: 4rem;
}

.kanan-footer {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 4rem;
}

#copyright {
  margin-top: 18rem;
  color: white;
}

.medsos-container {
  display: flex;
  align-items: center;
}

.medsos-container > p {
  padding-left: 1rem;
}

.medsos-container > img {
  height: 3rem;
  width: 3rem;
}

.navbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10rem;
  height: 5.5rem;
  text-align: center;
  align-items: center;
}

.navbar a {
  cursor: pointer;
  margin-right: 6rem;
  font-size: 1.25rem;
}

.navbar img {
  margin-right: 81rem;
  width: 4rem;
  height: 4rem;
  border-radius: 3rem;
}

.navbar a:hover {
  background: orange;
  border-radius: 2rem;
}

main {
  background-size: cover;
  background-repeat: no-repeat;
}

.profile {
  display: flex;
  background-color: white;
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  width: 38%;
  margin: auto;
  padding: 1rem 0 7rem 0;
  margin-top: 7rem;
}

.profile h1 {
  padding-top: 1rem;
}

.profile-img {
  width: 11rem;
  height: 11rem;
  border-radius: 6rem;
}

.profile-desc {
  padding-top: 1rem;
  text-align: center;
  width: 70%;
}

.medsos {
  margin-top: 2rem;
  cursor: pointer;
  height: 3rem;
  width: 3rem;
}

.daerah-section {
  display: flex;
  margin-top: 5rem;
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
  padding: 14rem 3.4rem;
}

.card-wide a {
  padding: 6rem 10rem;
}

.card-biasa a {
  padding: 5.8rem 1.4rem;
}

.photo-grid a {
  color: white;
}

.container-footer {
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  margin: auto;
}

.kiri-footer {
  display: flex;
  width: 30%;
  flex-direction: column;
  text-align: center;
  margin-top: 4rem;
}

.kanan-footer {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 4rem;
}

#copyright {
  margin-top: 18rem;
  color: white;
}

.medsos-container {
  display: flex;
  align-items: center;
}

.medsos-container > p {
  padding-left: 1rem;
}

.medsos-container > img {
  height: 3rem;
  width: 3rem;
}

.card-tall {
  grid-row: span 2 / auto;
}

.card-wide {
  grid-column: span 2 / auto;
}
</style>
