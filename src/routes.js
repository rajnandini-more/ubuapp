import about from './components/about.vue';
import home from './components/home.vue';
import salon from './components/salon.vue';
import privacy from './components/privacy.vue';
import terms from './components/terms.vue';
import request from './components/request.vue';




export default [
    { path: '/about', component: about},
    { path: '/', component: home},
    { path: '/salon', component: salon},
   { path: '/privacy', component: privacy},
   { path: '/terms', component: terms},
   { path: '/request', component: request}

    
]

