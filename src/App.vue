<script setup>
import YouDidIt from './components/YouDidIt.vue'
import BindLink from './components/BindLink.vue'
import RandomNumber from './components/RandomNumber.vue'
import Counter from './components/Counter.vue'
import { onMounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('App mounted')
})

onUpdated(() => {
  console.log('App updated')
})

import{ref} from 'vue'



const students = ref([
  {name:'Miriam', grade:10},
  {name:'Leo', grade:9},
  {name:'Patrick',grade: 8},
  {name:'Andrei',grade: 7}
  ])
</script>


<template>
  <YouDidIt/>
  <BindLink/>
  <RandomNumber/>
  <Counter/>
  
  
  <hr>
  <h3>Test v-for</h3>
  <ul>
    <li v-for="(student, index) of students" :key="index">
      Name {{ student.name }} > Grade {{ student.grade }}
    </li>
  </ul>

</template>


<style>
@import "bootstrap-icons";
@import "tailwindcss";
</style>
