<script setup>
import YouDidIt from './components/YouDidIt.vue'
import BindLink from './components/BindLink.vue'
import RandomNumber from './components/RandomNumber.vue'
import Counter from './components/Counter.vue'
import BootstrapIcons from './components/BootstrapIcons.vue'
import StudentsGrades from './components/StudentsGrades.vue'
import { onMounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('App mounted')
})

onUpdated(() => {
  console.log('App updated')
})

import{ref} from 'vue'
const showIcons=ref(false)

const icons = ['brightness-high' , 'bell', 'cloud', 'heart', 'star'];
const icon = ref(icons[0]);

const changeIcon = () => {
icon.value = icons[Math.floor(Math.random() * icons.length)];
};

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
    <Bootstrap-icons 
    v-for="(bootstrapIcon, index) of [1,2,3]" 
    :key="index" 
    :icon="icon"
    @iconClick="changeIcon"/>
  </div>
  <StudentsGrades/>

</template>


<style>
@import "bootstrap-icons";
/*@import "tailwindcss";*/
</style>
