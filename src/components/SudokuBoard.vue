<script setup>
  import Buttons from "./Buttons.vue"
  import TimerClock from "./TimerClock.vue"
  import CongratMessage from "./CongratMessage.vue"
  import { ref } from "vue"
  import { computed } from "vue"
  import { watch } from "vue"

  fetch(
    "https://sudoku-api.vercel.app/api/dosuku?query{newboard(limit:1){grids{value}}}"
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      const grid = result.newboard.grids[0]
      for (let i = 0; i < grid.value.length; i++) {
        for (let n = 0; n < grid.value[i].length; n++) {
          if (grid.value[i][n] === 0) {
            grid.value[i][n] = ""
          }
        }
      }
      difficulty.value = grid.difficulty
      board.value = grid.value.map((row) =>
        row.map((cell) => (cell === 0 ? "" : cell))
      )
      solution.value = grid.solution.map((row) =>
        row.map((cell) => Number(cell))
      )

      //Declare the empty cells to make them editable
      userBoard.value = board.value.map((row) =>
        row.map((cell) => (cell === 0 ? "" : null))
      )
    })

  const board = ref([])
  const userBoard = ref([])
  const difficulty = ref(null)
  const solution = ref([])

  const highlightedNumber = ref(null)
  const activeCell = ref({ row: null, col: null })

  //Highlight the cell that the player press and highlight the column and row for that cell
  function onClick(row, col) {
    if (board.value[row][col] === "") {
      activeCell.value = { row, col }
    }
  }

  function removeHighlight() {
    activeCell.value = { row: null, col: null }
  }

  //The buttons highlights the corresponding numbers

  function highlightCells(number) {
    highlightedNumber.value = number
  }
  //Making it possbiblefor the user to fill in the empty cells with a number
  function printNumber(number) {
    if (activeCell.value.row !== null && activeCell.value.col !== null) {
      userBoard.value[activeCell.value.row][activeCell.value.col] =
        Number(number)
      userBoard.value = [...userBoard.value] // force reactivity
    }
  }

  console.log(solution.value)
  console.log(userBoard.value)
  console.log(board.value)

  //checks if the number is correct
  function checkSolution(row, col, value) {
    const num = value ? parseInt(value) : null
    userBoard.value[row][col] = isNaN(num) ? null : num
  }

  // count how many of each number there is in the grid
  const numberCount = computed(() => {
    const count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }

    board.value.flat().forEach((num) => {
      if (num && !isNaN(num)) count[num]++
    })

    userBoard.value.flat().forEach((num) => {
      if (num && !isNaN(num)) count[num]++
    })
    return count
  })

  //Hide the panel that popup when you complete the game
  const showPanel = ref(false)

  //Checks if the board is complete and correct
  const isGameComplete = computed(() => {
    if (solution.value.length === 0) return false
    const complete = userBoard.value.every((row, rowCell) =>
      row.every((cell, colCell) => {
        if (board.value[rowCell][colCell] === "") {
          const userInput = cell !== null && cell !== "" ? Number(cell) : null
          const solutionValue = solution.value[rowCell][colCell]
          console.log(
            `Comapring user input ${userInput} with solution ${solutionValue}`
          )
          return userInput === solutionValue
        }
        return true
      })
    )
    console.log("isGameComplete:", complete)
    return complete
  })

  watch(
    isGameComplete,
    (newValue) => {
      if (newValue) {
        showPanel.value = true
        console.log("hej")
      }
    },
    { deep: true }
  )

  function closePanel() {
    showPanel.value = false
  }
</script>

<template>
  <CongratMessage
    :message="'You have succesfully completed the sudoku!'"
    :show="showPanel"
    @close="closePanel"
  />
  <div @click="removeHighlight">
    <!--Clicking outside to remove the highlight -->
    <h3>Difficulty: {{ difficulty }}</h3>
    <TimerClock />
    <table border="1px" @click.stop>
      <tbody>
        <tr v-for="(row, rowCell) in board" :key="rowCell">
          <td
            v-for="(cell, colCell) in row"
            :key="colCell"
            align="center"
            @click="onClick(rowCell, colCell)"
            :class="{
              highlight:
                rowCell === activeCell.row || colCell === activeCell.col,
              'highlight-number': cell === highlightedNumber,
              wrong:
                userBoard[rowCell][colCell] !== null &&
                userBoard[rowCell][colCell] !== '' &&
                userBoard[rowCell][colCell] !== solution[rowCell][colCell],
            }"
          >
            <!-- Check if the cell is an input field and making it editable even after input -->
            <!-- <input
              v-if="board[rowCell][colCell] === ''"
              type="button"
              v-model="userBoard[rowCell][colCell]"
              @click="onClick(rowCell, colCell)"
              @input="checkSolution(rowCell, colCell, $event.target.value)"
            /> -->

            <button
              class="cell-button"
              v-if="board[rowCell][colCell] === ''"
              @click.stop="onClick(rowCell, colCell)"
              :class="{
                active:
                  activeCell.row === rowCell && activeCell.col === colCell,
              }"
            >
              {{ userBoard[rowCell][colCell] || "" }}
            </button>
            <span v-else>{{ cell }}</span>
            <!-- <span v-else>{{ cell }}</span> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <Buttons
    @write-number="printNumber"
    @highlight-number="highlightCells"
    :numberCount="numberCount"
  />
  <p>Game complete: {{ isGameComplete }}</p>
</template>

<style scoped>
  h3 {
    text-align: center;
  }

  table {
    border-collapse: collapse;
    margin: 5px auto;
    max-width: 100%;
    width: fit-content;
  }

  td {
    width: 40px;
    height: 40px;
    max-width: 10vw;
    max-height: 10vw;
    text-align: center;
    font-size: 24px;
  }
  .cell-button {
    width: 50px;
    height: 50px;
    background-color: #fafafa;
    border: none;
    font-size: 23px;
    font-weight: 100;
    color: #b407df;
  }

  td:nth-child(3n) {
    border-right: 2px solid #000000;
  }

  tr:nth-child(3n) td {
    border-bottom: 2px solid #000000;
  }

  .highlight {
    background-color: #f0f0ee;
  }

  .highlight .cell-button {
    background-color: #f0f0ee;
  }

  .cell-button:focus {
    background-color: #f6f6dd;
  }

  .highlight-number {
    background-color: #f6f6d0;
  }

  .wrong {
    background-color: #e72020;
    animation: shake 0.3s ease-in-out;
    color: #ffffff;
  }

  button {
    color: #ffffff;
    padding: 12px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:active {
    transform: scale(0.95);
  }

  /* This is what makes the square shake when wrong */

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  /* media query for mobile screen and other small screens */
  @media (max-width: 685px) {
    table {
      width: 25%;
      margin: 0 auto;
    }

    td {
      width: 10vw;
      height: 10vw;
      font-size: 4vw;
    }

    input {
      width: 10vw;
      height: 10vw;
      font-size: 4vw;
    }

    button {
      width: 100%;
      font-size: 4vw;
      padding: 10px;
    }

    h3 {
      font-size: 5vw;
      margin-top: 15px;
      margin-bottom: 4px;
    }
  }
</style>
