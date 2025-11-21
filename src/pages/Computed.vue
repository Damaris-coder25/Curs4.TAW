<script setup>
import FullName from '@/computed/FullName.vue';
import PriceCalculator from '@/computed/PriceCalculator.vue';
import SupplierList from '@/computed/SupplierList.vue';
import { ref } from 'vue';
const fullName = ref("");
const addToList = () => {
    
};
</script>

<template>
    <h2 class="text-xl font-bold">Computed Page</h2>
    <FullName @update:fullName="fN => fullName = fN" />
        <p>Your full name from parent component: {{ fullName }}</p>
    <hr>
    <PriceCalculator />
    <hr>
    <button 
    class="border border-gray-400 px-2 my-4" @click="addToList">
    Add to List
    </button>
    <hr>
    <SupplierList />
</template>

<style>
@import "bootstrap-icons";
@import "tailwindcss";
</style>