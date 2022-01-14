<template>
  <v-card v-scroll="onscroll">
    <v-app-bar fixed elevation="0" color="transparent">
      <v-spacer></v-spacer>
      <v-btn elevation="0" color="transparent" href="#home"> Home </v-btn>
      <v-btn elevation="0" color="transparent" href="#about"> About </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view ref="router" id="view" />
  </v-card>
</template>
<script>
export default {
  methods: {
    onscroll(p) {
      // console.log(this.$refs.router.scrollTop);
      console.log(p.target.querySelector("#view").scrollTop);
    },
  },
};
</script>

<style>
html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px;
}
</style>
