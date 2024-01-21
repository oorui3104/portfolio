<template>
  <v-app>
    <v-app-bar app color="indigo" dark fixed class="px-4">

      <v-toolbar-title class="portfolio-title">My Portfolio</v-toolbar-title>
 
      <v-row v-if="$vuetify.breakpoint.mdAndUp" class="link-container">
        <v-btn text to="/">ホーム</v-btn>
        <v-btn text href="https://music-school-ralgo.com/" target="_blank">音楽教室</v-btn>
        <v-btn text to="/catApp">猫を眺めよう</v-btn>
        <v-btn text to="/JankenApp">じゃんけんゲーム</v-btn>
      </v-row>

      <v-btn icon @click.stop="toggleDrawer" v-if="$vuetify.breakpoint.smAndDown"
      class="ml-auto">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary right class="">
      <v-btn text to="/" block>ホーム</v-btn>
      <v-btn text 
      href="https://music-school-ralgo.com/" target="_blank"
      block>音楽教室</v-btn>
      <v-btn text to="/catApp" block>猫を眺めよう</v-btn>
      <v-btn text to="/JankenApp" block>じゃんけんゲーム</v-btn>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false, 
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer; 
    },
  },
};
</script>

<style scoped>
.link-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
  margin-top: 24px;
}

.portfolio-title {
  margin-left: 0px;
}

.text-link {
  text-decoration: none;
  color: inherit;
}

.external-link {
  text-decoration: none;
  color: inherit;
}
</style>