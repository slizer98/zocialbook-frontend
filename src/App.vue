<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterView } from 'vue-router'
import HeaderDesktop from './components/HeaderDesktop.vue'
import HeaderMobile from './components/HeaderMobile.vue'

const screenWidth = ref(window.innerWidth)
const handleResize = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div>
    <HeaderDesktop v-if="screenWidth > 425" />
    <HeaderMobile v-else />
    <RouterView />
  </div>
</template>
