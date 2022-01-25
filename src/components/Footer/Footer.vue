<template>
  <v-footer>
    <v-row justify="center" no-gutters>
      <v-col
        class="container white lighten-2 py-6 text-center black--text"
        cols="12"
      >
        © {{ new Date().getFullYear() }} Copyright
        <strong>Viriyadhi</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-instagram", "mdi-github"],
  }),
};
</script>
<style scoped>
.container {
  width: 100% !important;
  background: #f5f8fd !important;
}
</style>
