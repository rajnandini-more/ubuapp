<template>
  <div class="salon">

  <div class="row">
  <div class="column1">
    <img src="../assets/salon_bg.png" alt="crsl1">
  </div>
  <div class="column1" >
  <div class="right">
    <div class="text">
      <h2>Want to <b>register Your Salon</b> With Us?</h2>
      <p>Please fill in the details to request your salon for registering in our app</p>
      </div>
      <button class="salonbutton">
       
        <router-link to="/request" exact> <p>Send Request >></p></router-link>
                  
                
      </button>
  </div>
  </div>
</div>


    <h1> {{title}}</h1>
   <section class="join">
  
  <ul class="images">
<div id="how">
  <nav>
  <ul>
   <div class="how-container">
    <div class="items">
      <p class="dot">1</p>
        <h4>Register Your Salon</h4>
        <img src="../assets/crsl5.png">
      </div>
      <div class="items">
      <p class="dot">2</p>
        <h4>Setup Details</h4>
        <img src="../assets/crsl6.png">
      </div>
      <div class="items">
      <p class="dot">3</p>
        <h4>Connect with your customers</h4>
        <img src="../assets/crsl7.png">
      </div>
      
    </div>
    </ul>
  </nav>
    </div>
    </ul>
    </section>


<app-footer style="background-color:#0091ea;"></app-footer>

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
     title:'How Work it ?'
     }
  }
}
</script>

<style scoped>
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
  margin-left:30px ;
  
}


* {
  font-family: Montserrat,sans-serif;
  box-sizing: border-box;
  color:#000;
}

.salon{
  content: "";
  display: block;
  clear: both;
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
  display: flex;
  flex: 1 1 0;
  
}
.row:after {
  content: "";
  display: block;
  clear: both;
}
.column1 img{
  height: 400px;
  width: 400px;
  margin-left:160px ;
  margin-top: 30px;
  
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
    text-align: right;
    color: #6c6c6c;
    margin-bottom: 48px;
}
.column1 .right .text h2 b {
font-weight: 400;
    color: #000;
}
.column1 .right .text p {
  font-size: 16px;
    text-align: right;
    color: #000;
    max-width: 441px;
}
.column1 .right .salonbutton{
    background: #0091ea;
    color:#fff;
    display: inline-flex;
    align-items: center;
    border: none;
    float: right;
    padding: 12px 30px;
    border-radius: 32px;
    margin-top: 32px;
    text-decoration: none;
    cursor: pointer;
    transition: all .2s ease;
}
.column1 .right .salonbutton p{
  color: #fff;
}
h1{
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
    background-color:#0091ea;
    border-radius:50%;
    display:inline-block;
    align-items:center;
    display:flex;
    justify-content:center;
    flex-wrap:nowrap;
    text-align: center;
   margin-left: 150;
   margin-bottom: 30px; 
}
*{
  font-family: verdana;
  margin: 0;
}
h4{
    
    font-size: 18px;
    color: #000;
    font-weight: 400;
    text-align: center;
    
}
.section.join{
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
  margin-left: 100px;
max-width: 100%;
}
@media screen and (max-width:599px){
 
  .column1 {
    width: 100%;
  }

.section.join{
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
.column1 img{
  height: 450px;
  width: 400px;
  margin-left:50px ;
  
}
.column1 .right .text {
  align-items: center;
}
.column1 .right .text h2{
    text-align: center;
    font-size: 23px;
    margin-top: 10px;
    margin-left:80px;
    width: 100%;
}
.column1 .right .text p{
text-align: center;
margin-left:80px;
width: 100%;
  
}
.column1 .right .salonbutton{
    width: 150%;
    text-align: center;
    float: none;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    margin-left:50px;
    
}
h1{
font-size: 24px;
    margin-top: 0px;
    margin-bottom: 32px;
}
nav ul{
  display: flex;
}

nav li{
  flex: 1 1 0;
}

}



</style>
