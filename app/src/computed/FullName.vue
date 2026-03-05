<script setup>
import {ref} from 'vue'
import { computed } from 'vue'
const emit = defineEmits(['update:fullName'])

const firstName=ref("")
const lastName=ref("")

import { watch } from 'vue'
watch(firstName, (newVal, oldVal) => {
    console.log("First name changed from" , oldVal, "to", newVal)
})

watch([firstName, lastName], ([newF, newL], [oldF, oldL]) => {
console.log ("Full name changed from", oldF + " " + oldL, "to", newF + " " + newL)
})

const fullName= computed(() => {
    const fN = firstName.value + " " + lastName.value
    emit("update:fullName", fN)
    return fN
})

const greeting = computed(() => "Hello," + fullName.value + "!")

const showFullName = ref(false);
</script>

<template>
  First Name:
  <input
    v-model="firstName"
    class="border"
    type="text"
  >
  <br>
  Last Name:
  <input
    v-model="lastName"
    class="border"
    type="text"
  >
  <br>
  <br>
  <button 
    class="border border-gray-400 px-2 ml-2" 
    type="button" 
    @click="showFullName= !showFullName"
  >
    <span v-if="showFullName">Hide</span>
    <span v-else>Show</span> full name
  </button>

  <div v-if="showFullName">
    <p>Your Full Name: {{ fullName }}</p>
    <p>{{ greeting }}</p>
  </div>
</template>
