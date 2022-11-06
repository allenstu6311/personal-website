<template>
  <div class="wrapper"  :class="{bgColor:count}">
    <div class="container">
      <div id="tal">
        <h1>0</h1>
      </div>
      <h2>找不到網頁~</h2>
    </div>
  </div>
</template>
<script setup>
import{computed}from"vue"
import { useStore } from "vuex";
const store = useStore();
const count = computed(() => {
  return store.state.viewsColor;
});
</script>
<script>

// import { gsap } from "gsap";
import { TweenMax, to, Circ } from "gsap";
// gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    var counter = { var: 10 };
    var tal = document.getElementById("tal");

    TweenMax.to(counter, 2, {
      var: 404,
      onUpdate: function () {
        tal.innerHTML = Math.ceil(counter.var);
      },
      // ease: Circ.easeOut,
    });
  },
};
</script>
<style lang="scss">
@import "../assets/style.scss";
* {
  box-sizing: border-box;
}
.wrapper {
  width: 100%;
  height: 100vh;
  background-color: $secondColor;
  z-index: -1;
}
.container {
  padding-top: 300px;
  text-align: center;
  #tal {
    display: flex;
    justify-content: center;
    font-size: 50px;
    color: #333;
    font-weight: bold;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 40px;
    font-weight: bold;
  }
}
</style>