import App from './App.vue'

Vue.config.productionTip = false

import './styles/bootstrap.min.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
