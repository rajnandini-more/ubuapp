<template>
 <div id="condition">
    <app-header></app-header>
    <diV class="terms">
    <h4>Terms & Conditions</h4>
<p>By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Formec Media.</p>
<p>Formec Media is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.</p>

<p>The UBU : Salon Booking, Live Listing & More app stores and processes personal data that you have provided to us, in order to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the UBU : Salon Booking, Live Listing & More app won’t work properly or at all.</p>

<p>The app does use third party services that declare their own Terms and Conditions.</p>

<p>Link to Terms and Conditions of third party service providers used by the app</p>
<div>
<ul>
<li><a href="https://policies.google.com/terms">Google Play Services</a></li>
<li><a href="https://firebase.google.com/terms/analytics">Google Analytics for Firebase</a></li>
<li><a href="https://firebase.google.com/terms/crashlytics">Firebase Crashlytics</a></li>
</ul>
</div>
<p>You should be aware that there are certain things that Formec Media will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Formec Media cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.</p>

<p>If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.</p>

<p>Along the same lines, Formec Media cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Formec Media cannot accept responsibility.

<p>With respect to Formec Media’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Formec Media accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.</p>

<p>At some point, we may wish to update the app. The app is currently available on Android – the requirements for system(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. Formec Media does not promise that it will always update the app so that it is relevant to you and/or works with the Android version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.</p>

<h4>Changes to This Terms and Conditions</h4>
<p>We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.</p>

<p>These terms and conditions are effective as of 2020-06-25</p>

<h4>Contact Us</h4>
<p>If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at <a href="">formecmedia@gmail.com.</a></p>
   </div>
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
* {
    font-family: Montserrat,sans-serif;
}
h4{
    font-size: 1.6em;
    margin-bottom: 12px;
     font-weight: 550;
}  
.terms p {
    margin: 12px 0;
   
    
} 
.terms {
    width: 100%;
    position: relative;
    padding: 32px 160px;
}
*, :after, :before {
    box-sizing: border-box;
    margin: 0;
}
div {
    display: block;
}

p{
  
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}


b{
  font-size:50px;  
}
a{
    color:#000;
    text-decoration: none;
    border-bottom: 2px solid rgba(255,221,85,.54902);
}
a:hover {
  background-color:rgba(255,221,85,.54902);
}
.terms a:after {
    content: "";
    width: 100%;
    height: 4px;
    background: rgba(255,221,85,.54902);
    position: absolute;
    bottom: 2px;
    left: 0;
    transition: all .3s ease;
}
.terms h4:first-child {
    margin-top: 150px;
}
@media (max-width: 599px)
{
.terms{
    padding: 24px;
}
.terms h4:first-child {
    margin-top: 100px;
}

.terms h4 {
    font-size: 1.5em;
    margin-bottom: 12px;
    margin-top: 32px;
    font-weight: 600;
}
}

</style>
