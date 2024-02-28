import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routers/router.js'
import './assets/main.css'
import axios from 'axios';
import { appAxios } from "@/utils/appAxios.js";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app');
