<template>
  <v-card>
    <v-app-bar :style="this.appbarStyle" ref="bar" fixed elevation="0">
      <v-img
        src="@/assets/logo.png"
        max-width="100"
        max-height="100"
        class="ml-16"
      >
      </v-img>
      <v-spacer></v-spacer>
      <a elevation="0" href="#top"> Home </a>
      <a elevation="0" href="#card"> About </a>
      <a elevation="0" href="#card" id="last"> Contact </a>

      <v-btn icon class="mr-16">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view v-scroll="onScroll" ref="router" />
  </v-card>
</template>
<script>
export default {
  data: () => ({
    appbarStyle: {
      backgroundColor: `rgba(0,0,0,0)`,
      transition: "background-color 800ms, margin-top 800ms ",
      marginTop: "0px",
      boxShadow: "none !important",
    },
  }),
  methods: {
    onScroll(p) {
      if (p.currentTarget.scrollY > 150) {
        this.appbarStyle.backgroundColor = `rgba(255,255,255,1)`;
        this.appbarStyle.marginTop = "-6px";
        this.appbarStyle.boxShadow =
          "0px 0px 30px rgba(127, 137, 161,1) !important";
      } else {
        this.appbarStyle.backgroundColor = `rgba(0,0,0,0)`;
        this.appbarStyle.marginTop = "0px";
        this.appbarStyle.boxShadow = "none !important";
      }
      // console.log(bar);
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
a {
  text-decoration: none;
  color: black !important;
  margin-right: 2rem;
}

#last {
  margin-right: 6rem;
}
</style>
