import Vue from "vue"
import vueRouter from "vue-router"
Vue.use(vueRouter)
const User = {
  template: '<div>User</div>'
}
const router = new vueRouter({
  mode: 'history',
  routes: [
    { path: '/user/:id', component: User }
  ]
})
new Vue({
    router
}).$mount("#app")