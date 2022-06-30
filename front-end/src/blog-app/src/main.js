import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import ElementPlus from 'element-plus';
import router from './router/index.js'

const app = createApp(App)

const req = require.context('@/icons/svg', false, /\.svg$/)  
req.keys().map(req)
app.component('svg-icon', SvgIcon)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
