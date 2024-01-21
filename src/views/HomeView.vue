<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="mt-8" cols="12" md="7">
          <h1 class="">~ 作品紹介 ~</h1>
          <v-card v-for="(project, index) in portfolio" :key="index" class="mt-12" >
            <v-row>
              <v-col cols="4">
                <router-link v-if="project.isExternal" :to="project.url" class="block-link">
                  <v-img :src="require(`@/assets/${project.imageUrl}`)" alt="Project Image" width="170" height="170" contain></v-img>
                </router-link>
                <a v-else :href="project.url" class="block-link" target="_blank">
                  <v-img :src="require(`@/assets/${project.imageUrl}`)" alt="Project Image" width="170" height="170" contain></v-img>
                </a>
              </v-col>
              <v-col cols="8">
                <v-card-text>
                  <h2>{{ project.title }}</h2>
                  <p class="mt-4">{{ project.description }}
                  </p> 
                  <p  class="mt-4 mb-0" >{{ project.skill }}
                  </p> 
                    <a v-if="project.erUrl" :href="project.erUrl" class="block-link" target="_blank" style="margin: 0;">テーブル設計はこちら</a>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col class="mx-auto mt-8" cols="12" md="4">
          <h1 class="">~ 学習歴 ~</h1>
          <ul class="custom-list">
            <li v-for="(entry, index) in learningHistory" 
            :key="index"
            class="mt-8"
            >
              <p class="custom-date">{{ entry.date }}</p>
              <p class="custom-description">{{ entry.description }}</p>
              <a v-if="entry.movieUrl"
               :href="entry.movieUrl"
               class="block-link"
               target="_blank"
               >
               {{ entry.movieTitle }}
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      learningHistory: [
        {
          date: "2023.8 ~",
          description: "学習開始。ProgateでHTMLとCSSを学ぶ。",
        },
        {
          date: "2023.9 ~",
          description: "ドットインストールでJavaScriptを学ぶ。",
        },
        {
          date: "2023.10 ~",
          description: "udemyで学習開始。下記の教材でwebアプリの全体像を学ぶ。",
          movieTitle: "Web Developer Bootcamp 2023（日本語版）",
          movieUrl: 'https://www.udemy.com/course/the-web-developer-bootcamp-2021-japan/'
        },
        {
          date: "2023.11 ~",
          description: "おおいたIT移住プロジェクトに参加（OITA CREATIVE ACADEMYに入校）。下記の教材でphpとlaravelについて学び、同校の課題としてTodoアプリを作成する。",
          movieTitle: "PHPからLaravelまで サーバーサイドをとことんやってみよう",
          movieUrl: "https://www.udemy.com/course/phpbeginnertolaravel/"
        },
        {
          date: "2023.12 ~",
          description: "下記の教材を参考にポートフォリオ（作品集の「音楽教室」）を作成し、デプロイする。",
          movieTitle: "イベント予約システムをつくってみよう",
          movieUrl: "https://www.udemy.com/course/laravel-livewire-event-calendar/"
        },
        {
          date: "2024.1 ~",
          description: "vue.jsの学習を始める。現在、下記の教材でLaravelとvue.jsを使用したアプリ開発を学習中",
          movieTitle: "【Laravel】【Vue.js3】で【CRM(顧客管理システム)】をつくってみよう",
          movieUrl: "https://www.udemy.com/course/laravel-vue3-crm/"
        },
      ],
      portfolio: [
        {
          title: "音楽教室",
          description: "音楽教室で体験レッスンを予約できるサイトをイメージして作成しました。管理者画面では、レッスンの登録や講師の登録が行えます。また、TOP画面のロゴ等も無料のサイトで自作しました。（github経由でXserveにデプロイしています。）",
          skill: '使用技術 : Laravel(Jetstream x Livewire)、Tailwind CSS',
          url: "https://music-school-ralgo.com/",
          imageUrl: "logo.png",
          isExternal: false, 
          erUrl: 'https://app.diagrams.net/#G1N9eRFAlDVV1-K7mpSbkGE6diN-N1JCMw'
        },
        {
          title: "猫を眺めよう",
          description: "APIからデータを取得する練習として作成しました。ボタンに記載してある種類の猫画像をランダムに取得できます。",
          skill: '使用技術 : vue.js 2(vuetify)、Animate.css',
          url: "/catApp",
          imageUrl: "cat.png",
          isExternal: true,
        },
        {
          title: "じゃんけんゲーム",
          description: "vue.jsに慣れるための練習として作成しました。",
          skill: '使用技術 : vue.js 2(vuetify)',
          url: "/JankenApp",
          imageUrl: "choki.png",
          isExternal: true
        },
      ]
    };
  },
};
</script>


<style>
.custom-list {
  list-style-type: none;
  padding: 0; 
}

.custom-date {
  font-weight: bold;
  font-size: large;
  margin-top: 4px; 
}

.custom-description {
  margin-left: 1em; 
}

.block-link {
  margin-top: 4px;
  margin-left: 1em; 
  display: block;
  text-decoration: none;
  padding: 0;
}

</style>