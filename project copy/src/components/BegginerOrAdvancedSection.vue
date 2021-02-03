<template>
<b-container fluid class="advertisement">
  <b-row class="images m-0">
    <b-col class="First-part" cols="6"><p class="adv-text1 color-white">B E G G I N E R</p></b-col>
    <b-col class="Second-part" cols="6"><p class="adv-text1 color-green">A D V A N C E D</p></b-col>
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
   background-image: url(https://github.com/Kurczak1233/IO_LVL_UP/blob/Karolina/project%20copy/src/assets/girl-2771936_960_720.jpg?raw=true);
   background-size: cover;
   background-repeat:no-repeat;
   background-position:center;
   width:100%;

}
.adv-text1{
  font-size: 50px;
  margin-top:150px;
  text-decoration: none;
  opacity: 5;
}
.color-white{
  color:rgb(247, 35, 35);
}
.color-green{
  color:rgb(29, 51, 248);
}
.First-part:hover, .Second-part:hover{
  opacity:0.8;
}
.Second-part{
   background-image: url(https://github.com/Kurczak1233/IO_LVL_UP/blob/Karolina/project%20copy/src/assets/telephone-booth-768610_960_720.jpg?raw=true);
   background-size: cover;
   background-repeat:no-repeat;
   background-position:center;
   width:100%;
}

</style>

