import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VuetifyDialog from 'vuetify-dialog'
import * as VueGoogleMaps from 'vue2-google-maps'
import vueGoogleMapWrapper from '@/plugins/vue-google-map-wrapper'

// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { domain, clientId, audience } from "../auth_config.json";
import { Auth0Plugin } from "./auth";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD0VuxLCHgrHGPT1SitPMHecNCZHsbXe9A',
    libraries: 'places'
  }
})


Vue.use(vueGoogleMapWrapper, { apiKey: 'AIzaSyD0VuxLCHgrHGPT1SitPMHecNCZHsbXe9A' })

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)

}).$mount('#app')