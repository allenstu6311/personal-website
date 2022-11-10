<template>
  <section id="timeline" :class="{bgColor:count}">
    <div class="page-title">
      <div class="title-squire"></div>
      <h1 :class="{fontColor:count}">關於我</h1>
    </div>
    <div class="demo-card-wrapper">
      <div class="demo-card demo-card--step1">
        <div class="head">
          <div class="number-box">
            <span>01</span>
          </div>
          <h2>學生時期</h2>
        </div>
        <div class="body">
          <p>我從高中開始打棒球，從那時開始為了成為一名職棒運動員不斷努力，過程中因為起步太晚經歷了非常多的挫折，雖然最後失敗了，但也因此培養出了絕不輕言放棄的精神。</p>
          <div class="demo-picBox">
            <button @click="prev(1)">＜</button>
            <transition-group name="slider" class="slider-pic">
              <div
                id="demo-pic"
                v-for="item in student"
                :key="item"
                :style="{ left: 425 * -1 + 'px' }"
              >
                <img
                  :src="require(`../assets/image/${item.img}`)"
                  alt=""
                  class="img"
                />
              </div>
            </transition-group>
            <button @click="next(1)">＞</button>
          </div>
        </div>
      </div>

      <div class="demo-card demo-card--step2">
        <div class="head">
          <div class="number-box">
            <span>02</span>
          </div>
          <h2>教練時期</h2>
        </div>
        <div class="body">
          <p>畢業後因為本身是運動員的關係，對於訓練較為熟悉，因此選擇了教練這個職業，那時覺得自己在這個領域應該相對較為優勢，畢竟自己以前也是這樣不斷訓練過來的，所以選擇教練成為我人生的第一份正式工作。</p>
          <div class="demo-picBox">
            <button @click="prev(2)">＜</button>
            <transition-group name="slider" class="slider-pic">
              <div
                id="demo-pic"
                v-for="item in coach"
                :key="item"
                :style="{ left: 425 * -1 + 'px' }"
              >
                <img
                  :src="require(`../assets/image/${item.img}`)"
                  alt=""
                  class="img"
                />
              </div>
            </transition-group>
            <button @click="next(2)">＞</button>
          </div>
        </div>
      </div>

      <div class="demo-card demo-card--step3">
        <div class="head">
          <div class="number-box">
            <span>03</span>
          </div>
          <h2>緯育時期</h2>
        </div>
        <div class="body">
          <p>
            在教練工作的這幾年中，深深感受到了教練這份工作的一些問題，例:不穩定，進修費過高等等問題一一浮現，尤其疫情一來收入都非常的慘，這時在隔離中的我接觸到了程式，那時感覺真的是發現了另一個世外桃源，覺得非常感興趣，因此辭掉了工作，來到緯育學習！
          </p>
          <div class="demo-picBox">
            <button @click="prev(3)">＜</button>
            <transition-group name="slider" class="slider-pic">
              <div
                id="demo-pic"
                v-for="item in tibame"
                :key="item"
                :style="{ left: 425 * -1 + 'px' }"
              >
                <img
                  :src="require(`../assets/image/${item.img}`)"
                  alt=""
                  class="img"
                />
              </div>
            </transition-group>
            <button @click="next(3)">＞</button>
          </div>
        </div>
      </div>

      <div class="demo-card demo-card--step4">
        <div class="head">
          <div class="number-box">
            <span>04</span>
          </div>
          <h2>現在</h2>
        </div>
        <div class="body">
          <p>
            很快的四個月的時間一下就過了，在這個期間做了兩個個人專題及一個團專，每一次經歷專題後都學到非常多，我從沒想過過去那個總是坐不住的自己竟然會變成工程師，將來我也會抱著運動員不放棄的精神在資訊業闖出一片天!
          </p>
          <div class="demo-picBox">
            <div id="demo-pic" style=" opacity: 1;">
              <img
                :src="require(`../assets/image/me.jpg`)"
                alt=""
                class="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/style.scss";

