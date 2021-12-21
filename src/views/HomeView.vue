<template>
  <v-container>
    <v-row
      ><v-col class="col-auto first-content"
        ><h1>MADE FOR FOOTBALL LOVERS</h1>
        <h2>Information that you may never know about the world of football</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped lang="scss">
.first-content {
  h1 {
    color: #121212;
    font-weight: 300;
    font-size: 100px;
    width: 100vw;
    text-align: left;

    @media screen and (min-width: 425px) {
      font-size: 144px;
      width: 50vw;
    }
  }

  h2 {
    font-weight: 300;
  }
}
</style>
