<script>
  import { RouterLink, RouterView } from "vue-router"
  import HomeView from "./components/HomeView.vue"
  import SudokuBoard from "./components/SudokuBoard.vue"
  import DailySudoku from "./components/DailySudoku.vue"

  export default {
    components: {
      HomeView,
      SudokuBoard,
      DailySudoku,
    },
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/sudokuboard">Play sudoku</RouterLink>
      </li>
      <li>
        <RouterLink to="/dailysudoku">Daily Challange</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #ecdfed;
    height: 4em;
    margin-left: 0;
    margin-right: 0;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  li {
    align-self: center;
    margin-right: 3em;
    margin-left: 3em;
  }

  li a {
    text-decoration: none;
  }

  li a:hover {
    color: #0f25b5;
    font-size: 17px;
  }

  @media (prefers-color-scheme: dark) {
    nav {
      background-color: #ababab;
    }
    li a {
      color: #161515;
    }
    li a:hover {
      color: #210d9b;
    }
  }

  @media (max-width: 685px) {
    ul {
      padding-left: 0;
    }
    li {
      margin-left: 0.9em;
      margin-right: 0.9em;
    }
  }
</style>
