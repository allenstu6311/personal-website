<template>
  <div class="switch-container">
    <div class="switch-btn" @click="changePosition"
    :style="{ top: 20*index+'%',transition:0.4+'s'}"
    :class="{changeLocation:changeState == true}">
        <label for="chengeColor" v-show="changeState == false">🌞</label > 
        <label for="chengeColor" v-show="changeState == true">🌙</label>
    </div>
  </div>
  <!-- <div class="night-view" v-show="changeState == true"></div> -->
</template>
<script setup>
import{computed, ref}from"vue";
import { useStore } from "vuex";
const store = useStore();
const changeState = ref(false)
const index = ref(1)
const changePosition = ()=>{
  changeState.value = !changeState.value
  if(!changeState.value){
    index.value-=0.3
    store.commit('changeViewsColor',0)
 
  }else{
    index.value+=0.3
    store.commit('changeViewsColor',1)
  }
 
}
const count = computed(()=>{
    return store.state.viewsColor
  })


</script>
<style lang="scss">
@import"../assets/style.scss";

.switch-container {
width: 80px;
  position: absolute;
  right: 5px;
  top: 20%;
  z-index: 11;
  &:before {
      content: "";
      width: 10px;
      height: 180px;
      background-color: black;
      position: absolute;
      left: 50%;
      top: -10px;
      border-radius: 20px;
      z-index: -1;
    }
  .switch-btn {
    width: 80px;
    height: 120px;
    box-shadow: 0px 0px 10px rgb(217, 216, 216);
    background-color: white;
    border-radius: 20px;
    position: absolute;
    text-align: center;
    right: 5px;
    top: 20%;
    line-height: 130px;
    font-size: 50px;
  }
}
.night-view{
    position: fixed;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0,0.5);
    z-index: 5;  
}
.changeLocation {
  // top: 25% !important;
  background-color: rgb(0, 0, 0,) !important;
  box-shadow: none !important;
}

</style>