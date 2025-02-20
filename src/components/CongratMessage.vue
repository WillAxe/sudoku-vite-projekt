<script setup>
  import { defineProps } from 'vue'
  import { defineEmits } from 'vue'

  const props = defineProps(["message", "show"])
  const emit = defineEmits(["close"])

</script>

<template>
  <div v-if="show" class="panel-overlay">
    <div class="panel-content">
      <h2>Congratulations</h2>
      <p>{{ message }}</p>
      <button @click='emit("close")'>Ok</button>
    </div>
  </div>
</template>

<style scoped>
  .panel-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel-content {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

button {
  background: #5d329f;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

</style>