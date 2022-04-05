// node_moudules 引入的套件
import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import bootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.scss' // 也可以直接這樣載入 import 'bootstrap-icons/font/bootstrap-icons.scss'
// 自己寫的套件
import App from './App.vue'
import router from './router'

const APP = createApp(App)

APP.use(VueAxios, axios)
APP.use(router)
APP.use(bootstrapIcons)
APP.mount('#app')
