<script setup>
import { ref, computed } from "vue";
const emit = defineEmits(["update:totalPrice"]);
const price = ref(50.32);
const quantity = ref(2);
const tax = ref(0.19);

const formattedPrice = computed(() => {
    const total= (price.value * quantity.value * (1 + tax.value)).toFixed(2) + " €";
    emit("update:totalPrice", total);
    return total;
});
</script>

<template>
  Price:
  <input
    v-model="price"
    class="border"
    type="number"
  >
  <br>
  Quantity:
  <input
    v-model="quantity"
    class="border"
    type="number"
  >
  <br>
  Tax:
  <input
    v-model="tax"
    class="border"
    type="number"
  >
  <p>Total Price: <b>{{ formattedPrice }}</b></p>
</template>