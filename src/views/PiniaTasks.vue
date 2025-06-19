<template>
  <main>

    <!-- heading -->
    <header>
      <img src="../assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <div class="loading" v-if="taskStore.is_loading">
      Loading Tasks...
    </div>

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

    <button @click.prevent="taskStore.$reset">Reset</button>

  </main>
</template>

<script setup>
import { useTaskStore } from '@/stores/TaskStore';
import Task from '@/components/Task.vue';
import { ref } from 'vue';
import TaskForm from '@/components/TaskForm.vue';

const taskStore = useTaskStore()
taskStore.getTask()
const filter = ref("all")

</script>

<style scoped>
/* 
body {
  background: #f6f5f5fe;
  color: #444;
  margin: 0;
}
body * {
  font-family: "Poppins";
} */

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

/* new task form */
.new-task-form {
  background: #e7e7e7;
  padding: 20px 0;
}
.new-task-form form {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}
.new-task-form form button {
  background: #ffd859;
  border: 0;
  padding: 10px;
  font-family: "Poppins";
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
}

.new-task-form form input {
  border: 0;
  padding: 10px;
  border-radius: 6px;
  color: #555;
  font-size: 1em;
} 

/* loading state */
.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background: #ffe9a0;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}
</style>