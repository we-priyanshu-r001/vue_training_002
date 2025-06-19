<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { toRefs } from 'vue'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

const route = useRoute()

const isActive = computed(() => route.path === props.to)

const baseClasses = 'inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200'

const linkClasses = computed(() => {
  return isActive.value
    ? `${baseClasses} border-indigo-500 text-gray-900`
    : `${baseClasses} border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300`
})
</script>

<template>
  <router-link :to="to" :class="linkClasses">
    <slot></slot>
  </router-link>
</template>
