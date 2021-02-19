<template>
    <body>
    <b-container v-if="formalConsent === false" class="col-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish" fluid>
        <b-row>
            <b-col class="text-center p-3"><p>You are in tasks section, please remember that you are constantly <b>LEARNING</b> so, do not forget to make notes, and if necessary - repeat quizes!</p>
                <p>You won't be scoring any points here, so do not panic if you chose a wrong answear, just pick a new one.</p>
                <p>Finishing all quizes will allow you to make an attempt in solving the exam!</p>
                <b-col class="mt-3"><b-button class="btn btn-warning" type="button" v-on:click="GiveConsent">Confirm</b-button></b-col>
            </b-col>
        </b-row>
    </b-container>
     <b-container v-if="formalConsent === true" class="col-12 col-sm-10 mt-5 col-md-8 col-xl-8 mr-auto ml-auto background-bluish p-3" fluid>
        <b><h3><i>Social networks</i></h3></b>
<b>Business applications</b>
<p>
    Social networks connect people at low cost; this can be beneficial for entrepreneurs and small businesses looking to expand their contact base. These networks often act as a customer relationship management tool for companies selling products and services. Companies can also use social networks for advertising in the form of banners and text ads. Since businesses operate globally, social networks can make it easier to keep in touch with contacts around the world.

</p>   
<b>Medical applications</b>
<p>
    Social networks are beginning to be adopted by healthcare professionals as a means to manage institutional knowledge, disseminate peer to peer knowledge and to highlight individual physicians and institutions. The advantage of using a dedicated medical social networking site is that all the members are screened against the state licensing board list of practitioners. The role of social networks is especially of interest to pharmaceutical companies who spend approximately "32 percent of their marketing dollars" attempting to influence the opinion leaders of social networks.

</p>   
<b>Languages, nationalities and academia</b>
<p>
    Various social networking sites have sprung up catering to different languages and countries. The popular site Facebook has been cloned for various countries and languages and some specializing in connecting students and faculty.

</p>
<b>Social networks for social good</b>
<p>
    Several websites are beginning to tap into the power of the social networking model for social good. Such models may be highly successful for connecting otherwise fragmented industries and small organizations without the resources to reach a broader audience with interested and passionate users. Users benefit by interacting with a like-minded community and finding a channel for their energy and giving.

</p>    
<b>Business model</b>
<p>
    Few social networks currently charge money for membership. In part, this may be because social networking is a relatively new service, and the value of using them has not been firmly established in customers' minds. Companies such as MySpace and Facebook sell online advertising on their site. Hence, they are seeking large memberships, and charging for membership would be counter productive. Some believe that the deeper information that the sites have on each user will allow much better targeted advertising than any other site can currently provide. Sites are also seeking other ways to make money, such as by creating an online marketplace or by selling professional information and social connections to businesses.

</p>    
<b>Privacy issues</b>
<p>
    On large social networking services, there have been growing concerns about users giving out too much personal information and the threat of sexual predators. Users of these services need to be aware of data theft or viruses. However, large services, such as MySpace, often work with law enforcement to try to prevent such incidents. In addition, there is a perceived privacy threat in relation to placing too much personal information in the hands of large corporations or governmental bodies, allowing a profile to be produced on an individual's behavior on which decisions, detrimental to an individual, may be taken.

</p>    
<b>Investigations</b>
<p>
    Social network services are increasingly being used in legal and criminal investigations. Information posted on sites such as MySpace and Facebook, has been used by police, probation, and university officials to prosecute users of said sites. In some situations, content posted on MySpace has been used in court.
