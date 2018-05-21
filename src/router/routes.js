import Todo from './../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    path: '/app',
    //  component: Todo,
    component: () => import('./../views/todo/todo.vue'),
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    name: 'app',
    meta: {
      title: 'this is todo app',
      description: 'this is options'
    },
    beforeEnter (to, from, next) {
      console.log('app routes before router')
      next()
    },
    children: [
      {
        path: 'test',
        component: Todo
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]
