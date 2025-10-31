<script setup>
    import{ref} from 'vue'
    const randomNumber = ref(null)
const updateRandomNumber = () => {
  randomNumber.value = (Math.random())
}
</script>

<template>
    <hr>
  <h3>Display a random number</h3>
  <button @click="updateRandomNumber">Get a random number{{ randomNumber }}</button>
  <div v-if = "randomNumber">
    <div v-if="randomNumber > 0.5"> Number is bigger or equal to 0.5.</div>
    <div v-else>Number is lower or equal to 0.5.</div>
  </div>
  <br>
  <div v-if="randomNumber && randomNumber >=0.5">Number is bigger or equal to 0.5</div>
  <div v-else-if="randomNumber">Number is lower or equal to 0.5</div>
  <br>
  <hr>
</template>