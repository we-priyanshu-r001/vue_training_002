<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="newTask" placeholder="What to do...">
        <button>Add</button>
    </form>
</template>

<script setup>
import { useTaskStore } from '@/stores/TaskStore';
import { ref } from 'vue';

const newTask = ref('')
const taskStore = useTaskStore()

function handleSubmit(){
    if(newTask.value.length > 0){
        taskStore.addTask({
            title: newTask.value,
            is_fav: false,
            id: Math.floor(Math.random()* 10000)
        })
    }
    newTask.value = ""
}
</script>
