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

  <div>
    <router-view></router-view>
  </div>

  <mouse-tracker></mouse-tracker>
</template>