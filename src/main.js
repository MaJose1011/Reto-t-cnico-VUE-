import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css';
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);

createApp(App).use(PrimeVue).mount('#app')
