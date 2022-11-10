<template>

  <div class="home-wrap" :class="{ bgColor: count }">
    <div class="home-container">
      <div class="home-name-card" :class="{ cardColor: count }">
        <div class="card-pic">
          <img src="../assets/image/headpic.jpg" />
        </div>
        <div class="card-name">
          <h3>李俊彥</h3>
          <h3>Allen</h3>
          <p>Front-end engineer</p>
        </div>
        <div class="card-btn_1">
          <router-link target="_blank" :to="{path:'/about',query:{boolean:`${store.state.viewsColor}`}}" >
            <button class="card-about">關於我</button>
          </router-link>
          <router-link target="_blank" :to="{path:'/project',query:{boolean:`${store.state.viewsColor}`}}">
            <button class="card-project">作品集</button>
          </router-link>
        </div>
        <div class="card-connect">
          <ul>
            <li>
              <a href="https://www.facebook.com/"
                ><img src="../assets/image/facebook.png" alt=""
              /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/allenstu6311/"
                ><img src="../assets/image/instagram.png" alt=""
              /></a>
            </li>
            <li>
              <a href=""><img src="../assets/image/line.png" alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-introduce" :class="{ introduceColor: count }">
      <h1>HELLO</h1>
      <div class="card-btn_2">
        <router-link  target="_blank" :to="{path:'/about',query:{boolean:`${store.state.viewsColor}`}}">
          <button class="card-about">關於我</button>
        </router-link>
        <router-link  target="_blank" :to="{path:'/project',query:{boolean:`${store.state.viewsColor}`}}">
          <button class="card-project">作品集</button>
        </router-link>
      </div>
      <P
        >我是一個喜歡接受挑戰、不斷提升自我的人，即將於TibaMe
        緯育進修前端工程師專業技術養成班結業。除了課程所教以外，
        我也會有利用空閒時間自我鑽研html、css、javascript、vue
        、scss。期待能藉由提升自己的能力，朝專業的前端工程師的目 標前進。</P
      >
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import {useRoute} from "vue-router"
const store = useStore();
const route = useRoute();
if(route.query.boolean == 'true'){
 
 store.commit('changeViewsColor',1)
}else{
 store.commit('changeViewsColor',0)
}
const count = computed(() => {
  return store.state.viewsColor;
});
const show = ref(true);
</script>
<style lang="scss" scoped>
@import "../assets/style.scss";

* {
  box-sizing: border-box;
}
.bgColor {
  background: linear-gradient(180deg, white 30%, transparent 0%)
    left/100% !important;
  background-color: $otherColor  !important;
}

.introduceColor {
  background-color: $otherColor !important;
  p {
    color: white;
  }
  .card-about {
    background-color: $nightMainColor !important;
  }
  .card-project {
    background-color: $nightMainColor !important;
  }
}

.changeColor {
  background-color: black !important;

  background: linear-gradient(90deg, red 40%, transparent 0%) left/100% !important;
}

.home-wrap {
  background: linear-gradient(360deg, $secondColor 70%, transparent 0%)
    left/100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;

  .home-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    padding-top: 150px;
    .home-name-card {
      width: 80%;
      height: 100%;
      text-align: center;
      background-color: $mainColor;
      border-radius: 20px;
      .card-pic {
        width: 150px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        margin-bottom: 10px;
        margin-top: 40px;
        img {
          width: 100%;
        }
      }
      .card-name {
        padding: 10px;
        margin: 10px auto;
        h3 {
          font-size: 25px;
          margin: 5px 0;
          font-weight: 800;
        }
        p {
          font-size: 20px;
          letter-spacing: 2px;
          color: gray;
        }
      }
      .card-btn_1 {
        margin-bottom: 20px;
        button:first-child {
          margin: 15px 5px;
          @include button_1(120px);
        }
        button:last-child {
          margin: 5px 5px;
          @include button_2(120px);
        }
      }
      .card-connect {
        width: 100%;
        background-color: white;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        padding: 10px;
        ul {
          width: 100%;
          display: flex;
          justify-content: space-around;
          li {
            width: 30px;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .home-introduce {
    width: 100%;
    padding: 0 30px;
    padding-bottom: 50px;
    line-height: 1.5;
    h1 {
      font-size: 40px;
      font-weight: 900;
      margin: 20px 0;
    }
    .card-btn_2 {
      display: none;
    }
    p {
      font-size: 18px;
      letter-spacing: 2px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .bgColor {
  background: linear-gradient(90deg, $nightMainColor 40%, transparent 0%)
    left/100% !important;
  background-color: $otherColor  !important;
}
  .home-wrap {
    background: linear-gradient(90deg, $secondColor 40%, transparent 0%)
      left/100%;
    padding-top: 200px;
    padding-bottom: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    .home-container {
      width: 25%;
      margin: 0;
      padding: 0;
      .home-name-card {
        width: 100%;
        border-radius: 0px;
        box-shadow: -5px 0px 10px rgb(193, 193, 193);

        .card-pic {
          width: 200px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
          margin-bottom: 10px;
          margin-top: 40px;
          img {
            width: 100%;
          }
        }
        .card-name {
          padding: 10px;
          margin: 0px auto;

          h3 {
            font-size: 35px;
            margin: 0px;
            font-weight: 800;
          }
        }

        p {
          margin-top: 30px;
          font-size: 27px;
          letter-spacing: 3px;
          color: gray;
        }

        .card-btn_1 {
          display: none;
        }
        .card-connect {
          width: 100%;
          background-color: white;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
          box-shadow: -5px 5px 10px rgb(193, 193, 193);
          padding: 10px;
          ul {
            width: 100%;
            display: flex;
            justify-content: space-around;
            li {
              width: 30px;
              height: 30px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
    .home-introduce {
      width: 25%;
      height: 50%;
      padding: 0 20px;
      margin: auto 0;
      padding-bottom: 0px;
      line-height: 2;
      background-color: white;
      h1 {
        font-size: 70px;
        font-weight: 900;
        margin: 0;
      }
      .card-btn_2 {
        display: flex;
        margin-bottom: 30px;
        button:first-child {
          margin: 5px 5px;
          @include button_1(120px);
          padding: auto;
        }
        button:last-child {
          margin: 5px 5px;
          @include button_1(120px);
          padding: auto;
          border: 1px solid black;
        }
      }
      p {
        font-size: 16px;
        letter-spacing: 1.5px;
      }
    }
  }
}
</style>

