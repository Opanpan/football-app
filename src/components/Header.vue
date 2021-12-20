<template>
  <div class="header-container d-flex justify-content-around">
    <b-row align-v="center">
      <b-col class="header-item"
        ><router-link to="/area">Area</router-link></b-col
      >
      <b-col class="header-item"><router-link to="">Club</router-link></b-col>
      <b-col class="logo"
        ><router-link to="/"
          >Ball<span class="font-pink">News</span></router-link
        ></b-col
      >
      <b-col class="header-item"><router-link to="">Match</router-link></b-col>
      <b-col class="header-item"><router-link to="">Player</router-link></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "header-component",
};
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 50px;
  background-color: #121212;
  padding: 0 30px;
  color: white;

  .logo {
    font-size: 24px;
    font-weight: 600;

    a {
      color: white;
      text-decoration: none;
    }
  }

  .header-item {
    margin: 0 15px;
    padding: 0;
    a {
      color: white;
      text-decoration: none;

      &:hover {
        color: #ff2c9e;
        cursor: pointer;
      }
    }
  }
}
</style>
>
