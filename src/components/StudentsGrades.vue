<script setup>
import{ref} from 'vue'
const students = ref([
  {name:'Miriam', grade:10},
  {name:'Leo', grade:9},
  {name:'Patrick',grade: 8},
  {name:'Andrei',grade: 7}
  ])
</script>

<template>
 <hr>
  <h3>Test v-for</h3>
  <ul>
    <li v-for="(student, index) of students" :key="index">
      Name {{ student.name }} > Grade {{ student.grade }}
    </li>
  </ul>
</template>