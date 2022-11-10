<template>
<Header />
  <router-view/>
  <ReadingMode />
<Footer />
</template>

<script setup>
import Header from"@/components/Header.vue"
import Footer from"@/components/Footer.vue"
import ReadingMode from "./components/ReadingMode.vue";
import {useRoute} from "vue-router"
import { useStore } from "vuex";
const store = useStore();

// console.log("APP",store.state.viewsColor);


</script>

<style lang="scss">
@import"./assets/style.scss";


</style>
