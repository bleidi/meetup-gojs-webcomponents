import Vue from 'vue'
import App from './App.vue'

Vue.config.ignoredElements = [
  'welcome-aboard-html-import'
]

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})
