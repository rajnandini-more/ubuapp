<template>
  <div>
    
  <div class="row">
  <div class="column1">
    <div class="slider">
      <div class="load">
      </div>
      <div class="content">
        <div class="principal">
          
        </div>
      </div>
      </div>
  </div>
  <div class="column1" >
  <div class="right">
    <div class="text">
      <h2>Let’s use technology to embrace <b>social distancing</b></h2>
      <p>During this pandemic it’s necessary to act & follow goverment regulations on social distancing and other preventive measures.</p>
      <h4>We can keep salons operating without being crowded and losing that connection with user.</h4>
      </div>
      <button class="homebutton">
        <a href="https://play.google.com/store/apps/details?id=com.redshift.ubu"><p>Download App Now</p></a>
       </button>
  </div>
  </div>
</div>
   <h2 class="heading">How Work it ? </h2>

<section class="join">
  
  <ul class="images">
<div id="how">
  <nav>
  <ul>
   <div class="how-container">
    <div class="items">
      <p class="dot">1</p>
        <h4>Select the category</h4>
        <img src="../assets/crsl1.png">
      </div>
      <div class="items">
      <p class="dot">2</p>
        <h4>Select The Service</h4>
        <img src="../assets/crsl2.png">
      </div>
      <div class="items">
      <p class="dot">3</p>
        <h4>Select The Salon</h4>
        <img src="../assets/crsl3.png">
      </div>
      <div class="items">
      <p class="dot">4</p>
        <h4>Book Your Chair</h4>
        <img src="../assets/crsl4.png">
      </div>
      
    </div>
    </ul>
  </nav>
    </div>
    </ul>
    </section>


<app-footer></app-footer>

</div>
  
</template>

<script>
import footer from '../components/footer.vue';
export default {
  components:{
    'app-footer': footer
  },
  data () {
    return {
     
     }
  }
}
</script>

<style scoped>
.load{
  animation:slide 1s;
}
.slider{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 50vh;
  animation: slide 40s infinite;
  margin-left: 150px;
  
  margin-top: 100px;
}
.content{
  color: #fff;
  
  }
.principal{
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  position: absolute;
  
}

@keyframes slide{
  0%{
  background-image: url('../assets/crsl1.png');
  }
  20%{
  background-image: url('../assets/crsl1.png');
  }
  20.01%{
  background-image: url('../assets/crsl2.png');
  }
  40%{
  background-image: url('../assets/crsl2.png');
  }
  40.01%{
  background-image: url('../assets/crsl3.png');
  }
  60%{
  background-image: url('../assets/crsl3.png');
  }
  60.01%{
  background-image: url('../assets/crsl4.png');
  }
  80%{
  background-image: url('../assets/crsl4.png');
  }
}

#how {
    width: 100%;
    position: relative;
}
 .heading {
    display: block;
    text-align: center;
    font-size: 48px;
    font-weight: 400;
    margin: 48px 0;
}
.dot{
    display:inline;
    
  height:40px;
  width:40px;
  
  border-radius:50%;
  display:inline-block;
  align-items:center;
  display:flex;
  justify-content:center;
 flex-wrap:nowrap;
text-align: center;
margin-left: 150px;
margin-bottom: 30px;
  
}


#how .how-container {
    width: 100%;
    position: relative;
    
display: flex;
    padding: 0 166px;
    justify-content: space-evenly;
    max-width: 960px;
    margin: 0 auto;
}
nav ul{
  list-style-type:none;
}
section.join{
  background: #f4f4f4;
  text-align: center;
  padding: 60px 20px;
  color:#4b4b4b;

}
#how .how-container .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 71px 0;
    
}
#how .how-container .item p {
  display:inline;
  height:40px;
  width:40px;
  background-color:#0091ea;
  border-radius:50%;
  display:inline-block;
  align-items:center;
  display:flex;
  justify-content:center;
 flex-wrap:nowrap;

}
#how .how-container .item h4 {
    margin-bottom: 32px;
    font-size: 18px;
    color: #000;
    font-weight: 400;
    text-align: center;
}
.images{
  text-align: center;
  margin: 60px 0;
  white-space: nowrap;
}
.images li{
  display: inline-block;
  width: 15%;
  margin: 20px 4%;
}
img{
  margin-top: 30px;
  height: 400px;
  width: 250px;
  margin-left:10px ;
  margin-right: 20px;
}

