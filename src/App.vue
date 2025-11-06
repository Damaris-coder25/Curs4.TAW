<script setup>
import YouDidIt from './components/YouDidIt.vue'
import BindLink from './components/BindLink.vue'
import RandomNumber from './components/RandomNumber.vue'
import Counter from './components/Counter.vue'
import HeaderWithIcon from './components/HeaderWithIcon.vue'
import StudentsGrades from './components/StudentsGrades.vue'
import CurrencyConvertor from './components/CurrencyConvertor.vue'
import { onMounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('App mounted')
})

onUpdated(() => {
  console.log('App updated')
})

import{ref} from 'vue'
const showIcons=ref(false)

</script>


<template>

  <YouDidIt/>
  <BindLink/>
  <RandomNumber/>
  <Counter startCount="7"/>
  <Counter :startCount="3+5"/>
   <Counter startCount="9"/>
   <hr>
  <input type="checkbox" v-model="showIcons">
  <div v-if="showIcons">
    <HeaderWithIcon
      v-for="(header, index) of [1,2,3]" 
      :key="index" />
      <HeaderWithIcon
      :key="index" />
  </div>
  <StudentsGrades/>
  <br>
  <hr>
    <CurrencyConvertor/>

</template>


<style>
@import "bootstrap-icons";
/*@import "tailwindcss";*/
</style>