.page-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
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
@mixin mq-xs {
  @media (min-width: 320px) {
    @content;
  }
}

@mixin mq-sm {
  @media (min-width: 480px) {
    @content;//引入後可以寫額外的東西
  }
}

@mixin mq-md {
  @media (min-width: 720px) {
    @content;
  }
}

@mixin mq-lg {
  @media (min-width: 1000px) {
    @content;
  }
}

$background: $mainColor;
$box-shadow: 0px 1px 22px 4px rgba(0, 0, 0, 0.07);
$border: 1px solid rgba(191, 191, 191, 0.4);
$items: 5;
$rows: ceil($items/2);

/* Card sizing */

$card-height: 500px;
$card-width: 450px;
$inner-margin: 15px;
$number-size: 35px;
$stagger: 180px;
$outer-margin: 90px;
$marker-size: 9px;

/* Colors */

$steps: #46b8e9;
$colors: #46b8e9, #3ee9d1, #ce43eb, #4d92eb;
$timeline: #bdbdbd;

/* Calculations */

$container-height: $rows * ($card-height + $outer-margin) + $stagger;
$container-width: $card-width * 2 + $outer-margin * 3;
$head-height: $number-size + 50;
$body-height: $card-height - $head-height;
$marker-dist: $card-width + $outer-margin/2 - $marker-size/2;

/* Placeholders */

@include mq-lg {
  %arrow {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  }
  %marker {
    position: absolute;
    content: "";
    width: $marker-size;
    height: $marker-size;
    background-color: $timeline;
    border-radius: $marker-size;
    box-shadow: 0px 0px 2px 8px $background;
  }
}

/* Some Cool Stuff */

$counter: $items - $rows + 2;
@for $i from 1 through $rows {
  .demo-card:nth-child(#{$i*2-1}) {
    order: $i;
  }
  .demo-card:nth-child(#{$i*2}) {
    order: $counter;
  }
  $counter: $counter + 1;
}

/* Border Box */

* {
  box-sizing: border-box;
}

/* Fonts */

body {
  font-family: Roboto;
}

