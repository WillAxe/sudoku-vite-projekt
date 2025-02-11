<script>
  import { RouterLink, RouterView} from "vue-router"
  import HomeView from "./components/HomeView.vue"
  import SudokuBoard from "./components/SudokuBoard.vue"
  import LoginView from "./components/LoginView.vue"

  export default {
    components: {
      HomeView,
      SudokuBoard,
      LoginView,

    }
  };
</script>

<template>
  <nav>
  <ul>
    <li>
      <RouterLink to="/">Hem</RouterLink>
    </li>
    <li>
      <RouterLink to="/sudokuboard">Play sudoku as guest</RouterLink>
    </li>
    <li>
      <RouterLink to="/loginview">login</RouterLink>
    </li>
    <li>
      <RouterLink to="/sudokuboard">Daily Challange</RouterLink>
    </li>
  </ul>
</nav>

<main>
  <RouterView />
</main>

</template>

<style>
  
</style>
