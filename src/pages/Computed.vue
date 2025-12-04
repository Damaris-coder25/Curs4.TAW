<script setup>
import FullName from '@/computed/FullName.vue';
import PriceCalculator from '@/computed/PriceCalculator.vue';
import SupplierList from '@/computed/SupplierList.vue';
import { ref } from 'vue';
const fullName = ref("");
const totalPrice = ref("");
</script>

<template>
    <h2 class="text-xl font-bold">Computed Page</h2>
    <FullName @update:fullName="fN => fullName = fN" />
        <p>Your full name from parent component: {{ fullName }}</p>
    <hr class="my-4">
    <PriceCalculator @update:totalPrice="tp => totalPrice = tp" />
    <hr class="my-4">
    
    <SupplierList :fullName="fullName" :totalPrice="totalPrice"/>
</template>

<style>
@import "bootstrap-icons";
@import "tailwindcss";
</style>