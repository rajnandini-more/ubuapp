import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
import VueCarousel from 'vue-carousel'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Use vue-resource package
// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueCarousel);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

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