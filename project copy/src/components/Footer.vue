<template>
<b-container fluid class="background-color">
    <b-row class="pt-4"> 
        <b-col class="col-3 offset-3">
            <p class="mb-2 medium-font">Also of interest...</p>
            <p><b-link class="h5">Terms of Use</b-link></p>
            <p><b-link class="h5">Privacy Policy</b-link></p>
            <p><b-link class="h5">Trademarks</b-link></p>
            <p><b-link class="h5">Sitemap</b-link></p>
        </b-col>
        <b-col class="col-2 medium-font">
           <p class="medium-font"> IO_LVL_UP</p>
            <p><b-link class="h5">Terms of Use</b-link></p>
            <p><b-link class="h5">Privacy Policy</b-link></p>
            <p><b-link class="h5">Trademarks</b-link></p>
            <p><b-link class="h5">Sitemap</b-link></p>
        </b-col>
        <b-col class="col-2  medium-font">
            <p class="medium-font"> Social</p>
            <p><b-link class="h5">Terms of Use</b-link></p>
            <p><b-link class="h5">Privacy Policy</b-link></p>
            <p><b-link class="h5">Trademarks</b-link></p>
            <p><b-link class="h5">Sitemap</b-link></p>
        </b-col>
        <b-col class="col-12 text-small text-grey">Copyright 2021 IO_LVL_UP<sup>&#169;</sup>. All rights reserved worldwide.</b-col>
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
    background-color: rgb(217,218,211);
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
</style>
