import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import { useToast } from 'vue-toast-notification'
import config from '../formkit.config.js'

import App from './App.vue'
import routes from './router'
import "vue-toast-notification/dist/theme-sugar.css"

const app = createApp(App)
const toast = useToast({ position: 'top-right', duration: 5000})

app.provide('toast', toast)
app.use(createPinia())
app.use(routes)
app.use(plugin, defaultConfig(config))
app.mount('#app')
