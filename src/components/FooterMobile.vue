<script setup>
  import { useRoute } from 'vue-router';
  import homeIcon from '../assets/icons/homeIcon.svg';
  import searchIcon from '../assets/icons/search.svg';
  import plusIcon from '../assets/icons/plusIcon.svg';
  import bookIcon from '../assets/icons/bookIcon.svg';
  import profileIcon from '../assets/icons/profilIcon.svg';

  const route = useRoute();

  const icons = [
    { name: 'home', icon: homeIcon },
    { name: 'search', icon: searchIcon },
    { name: 'add-posts', icon: plusIcon },
    { name: 'my-readings', icon: bookIcon },
    { name: 'profile', icon: profileIcon },
  ];
</script>

<template>
  <footer class="fixed bottom-0 w-full h-14 px-5 border-t border-melocoton-pastel flex justify-between items-center bg-beige-claro">
    <RouterLink
      v-for="icon in icons"
      :key="icon.name"
      :to="{ name: icon.name }"
      :class="{
        'bg-melocoton-pastel  rounded-full w-8 h-8 flex items-center justify-center': route.name == icon.name,
      }"
    >
      <img  :src="icon.icon" :alt="`Icono de ${icon.name}`" :class="{'change-color': route.name == icon.name}" />
    
    </RouterLink>
  </footer>
</template>

<style scoped>
  .change-color {
    filter: invert(28%) sepia(100%) saturate(4060%) hue-rotate(100deg) brightness(52%) contrast(60%);
  }
</style>