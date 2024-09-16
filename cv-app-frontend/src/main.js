import { createApp } from 'vue'
import App from './App.vue'
import Router from './js/routes.js'

createApp(App)
    .use(Router)
    .mount('#app')
