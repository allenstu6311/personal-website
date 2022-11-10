<template>
  <transition name="back-light-box">
    <div class="light-box" v-show="focus_project"></div>
  </transition>
  <div class="back-color" :class="{ bgColor: count }"></div>
  <div class="page-title">
    <div class="title-squire"></div>
    <h1 :class="{ fontColor: count }">專案經歷</h1>
  </div>

  <div class="project-container">
    <div class="project-url">
      <p :class="{ fontColor: count }">以下是我的作品連結</p>
    </div>
    <div
      class="project-list col-6"
      v-for="(item, index) in project"
      :key="item"
      :class="{ show_project: index == project_index }"
      @mouseover="enlarge(index)"
      @mouseout="zoomOut"
    >
      <a :href="item.url">
        <div class="project-text">
          <div
            class="project-name"
            @mouseenter="enlarge(index)"
            @mouseout="zoomOut"
          >
            <h3>{{ item.name }}</h3>
          </div>
          <div
            class="project-introduce"
            @mouseenter="enlarge(index)"
            @mouseout="zoomOut"
          >
            <p>{{ item.introduce }}</p>
          </div>
          <div class="project-technology">
            <p>使用技術: <span>{{item.usetechnology}}</span> </p>
          </div>
        </div>
        <div class="project-pic">
          <img :src="require(`../assets/image/${item.img}`)" alt="" />
        </div>
      </a>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
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
const focus_project = ref(false);
const project_index = ref(-1);
const enlarge = (index) => {
  project_index.value = index;
  focus_project.value = true;
};
const zoomOut = () => {
  project_index.value = -1;
  focus_project.value = false;
};

const project = reactive([
  {
    id: 0,
    img: "project_1.png",
    name: "巨星體能工作室",
    introduce:
      "這是我的第一個作品，當初的想法是能夠結合自身的專業去呈現，能夠不用花太多時間在思考做甚麼，能夠花更多得時間去設計切版以及磨練css技術，此網站主要是介紹課程、場館以及收費方式。",
    usetechnology: "html,css,javascript",
    url: "https://allenstu6311.github.io/Topic/",
  },
  {
    id: 1,
    img: "project_2.png",
    name: "偷吃蛋糕",
    introduce:
      "第二次的專題我決定給自己一個大一點的挑戰，要在有限的時間內生出一個網站，並且主題還是給朋友挑選，想像在面對客戶時的感覺，這次的作品加上了許多的js及jq的應用，讓網頁互動性增強一些，這次的理念則是針對許多女性愛吃甜點又怕胖，因此寫了一個計算熱量的計算機並且推薦適當的熱量的蛋糕給使用者，讓使用者能夠偷吃蛋糕。",
    usetechnology: "html,css,javascript,jquery",
    url: "https://allenstu6311.github.io/Topic-second/home.html",
  },
  {
    id: 2,
    img: "project_3.png",
    name: "按指穴",
    introduce:
      "我們這組的團專是做穴道按摩，而我在團體中負責的是購物車的部分，這次使用的前端技術主要以vue以及scss為主，後端則是php及mysql，這次的挑戰非常困難，使用不熟悉的技術，第一次接API都讓我感到挑戰性十足，期許自己能夠做出媲美電商的購物車。",
    usetechnology: "html,vue,scss,php,mysql",
    url: "https://tibamef2e.com/cgd102/g2/",
  },
]);
</script>
<style lang="scss" scoped>
@import "../assets/style.scss";
@include cellphone();

* {
  box-sizing: border-box;
}
.back-color {
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $secondColor;
  z-index: -1;
}
.page-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 40px;
  .title-squire {
    width: 15px;
    height: 15px;
    background-color: $hoverColor;
    margin: 0 10px;
  }
  h1 {
    font-size: 30px;
    font-weight: 900;
    text-align: center;
  }
}
.show_project {
  z-index: 10;
}
.light-box {
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 10;
}
.back-light-box-enter-active,
.back-light-box-leave-active {
  transition: 0.5s;
}
.back-light-box-enter-to {
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 10;
}
.back-light-box-leave-to {
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 10;
}
.project-container {
  .project-url {
    text-align: center;
    p {
      font-size: 24px;
      font-weight: 800;
    }
  }
  .project-list {
    position: relative;
    margin: 50px auto;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgb(202, 202, 202);
    &:hover {
      transform: translateY(-10px);
      transform: scale(1.1, 1.1);
      transition: 0.5s;
    }
    a {
      text-decoration: none;
      z-index: 5;
      .project-text {
        .project-name {
          padding: 20px;
          position: relative;
          h3 {
            font-size: 20px;
            color: $btnColor;
            font-weight: 800;
          }
          &::before {
            content: "";
            width: 10px;
            height: 30px;
            background-color: $btnColor;
            position: absolute;
            left: 0;
            top: 25%;
          }
        }
        .project-introduce {
          padding: 10px;
          line-height: 1.5;
        }
        .project-technology{
            padding: 10px;
            margin: 10px 0;
            p{
                span{
                    color: red;
                    margin: 0 5px;
                    letter-spacing: 1px;
                }
            }
        }
      }
    }
    .project-pic {
      width: 100%;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .project-container {
    .project-list {
      display: flex;
      height: 400px;
      a {
        display: flex;
        .project-text {
          width: 60%;
          .project-name {
            padding: 20px;
            position: relative;
            h3 {
              font-size: 24px;
              color: $btnColor;
              font-weight: 800;
            }
          }
          .project-introduce {
            padding: 10px 20px;
          }
          .project-technology{
            padding: 10px;
            margin:10px;
            p{
                span{
                    color: red;
                    margin: 0 5px;
                    letter-spacing: 1px;
                }
            }
        }
        }

        .project-pic {
          width: 40%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>