<script setup>
  import{ref} from "vue"
  import { onMounted } from "vue"

  const seconds = ref(0)

  function setTimer(){
    setInterval(()=>{
      seconds.value++
    }, 1000)
  
  }
  onMounted(setTimer)

  function formatTime(){
    const minutes = Math.floor(seconds.value / 60)
    const sec = seconds.value % 60
    return `${String(minutes).padStart(2,"0")}:${String(sec).padStart(2, "0")}`
  }

</script>

<template>
  <p>{{ formatTime() }}</p>
</template>

<style scoped>
  p{
    text-align: center;
  }
</style>