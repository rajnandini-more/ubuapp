<template>
  <div>
  <app-header></app-header>
    <router-view></router-view>    
      
       
  </div>
</template>

<script>

import header from './components/header.vue';
import about from './components/about.vue';


import footer from './components/footer.vue';
export default {
  components:{
    'app-header': header,
    'app-about':about,
    
    'app-footer': footer
  },
  data () {
    return {
      
       }
  }
}
</script>

<style scoped>
body{
  margin:0;
  font-family:'Nunito SemiBold';
}

</style>
