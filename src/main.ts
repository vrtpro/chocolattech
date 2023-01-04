import { createApp } from 'vue';
import './assets/fonts.css';
import './assets/tailwind.css';
import './assets/nprogress.css';
import App from './App.vue';
import router from './router/router';

createApp(App).use(router).mount('#app');
