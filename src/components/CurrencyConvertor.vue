<script setup>
import InputCurrency from '@/components/InputCurrency.vue';

import{ref} from 'vue'
const currencyEUR = ref(0);
const currencyRON = ref(0);
const coursEURRON = ref(4.99)

const computeEURtoRON = (value) => {
    currencyEUR.value = value;
    currencyRON.value = (value*4.9).toFixed(2);
};

const computeRONtoEUR = (value) => {
    currencyEUR.value = value;
    currencyRON.value = (value/4.9).toFixed(2);
};

const recalculateCurrency = () => {
    computeEURtoRON(currencyRON.value)
    computeRONtoEUR(currencyEUR.value)
}
</script>

<template>
    <h3>Currency Convertor</h3>
    <InputCurrency :value="currencyEUR" @changeValue="computeEURtoRON"/>
    <input type="number" v-model="coursEURRON" @input="recalculateCurrency">
    <InputCurrency :value="currencyRON" @changeValue="computeRONtoEUR"/>
</template>``