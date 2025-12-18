<script setup>
import { useCounter} from '@/stores/counter'
const counter = useCounter()

counter.$subscribe((mutation, state) => {
    console.log('Mutation occurred:', mutation)
    console.log('New State:', state)
})
</script>

<template>
  <h3>Store Page</h3>
  Store counter demonstration!
  <button
    type="button"
    class="border"
    @click="counter.countUp()"
  > 
    Count  your blessings {{ counter.count }}
  </button>
  <button
    type="button"
    class="border"
    @click="counter.countDown()"
  > 
    Decrease  your blessings {{ counter.count }}
  </button>
  <br>
  Double Count from Getter: {{ counter.doubleCount }}
  <br>
  <br>
  <h4 class="tex-md">
    Reset store
  </h4>
  <button
    class="border m-2"
    @click="counter.$reset()"
  >
    Reset
  </button>
  <br>
  <br>
  <h4 class="tex-md">
    Patch state
  </h4>
  <button
    class="border m-2"
    @click="counter.$patch({
      count:8,
      level:5
    })"
  >
    Set multiple states at one time {{ counter.level }}
  </button>
</template>