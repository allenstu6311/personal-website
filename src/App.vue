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


</script>

<style lang="scss">
@import"./assets/style.scss";


</style>
