<template>
  <div>
        <v-container>
          <div class="mb-8">
            <h1 class="text-center">~ 猫を眺めよう ~</h1>
            <p class="text-center">(Click on Button!!)</p>
          </div>
          
          <v-row class="text-center">
            <v-col 
              v-for="cat in cats"
              :key="cat.id" 
              cols="4"
            >
              <v-btn 
                @click="getId(cat.id)"
                depressed 
                color="primary"
                style="margin: 0; padding: 8px;"
                 >
                {{ cat.name }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

      <div v-show="isShowLoad">
        <p class="text-center animate__animated animate__bounceInDown">
        にゃうろーでぃんぐ...
        <img src="../assets/icon.jpg" alt="" width="32px" class="middle">
        </p>
      </div>

      <v-row justify="center" v-show="isShow" class="mt-4">
        <v-col cols="12" sm="6">
          <v-img
            :src="setCatUrl"
            alt=""
            class="mx-auto"
            style="max-height: 300px"
            contain
          ></v-img>
          <p v-show="isShowComment" class="text-center animate__animated animate__fadeInUp mt-4"> 
            {{ comments[index]}} 
          </p>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: 'CatApp',
  data() {
        return {
          cats: [
            {id: 'asho', name: 'あめしょー'},
            {id: 'jbob', name: '日本猫'},
            {id: 'abys', name: 'ノルウェー猫'},
          ],
          comments: [
            '熱いにゃ〜',
            'お腹すいたにゃ〜',
            '寒いにゃ〜'
          ],
          index: '',
          getCatUrl: '',
          setCatUrl: '',
          isShow: false,
          isShowLoad: false,
          isShowComment: false
        }
      },
      methods: {
        async getId(id) {
          this.isShow = false;
          this.isShowComment = false;
          this.setCatUrl = '';
          this.getCatUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`;
          try {
            const response = await fetch(this.getCatUrl);
            const data = await response.json()
            this.setUrl(data[0]);
          }catch(e) {
            throw new Error(e);
          }
        },
        setUrl(data) {
          this.isShowLoad = true;
          this.isShow = true

          setTimeout(() => {
            this.setCatUrl = data.url;
            this.isShowLoad = false
          },3000)

          setTimeout(() => {
            this.index = Math.floor(Math.random() * 3);
            this.isShowComment = true
          }, 6000); 
        }
      }
}
</script>

<style>
  .middle {
    vertical-align: bottom;
  }
</style>
