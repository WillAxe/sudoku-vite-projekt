<script setup>
  import {ref} from "vue"
  import SudokuBoard from "./SudokuBoard.vue"
  


</script>

<template>
  <h1>Daily Challange: {{new Date().toDateString()}}</h1>
  <SudokuBoard/>
</template>

<style scoped>
  h1{
    margin-bottom: 10px;
    margin-top:10px;
  }
</style>