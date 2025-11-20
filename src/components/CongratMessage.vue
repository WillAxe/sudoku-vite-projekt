<script setup lang="ts">
  import { defineProps } from "vue"
  import { defineEmits } from "vue"

  const props = defineProps({
    show: Boolean,
    message: String,
    finalTime: String
  })
  const emit = defineEmits(["close"])
  function closeCongrat() {
    emit("close")
  }
</script>

<template>
  <div v-if="show" class="panel-overlay">
    <div class="panel-content" @click.stop>
      <h2>Congratulations</h2>
      <p>{{ message }}</p>
      <p v-if="finalTime">
        Time: <strong>{{ finalTime }}</strong>
      </p>
      <button @click="closeCongrat">Ok</button>
    </div>
  </div>
</template>

<style scoped>
  .panel-overlay {
    position: fixed;
    inset: 0;
    margin: auto;
    background: #f6f2f2e9;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .panel-content {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    background-color: #fffafa;
    color: #0c0c0c;
  }

  button {
    background: #5d329f;
    color: #ffffff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .panel-content {
      padding: 16px 6px;
      min-width: 0;
      max-width: 98vw;
      font-size: 0.95rem;
    }
    button {
      width: 100%;
      font-size: 1rem;
    }
  }
</style>
