import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App);
app.use(VueAxios, axios);
app.use(VueSmoothScroll);
app.mount("#app");
