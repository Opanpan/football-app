<template>
  <div class="mt-5">
    <v-data-table
      :headers="headers"
      :items="countries"
      item-key="name"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search Box"
          class="mx-4"
          append-icon="mdi-magnify"
        ></v-text-field>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:body.append>
        <tr>
          <td></td>
        </tr>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.action="{ item }">
        <v-btn v-on:click="click(item)">OPEN</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: "",
      countries: [],
    };
  },
  methods: {
    click: function (item) {
      this.$router.push({
        name: "club-area",
        params: { id: item.id },
      });
    },
  },

  mounted() {
    axios
      .get("https://api.football-data.org/v2/areas/", {
        headers: {
          "X-Auth-Token": "0a13a83a660747d2b17ad23da2a74309",
        },
      })
      .then((res) => {
        console.log(res.data.areas);
        this.countries = res.data.areas;
      });
  },
  computed: {
    headers() {
      return [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Country Code",
          align: "start",
          sortable: false,
          value: "countryCode",
        },
        {
          text: "Country",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Continent",
          align: "start",
          sortable: false,
          value: "parentArea",
        },
        {
          text: "Continent ID",
          align: "start",
          sortable: false,
          value: "parentAreaId",
        },
        {
          text: "Football Clubs in the Country",
          align: "start",
          value: "action",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.item-table {
  &:hover {
    color: red;
  }
}
</style>
