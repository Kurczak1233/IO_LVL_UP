<template>
    <div name="loggin button">
        <span v-if="loggedIn" class="text-primary">Logged as: <p class="text-danger">{{email}}</p></span>
        <span v-else>No</span>
        <div>
            <button name="button" class="form-control btn btn-success" @click="signOut">Log out</button>
        </div>
     </div>

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