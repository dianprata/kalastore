import Vue from 'vue';
// Vuesax
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';

// Vue Star Rating
import VueStarRating from 'vue-star-rating';

// Vue2Dropzone
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

// App
import vsDivider from './components/vsDivider.vue';
import vsTextarea from './components/vsTextarea.vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './filters';

// SCSS
import './assets/scss/main.scss';

// Tailwind
import '@/assets/css/tailwind.css';

// Feather Font
import '@/assets/css/iconfont.css';

// VS Divider
Vue.component('vs-divider', vsDivider);

// VS Textarea
Vue.component('vs-textarea', vsTextarea);

// Vue Star Rating
Vue.component('star-rating', VueStarRating);

// Vue2Dropzone
Vue.component('vueDropzone', vue2Dropzone);

// Vuesax
Vue.use(Vuesax, {
  colors: {
    primary: '#0f4c75',
    success: '#28C76F',
    danger: '#EA5455',
    warning: '#FF9F43',
    dark: '#1E1E1E',
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
