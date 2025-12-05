<script setup>
import TaskHeader from './TaskHeader.vue';
import TaskBody from './TaskBody.vue';
import TaskFooter from './TaskFooter.vue';
</script>
<template>
    <TaskHeader />
    <TaskBody v-for="value in [1,2,3,4,5]"/>
    <TaskFooter />
</template>