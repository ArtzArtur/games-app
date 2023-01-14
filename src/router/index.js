import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import TheHome from "../views/TheHome.vue";
import Games from "../views/Games.vue";
import TopGames from "../views/TopGames.vue";
import GameDetails from "../views/GameDetails.vue";

const routes = [
  {
    name:"TheHome",
    path:"/games-app/",
    component:TheHome
  },
  {
    name:"Games",
    path:"/games-app/Games",
    component:Games
  },
  {
    name:"TopGames",
    path:"/games-app/TopGames",
    component:TopGames
  },
  {
    name:"GameDetails",
    path:"/games-app/GameDetails/:game",
    component:GameDetails,
    props:true

  },
]

const router = createRouter({
history:createWebHistory(),routes}
)

export default router