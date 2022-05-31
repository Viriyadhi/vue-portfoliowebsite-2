<template>
  <div>
    <v-card>
      <v-app-bar
        :style="this.appbarStyle"
        fixed
        elevation="0"
        v-scroll="onScrollContent"
      >
        <v-img
          src="@/assets/logo.png"
          max-width="100"
          max-height="100"
          class="ml-16"
        >
        </v-img>
        <v-spacer></v-spacer>
        <div class="d-flex align-center justify-center">
          <router-link :to="{ name: 'Home' }">
            <a class="mr-8">Home</a>
          </router-link>
          <router-link :to="{ name: 'AnimalList' }">
            <a class="mr-8">List</a>
          </router-link>
          <a class="mr-16 pr-16" elevation="0" href="#card" id="last">
            Contact
          </a>
        </div>
      </v-app-bar>
      <router-view />
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    appbarStyle: {
      backgroundColor: `rgba(0,0,0,0)`,
      transition: "all 700ms ",
      marginTop: "0px",
      boxShadow: "none !important",
      zIndex: " 1000",
    },
  }),
  methods: {
    onScrollContent(p) {
      console.log(p.currentTarget.scrollY);
      console.log(this.appbarStyle);
      if (p.currentTarget.scrollY > 11) {
        this.appbarStyle.backgroundColor = `rgba(255,255,255,1)`;
        this.appbarStyle.marginTop = "-5px";
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
</style>
