import Router from 'vue-router'
import routes from './routes'
import Vue from 'vue'

Vue.use(Router)

// export default () => {
//   return new Router({
//     Routes,
//     mode: 'history',
//     base: '/base/',
//     linkActiveClass: '',
//     linkExactActiveClass: ''
//   })
// }
export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active-link', // 路由样式
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  // parseQuery (query) {
  //   // 把地址栏中问号后面带的参数转换成json对象
  // },
  // stringifyQuery (obj) {
  //   // 把json对象转换成字符串参数
  // },
  fallback: true,
  routes
})
