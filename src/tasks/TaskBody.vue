<script setup>
defineProps({
        task: {
            type: Object,
            required: true
        }
})

import TaskCheckBox from './TaskCheckBox.vue';
import TaskActions from './TaskActions.vue';
</script>
<template>
  <div class="grid grid-cols-6 gap-2">
    <TaskCheckBox />
    <div class="col-span-3">
      {{ task.title }}
    </div>
    <TaskActions
      :task-id="task.id"
      :is-favorite="task.favorite"
    />
  </div>
</template>