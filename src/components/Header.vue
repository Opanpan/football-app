<template>
  <div class="header-container d-flex align-items-center">
    <b-row align-v="center">
      <b-col class="logo">Ball<span class="font-pink">News</span></b-col>
      <b-col class="header-item">Area</b-col>
      <b-col class="header-item">Club</b-col>
      <b-col class="header-item">Match</b-col>
      <b-col class="header-item">History</b-col>
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
  }

  .header-item {
    margin-left: 30px;
    padding: 0;

    &:hover {
      color: #ff2c9e;
      cursor: pointer;
    }
  }
}
</style>
>
