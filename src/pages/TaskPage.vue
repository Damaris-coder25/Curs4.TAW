<script setup>
import { useCounter} from '@/stores/counter'
const counter = useCounter()
</script>

<template>
    <h3>Task Page</h3>
    Store counter demonstration!
    <button type="button" class="border" @click="counter.count++"> 
        Count  your blessings {{counter.count}}</button>
</template>