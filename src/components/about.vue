 <template>
 <div id="about">
    <app-header></app-header>

    <p>With an intention to reduce waiting time & crowd of the customers at the Salon, team <a href="https://formecmedia.com"> Formec Media</a> has came up with UBU app. Using UBU a customer can book any service at a nearby Salon & get notified when the Salon owner wants him to be at the Salon. With UBU app customers don't need to wait for long hours at the Salon any more.<br><br>
    
    UBU even helps to make the day to day life of Salon owners easy. Salon owners can get the information about the current bookings at fingertips. They can notify customers to call them at Salon. With a profile on UBU, Salons get more visibility to nearby customers which helps them to get more customers. With simple & easy to use User Interface UBU thus provides a unique solution for both Salon owners & customers.
</p>
<div class="wrapper">
<p>Contact : <a id="gmail">formecmedia@gmail.com</a></p>
</div>
   </section>
<app-footer></app-footer>
</div>
</template>
<script>
import header from '../components/header.vue';
import footer from '../components/footer.vue';
export default {
 components:{
    'app-header': header,
    'app-footer': footer
     },
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>

p{
    paading:150px;
     margin-left:200px;
    font-size: 1.4em;
    font-weight: 600;
    line-height: 1.4em;
   margin-right:350px;
   margin-top:100px;
 
   
}

a{
  color:#edca3b;
  text-decoration: none;

}
.wrapper a{
    color:#000;
    font-size:40px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}


  .wrapper p{
    color:grey;
    font-size:40px;
    
  }


</style>