#timeline {
  padding: 100px 0;
  background: $background;
  border-top: $border;
  border-bottom: $border;

  p.leader {
    text-align: center;
    max-width: 90%;
    margin: auto;
    margin-bottom: 45px;
  }
  .demo-card-wrapper {
    position: relative;
    margin: auto;
    @include mq-lg {
      display: flex;
      flex-flow: column wrap;
      width: $container-width;
      height: 1400px;
      margin: 0 auto;
    }
    &::after {
      z-index: 1;
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      border-left: $border;
      @include mq-lg {
        border-left: 1px solid $timeline;
      }
    }
  }
  .demo-card {
    position: relative;
    display: block;
    margin: 10px auto 80px;
    max-width: 94%;
    z-index: 10;

    @include mq-sm {
      max-width: 60%;
      box-shadow: $box-shadow;
    }
    @include mq-md {
      max-width: 40%;
    }
    @include mq-lg {
      max-width: $card-width;
      height: $card-height;
      margin: $outer-margin;
      margin-top: $outer-margin/2;
      margin-bottom: $outer-margin/2;
      &:nth-child(odd) {
        margin-right: $outer-margin/2;
        .head::after {
          @extend %arrow;
          border-left-width: 15px;
          border-left-style: solid;
          left: 100%;
        }
        .head::before {
          @extend %marker;
          left: $marker-dist + 1;
        }
      }
      &:nth-child(even) {
        margin-left: $outer-margin/2;
        .head::after {
          @extend %arrow;
          border-right-width: 15px;
          border-right-style: solid;
          right: 100%;
        }
        .head::before {
          @extend %marker;
          right: $marker-dist - 1;
        }
      }
      &:nth-child(2) {
        margin-top: $stagger;
      }
    }
    .head {
      position: relative;
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: 400;
      .number-box {
        display: inline;
        float: left;
        margin: $inner-margin;
        padding: 10px;
        font-size: $number-size;
        line-height: $number-size;
        font-weight: 600;
        background: rgba(0, 0, 0, 0.17);
      }
      h2 {
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: inherit;
        letter-spacing: 2px;
        margin: 0;
        padding-bottom: 6px;
        line-height: 1rem;
        @include mq-sm {
          font-size: 165%;
          line-height: 1.2rem;
        }
        span {
          display: block;
          font-size: 0.6rem;
          margin: 0;
          @include mq-sm {
            font-size: 0.8rem;
          }
        }
      }
    }
    .body {
      background: #fff;
      border: $border;
      border-top: 0;
      padding: $inner-margin;
      @include mq-lg {
        height: $body-height;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      }
      .demo-picBox {
        overflow: hidden;
        display: flex;
        align-items: center;
        position: relative;
        z-index: 10;
        button {
          border-radius: 50%;
          position: absolute;
          border: none;
          padding: 5px;
          font-size: 18px;
          text-align: center;
          font-weight: 800;
          background-color: skyblue;
          color: white;
        }
        button:first-child {
          z-index: 10;
        }
        button:last-child {
          right: 0;
          z-index: 10;
        }
        .slider-pic {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #demo-pic {
          width: 400px;
          height: 250px;
          display: flex;
          flex-shrink: 0;
          position: relative;
          z-index: 5;
        
          &:first-of-type {
            z-index: -1;
          }
          &:last-of-type {
            opacity: 0;
          }

          .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
            opacity: 1;
            position: relative;
          }
        }
      }

      p {
        font-size: 14px;
        margin-bottom: $inner-margin;
        letter-spacing: 2px;
        line-height: 1.5;
      }
      img {
        display: block;
        width: 100%;
      }
    }
    @for $i from 1 through $items {
      &--step#{$i} {
        $color: nth($colors, ((($i - 1) % 4) + 1));
        background-color: $color;
        .head::after {
          border-color: $color;
        }
      }
    }
  }
}
.slider-move {
  z-index: -1;
  transition: all 1s;
}
@media screen  and (min-width: 1024px)  {
  #demo-pic {
    width: 101% !important;
  }
}
</style>

<script setup>
import { ref, computed, reactive } from "vue";
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

const clickBtn = ref(true);

const setTime = () => {
  setTimeout(() => {
    clickBtn.value = true;
  }, 1000);
};
const prev = (num) => {
  if (clickBtn.value == false) {
   return
  }
    switch (num) {
      case 1:
        const studentLast = student.pop();
        student.unshift(studentLast);
        break;
      case 2:
        const coachLast = coach.pop();
        coach.unshift(coachLast);
        break;
      case 3:
        const tibameLast = tibame.pop();
        tibame.unshift(tibameLast);
        break;
    
  }

  clickBtn.value=false
  setTime();
};
const next = (num) => {
  if (clickBtn.value == false) {
   return
  }
  switch (num) {
    case 1:
      const studentfirst = student.shift();
      student.push(studentfirst);
      break;
    case 2:
      const coachfirst = coach.shift();
      coach.push(coachfirst);
      break;
    case 3:
      const tibamefirst = tibame.shift();
      tibame.push(tibamefirst);
      break;
  }
  clickBtn.value=false
  setTime();
};

const student = reactive([
  { img: "student_01.jpg" },
  { img: "student_02.jpg" },
  { img: "student_03.jpg" },
  { img: "student_04.jpg" },
]);
const coach = reactive([
  { img: "coach_01.jpg" },
  { img: "coach_02.jpg" },
  { img: "coach_03.jpg" },
  { img: "coach_04.jpg" },
]);
const tibame = reactive([
  { img: "tibame_1.jpg" },
  { img: "tibame_2.jpg" },
  { img: "tibame_3.jpg" },
  { img: "tibame_4.jpg" },
]);
</script>
