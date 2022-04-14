import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import OneSignal from "onesignal-vue";
import router from './router'

import Moment from 'moment' 
Moment.locale('es')

Vue.config.productionTip = false;

Vue.use(OneSignal);

new Vue({
  router,
  render: h => h(App),
  beforeMount() {
    this.$OneSignal.init({
      appId: process.env.VUE_APP_ONESIGNAL_APP_ID,
      allowLocalhostAsSecureOrigin: true,
      autoRegister: false,
      notifyButton: {
        enable: true,
        size: 'medium',
        theme: 'default',
        position: 'bottom-right',
      }
    });
  },
}).$mount('#app')
