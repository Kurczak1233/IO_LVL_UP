 <template>
    <body>
      <b-container class="container text-center p-3 mb-3 mt-3 mr-auto ml-auto margin5 background-bluish" fluid>   
          <b-row class="p-4">
            <b-col class="mb-3 text-size-big mt-auto mb-auto"  cols="12"> Grammar lessons available on  <span class="text-danger">{{level}}</span> level </b-col>
          </b-row>
      </b-container>
    </body>
</template>

<script>
export default {
    name: "LessonsHeader",
    props: ["level"]
}
</script>

<style scoped>
.background-bluish
{
  background-color: rgb(105, 208, 245);
  border-radius: 20px;
}
</style>