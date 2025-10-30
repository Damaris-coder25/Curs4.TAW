<script setup>
import{ref} from 'vue'
const counter = ref(0)

const incrementCounter = () =>{
  counter.value++
}
</script>

<template>
<hr>
  <h3>Counter</h3>
  <button @click="counter++">Increment v1</button>
  <br>
  <button @click="incrementCounter">Increment v2</button>
  <div>{{ counter }}</div>
  <hr>
  <h3>Bootstrap Icons <i class="bi bi-airplane-engines"></i></h3>
  <br>
</template>