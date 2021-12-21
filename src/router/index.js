import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AreaView from "@/views/AreaView.vue";
import ClubArea from "@/views/ClubArea.vue";
import ClubDetail from "@/views/ClubDetail.vue";
import PlayerDetail from "@/views/PlayerDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/area",
    name: "area",
    component: AreaView,
  },
  {
    path: "/area/:id",
    name: "club-area",
    component: ClubArea,
  },
  {
    path: "/club/:id",
    name: "club-detail",
    component: ClubDetail,
  },
  {
    path: "/player/:id",
    name: "player-detail",
    component: PlayerDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
