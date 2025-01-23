import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18nPlugin } from './plugins/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18nPlugin, { locale: 'en' })

enableMocking().then(() => {
    app.mount('#app')
})

async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return
    }
    const { worker } = await import('./mocks/index.js')
    return worker.start({ serviceWorker: { url: `${import.meta.env.BASE_URL}/mockServiceWorker.js` } })
}