<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import messageIcon from '../assets/icons/message.svg'
import searchIcon from '../assets/icons/search.svg'

const showModalMessages = ref(false)
const showModalSearch = ref(false)
</script>

<template>
  <header class="h-14 px-10 bg-primary flex justify-between items-center">
    <RouterLink to="/">
      <h1 class="text-secondary text-2xl font-extrabold md:w-1/3">ZocialBook</h1>
    </RouterLink>
    <nav class="w-1/2 sm:w-1/3 lg:w-1/4 text-sm sm:text-base flex justify-between">
      <nav class="icon-container">
        <span class="icon" @mouseover="showModalSearch = true" @mouseout="showModalSearch = false">
          <img :src="searchIcon" alt="icono de una lupa" class="w-5 sm:w-6" />
        </span>
        <div v-if="showModalSearch" class="modal modalSearch">
          <p>Buscar</p>
        </div>
      </nav>
      <router-link :to="{ name: 'home' }" class="relative text-secondary">
        <span class="group relative inline-block">
          <span
            class="absolute inset-x-0 bottom-0 h-0.5 bg-secondary w-0 transition-all group-hover:w-full"
          ></span>
          Inicio
        </span>
      </router-link>
      <router-link :to="{ name: 'my-readings' }" class="relative text-secondary">
        <span class="group relative inline-block">
          <span
            class="absolute inset-x-0 bottom-0 h-0.5 bg-secondary w-0 transition-all group-hover:w-full"
          ></span>
          Libros
        </span>
      </router-link>
      <router-link :to="{ name: 'profile' }" class="relative text-secondary">
        <span class="group relative inline-block">
          <span
            class="absolute inset-x-0 bottom-0 h-0.5 bg-secondary w-0 transition-all group-hover:w-full"
          ></span>
          Perfil
        </span>
      </router-link>

      <div class="icon-container">
        <span
          class="icon"
          @mouseover="showModalMessages = true"
          @mouseout="showModalMessages = false"
        >
          <img :src="messageIcon" alt="icono de mensaje" class="w-5 sm:w-6" />
        </span>
        <div v-if="showModalMessages" class="modal modalMessages">
          <p>Mensajes</p>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.icon-container {
  position: relative;
}

.icon {
  cursor: pointer;
}

.modal {
  display: none;
  background-color: #f9efdb;
  color: #70d19f;
  font-size: small;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.modalMessages {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
}
.modalSearch {
  position: absolute;
  bottom: -40px;
  left: 40%;
  transform: translateX(-50%);
}

.icon-container:hover .modal {
  display: block;
}
</style>
