 <template>
 <div id="privacypolice">
    <app-header></app-header>
    <diV class="privacy">
    <h4>Privacy Policy</h4>
<p>Formec Media built the UBU : Salon Booking, Live Listing & More app as an Ad Supported app. This SERVICE is provided by Formec Media at no cost and is intended for use as is.</p>

<p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>

<p>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>

<p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at UBU : Salon Booking, Live Listing & More unless otherwise defined in this Privacy Policy.</p>
    
 <h4>Information Collection and Use</h4>
<p>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Full Name, Birth Date, Gender, Phone Number, Email. The information that we request will be retained by us and used as described in this privacy policy.</p>

<p>The app does use third party services that may collect information used to identify you.</p>

<p>Link to privacy policy of third party service providers used by the app</p>

<div>
<ul>
<li><a href="https://policies.google.com/terms">Google Play Services</a></li>
<li><a href="https://firebase.google.com/terms/analytics">Google Analytics for Firebase</a></li>
<li><a href="https://firebase.google.com/terms/crashlytics">Firebase Crashlytics</a></li>
</ul>
</div>

<h4>Log Data</h4>
<p>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</p>

<h4>Cookies</h4>
<p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>

<p>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>

<h4>Service Providers</h4>
<p>We may employ third-party companies and individuals due to the following reasons:</p>
<ul>
<li>To facilitate our Service;</li>
<li>To provide the Service on our behalf;</li>
<li>To perform Service-related services; or</li>
<li>To assist us in analyzing how our Service is used.</li>
</ul>
<p>We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>

<h4>Security</h4>
<p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

<h4>Links to Other Sites</h4>
<p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we highly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

<h4>Children’s Privacy</h4>
<p>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>

<h4>Changes to This Privacy Policy</h4>
<p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

<p>This policy is effective as of 2020-06-25</p>

<h4>Contact Us</h4>
<p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="">formecmedia@gmail.com.</a></p>   

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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.privacy {
    width: 100%;
    position: relative;
    padding: 32px 160px;
}
.privacy h4:first-child {
    margin-top: 150px;
}
.privacy h4 {
    font-size: 1.5em;
    margin-bottom: 12px;
    margin-top: 32px;
    font-weight: 600;
}
.privacy p {
    margin: 12px 0;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
a{
    color:#000;
    text-decoration: none;
    border-bottom: 2px solid rgba(255,221,85,.54902);
}
a:hover {
  background-color:rgba(255,221,85,.54902);
}
@media (max-width: 599px)
{
.privacy{
    padding: 24px;
}
.privacy h4:first-child {
    margin-top: 100px;
}

.privacy h4 {
    font-size: 1.5em;
    margin-bottom: 12px;
    margin-top: 32px;
    font-weight: 600;
}
}

</style>
