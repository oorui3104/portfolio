<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="9" class="text-center">
          <h1>~ じゃんけん ~</h1>
          
          <v-img 
            :src="require(`@/assets/${choices[randomNumber].img}`)"
            contain
            class="mx-auto"
            width="300"
            height="300"
          >
          </v-img>
          <v-btn 
            @click="start"
            v-show="isShowStart">
            スタート!
          </v-btn>
          <div v-show="isShowDraw">
            <p>あいこ(もっかい！)</p>
          </div>
          <div v-show="isShowChoice">
            <v-btn 
              v-for="(choice, index) in choices"
              :key="index"
              @click="judgement(index)"
              class="mx-4"
            >
              {{ choice.name }}
            </v-btn>
          </div>
          <div v-show="isShowResult">
            <p>{{ result }}</p>
              <v-btn 
              @click="start"
              >
              もう一度
              </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'JankenApp',
    data() {
      return {
        randomNumber: '0',
        intervalId: '',
        isShowChoice: false,
        isShowStart: true,
        isShowResult: false,
        isShowDraw: false,
        result: '',
        choices: [
        {
        name: "グー",
        img: "goo.png",
        },
        {
        name: "チョキ",
        img: "choki.png",
        },
        {
        name: "パー",
        img: "par.png",
        }],
      }
    },
    methods: {
      start() {
        this.isShowChoice = true;
        this.isShowResult = false;
        this.isShowStart = false;
        this.isShowDraw = false;

        // 画像の切り替え（配列のインデックス生成）
        this.intervalId = setInterval(() => {
        this.randomNumber = Math.floor(Math.random() * 3);
        }, 50); 
      },
      judgement(index) {
        clearInterval(this.intervalId);

        //アイコはモッカイ
        if(index === this.randomNumber) {
          this.restart();
        } else {
          //ぐー
          if(index === 0) {
            if(this.randomNumber === 1) {
              this.result = '勝ち！！'
            } else {
              this.result = '負け・・・'
            }
          } 
          
          //チョキ
          if(index === 1) {
            if(this.randomNumber === 2) {
              this.result = '勝ち！！'
            } else {
              this.result = '負け・・・'
            }
          } 
          
          //パー
          if(index === 2) {
            if(this.randomNumber === 0) {
              this.result = '勝ち！！'
            } else {
              this.result = '負け・・・'
            }
          } 

          this.isShowResult = true;
          this.isShowChoice = false;
        }
      },
      restart() {
        this.isShowDraw = true;
        this.isShowChoice = false;
        setTimeout(()=> {
          this.start();
        }, 2000)
      }
    },
    components: {
    },
  }
</script>