* {
  font-family: Montserrat,sans-serif;
  box-sizing: border-box;
  color:#000;
}
a{
  text-decoration: none;
}

.row:first-child {
    margin-top: 150px;
}


 .column1 {
  float: left;
  width: 50%;
  padding: 10px;
  height: 500px; 
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row{
  display: flex;
  flex:1 1 0;
}

@media screen and (max-width:599px) {
  .column1 {
    width: 100%;
    
  }
}
.column1 img{
  height: 400px;
  width: 400px;
  margin-left:160px ;
}
.column1 .right {
      flex-grow: 1;
      margin-right: 200px;
     
}
.column1 .right .text {
      display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
}
.column1 .right .text h2 {
font-weight: 300;
    font-size: 48px;
    line-height: 59px;
    text-align: right;
    color: #6c6c6c;
    margin-bottom: 48px;
}
.column1 .right .text h2 b {
font-weight: 400;
    color: #000;
}
.column1 .right .text p {
 margin-bottom: 24px;
    font-size: 16px;
    text-align: right;
    color: #000;
    max-width: 441px;
}
.column1 .right .text h4 {
margin-bottom: 24px;
    font-size: 16px;
    text-align: right;
    color: #000;
    max-width: 441px;
    font-weight: 600;
}
.homebutton p {
font-weight: 600;
    font-size: 14px;
    color: #000;
    text-transform: uppercase;
}
.homebutton{
  background: #ffde55;
    color: #000;
    display: inline-flex;
    align-items: center;
    float: right;
    padding: 12px 30px;
    border-radius: 32px;
    margin-top: 32px;
    text-decoration: none;
    cursor: pointer;
    transition: all .2s ease;
}



h1{
   margin-top: 100px;
   display: block;
    text-align: center;
    font-size: 48px;
    font-weight: 400;
    margin: 30px 0;
    color: #000;
}


.dot{
    display:inline;
    
  height:40px;
  width:40px;
  background-color:#edca3b;
  border-radius:50%;
  display:inline-block;
  align-items:center;
  display:flex;
  justify-content:center;
 flex-wrap:nowrap;

  
}




*{
  font-family: verdana;
  margin: 0;
}

body{
  background: #eee;
}


nav ul .services1{
  margin-right: 210px;
  margin-left: 0px;
}
nav ul .services2{
  
  margin-right: 40px;
}
nav ul .services3{
  
  margin-left: 70px;
}
nav ul  .services4{
  
  margin-left: 150px;
}



h4{
    
    font-size: 18px;
    color: #000;
    font-weight: 400;
    text-align: center;
    display:inline-block;
  align-items:center;
  display:flex;
  justify-content:center;
 flex-wrap:nowrap;
 
    
}

@media screen and (min-width: 599px){

nav ul{
  display: flex;
}

nav li{
  flex: 1 1 0;
}

    
} 



section.join{
background: #f4f4f4;
text-align: center;
padding: 60px 20px;
color: #4b4b4b;
}
.join h2{
font-size: 36px;
}
.images{

text-align: center;
margin:60px 0;
white-space: nowrap;
}
.images li{

display: inline-block;
width: 15%;
margin: 20px 4%;
}
.images li img{
max-width: 100%;
}

@media (max-width: 599px){
#how .heading {
    font-size: 24px;
    margin-top: 100px;
    margin-bottom: 32px;
}

#how .how-container {
    flex-direction: column;
    padding: 0 24px;
}
#how .how-container .item {
    width: 100%;
    padding: 48px 0;
}
#how .how-container .item h4 {
    width: 100%;
}
#how .how-container .item img {
    width: 215px;
}

}



</style>
