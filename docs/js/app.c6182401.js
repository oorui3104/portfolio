(function(){var t={4308:function(t,e,s){"use strict";var i=s(144),r=s(1096),a=s(5378),o=s(7810),n=s(1200),l=s(5057),c=s(3551),u=s(8988),h=s(5294),m=s(2370),p=function(){var t=this,e=t._self._c;return e(r.Z,[e(a.Z,{staticClass:"px-4",attrs:{app:"",color:"indigo",dark:"",fixed:""}},[e(m.qW,{staticClass:"portfolio-title"},[t._v("My Portfolio")]),t.$vuetify.breakpoint.mdAndUp?e(h.Z,{staticClass:"link-container"},[e(o.Z,{attrs:{text:"",to:"/"}},[t._v("ホーム")]),e(o.Z,{attrs:{text:"",href:"https://music-school-ralgo.com/",target:"_blank"}},[t._v("音楽教室")]),e(o.Z,{attrs:{text:"",to:"/catApp"}},[t._v("猫を眺めよう")]),e(o.Z,{attrs:{text:"",to:"/JankenApp"}},[t._v("じゃんけんゲーム")])],1):t._e(),t.$vuetify.breakpoint.smAndDown?e(o.Z,{staticClass:"ml-auto",attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.toggleDrawer.apply(null,arguments)}}},[e(l.Z,[t._v("mdi-menu")])],1):t._e()],1),e(u.Z,{attrs:{app:"",temporary:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(o.Z,{attrs:{text:"",to:"/",block:""}},[t._v("ホーム")]),e(o.Z,{attrs:{text:"",href:"https://music-school-ralgo.com/",target:"_blank",block:""}},[t._v("音楽教室")]),e(o.Z,{attrs:{text:"",to:"/catApp",block:""}},[t._v("猫を眺めよう")]),e(o.Z,{attrs:{text:"",to:"/JankenApp",block:""}},[t._v("じゃんけんゲーム")])],1),e(c.Z,[e(n.Z,{attrs:{fluid:""}},[e("router-view")],1)],1)],1)},d=[],v={name:"App",data:()=>({drawer:!1}),methods:{toggleDrawer(){this.drawer=!this.drawer}}},w=v,f=s(1001),g=(0,f.Z)(w,p,d,!1,null,"5039ff78",null),_=g.exports,x=s(8345),C=s(4437),b=s(2469),Z=function(){var t=this,e=t._self._c;return e("div",[e(n.Z,[e(h.Z,{attrs:{justify:"center"}},[e(C.Z,{staticClass:"text-center",attrs:{cols:"12"}},[e("h1",[t._v("~ じゃんけん ~")]),e(b.Z,{staticClass:"mx-auto",attrs:{src:s(7173)(`./${t.choices[t.randomNumber].img}`),contain:"",width:"300",height:"300"}}),e(o.Z,{directives:[{name:"show",rawName:"v-show",value:t.isShowStart,expression:"isShowStart"}],on:{click:t.start}},[t._v(" スタート! ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowDraw,expression:"isShowDraw"}]},[e("p",[t._v("あいこ(もっかい！)")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowChoice,expression:"isShowChoice"}]},t._l(t.choices,(function(s,i){return e(o.Z,{key:i,staticClass:"mx-4",on:{click:function(e){return t.judgement(i)}}},[t._v(" "+t._s(s.name)+" ")])})),1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowResult,expression:"isShowResult"}]},[e("p",[t._v(t._s(t.result))]),e(o.Z,{on:{click:t.start}},[t._v(" もう一度 ")])],1)],1)],1)],1)],1)},S=[],k={name:"JankenApp",data(){return{randomNumber:"0",intervalId:"",isShowChoice:!1,isShowStart:!0,isShowResult:!1,isShowDraw:!1,result:"",choices:[{name:"グー",img:"goo.png"},{name:"チョキ",img:"choki.png"},{name:"パー",img:"par.png"}]}},methods:{start(){this.isShowChoice=!0,this.isShowResult=!1,this.isShowStart=!1,this.isShowDraw=!1,this.intervalId=setInterval((()=>{this.randomNumber=Math.floor(3*Math.random())}),50)},judgement(t){clearInterval(this.intervalId),t===this.randomNumber?this.restart():(0===t&&(1===this.randomNumber?this.result="勝ち！！":this.result="負け・・・"),1===t&&(2===this.randomNumber?this.result="勝ち！！":this.result="負け・・・"),2===t&&(0===this.randomNumber?this.result="勝ち！！":this.result="負け・・・"),this.isShowResult=!0,this.isShowChoice=!1)},restart(){this.isShowDraw=!0,this.isShowChoice=!1,setTimeout((()=>{this.start()}),2e3)}},components:{}},y=k,U=(0,f.Z)(y,Z,S,!1,null,null,null),j=U.exports,A=function(){var t=this,e=t._self._c;return e("div",[e(n.Z,[e(h.Z,{},[e(C.Z,{attrs:{cols:"12"}},[e("div",{staticClass:"mb-8"},[e("h1",{staticClass:"text-center"},[t._v("~ 猫を眺めよう ~")]),e("p",{staticClass:"text-center"},[t._v("(Click on Button!!)")])]),e(h.Z,{staticClass:"text-center mr-2"},t._l(t.cats,(function(s){return e(C.Z,{key:s.id,attrs:{cols:"4"}},[e(o.Z,{staticStyle:{margin:"0",padding:"8px"},attrs:{depressed:"",color:"primary"},on:{click:function(e){return t.getId(s.id)}}},[t._v(" "+t._s(s.name)+" ")])],1)})),1)],1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowLoad,expression:"isShowLoad"}]},[t._m(0)]),e(h.Z,{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"mt-4",attrs:{justify:"center"}},[e(C.Z,{attrs:{cols:"12",sm:"6"}},[e(b.Z,{staticClass:"mx-auto",staticStyle:{"max-height":"300px"},attrs:{src:t.setCatUrl,alt:"",contain:""}}),e("p",{directives:[{name:"show",rawName:"v-show",value:t.isShowComment,expression:"isShowComment"}],staticClass:"text-center animate__animated animate__fadeInUp mt-4"},[t._v(" "+t._s(t.comments[t.index])+" ")])],1)],1)],1)},T=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-center animate__animated animate__bounceInDown"},[t._v(" にゃうろーでぃんぐ... "),e("img",{staticClass:"middle",attrs:{src:s(6308),alt:"",width:"32px"}})])}],N={name:"CatApp",data(){return{cats:[{id:"asho",name:"あめしょー"},{id:"jbob",name:"日本猫"},{id:"abys",name:"ノルウェー猫"}],comments:["熱いにゃ〜","お腹すいたにゃ〜","寒いにゃ〜"],index:"",getCatUrl:"",setCatUrl:"",isShow:!1,isShowLoad:!1,isShowComment:!1}},methods:{async getId(t){this.isShow=!1,this.isShowComment=!1,this.setCatUrl="",this.getCatUrl=`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`;try{const t=await fetch(this.getCatUrl),e=await t.json();this.setUrl(e[0])}catch(e){throw new Error(e)}},setUrl(t){this.isShowLoad=!0,this.isShow=!0,setTimeout((()=>{this.setCatUrl=t.url,this.isShowLoad=!1}),3e3),setTimeout((()=>{this.index=Math.floor(3*Math.random()),this.isShowComment=!0}),6e3)}}},O=N,P=(0,f.Z)(O,A,T,!1,null,null,null),D=P.exports,I=s(5536),M=s(5223),E=function(){var t=this,e=t._self._c;return e("div",[e(n.Z,[e(h.Z,[e(C.Z,{staticClass:"mt-8",attrs:{cols:"12",md:"7"}},[e("h1",{staticClass:"text-center"},[t._v("~ 作品紹介 ~")]),t._l(t.portfolio,(function(i,r){return e(I.Z,{key:r,staticClass:"mt-12 px-12"},[e(h.Z,{attrs:{align:"center"}},[e(C.Z,{attrs:{cols:"12",sm:"4"}},[i.isExternal?[e("a",{attrs:{href:i.url,target:"_blank"}},[e(b.Z,{attrs:{src:s(7173)(`./${i.imageUrl}`),alt:"プロジェクトの画像",width:"100%",height:"auto",contain:"","max-height":"200"}})],1)]:[e("router-link",{attrs:{to:i.url}},[e(b.Z,{attrs:{src:s(7173)(`./${i.imageUrl}`),alt:"プロジェクトの画像",width:"100%",height:"auto",contain:"","max-height":"200"}})],1)]],2),e(C.Z,{attrs:{cols:"12",sm:"8"}},[e(M.ZB,[e("h2",{staticClass:"text-center"},[t._v("- "+t._s(i.title)+" -")]),e("p",{staticClass:"mt-4"},[t._v(t._s(i.description))]),e("p",{staticClass:"mt-4 mb-0"},[t._v(t._s(i.skill))]),i.erUrl?e("a",{staticClass:"block-link",staticStyle:{margin:"0"},attrs:{href:i.erUrl,target:"_blank"}},[t._v("テーブル設計はこちら")]):t._e()])],1)],1)],1)}))],2),e(C.Z,{staticClass:"mx-auto mt-8",attrs:{cols:"12",md:"4"}},[e("h1",{staticClass:"text-center"},[t._v("~ 学習歴 ~")]),e("ul",{staticClass:"custom-list"},t._l(t.learningHistory,(function(s,i){return e("li",{key:i,staticClass:"mt-8"},[e("p",{staticClass:"custom-date"},[t._v(t._s(s.date))]),e("p",{staticClass:"custom-description"},[t._v(t._s(s.description))]),s.movieUrl?e("a",{staticClass:"block-link",attrs:{href:s.movieUrl,target:"_blank"}},[t._v(" "+t._s(s.movieTitle)+" ")]):t._e()])})),0)])],1)],1)],1)},L=[],J={data(){return{learningHistory:[{date:"2023.8 ~",description:"学習開始。ProgateでHTMLとCSSを学ぶ。"},{date:"2023.9 ~",description:"ドットインストールでJavaScriptを学ぶ。"},{date:"2023.10 ~",description:"udemyで学習開始。下記の教材でwebアプリの全体像を学ぶ。",movieTitle:"Web Developer Bootcamp 2023（日本語版）",movieUrl:"https://www.udemy.com/course/the-web-developer-bootcamp-2021-japan/"},{date:"2023.11 ~",description:"おおいたIT移住プロジェクトに参加（OITA CREATIVE ACADEMYに入校）。下記の教材でphpとlaravelについて学び、同校の課題としてTodoアプリを作成する。",movieTitle:"PHPからLaravelまで サーバーサイドをとことんやってみよう",movieUrl:"https://www.udemy.com/course/phpbeginnertolaravel/"},{date:"2023.12 ~",description:"下記の教材を参考にポートフォリオ（作品集の「音楽教室」）を作成し、Xserveにデプロイする。",movieTitle:"イベント予約システムをつくってみよう",movieUrl:"https://www.udemy.com/course/laravel-livewire-event-calendar/"},{date:"2024.1 ~",description:"vue.jsの学習を始める。現在、下記の教材でLaravelとvue.jsを使用したアプリ開発を学習中",movieTitle:"【Laravel】【Vue.js3】で【CRM(顧客管理システム)】をつくってみよう",movieUrl:"https://www.udemy.com/course/laravel-vue3-crm/"}],portfolio:[{title:"音楽教室",description:"音楽教室で体験レッスンを予約できるサイトをイメージして作成しました。管理者画面では、レッスンの登録や講師の登録が行えます（メールアドレス「test@test.com」パスワード「passwod」 でログインできます）。また、TOP画面のロゴ等も無料のサイトで自作しました。なお、こちらのサイトはgithub経由でXserveにデプロイしています。",skill:"使用技術 : Laravel(Jetstream x Livewire)、Tailwind CSS",url:"https://music-school-ralgo.com/",imageUrl:"logo.png",isExternal:!0,erUrl:"https://app.diagrams.net/#G1N9eRFAlDVV1-K7mpSbkGE6diN-N1JCMw"},{title:"猫を眺めよう",description:"APIからデータを取得する練習として作成しました。ボタンに記載してある種類の猫画像をランダムに取得できます。",skill:"使用技術 : vue.js 2(vuetify)、Animate.css",url:"/catApp",imageUrl:"cat.png",isExternal:!1},{title:"じゃんけんゲーム",description:"vue.jsに慣れるための練習として作成しました。あいこの場合には自動的に再スタートします。",skill:"使用技術 : vue.js 2(vuetify)",url:"/JankenApp",imageUrl:"choki.png",isExternal:!1}]}}},R=J,$=(0,f.Z)(R,E,L,!1,null,null,null),H=$.exports;i.ZP.use(x.ZP);const V=[{path:"/",name:"HomeView",component:H},{path:"/JankenApp",name:"JankenApp",component:j},{path:"/catApp",name:"cat",component:D}],B=new x.ZP({mode:"history",base:"/portfolio/",routes:V});var F=B,G=s(3806);i.ZP.use(G.Z);var W=new G.Z({});i.ZP.config.productionTip=!1,new i.ZP({router:F,vuetify:W,render:t=>t(_)}).$mount("#app")},7173:function(t,e,s){var i={"./cat.png":8470,"./choki.png":687,"./goo.png":6864,"./icon.jpg":6308,"./logo.png":6949,"./par.png":5360};function r(t){var e=a(t);return s(e)}function a(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=a,t.exports=r,r.id=7173},8470:function(t,e,s){"use strict";t.exports=s.p+"img/cat.76f3b09f.png"},687:function(t,e,s){"use strict";t.exports=s.p+"img/choki.3750ee27.png"},6864:function(t,e,s){"use strict";t.exports=s.p+"img/goo.f4a5a953.png"},6308:function(t,e,s){"use strict";t.exports=s.p+"img/icon.d4d4bd71.jpg"},6949:function(t,e,s){"use strict";t.exports=s.p+"img/logo.ad213082.png"},5360:function(t,e,s){"use strict";t.exports=s.p+"img/par.b71d8eec.png"}},e={};function s(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,i,r,a){if(!i){var o=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],a=t[u][2];for(var n=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(n=!1,a<o&&(o=a));if(n){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[i,r,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/portfolio/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,a,o=i[0],n=i[1],l=i[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in n)s.o(n,r)&&(s.m[r]=n[r]);if(l)var u=l(s)}for(e&&e(i);c<o.length;c++)a=o[c],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(u)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(4308)}));i=s.O(i)})();
//# sourceMappingURL=app.c6182401.js.map