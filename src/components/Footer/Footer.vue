<template>
  <v-footer dark padless>
    <v-card flat tile color="#f5f8fd" class="lighten-1 text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="black--text pt-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        architecto earum repellendus non reiciendis dolores, sequi animi quos
        nihil modi, eligendi commodi eos placeat cumque? Provident, et dolore
        accusamus velit laborum ipsam repudiandae? Accusamus ipsam maiores iusto
        quod voluptas numquam earum! Beatae sed autem, aliquam mollitia quam
        quibusdam veritatis harum a aliquid. Veritatis aspernatur fugit atque
        exercitationem repudiandae ab soluta unde nobis quia error dolore nihil
        magni excepturi odio voluptates, dicta harum sint mollitia laboriosam
        officia fugiat quasi. Pariatur, culpa! Nostrum nulla, quos magni
        perspiciatis molestiae eius corporis aut cupiditate commodi rem labore
        delectus eos consectetur ea nisi repellendus voluptate?
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>Viriyadhi</strong>
      </v-card-text>
    </v-card>
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
