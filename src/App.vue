<script>
  import { RouterLink, RouterView} from "vue-router"
  import HomeView from "./components/HomeView.vue"
  import SudokuBoard from "./components/SudokuBoard.vue"
  import LoginView from "./components/LoginView.vue"
  import DailySudoku from "./components/DailySudoku.vue"

  export default {
    components: {
      HomeView,
      SudokuBoard,
      LoginView,
      DailySudoku,

    }
}

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
      <RouterLink to="/dailysudoku">Daily Challange</RouterLink>
    </li>
  </ul>
</nav>

<main>
  <RouterView/>
</main>

</template>

<style>
  nav{
  display:flex;
  flex-direction: row;
  justify-content:space-evenly;
  background-color: #ecdfed;
  height: 4em;
  margin-left: 0;
  margin-right:0;
}

  ul{
    display:flex;
    flex-direction:row;
    list-style:none;
  }

   li{
    align-self:center;
    margin-right: 3em;
    margin-left: 3em;
   }

   li a{
    text-decoration: none;
   }

   li a:hover{
    color:#0F25B5;
    font-size: 17px;
   }
</style>  
