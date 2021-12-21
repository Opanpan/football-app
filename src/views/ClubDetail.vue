<template>
  <v-container>
    <v-row
      ><v-col class="col-auto">
        <v-img
          position="center"
          height="100%"
          width="100%"
          :src="items.crestUrl ? items.crestUrl : image"
        ></v-img
      ></v-col>
      <v-col class="col-auto">
        <h2 class="mt-5">Team Name</h2>
        <h3>{{ items.name }}</h3>
        <h2 class="mt-5">Founded</h2>
        <h3>{{ items.founded ? items.founded : "N/A" }}</h3>
        <h2 class="mt-5">Area</h2>
        <h3>{{ items.area.name ? items.area.name : "N/A" }}</h3>
        <h2 class="mt-5">Venue</h2>
        <h3>{{ items.venue ? items.venue : "N/A" }}</h3>
        <h2 class="mt-5">Address</h2>
        <h3>{{ items.address ? items.address : "N/A" }}</h3>
        <h2 class="mt-5">Club Colors</h2>
        <h3>{{ items.clubColors ? items.clubColors : "N/A" }}</h3>
        <h2 class="mt-5">Competition</h2>
        <div v-for="item in items.activeCompetitions" :key="item.id">
          <h3>
            {{ item.name ? item.name : "N/A" }} ({{
              item.area.name ? item.area.name : ""
            }})
          </h3>
        </div>
        <h2 class="mt-5">Contacts</h2>
        <h3>{{ items.phone }}</h3>
        <h3>{{ items.email }}</h3>
        <h3 v-on:click="handleUrl(items.website)" class="blue--text a-custom">
          {{ items.website }}
        </h3>
      </v-col></v-row
    >
    <v-row dense>
      <v-col v-for="squad in squads" :key="squad.id">
        <v-card class="mx-auto my-12 custom-card" min-width="300" outlined>
          <v-card-title class="my-0 p-0 font-weight-bold">{{
            squad.name
          }}</v-card-title>
          <v-card-text>
            <div class="black--text font-weight-medium mt-3">Nationality</div>
            <div class="grey--text">
              {{ squad.nationality }}
            </div>
            <div class="black--text font-weight-medium mt-3">
              Country of Birth
            </div>
            <div class="grey--text">
              {{ squad.countryOfBirth }}
            </div>
            <div class="black--text font-weight-medium mt-3">Date of Birth</div>
            <div class="grey--text">
              {{ squad.dateOfBirth }}
            </div>

            <v-divider class="mx-4 my-3"></v-divider>

            <h3 class="black--text font-weight-medium mt-3 text-right">
              {{ squad.role }}
            </h3>
            <h4 class="black--text font-weight-medium text-right">
              {{ squad.position }}
            </h4>
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="click(squad.id)">
              Detail
            </v-btn>
          </v-card-actions>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import image from "@/assets/na.png";
export default {
  name: "club-detail",
  data() {
    return {
      items: [],
      squads: [],
      image: image,
    };
  },
  mounted() {
    axios
      .get(`https://api.football-data.org/v2/teams/${this.$route.params.id}`, {
        headers: {
          "X-Auth-Token": "0a13a83a660747d2b17ad23da2a74309",
        },
      })
      .then((res) => {
        console.log(res.data);
        this.items = res.data;
        this.squads = res.data.squad;
      });
  },
  methods: {
    handleUrl: function (url) {
      window.open(url, "_blank");
    },
    click: function (team) {
      console.log(team);
      this.$router.push({
        name: "player-detail",
        params: { id: team },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 300;
  margin: 0;
}
.a-custom {
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
