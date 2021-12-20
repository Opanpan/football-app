<template>
  <b-container fluid class="bg-container">
    <b-row class="bg-filter">
      <Header />
      <b-col>1 Of 2</b-col>
      <b-col>2 of 3</b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
.bg-container {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .bg-filter {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.55);
  }
}

.first-content {
  width: 30vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;

  h2 {
    font-size: 48px;
    font-weight: 900;
    text-align: left;
    letter-spacing: -2px;
    width: 219px;
  }
}

.font-blue {
  color: #160045;
}

.font-red {
  color: #cd0404;
}
</style>
