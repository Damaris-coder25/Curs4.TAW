<script setup>
defineProps (['icon'])
defineEmits(['iconClick'])
</script>

<template>
  <i :class="`bi bi-${icon}`" 
  @click="$emit('iconClick')"></i>
</template>