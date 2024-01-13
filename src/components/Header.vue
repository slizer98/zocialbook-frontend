<script setup>
  import { RouterLink } from 'vue-router';

</script>

<template>
  <header class="h-14 px-10 bg-verde-pastel flex justify-between items-center">
    <h1 class="text-beige-claro text-2xl font-extrabold md:w-1/3">ZocialBook</h1>
    <div class="w-full md:w-1/3 flex ">
      <label for="search" class="bg-beige-claro rounded-l-lg py-1 pl-1 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" style="fill: #9DBC98;transform: ;msFilter:;"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg></label>
      <input type="text" id="search" class="rounded-r-lg outline-none bg-beige-claro w-3/4 text-sm p-1 text-verde-oscuro" placeholder="Nombre del libro o persona...">
    </div>
    <nav class="w-full md:w-1/4 flex justify-between">
      <router-link to="#" class="relative text-beige-claro">
        <span class="group relative inline-block">
          <span class="absolute inset-x-0 bottom-0 h-0.5 bg-beige-claro w-0 transition-all group-hover:w-full"></span>
          Inicio
        </span>
      </router-link>
      <router-link to="#" class="relative text-beige-claro">
        <span class="group relative inline-block">
          <span class="absolute inset-x-0 bottom-0 h-0.5 bg-beige-claro w-0 transition-all group-hover:w-full"></span>
          Libros
        </span>
      </router-link>
      <router-link to="#" class="relative text-beige-claro">
        <span class="group relative inline-block">
          <span class="absolute inset-x-0 bottom-0 h-0.5 bg-beige-claro w-0 transition-all group-hover:w-full"></span>
          Perfil
        </span>
      </router-link>

      <router-link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #F9EFDB ;transform: ;msFilter:;"><path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path></svg></router-link>
    </nav>
  </header>
</template>

