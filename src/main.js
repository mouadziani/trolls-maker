import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import './tailwind.css'
import { store } from './store'

let app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
