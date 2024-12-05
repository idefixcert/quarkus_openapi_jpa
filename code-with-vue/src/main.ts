import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import RHeader from "@/components/RHeader.vue";
import Vue3Toasity, {toast, type ToastContainerOptions} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toasity, {autoClose: 3000, position: toast.POSITION.TOP_CENTER, theme: 'light'} as ToastContainerOptions,)
app.component('RHeader', RHeader)
app.mount('#app')