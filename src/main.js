import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ReadingMode from "@/components/ReadingMode"


createApp(App).use(store).use(router).component("ReadingMode",ReadingMode).mount('#app')
