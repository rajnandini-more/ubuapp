<template>
  <div id="heade">
    <img src="../assets/ubu.jpg">
   <div class="wrapper">

      <nav>
        <ul>
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/salon" exact>Salon Registration</router-link></li>
          <li><router-link to="/about" exact>About</router-link></li>
         
        </ul>
      </nav>

    </div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>

*{
    font-family: verdana;
    margin: 0;
    
}

#heade{

display: flex;
  align-items: center;
    min-height: 40px;
   position: fixed;
   width:100%;
  z-index: 1;
  top:0;
  left: 0;
   
}

.wrapper{
  
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    margin-right:10px;
} 

/* menu base styles */
nav{
    background:#fff;
    
}
nav ul{
    list-style-type: none;
    padding: 0;
    margin-right:100px;
    
}
ul{
  list-style-type:none;
  display:flex;
  justify-content: flex-end;
 flex-shrink: 1;
flex-grow: 1;
  }

nav a{
    text-decoration: none;
  text-align: center;
    color:#000;
    display: block;
    padding: 10px;
    display:flex;
    
  }
nav a:hover{
    
    color:#edca3b;
}
img{
  width:400px;
  height:100px;
  margin:0px;
  padding:0px;

}
.router-link-active{
  color:#edca3b;
}
@media screen and (max-width:599px){

#heade{
  
  width:90%;
  
}
img{
  width:200px;
}

}


</style>
