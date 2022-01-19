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
      <router-link :to="{ name: 'Home' }">
        <a class="mr-8">Home</a>
      </router-link>
      <router-link :to="{ name: 'AnimalList' }">
        <a class="mr-8">List</a>
      </router-link>
      <a class="mr-8" elevation="0" href="#card" id="last"> Contact </a>

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
      console.log(p.currentTarget.scrollY);
      if (p.currentTarget.scrollY > 11) {
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
}

#last {
  margin-right: 4rem !important;
}
</style>
