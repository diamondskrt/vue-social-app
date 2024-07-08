import { createApp } from 'vue';

import '@/style.css';
import { VueQueryPlugin } from '@tanstack/vue-query';

import App from '@/App.vue';
import { router } from '@/router';

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(router);
app.mount('#app');
