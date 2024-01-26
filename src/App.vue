<script setup>
  import { useHeaderLogic } from './composables/useHeaderLogic' 
  import { RouterView } from 'vue-router'
  import HeaderDesktop from './components/HeaderDesktop.vue'
  import HeaderMobile from './components/HeaderMobile.vue'

  const { screenWidth, shouldRenderHeader } = useHeaderLogic()
  
  
</script>

<template>
  <div v-if="shouldRenderHeader">
    <HeaderDesktop v-if="screenWidth > 425" />
      <HeaderMobile v-else />
  </div>
 
  <RouterView />
</template>
