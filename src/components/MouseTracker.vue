<template>
    <h2>Mouse Position x: {{ x }} y: {{ y }}</h2>
</template>

<script setup>
import useMouse from '@/composables/useMouse';

const {x, y} = useMouse()

</script>