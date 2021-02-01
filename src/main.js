import Vue from 'vue'
import App from './App.vue'
import '@grapecity/wijmo.styles/wijmo.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
