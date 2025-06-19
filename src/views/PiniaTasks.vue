<template>
  <main>

    <!-- heading -->
    <header>
      <img src="../assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- Tasks List -->
    <div v-if="filter === 'all'" class="task-list">
      <p>You have {{ taskStore.allCount }} tasks left</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
          <task :task="task"></task>
      </div>
    </div>

    <div v-if="filter === 'favs'" class="task-list">
      <p>You have {{ taskStore.favCount }} tasks left</p>
      <div v-for="task in taskStore.favs" :key="task.id">
          <task :task="task"></task>
      </div>
    </div>

  </main>
</template>

<script setup>
import { useTaskStore } from '@/stores/TaskStore';
import Task from '@/components/Task.vue';
import { ref } from 'vue';

const taskStore = useTaskStore()
const filter = ref("all")

</script>

<style scoped>

body {
  background: #f2f2f2;
  color: #444;
  margin: 0;
}
body * {
  font-family: "Poppins";
}

/* header */
header {
  text-align: center;
  background: #e7e7e7;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header img {
  max-width: 60px;
  transform: rotate(-10deg);
}
header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 25px;
  margin-left: 15px;
  color: #777;
  transform: rotate(2deg);
}

/* task list */
.task-list {
  max-width: 640px;
  margin: 20px auto;
}

/* filter nav */
.filter {
  width: 640px;
  margin: 10px auto;
  text-align: right;
}
.filter button {
  display: inline-block;
  margin-left: 10px;
  background: #fff;
  border: 2px solid #555;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.8em;
  font-size: 1em;
}
</style>