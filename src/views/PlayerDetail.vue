<template>
  <v-container
    ><v-card class="mx-auto my-12" min-width="300" outlined>
      <v-card-title class="my-0 p-0 font-weight-bold">{{
        items.name
      }}</v-card-title>
      <v-card-text>
        <div class="black--text font-weight-medium mt-3">First Name</div>
        <div class="grey--text">
          {{ items.firstName ? items.firstName : "N/A" }}
        </div>
        <div class="black--text font-weight-medium mt-3">Last Name</div>
        <div class="grey--text">
          {{ items.lastName ? items.lastName : "N/A" }}
        </div>
        <div class="black--text font-weight-medium mt-3">Nationality</div>
        <div class="grey--text">
          {{ items.nationality ? items.nationality : "N/A" }}
        </div>
        <div class="black--text font-weight-medium mt-3">Country of Birth</div>
        <div class="grey--text">
          {{ items.countryOfBirth ? items.countryOfBirth : "N/A" }}
        </div>
        <div class="black--text font-weight-medium mt-3">Date of Birth</div>
        <div class="grey--text">
          {{ items.dateOfBirth ? items.dateOfBirth : "N/A" }}
        </div>

        <v-divider class="mx-4 my-3"></v-divider>

        <h4 class="black--text font-weight-medium text-right">
          {{ items.position ? items.position : "N/a" }}
        </h4>
        <h4 class="black--text font-weight-medium text-right">
          {{ items.shirtNumber ? items.shirtNumber : "N/A" }}
        </h4>
      </v-card-text>
    </v-card></v-container
  >
</template>

<script>
import axios from "axios";

export default {
  name: "player-detail",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios
      .get(`http://api.football-data.org/v2/players/${this.$route.params.id}`, {
        headers: {
          "X-Auth-Token": "0a13a83a660747d2b17ad23da2a74309",
        },
      })
      .then((res) => {
        console.log(res.data);
        this.items = res.data;
      });
  },
};
</script>

<style></style>
