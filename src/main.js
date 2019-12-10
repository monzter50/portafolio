import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub,faCodepen,faLinkedin,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VueTypedJs } from 'vue-typed-js'
 
Vue.use(VueTypedJs)
Vue.component('vue-typed-js', VueTypedJs)
library.add(faGithub,faCodepen,faLinkedin,faTwitter,faInstagram,faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
