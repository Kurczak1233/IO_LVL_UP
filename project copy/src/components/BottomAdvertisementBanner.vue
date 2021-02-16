
<template>
<b-container fluid class="color-blu">
    <b-row> 
        <b-col cols="12" class="pt-5 medium-font text-primary">Give yourself a unique chance to...</b-col>
        <b-col cols="12" class="pb-3">
            <b-link class="big-font d-none d-sm-block"><router-link to="/register" class="text-danger">JOIN US TODAY!</router-link></b-link>
            <b-link class="medium-title d-sm-none d-block"><router-link to="/register" class=" text-danger">JOIN US TODAY!</router-link></b-link>
        </b-col>
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
.big-font
{
    font-size: 7rem;
}
.medium-font
{
    font-size: 1.2rem;
}
.medium-title
{
    font-size: 2.5rem;
}
.color-blu
{
    background-color: rgb(105, 208, 245);
}
</style>
