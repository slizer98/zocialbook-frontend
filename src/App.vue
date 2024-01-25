<script setup>
  import { ref, onMounted, onUnmounted, watch } from 'vue'
  import { RouterView, useRoute } from 'vue-router'
  import HeaderDesktop from './components/HeaderDesktop.vue'
  import HeaderMobile from './components/HeaderMobile.vue'

  const route = useRoute()
  
  const screenWidth = ref(window.innerWidth)
  const shouldRenderHeader = ref(false)
  const excludedRoutes = ['register', 'login', 'confirm-account']

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
  watch(() => route.name, () => {
    shouldRenderHeader.value = !excludedRoutes.includes(route.name)
  })
</script>

<template>
  <div v-if="shouldRenderHeader">
    <HeaderDesktop v-if="screenWidth > 425" />
      <HeaderMobile v-else />
  </div>
 
  <RouterView />
</template>
