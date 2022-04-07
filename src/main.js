import Vue from 'vue';
import App from './App';
import { router } from './router';

import axios from 'axios'
Vue.prototype.$axios = axios


import { RadioGroup, Radio } from 'vant';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Radio);
Vue.use(RadioGroup);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
