<template>
<b-container fluid class="advertisement">
  <b-row class="images m-0 d-none d-sm-flex">
    <b-col class="First-part col-12 col-sm-6"><p class="adv-text1 color-white" >
      <b-button class="btn bigger-button" router-link to="/Begginer" variant="danger">Begginer</b-button>
      </p></b-col>
    <b-col class="Second-part col-12 col-sm-6"><p class="adv-text1 color-black">
      <b-button class="btn bluish-color bigger-button" router-link to="/Advanced">Advanced</b-button></p></b-col>
  </b-row>
  <b-row class="d-sm-none d-flex">
        <b-col class="Materials col-12 height-300">
            <b-button class="mt-half btn bigger-button" router-link to="/Begginer" variant="warning">Our lessons</b-button>
        </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  name: 'Advertisement',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.advertisement{
  padding:0;
  margin-top:20px;
}

.images{
   height:400px;
    
}
.First-part
{
   background-image: url(https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_960_720.jpg);
   background-size: cover;
   background-repeat:no-repeat;
   background-position:center;
   width:100%;

}
.Materials
{
  background-image: url(https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_960_720.jpg);
   background-size: cover;
   background-repeat:no-repeat;
   background-position:center;
   width:100%;
}
.adv-text1{
  font-size: 40px;
  margin-top:150px;
  text-decoration: underline;
  opacity: 1;
}
.color-white{
  color:white;
}
.color-black{
  color:blue;
}
.First-part:hover, .Second-part:hover{
  opacity:0.8;
}
.Second-part{
   background-image: url(https://cdn.pixabay.com/photo/2015/05/15/14/38/telephone-booth-768610_960_720.jpg);
   background-size: cover;
   background-repeat:no-repeat;
   background-position:center;
   width:100%;
}
.bluish-color
{
  background-color: rgb(105, 208, 245);
}
.bigger-button
{
  height: 75px;
  font-size: 35px;
}
.height-300
{
  height:300px;
}
.mt-half
{
  margin-top: 100px;
}

</style>

