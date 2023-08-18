import { createApp } from 'nativescript-vue';
import Login from './pages/Login.vue';
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(Login)

app.use(pinia)
app.start();
