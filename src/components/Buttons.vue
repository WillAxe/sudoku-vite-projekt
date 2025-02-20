<script setup>
  import { defineEmits } from 'vue';
  import { defineProps } from 'vue';

  const props = defineProps({
    numberCount: Object
  })

  const emit = defineEmits(["highlight-number", "write-number"])
  
  function highlightNumber(number){
    emit("highlight-number", number)
  }

  function removeHighlight(){
    emit("highlight-number", null)
  }


  function writeOutNumber(number){
    emit("write-number", number)
  }

</script>

<template>
  <div>
    <button v-for="n in 9" :key="n" @mouseover="highlightNumber(n)" @mouseleave="removeHighlight" @click="writeOutNumber(n)" :disabled="props.numberCount[n] >= 9">{{ n }}</button>
  </div>
</template>

<style scoped>

  div{
    display: flex;
    margin:auto;
    justify-content:center;
  }

  button{
    padding:1.35em;
    margin: 0.1px 4px;
    border:outset #c917ba 2px;
    background-color: #f7e4f5;    
  }

  button:disabled{
    background-color: #ffebcd;
  }

  button:hover{
    background-color: #f7e4f5a1;
  }

</style>