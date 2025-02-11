<script setup>
  import { defineEmits } from 'vue';

  const emit = defineEmits(["highlight-number"])
  
  function highlightNumber(number){
    emit("highlight-number", number)
  }

  function removeHighlight(){
    emit("highlight-number", null)
  }


</script>

<template>
  <button v-for="n in 9" :key="n" @mouseover="highlightNumber(n)" @mouseleave="removeHighlight">{{ n }}</button>
</template>

<style scoped>
  button{
    padding:1.3em;
  }
</style>