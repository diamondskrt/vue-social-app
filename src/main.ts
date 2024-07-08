import { createApp } from 'vue';

import '@/style.css';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import piniaPersistedstate from 'pinia-plugin-persistedstate';

import App from '@/App.vue';
import { router } from '@/router';

const pinia = createPinia();
pinia.use(piniaPersistedstate);
const app = createApp(App);

app.use(pinia);
app.use(VueQueryPlugin);
app.use(router);
app.mount('#app');
