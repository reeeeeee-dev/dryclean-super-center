import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueKinesis from 'vue-kinesis'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { VuePrlx } from 'vue3-prlx'

const app = createApp(App)

app.use(router)

app.use(VueKinesis)
app.component('kinesis-container', KinesisContainer)
app.component('kinesis-element', KinesisElement)

app.use(VuePrlx)

app.mount('#app')
