<script setup>
import { useRoute } from 'vue-router'
import homeIcon from '../assets/icons/homeIcon.svg'
import searchIcon from '../assets/icons/search.svg'
import plusIcon from '../assets/icons/plusIcon.svg'
import bookIcon from '../assets/icons/bookIcon.svg'
import profileIcon from '../assets/icons/userIcon.svg'
import homeIconTarget from '../assets/icons/homeIconTarget.svg'
import searchIconTarget from '../assets/icons/searchIconTarget.svg'
import plusIconTarget from '../assets/icons/plusIconTarget.svg'
import bookIconTarget from '../assets/icons/bookIconTarget.svg'
import profileIconTarget from '../assets/icons/userIconTarget.svg'
import { useUserStore } from '@/stores/user';

const user = useUserStore()
const route = useRoute()

const icons = [
  { name: 'home', icon: homeIcon, iconTarget: homeIconTarget },
  { name: 'search', icon: searchIcon, iconTarget: searchIconTarget },
  { name: 'add-posts', icon: plusIcon, iconTarget: plusIconTarget },
  { name: 'my-readings', icon: bookIcon, iconTarget: bookIconTarget },
  { name: 'profile', icon: profileIcon, iconTarget: profileIconTarget }
]

const getTo = (icon) => {
  const requiresParams = ['profile'].includes(icon.name);
  
  if (requiresParams) {
    return {
      name: icon.name,
      params: { username: user.user.usernameUrl }
    };
  } else {
    return { name: icon.name };
  }
}

</script>

<template>
  <footer
    v-if="user.userLogged"
    class="fixed z-10 bottom-0 w-full h-14 mt-14 px-5 border-t border-melocoton-pastel flex justify-between items-center bg-tertiary"
  >
    <RouterLink
      v-for="icon in icons"
      :key="icon.name"
      :to="getTo(icon)"
      class="relative h-1/2"
    >
      <img
        :src="route.name === icon.name ? icon.iconTarget : icon.icon"
        :alt="`Icono de ${icon.name}`"
      />
      <div
        v-if="route.name === icon.name"
        class="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
      ></div>
    </RouterLink>
  </footer>
</template>
