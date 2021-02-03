<template>
    <body>
             <b-nav> 
      <b-container fluid class="mb-4 pt-auto pb-auto color-bluish">
        <b-row class="pt-3 pb-3">
          <b-col class="col-3 text-size-big ml-auto mr-auto text-success d-none d-xl-block"><router-link to="/UserPage"><img id="project-logo" class="img-fluid" src="https://github.com/Kurczak1233/IO_LVL_UP/blob/Asia/project%20copy/src/assets/logov2.png?raw=true" alt="Logo strony">IO_LVL_UP</router-link></b-col>
          <b-col class="col-4 text-success mb-auto mt-auto ml-auto mr-auto d-none d-xl-block">
            <b-list-group horizontal>
  <b-list-group-item class="rounded-edges-left btn btn-success" variant="success" href="#">Lessons</b-list-group-item>
  <b-list-group-item variant="warning btn btn-warning" href="#">Quizes</b-list-group-item>
  <b-list-group-item class="rounded-edges-right btn btn-danger" variant="danger" href="#">Progress</b-list-group-item>
            </b-list-group>
</b-col>
          <b-col class="col-3 d-xl-none">  
            <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>   
    <template #button-content>
       <b-icon icon="list" font-scale="3"></b-icon>
    </template>
    <b-dropdown-item href="#">An item</b-dropdown-item>
    <b-dropdown-item href="#">Another item</b-dropdown-item>
            </b-dropdown>
        </b-col>
          <b-col class="col-xl-2 col-8 text-success text-center mt-auto mb-auto mr-4"><LoggedInButton></LoggedInButton></b-col>
        </b-row>
      </b-container>
      </b-nav>
      <!---->
        <b-container fluid>
          <b-row>
          <b-col class="col-4 pt-3 text-center color-bluish border-right border-bottom-4 border-success" fluid id="aside">
              <b-row>
                <b-col class="col-12 mb-3 text-center font-large">Your level: (player-level)</b-col>
              </b-row>
              <b-row>
                <b-col class="col-5 mt-auto mb-auto text-center font-large"><p class="d-none d-md-block">Available classes:</p></b-col>
                <b-list-group class="col-11 pr-1 ml-auto mr-auto ml-md-0 mr-md-0 col-md-6">
  <b-list-group-item class="" variant="info" href="#"><router-link to="/Speaking"><b-button class="btn form-control " variant="primary">Speaking</b-button></router-link></b-list-group-item>
  <b-list-group-item class="" variant="info" href="#"><router-link to="/Writing"><b-button class="btn form-control " variant="success">Writing</b-button></router-link></b-list-group-item>
  <b-list-group-item class="" variant="info" href="#"><router-link to="/Grammar"><b-button class="form-control btn" variant="info">Grammar</b-button></router-link></b-list-group-item>
  <b-list-group-item class="" variant="info" href="#"><router-link to="/Reading"><b-button class="form-control btn" variant="danger">Reading</b-button></router-link></b-list-group-item>
  <b-list-group-item class="" variant="info" href="#"><router-link to="/Listening"><b-button class="form-control btn" variant="warning">Listening</b-button></router-link></b-list-group-item>
  <b-list-group-item class="mt-5" variant="info" href="#"><router-link to="/File"><b-button class="form-control btn" variant="warning">Download</b-button></router-link></b-list-group-item>
            </b-list-group>
              </b-row>
              <b-row>
                <b-col class="col-12 mt-4 mb-3">Available lessons left: (35 hours)</b-col>
              </b-row>
          </b-col>
          <b-col class="col-8 text-center color-bluish font-large" fluid id="main">
                Hello: <p class="text-danger">{{email}}</p><!-- Lepiej by było imię!-->

                                <b-row>
                  <b-col class="col-12"> Your actual progress:
                             <!--       <div class="progress mt-3"> Można to rozbić na 5 pojedynczych zamiast jednego długiego paska
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 15%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="20">Speaking</div>
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 20%" aria-valuenow="6" aria-valuemin="0" aria-valuemax="20">Writing</div>
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 20%" aria-valuenow="4" aria-valuemin="0" aria-valuemax="20">Grammar</div>
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 15%" aria-valuenow="3" aria-valuemin="0" aria-valuemax="20">Reading</div>
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 15%" aria-valuenow="1" aria-valuemin="0" aria-valuemax="20">Listening</div>
  </div>
-->
           <p>
</p>
<p>
</p>
<b-row>
  <b-col class="col-10 ml-auto mr-auto">
  <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 22%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Speaking</div>
</div>
<p>
</p>
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 51%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Writing</div>
</div>
<p>
</p>
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated  bg-info" role="progressbar" style="width: 46%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Grammar</div>
</div>
<p>
</p>
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style="width: 87%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Reading</div>
</div>
<p>
</p>
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style="width: 17%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Listening</div>
</div>
</b-col>
</b-row>

                  </b-col>
                </b-row>
                </b-col>
          </b-row>

              <!-- <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>  ZAJEBISTY SIDEBAR!
    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar> -->
        </b-container>
    </body>
</template>

<script>
import LoggedInButton from '../src/components/LoggedInButton.vue'
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
     components: {
    LoggedInButton
  },
      data()
    {
        return {
            loggedIn: false,
            email: firebase.auth().currentUser.email 
        }
    },
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
</style>