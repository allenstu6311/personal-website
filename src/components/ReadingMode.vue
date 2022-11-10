<template>
  <div class="switch-container">
    <div
      class="switch-btn"
      @click="changePosition"
      :style="{ left: 20 * index + '%', transition: 0.4 + 's' }"
      :class="{ changeLocation: changeState == true }"
    >
      <label for="chengeColor" v-show="changeState == false">🌞</label>
      <label for="chengeColor" v-show="changeState == true">🌙</label>
    </div>
  </div>
  <!-- <div class="night-view" v-show="changeState == true"></div> -->
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const store = useStore();
const route = useRoute();
const changeState = ref(false);
const index = ref(0);

const changePosition = () => {
  changeState.value = !changeState.value;
  if (!changeState.value) {
    index.value = 0;
    store.commit("changeViewsColor", 0);
  } else {
    index.value = 1.5;
    store.commit("changeViewsColor", 1);
  }
};

const count = computed(() => {
  return store.state.viewsColor;
});
watch(count,()=>{
  if(count.value){
    changeState.value = true
    index.value = 2.5;
  }
})
</script>
<style lang="scss">
@import "../assets/style.scss";

.switch-container {
  width: 80px;
  position: absolute;
  right: 50px;
  top: 10%;
  z-index: 11;
  &:before {
    content: "";
    width: 70px;
    height: 30px;
    background-color: gray;
    position: absolute;
    border-radius: 20px;
    top: 20%;
    left: 25px;
  }
  .switch-btn {
    width: 70px;
    height: 30px;
    box-shadow: 0px 0px 10px rgb(217, 216, 216);
    background-color: white;
    border-radius: 20px;
    margin: 10px 0;
    position: relative;
    text-align: center;
    right: 5px;
    top: 20%;

    label {
      font-size: 18px;
      position: absolute;
      left: 35%;
      top: 25%;
    }
  }
}
.night-view {
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 5;
}
.changeLocation {
  // top: 25% !important;
  background-color: rgb(0, 0, 0) !important;
  box-shadow: none !important;
}
</style>