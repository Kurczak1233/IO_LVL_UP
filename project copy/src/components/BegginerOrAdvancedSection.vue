<template>
<b-container fluid class="advertisement">
  <b-row class="images m-0">
    <b-col class="First-part" cols="6"><p class="adv-text1 color-white">Begginer</p></b-col>
    <b-col class="Second-part" cols="6"><p class="adv-text1 color-black">Advanced</p></b-col>
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

</style>

