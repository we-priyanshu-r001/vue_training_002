<template>
    <div class="task">
        <h2>{{task.title}}</h2>
        <div class="icons">
            <i class="material-icons hover:bg-red-400" @click.prevent="taskStore.deleteTask(task.id)">delete</i>
            <i class="material-icons" @click.prevent="taskStore.toggleFav(task.id)" :class="{active: task.is_fav}">favorite</i>
        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/TaskStore';

const taskStore = useTaskStore()

defineProps({
    task: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>

.task {
  padding: 6px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task h3, .task .icons {
  display: inline-block;
}
.task .icons {
  text-align: right;
}
.task i {
  font-size: 1.4em;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}

.task i.active {
  color: #ff005d;
}

</style>