<template>
    <h1>User Profile</h1>
    <h2>{{ $route.params.id }}</h2>
</template>

<script setup>
import { computed, ref } from 'vue';
import users from '../users.json'
import { useRoute } from 'vue-router';

const route = useRoute()

// const user_name = computed(() => {
//     users.map((user) => {
//         if (user.id === route.params.id){
//             return user.name
//         }
//         return route.params.id
//     })
// })

</script>

