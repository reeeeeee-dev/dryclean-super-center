import './assets/main.css'

import { createApp } from 'vue'
import PrimeView from 'primevue/config'
import Lara from '@/presets/lara'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeView, {
  unstyled: true,
  pt: Lara
})

app.use(router)

app.mount('#app')
