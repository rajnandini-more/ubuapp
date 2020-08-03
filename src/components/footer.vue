<template>
  <div id="footer">
    
    <nav>
    <ul>
    <li><router-link to="/" exact>Home</router-link></li>
    <li><router-link to="/salon" exact>Solon Registration</router-link></li>
    <li><router-link to="/about" exact>About</router-link></li>
    <li><router-link to="/Privacy" exact>Privacy Police</router-link></li>
    <li><router-link to="/terms" exact>Terms & conditions</router-link></li>
    </ul>
   </nav>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
#footer{

display: flex;
  align-items: center;
    min-height: 40px;
    text-align: center;
    background: #edca3b;
    justify-content: center;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-align:center;
}
a{
  text-decoration:none;
  display:block;
  color:#000;
 }
 
ul{
  list-style-type:none;
  display:flex;
  }
li{
  align:center;
  padding:15px;
  }
  @media (max-width: 599px)
  {
#footer {
   text-align: center;
    max-height: 20px;
    font-size: 0.6em;
}

  }
  </style>
