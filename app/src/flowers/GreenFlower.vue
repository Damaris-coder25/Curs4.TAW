<script setup>
defineProps({
    height: Number,
    winner: Boolean
})
</script>

<template>
  <div
    class="flower self-end "
    :class="winner ? 'winner' : ''"
    :style="`height:${height}px; width: 50px;`"
  />
</template>

<style>
.flower {
    background-color: green;
}

.flower.winner {
    border: 5px solid gold;
}
</style>