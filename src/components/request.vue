<template>
<div>
<div id="salon-request">
    <div class="card">
        <div class="container">
            <h2 class="heading">Registration Request</h2>
            <p v-if="error.length">
                <b>Please correct following error</b>
                <ul>
                    <li v-for="e in error" v-bind:key="e.id">
                        {{e}}
                    </li>
                </ul>
                </p>
            <form @submit="login">
                <label>Your Name</label>
                <input type="text" placeholder="eg. Elon Musk" maxlength="30" v-model="name">
                
                <label>Phone Number (+91)</label>
                <input type="number" placeholder="Enter 10 digit mobile number" maxlength="10" v-model="mobileno">
                <button class="submit" v-on:click="handleSubmit">
                  <span >Submit</span>
                </button>
                <button class="cancel">
                  <router-link to="/salon" exact>Cancel</router-link>
                  
                </button>
            </form>
        </div>
    </div>
    

    <app-footer></app-footer>
</div>

</div>

</template>

<script>

export default {
  
  data () {
    return {
     error:[],
     name:null,
     mobileno:null

    }
  },
  methods: {
        handleSubmit: function(){
            
        },
        login(e)
        {
            this.error=[];
             if(this.name&&this.mobileno)
             {
                 console.warn("no error");
             }
             if(!this.name)
             {
                 
                 this.error.push("user name is required");
             }
             if(!this.mobileno)
             {
                 this.error.push("mobile no is required");
             }
            console.warn("hello",this.error);
            e.preventDefault();
        }


    }
}
</script>

<style scoped>


a{
  text-decoration: none;
  color: #000;
}
#salon-request{
  width: 100%;
    position: fixed;
    height: 100vh;
    background: hsla(0,0%,100%,.74);
    z-index: 2000;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#salon-request .card{
width: 30%;
    height: auto;
    background: #fff;
    border-radius: 22px;
    margin: 0 auto;
    box-shadow: 1px 2px 16px rgba(0,0,0,.082);
    padding: 32px;
    box-sizing: border-box;
    position: relative;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
#salon-request .container form .err {
    font-size: 12px;
    color: #ec3d3d;
    margin-top: 2px;
}
#salon-request .container {
    width: 100%;
    height: 100%;
}
#salon-request .container .heading {
    font-size: 22px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 16px;
}
#salon-request .container form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
}
#salon-request .container form label {
    text-align: center;
    display: block;
    width: 100%;
    font-size: 12px;
    margin-top: 16px;
    margin-bottom: 4px;
}
#salon-request .container form input {
    width: 100%;
    min-width: 300px;
    padding: 8px;
    border-radius: 22px;
    border: 1px solid #d1d1d1;
    background: #fafafa;
    text-align: center;
}
#salon-request .container form .submit {
    position: relative;
    display: flex;
    align-items: center;
    background: #0091ea;
    color: #fff;
    width: 100%;
    text-align: center;
    border: none;
    padding: 12px 30px;
    border-radius: 32px;
    margin-top: 24px;
    text-decoration: none;
    cursor: pointer;
    transition: all .2s ease;
}
#salon-request .container form .submit span {
    border:none;
    display: block;
    text-align: center;
    width: 100%;

}
#salon-request .container form .cancel {
    background: #f0f0f0;
    color: #000;
    width: 100%;
    text-align: center;
    border: none;
    padding: 12px 30px;
    border-radius: 32px;
    margin-top: 24px;
    text-decoration: none;
    cursor: pointer;
    transition: all .2s ease;
}
@media screen and (max-width:599px){

#salon-request .card {
    width: 80%;
}
}
#salon-request .container form {
    padding: 0;
}
#salon-request .container form label {
    margin-bottom: 8px;
}
#salon-request .container form input {
    min-width: auto;
    min-height: 45px;
}
#salon-request .container form .submit {
    min-width: auto;
    min-height: 45px;
}
#salon-request .container form .cancel {
    min-width: auto;
    min-height: 45px;
}

</style>