</p>    

     <b-container>
         <b-row class="mt-3 mb-3">
             <b-col class="col-5 mr-auto ml-auto mb-2 ">
                 <b-col><b>1. According to the text, social networks:</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) advertise on business web sites.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">b) are being used by businesses for marketing. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) are about friendships.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) can damage business reputations.</b-col>
            </b-col>
            <b-col class="col-5 mr-auto ml-auto mb-2">
                <b-col><b>2. Why do advertisers like social nework sites?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) They are cost-effective to advertise on..</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) Most users have high disposable income. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">c) Detailed information on each user allows targeted ads.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) They can influence consumer behaviour.</b-col>
            </b-col>
         </b-row>
         <hr>
            <b-row class="mt-3 mb-3">
             <b-col class="col-5 mr-auto ml-auto mb-2 ">
                 <b-col><b>3. What does the expression '<b>sprung up</b>' in paragraph 4 mean?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) there has been rapid development of social networking sites.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">b) the development of social networking is unplanned. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) everybody is trying to copy Facebook.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) social networking works in all languages.</b-col>
            </b-col>
            <b-col class="col-5 mr-auto ml-auto mb-2">
                <b-col><b>4. What does the word <b>'Few'</b> at the beginning of paragraph <b>6</b> mean?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) Not any.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) Some. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) Only.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">d) Hardly any.</b-col>
            </b-col>
         </b-row>
         <hr>
                     <b-row class="mt-3 mb-3">
             <b-col class="col-5 mr-auto ml-auto mb-2 ">
                 <b-col><b>5. What should users not do on social networks?</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">a) be too free with their personal information.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) download viruses. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) contact predators.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) upload copyrighted music.</b-col>
            </b-col>
            <b-col class="col-5 mr-auto ml-auto mb-2">
                <b-col><b>6. What does the word <b>'deeper'</b> in paragraph <b>6</b> mean??</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) more spiritual.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">b) more detailed. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) more profound.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) more emphatic.</b-col>
            </b-col>
         </b-row>
         <hr>
                     <b-row class="mt-3 mb-3">
             <b-col class="col-5 mr-auto ml-auto mb-2 ">
                 <b-col><b>7. Personal information on social network sites</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">a) can be used in court.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) gives a good description of the user's personality. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) is sold to the government.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">d) is translated into many languages.</b-col>
            </b-col>
            <b-col class="col-5 mr-auto ml-auto mb-2">
                <b-col><b>8. Social networking is great for</b></b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">a) academic organisations.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">b) people who write too much information about themselves. </b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedFalse">c) the law enforcement agencies.</b-col>
                <b-col id="answear" class="col-12 border border-dark" v-on:click="inputClickedRight">d) groups of people separated over wide areas.</b-col>
            </b-col>
         </b-row>
         <hr>
     </b-container>
            <b-row>  
                <b-col class="mt-3 mb-3 text-center"><router-link :to="{name: 'read', params: {solvedB1Read1: true}}" ><b-button class="btn btn-warning" type="button" v-on:click="AddSolvedToUserDb">Solved!</b-button></router-link></b-col>
            </b-row>   
     </b-container>
    </body>
</template>

<script>
import { firebase } from '@firebase/app'
//import '@firebase/auth'
export default {
    name: 'Listening',
        data: function()
    {
      return {
          formalConsent: false,
          email: firebase.auth().currentUser.email,
          solvedB1Read1: false
      }
    },
    methods:
    {
        GiveConsent: function()
        {
            this.formalConsent = true;
        },
        inputClickedRight: function(event)
  {
      //this.$el.setAttribute("style", "background: green;");
    event.target.setAttribute("style", "background-color: rgb(128, 255, 0); "); 
  },
  inputClickedFalse: function(event)
  {
    event.target.setAttribute("style", "background-color: rgb(255, 64, 0)");
  },
  AddSolvedToUserDb: function()
  {
      this.solvedB1Read1 = true;
      var db = firebase.firestore();
      db.collection(this.email).doc(this.email).set({solvedB1Read1: this.solvedB1Read1} ,{merge:true})
  }
    }
}
</script>

<style scoped>
table td:hover{
  background-color: #ffc107;
}
body
{
  background-color: rgb(217,218,211);
  width: 100%;
  height:100%;
}
.background-bluish
{
  background-color: rgb(105, 208, 245);
  border-radius: 20px;
}
.font-bigger
{
    font-size: 1.4rem;
}
.font-medium{
    font-size: 1.1rem;
}
#answear:hover
{
    background-color: #ffc107;
}
@media (max-width: 500px)
 { 
body {
font-size: 0.7rem;
 }; 
 }

</style>