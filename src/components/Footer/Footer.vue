<template>
  <v-footer color="white lighten-1">
    <v-row justify="center" no-gutters>
      <v-col class="white lighten-2 py-6 text-center black--text" cols="12">
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
}
</style>
