<template>
  <v-app>
    <v-app-bar app color="indigo" dark fixed>
      <v-toolbar-title>My Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">ホーム</v-btn>
      <v-btn text href="https://music-school-ralgo.com/" target="_blank">音楽教室</v-btn>
      <v-btn text to="/catApp">猫を眺めよう</v-btn>
      <v-btn text to="/JankenApp">じゃんけんゲーム</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.link-container {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  margin-top: 24px;
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

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
