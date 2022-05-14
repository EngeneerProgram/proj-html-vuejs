import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBicycle, faCaretDown, faCloud, faHeartPulse, faLinkSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCaretDown, faLinkSlash, faBicycle, faCloud, faHeartPulse)
Vue.component('font-awesome-icon', FontAwesomeIcon)
const bootstrap = require('bootstrap');

Vue.use(bootstrap);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
