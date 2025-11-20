import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "./components/HomeView.vue"
import SudokuBoard from "./components/SudokuBoard.vue"
import DailySudoku from "./components/DailySudoku.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: "/",
    },
    {
      component: SudokuBoard,
      path: "/sudokuboard",
    },
    {
      component: DailySudoku,
      path: "/dailysudoku",
    },
  ],
})
