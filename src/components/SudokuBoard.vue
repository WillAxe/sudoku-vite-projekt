<script setup>
  import Buttons from "./Buttons.vue"
  import { ref } from "vue"

  fetch("https://sudoku-api.vercel.app/api/dosuku?query{newboard(limit:1){grids{value}}}")
    .then(response => response.json())
    .then(result =>{
      console.log(result)
      const grid = result.newboard.grids[0]
      difficulty.value = grid.difficulty
      board.value = grid.value
  })
  const board = ref([])
  const difficulty = ref(null)



  const activeCell = ref({row: null, col:null})
  function onClick(row, col){
    activeCell.value = {row, col}
  }

  const highlightedNumber = ref(null)

  function highlightCells(number){
    highlightedNumber.value = number
  }

</script>

<template>
  <div>
    <h3>Difficulty: {{ difficulty }}</h3>
    <table border="1px">
      <tbody>
        <tr v-for="(row, rowCell) in board" :key="rowCell">
          <td 
          v-for="(cell, colCell) in row" :key="colCell" align="center" 
          :class="{
            'highlight': rowCell === activeCell.row || colCell === activeCell.col,
             'highlight-number': cell === highlightedNumber
             }">
            <input v-if="cell === 0" v-model="[rowCell][colCell]" @click="onClick(rowCell, colCell)">
            <span v-else>{{ cell }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <Buttons @highlight-number="highlightCells"/>
</template>

<style scoped>
  input{
    width:50px;
    height: 50px;
  }

  
  .highlight{
    background-color: #f0f0ee;
  } 
  
  .highlight input{
    background-color: #f0f0ee;
  }

  input:focus{
    background-color: #f6f6dd;
  }

  .highlight-number{
    background-color: #f6f6d0;
  }



</style>