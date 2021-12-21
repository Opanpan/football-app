<template>
  <v-container fluid>
    <v-row v-if="teams.length === 0">
      <v-col>
        <v-row>
          <v-col
            ><h1>Please Wait.......</h1>
            <h3>
              If loading too long maybe there is no data, i am sorry :(
            </h3></v-col
          >
        </v-row>
        <v-row>
          <v-col>
            <router-link to="/area"
              ><v-btn color="error">Go back</v-btn></router-link
            ></v-col
          >
        </v-row>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="team in teams" :key="team.id">
        <v-card
          :loading="loading"
          class="mx-auto my-12 custom-card"
          max-width="374"
          outlined
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            position="center"
            height="350"
            width="350"
            :src="team.crestUrl ? team.crestUrl : image"
          ></v-img>

          <v-card-title class="my-0 p-0">{{ team.name }}</v-card-title>

          <v-card-text>
            <div class="grey--text">Since {{ team.founded }}</div>
            <div class="black--text mt-3">Venue</div>
            <div class="grey--text">
              {{ team.venue ? team.venue : "N/A" }}
            </div>
            <div class="black--text mt-3">Jersey Colors</div>
            <div class="grey--text">
              {{ team.clubColors ? team.clubColors : "N/A" }}
            </div>

            <v-divider class="mx-4 my-3"></v-divider>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="click(team)">
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
  name: "club-area",
  data() {
    return {
      loading: false,
      selection: 1,
      place: String,
      teams: [],
      image: image,
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    click: function (team) {
      console.log(team);
      this.$router.push({
        name: "club-detail",
        params: { id: team.id },
      });
    },
  },
  mounted() {
    axios
      .get(
        `https://api.football-data.org/v2/teams?areas=${this.$route.params.id}`,
        {
          headers: {
            "X-Auth-Token": "0a13a83a660747d2b17ad23da2a74309",
          },
        }
      )
      .then((res) => {
        console.log(res.data.teams);
        this.teams = res.data.teams;
        this.place = res.data.teams[0].area.name;
      });
  },
};
</script>

<style lang="scss" scoped>
.custom-card {
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  transition: 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}

h1 {
  font-weight: 300;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
}

h3 {
  font-weight: 300;
  text-align: center;
}

a {
  text-decoration: none;
  text-align: center;
}
</style>
