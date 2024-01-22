<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  import { RouterView, useRoute } from 'vue-router'
  import HeaderDesktop from './components/HeaderDesktop.vue'
  import HeaderMobile from './components/HeaderMobile.vue'

  const route = useRoute()
  
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
  const shouldRenderHeader = computed(() => {
    console.log(route.path)
    const excludedRoutes = ['auth/registro']
    return excludedRoutes.includes(route.path)
  })
</script>

<template>
  <div v-if="shouldRenderHeader">
    <HeaderDesktop v-if="screenWidth > 425" />
    <HeaderMobile v-else />
  </div>
  <RouterView />
</template>
