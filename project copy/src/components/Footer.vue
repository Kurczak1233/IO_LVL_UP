<template>
<b-container fluid class="background-color">
    <b-row class="pt-4"> 
        <b-col class="col-6 col-md-3 offset-md-2">
            <p class="mb-2 medium-font font-weight-bold text-md-left text-center">Also of interest...</p>
            <p class="text-md-left text-center"><b-link class="h5">Terms of Use</b-link></p>
            <p class="text-md-left text-center"><b-link class="h5">Privacy Policy</b-link></p>
            <p class="text-md-left text-center"><b-link class="h5">Trademarks</b-link></p>
            <p class="text-md-left text-center"><b-link class="h5">Sitemap</b-link></p>
        </b-col>
        <b-col class="col-6 col-md-2 offset-md-1 pb-4 pb-md-0">
           <p class="mb-2 medium-font font-weight-bold text-md-left text-center"> IO_LVL_UP</p>
            <p class="text-md-left text-center"><b-link class="h5 ">About us</b-link></p>
            <p class="text-md-left text-center"><b-link class="h5">Leadership</b-link></p>
            <p class="text-md-left text-center"><b-link class="h5">Careers</b-link></p>
            <p class="text-md-left text-center"><b-link class="h5">Faq</b-link></p>
            <p class="text-md-left text-center"><b-link class="h5">Contact</b-link></p>
        </b-col>
        <b-col class="col-12 col-md-2 offset-md-1">
            <p class="text-md-left text-center mb-2  medium-font font-weight-bold"> Social</p>
            <p class="text-md-left text-center "><b-link class="h5">LinkedIn</b-link></p>
            <p class="text-md-left text-center "><b-link class="h5">Facebook</b-link></p>
            <p class="text-md-left text-center "><b-link class="h5">Twitter</b-link></p>
            <p class="text-md-left text-center "><b-link class="h5">YouTube</b-link></p>
        </b-col>
        <b-col class="col-12 text-small text-grey pt-3">Copyright 2021 IO_LVL_UP<sup>&#169;</sup>. All rights reserved worldwide.</b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
  name: 'AdvBannerBottom',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background-color
{
    background: rgba(252, 233, 233, 0.74);
}
.text-small
{
    font-size: 0.7rem;
}
.text-grey
{
    color:grey;
}
.medium-font
{
    font-size: 1.2rem;
}
p{
    margin-bottom: 0px;
    text-align: left;
}
a:hover {
  text-decoration: none;
  color:blue;
}
a{
    color:blue;
    font-size:bold;
}
</style>
