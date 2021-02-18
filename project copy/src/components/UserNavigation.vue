<template>  
    <b-nav> 
        <b-container fluid class="mb-4 pt-auto pb-auto color-bluish">
            <b-row class="pt-3 pb-3">
                <b-col class="col-3 text-size-big ml-5 mr-0 text-success d-none d-xl-block"><router-link to="/UserPage"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Asia/project%20copy/src/assets/logov2.png?raw=true" alt="Logo strony">IO_LVL_UP</router-link></b-col>
                <b-col class="col-4 text-success mb-auto mt-auto ml-5 d-none d-xl-block">
                    <b-list-group horizontal v-if="level !== 'Unknown'">
                        <b-list-group-item  v-if="IsInSpeaking===true" class="rounded-edges-left color-stronger-blue text-white"  variant="primary" to="/Speaking" disabled><b>Speaking</b></b-list-group-item><b-list-group-item v-else variant="primary" class="rounded-edges-left" to="/Speaking">Speaking</b-list-group-item>
                        <b-list-group-item  v-if="IsInWriting===true"  variant="success" to="/Writing" class="color-stronger-green text-white" disabled><b>Writing</b></b-list-group-item> <b-list-group-item v-else variant="success" to="/Writing">Writing</b-list-group-item>
                        <b-list-group-item  v-if="IsInGrammar===true" class="color-stronger text-white" variant="info" to="/Grammar" disabled><b>Grammar</b></b-list-group-item> <b-list-group-item v-else variant="info" to="/Grammar">Grammar</b-list-group-item>
                        <b-list-group-item  v-if="IsInReading===true" class="color-stronger-red text-white" disabled variant="danger" to="/Reading"><b>Reading</b></b-list-group-item> <b-list-group-item v-else variant="danger" to="/Reading">Reading</b-list-group-item>
                        <b-list-group-item  v-if="IsInListening===true" class="rounded-edges-right color-stronger-yellow text-white" variant="warning" disabled to="/Listening"><b>Listening</b></b-list-group-item> <b-list-group-item class="rounded-edges-right" v-else variant="warning" to="/Listening">Listening</b-list-group-item>
                        </b-list-group>
                </b-col>
                <b-col class="col-3 d-xl-none">  
                    <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>   
                        <template #button-content>
                            <b-icon icon="list" font-scale="3"></b-icon>
                        </template>
                        <b-dropdown-item type="button" class="btn bg-red" to="/UserPage">User Menu</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item variant="primary" type="button" class="btn" to="/Speaking">Speaking</b-dropdown-item>
                        <b-dropdown-item variant="success" type="button" class="btn" to="/Writing">Writing</b-dropdown-item>
                        <b-dropdown-item variant="info" type="button" class="btn" to="/Grammar">Grammar</b-dropdown-item>
                        <b-dropdown-item variant="danger" type="button" class="btn" to="/Reading">Reading</b-dropdown-item>
                        <b-dropdown-item variant="warning" type="button" class="btn" to="/Listening">Listening</b-dropdown-item>
                    </b-dropdown>
                </b-col>
            <b-col class="offset-xl-2 col-xl-2 col-8 text-success text-center mt-auto mb-auto"><LoggedInButton></LoggedInButton></b-col>
            </b-row>
        </b-container>
    </b-nav>
</template>

<script>
import LoggedInButton from './LoggedInButton.vue'
export default {
    name: "UserNavigation",
     components: {
    LoggedInButton
  },
  props: ["level", "IsInGrammar", "IsInSpeaking", "IsInReading", "IsInWriting", "IsInListening"]
}
</script>

<style scoped>
.color-bluish
{
  background-color: rgb(105, 208, 245);
}
.rounded-edges-left
{
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
.rounded-edges-right
{
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.font-large
{
  font-size: 1.5rem;
}
.font-medium
{
  font-size: 1.2rem;
}
.font-small
{
  font-size:1rem;
}
.color-stronger{
  background-color:  #20c997;
}
.color-stronger-blue
{
  background-color: #0d6efd;
}
.color-stronger-red
{
  background-color: #dc3545;
}
.color-stronger-green
{
  background-color: #198754;
}
.color-stronger-yellow
{
  background-color: #fd7e14;
}
</style>