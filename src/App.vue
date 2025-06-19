<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import MouseTracker from './components/MouseTracker.vue'

const route = useRoute()
const is_active = ref(true)

</script>

<template>
  <nav-bar />

  <router-view></router-view>

  <mouse-tracker /> 
</template>