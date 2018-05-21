import Vue from 'vue'
import App from './app.vue'
import router from './router/router'

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

// Vue.use(router)
router.beforeEach((to, from, next) => {
  // 可以在里面进行一些数据的校验
  console.log('befor each invoke')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('befor resolve invoke')
  next()
})
router.afterEach((to, from) => {
  console.log('after each invoke')
})
new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)
