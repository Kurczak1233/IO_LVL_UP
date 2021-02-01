<template>
    <b-container>
        <span v-if="loggedIn" class="text-primary">Logged as: <p class="text-danger">{{email}}</p></span>
        <span v-else>No</span>
        <div>
            <b-button class="form-control btn btn-success" @click="signOut"> Log out </b-button>
        </div>
     </b-container>

</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'

export default {
    created()
    {
        this.setupFirebase();
    },
    data()
    {
        return {
            loggedIn: false,
            email: this.$root.email
        }
    },
    methods: {
        setupFirebase()
        {
        firebase.auth().onAuthStateChanged(user=>{
            this.loggedIn = !!user;
            // if(user){
            //     this.loggedIn = true;
            // } else {
            //     this.loggedIn = false;
            // }
        })
        this.email = firebase.auth().currentUser.email 
        },
        async signOut(){
            try{
                 const data = await firebase.auth().signOut();
                console.log(data);
                this.$router.replace({name: "home"})
            }catch(err)
            {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>

</style>