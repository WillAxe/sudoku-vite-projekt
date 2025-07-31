<script setup>
  import { defineEmits } from "vue"
  import { defineProps } from "vue"

  const props = defineProps({
    numberCount: Object,
  })

  const emit = defineEmits(["highlight-number", "write-number"])

  function highlightNumber(number) {
    emit("highlight-number", number)
  }

  function removeHighlight() {
    emit("highlight-number", null)
  }

  function writeOutNumber(number) {
    emit("write-number", number)
  }
</script>

<template>
  <div>
    <button
      v-for="n in 9"
      :key="n"
      @mouseover="highlightNumber(n)"
      @mouseleave="removeHighlight"
      @click="writeOutNumber(n)"
      :disabled="props.numberCount[n] >= 9"
    >
      {{ n }}
      <span class="number_counts">{{ 9 - (numberCount[n] || 0) }}</span>
    </button>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    margin: auto;
    justify-content: center;
  }

  button {
    position: relative;
    padding: 1.35em;
    margin: 0.1px 4px;
    border: outset #c917ba 2px;
    background-color: #f7e4f5;
  }

  button:disabled {
    background-color: #ffebcd;
  }

  button:hover {
    background-color: #f7e4f5a1;
  }

  .number_counts {
    position: absolute;
    top: 4px;
    right: 6px;
    font-size: 0.6em;
    margin-left: 4px;
    padding-bottom: 15px;
  }

  @media (max-width: 685px) {
    div {
      margin: 13px;
    }
    button {
      padding: 1.28em;
      width: 9%;
      text-align: center;
    }
  }

  @media (max-width: 370px) {
    div {
      width: 10vw;
    }
    button {
      width: 6vw;
    }
  }
</style>
