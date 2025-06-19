<template>
    User Home Page

    <h3 v-for="user in users" :key="user.id" @click="handleClick(user.id)">{{user.name}}</h3>

    <router-view></router-view>
</template>

<script setup>
import router from '@/router';
import users from '../users.json'

function handleClick(id){
    router.push({path: `/user/${id}`})
}
</script>