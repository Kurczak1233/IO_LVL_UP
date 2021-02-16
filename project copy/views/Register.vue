<template>
  <body>
    <b-container class="col-10 col-md-8 col-xl-5 mr-auto ml-auto margin10 background-bluish" fluid>
      <b-row class="">
         <b-col class="col-12 text-center pt-4"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Asia/project%20copy/src/assets/logov2.png?raw=true" alt="Logo strony"></b-col>
         <b-col class="col-12 text-size-big text-center pt-2">CREATE ACCOUNT</b-col>
         <b-col class="col-12"><hr></b-col>
      </b-row>
      <b-form @submit.prevent="pressed" > <!--@submit.prevent="pressed"--> <!--@submit.stop.prevent-->
       <b-row class="mt-3">
           <b-col class="col-2 offset-1 pt-1" >
              <label for="Login">Login:</label>
           </b-col>
           <b-col class="col-8">
              <b-form-input required type="email" :state="validationEmail" v-model="email"  class="form-control" aria-describedby="Login" placeholder="Insert your email" id="login"></b-form-input>
                  <b-form-invalid-feedback  :state="validationEmail">
                    Your user ID must be 5-30 characters long and must be an email.  
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validationEmail">
                    Looks Good.
                  </b-form-valid-feedback>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col class="col-2 offset-1 pt-1" >
              <label for="password">Password:</label>
           </b-col>
           <b-col class="col-8">
              <b-form-input required type="password" v-model="password" class="form-control" aria-describedby="password" placeholder="Insert your password" id="login"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="mt-3">
           <b-col class="col-2 offset-1 pt-1" >
              <label for="Login">Name:</label>
           </b-col>
           <b-col class="col-8">
              <b-form-input required type="text" v-model="name"  class="form-control" aria-describedby="Login" placeholder="Insert your name" id="name"></b-form-input>
            </b-col>
        </b-row>
        <b-row>
          <b-col class="col-12 offset-1 pt-1">              
          <div>
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
              required
            >
              I accept the terms and use
            </b-form-checkbox>

            <div>State: <strong v-if="status === 'not_accepted'" class="text-danger">{{ status }}</strong><strong v-else class="text-success">{{status}}</strong></div>
          </div>
          </b-col>
        </b-row>
        <b-row class="pb-5 mt-3">
        <b-col class="col-4"></b-col>
        <b-col class="col-4">
        <b-button type="submit" class="btn btn-control btn-success form-control">Register</b-button>
        </b-col>
        <b-col class="col-4"></b-col>
        </b-row>
        </b-form>
        <b-col class="d-none">
            <div>

  </div>
        </b-col>
    </b-container>
  </body>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
    name: 'Register',
    methods: {
      async pressed(){
           try{
                const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(userCredential => {
                     if (userCredential) {
                    userCredential.user.updateProfile({
                        displayName: this.name,
                        displayTOU: this.termsOfUse,
                    })
                   }})
                 var db = firebase.firestore();
                 db.collection(this.email).doc(this.email).set({
                  grammar: 0,
                  speaking: 0,
                  writing: 0,
                  reading: 0,
                  listening: 0,
                  level: "Unknown",
                })
                .catch((error) => {
                  console.error("Error adding document: ", error);
                });
                console.log(user)
                this.$router.replace({name: "home"});
           }catch(err)
           {
               console.log(err)
           }
      }   
    },
      computed: {
      validationEmail() {
        return this.email.length > 4 && this.email.length < 31
      }
    },
    data() {
        return {
            loggedIn: false,
            email: "",
            password: '',
            error: '',
            name: "",
            termsOfUse: false,
            emailVerified: false,
            status: 'not_accepted',
            file1: null,
            ButtonClicked: false,
        }
    }
}
</script>
<style scoped>
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
.margin10
{
  margin-top: 10%;
}
.text-size-big
{
  font-size: 2rem;
}
#project-logo{
  height: 80px;
}
</style>
