import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

// Use vue-resource package
// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
  mode:'history',
    routes: Routes
});

new Vue({
  el: '#app',
  
  render: h => h(App),
  router: router
})