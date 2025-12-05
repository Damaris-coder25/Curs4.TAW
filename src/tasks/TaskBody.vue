<script setup>
import TaskCheckBox from './TaskCheckBox.vue';
import TaskActions from './TaskActions.vue';
</script>
<template>
       <div class="grid grid-cols-6 gap-2">
       <TaskCheckBox />
        <div class="col-span-3">Ceva orice ca nu stiu ce o scris acolo</div>
        <TaskActions />
        </div>
</template>