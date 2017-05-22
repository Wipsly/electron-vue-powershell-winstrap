import Vue from 'vue'
import Electron from 'vue-electron'

// Import Winstrap - jQuery - Bootstrap
import 'winstrap/dist/css/winstrap.css'
import 'winstrap/dist/js/vendor/jquery.min.js'
import 'winstrap/dist/js/vendor/bootstrap.min.js'


Vue.use(Electron)
Vue.config.debug = true

import App from './App'

/* eslint-disable no-new */
new Vue({
  ...App
}).$mount('#app')
