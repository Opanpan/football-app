<template>
  <v-container fluid>
    <v-row v-if="teams.length < 0">
      <v-col>
        <v-row>
          <v-col class="col-auto"
            ><h1>Sorry we don't have the Data :(</h1></v-col
          >
        </v-row>
        <v-row>
          <v-col class="col-auto">
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
            :src="team.crestUrl"
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

            <div class="black--text mt-3">Address</div>
            <div class="grey--text">
              {{ team.address }}
            </div>
            <div>
              <div class="black--text mt-3">Contact</div>
              <div class="grey--text">
                {{ team.phone ? team.phone : "N/A" }}
              </div>
              <div class="grey--text">
                {{ team.email ? team.email : "N/A" }}
              </div>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
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
export default {
  name: "club-area",
  data() {
    return {
      loading: false,
      selection: 1,
      place: String,
      teams: [],
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  mounted() {
    axios
      .get(
        `http://api.football-data.org/v2/teams?areas=${this.$route.params.id}`,
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

a {
  text-decoration: none;
}
</style>
