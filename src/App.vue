<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-app-bar dark prominent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"
              >Football Club Profile
            </v-list-item-title>
            <v-list-item-subtitle
              >The best app ever made!
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-app-bar>
      <v-list dense rounded>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "Country List", icon: "mdi-view-dashboard", to: "/area" },
    ],
    right: null,
  }),
};
</script>

<style lang="scss"></style>
