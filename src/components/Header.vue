<template>
  <header :class="{bgColor:count}">
    <div class="header-title">
      <div class="title-squire"></div>
      <h2>Allen Project <small   :class="{fontColor:count}">/{{pageName}}</small></h2>
    </div>
    <transition name="headerShow" v-show="isShow">
      <nav :class="{bgColor:count}">
      <div class="header-url">
        <router-link 
        target="_blank" 
        v-for="item in pageRoutes" 
      :key="item" 
      :to="{path:item.path,query:{boolean:`${store.state.viewsColor}`}}"
      @click="isShow=false"
      :class="{fontColor:count}"
      >{{ item.name}}</router-link> 
      </div>
    </nav>
    </transition>
    <div class="header-control" @click="headerShow" :class="{bgColor:count}">
      <div class="header-control-line" :class="{rotate_1:isShow}"></div>
      <div class="header-control-line" :class="{rotate_2:isShow}"></div>
    </div>
  </header>
  </template>

<style lang="scss" scoped>
@import"../assets/style.scss";
.bgColor{
    background-color: $nightSecondColor !important;
    nav{
    .header-url{
      a{
       &:before{
        content: "";
        width: 0px;
        height: 3px;
        background-color: $otherColor;
        position: absolute;
        bottom:-10px ;
       }
      }
    }
  }
  .header-control-line{
    background-color: white !important;
  }
  }
header{
  width: 100%;
  background-color: white;
  display: flex !important;
  justify-content: space-between;
  position: fixed;
  top:0;
  z-index: 100;
  .header-title{
    display: flex;
    align-items: center;
    padding: 10px;
    .title-squire{
      width: 15px;
      height: 15px;
      background-color: $hoverColor;
      margin:0 10px;
    }
    h2{
      font-size: 27px;
      font-weight: 900;
      small{
        font-size: 24px;
        color: gray;
        font-weight: 100;
      }
    }
    
  }
  nav{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: $mainColor;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    .header-url{

      a{
       @include url(50px,30px);
       margin:30px 0;
       color:brown;
       position: relative;

       &:before{
        content: "";
        width: 0px;
        height: 3px;
        background-color: brown;
        position: absolute;
        bottom:-10px ;
       }

       &:hover:before{
        transition: .5s;
        width: 150px;
       }
      }
    }
  }
  .header-control{
    width: 40px;
    height: 40px;
    padding: 20px;
    .header-control-line{
      width: 40px;
      height: 5px;
      background-color: gray;
      margin: 10px 10px;
    }
  }
}
.rotate_1{
  position: absolute;
  transform: rotate(45deg);
  transition: .5s;
}
.rotate_2{
  position: absolute;
  transform: rotate(-45deg);
  transition: .5s;
}
.headerShow-enter-active,
.headerShow-leave-active{
  opacity: .5;
  transition: .5s;
}
.headerShow-enter-from,
.headerShow-leave-to{
  opacity: 0;
}
.headerShow-enter-to{
  opacity: 1;
}
.headerShow-leave-from{
  transition: .5s;
  opacity: 0;
}
</style>
<script setup>
import {routes} from"@/router/index.js"
import {useRoute}from "vue-router"
import{computed,ref,onMounted,watch,reactive} from 'vue'
import { useStore } from "vuex";
const store = useStore();
const count = computed(() => {
  return store.state.viewsColor;
});

const pageRoutes = computed(()=>{
        const route = routes.filter(item=>item.name!=='404')
        return route 
})

const isShow = ref(false)
const headerShow = ()=>{
  isShow.value=!isShow.value
}
const pageName = ref('')

const load = reactive(useRoute());

watch(load,()=>{
  pageName.value = load.name
},{ immediate: true,deep:true})



</script>