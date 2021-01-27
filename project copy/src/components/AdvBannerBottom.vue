
<template>

<b-container fluid class="background-color">
    <router-view/>
    <b-row> 
        <b-col cols="12" class="pt-5 medium-font text-primary">Give yourself a unique chance to...</b-col>
        <b-col cols="12" class="pb-3"><b-link href="#foo" class="big-font text-danger"><router-link to="/register">JOIN US TODAY!</router-link></b-link></b-col>
    </b-row>
    <router-link to="/reg">JOIN US TODAY!</router-link>
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
    background-color: rgba(252, 233, 233, 0.74);
}
.big-font
{
    font-size: 7rem;
}
.medium-font
{
    font-size: 1.2rem;
}
</style>
