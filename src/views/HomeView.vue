<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col class="first-content"
        ><h1>
          Made for <span class="font-blue">Football </span>
          <span class="font-pink">Lovers</span>
        </h1></b-col
      >
      <b-col>2</b-col>
    </b-row>
  </b-container>
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
    font-size: 144px;
    font-weight: 300;
    text-align: left;
    padding: 0 40px;
  }
}

.bg-red {
  background-color: red;
}
.bg-blue {
  background-color: blue;
}

.font-red {
  color: #cd0404;
}
</style>
