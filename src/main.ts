import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import Varlet from '@varlet/ui'
// import '@varlet/ui/es/style.js'
// import './common/style/common.scss'

import '@vant/touch-emulator'

import { Button, Popup, RadioGroup, Radio, Rate, ShareSheet } from 'vant'

createApp(App)
  .use(router)
  .use(store)
// .use(Varlet)
  .use(Button)
  .use(Popup)
  .use(RadioGroup)
  .use(Radio)
  .use(Rate)
  .use(ShareSheet)
  .mount('#app')
