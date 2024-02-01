<script setup>

  import { useUserStore } from '@/stores/user';
  import { computed } from 'vue';

  const user = useUserStore();
  const userProfile = computed(() => user?.user || {});
  
</script>
<template>
  <header class="md:px-20">
    <div class="border border-red-500 h-40 md:h-80 w-full relative">
      <figure
        class="h-24 w-24 border border-red-500 bg-black rounded-full absolute -bottom-10 left-4"
      >
        <img src="" alt="" />
      </figure>
    </div>
  </header>
    <main class="font-sans w-full md:px-20 flex border border-red-500 flex-col space-y-4 px-5 pb-14">
      <section class="space-y-4 ">
        <div class="w-full flex justify-end space-x-2 pt-2">
          <RouterLink to="#" class="text-xs bg-primary p-1 rounded-md font-semibold">
            + Favorito
          </RouterLink>
          <RouterLink :to="{name: 'edit-profile'}" class="text-xs bg-gray-300 p-1 rounded-md font-semibold">
            Editar perfil
          </RouterLink>
        </div>
        <div class=" ">
          <h1 class="font-semibold text-gray-900 text-xl sm:text-2xl"></h1>
          <p class="text-xs text-gray-500"></p>
        </div>
      </section>
      <!-- Sobre mi -->
      <section>
        <div>
          <p class="text-gray-500 text-xs">Lugar de recidencia</p>
          <p class="text-gray-500 text-xs">Fecha de nacimiento</p>
          <p class="text-gray-500 text-xs">Se unió en {{userProfile.createAt }}</p>
        </div>
        <div class="flex gap-2 pt-2">
          <p class="text-gray-500 text-xs">
            <span class="text-gray-900 font-bold">
              {{userProfile.following}}
            </span>  Siguiendo
          </p>
          <p class="text-gray-500 text-xs">
            <span class="text-gray-900 font-bold">
              {{userProfile.followers}}
            </span> Seguidores
          </p>
        </div>
      </section>
      <section>
        <h2 class="font-semibold text-gray-900">Sobre mi</h2>
        <p class="text-xs text-gray-800">
          Lorem ipsum dolor sit ame consectetur adipi sicing elit. Quisquam, voluptates.
        </p>
      </section>
      <!-- mi meta como lector -->
      <article class="flex flex-col space-y-2">
        <h2 class="font-semibold text-gray-100">Reto de lectura</h2>
        <div>
          <p class="text-xs text-gray-300">Mi meta como lector es leer 10 libros en 2024</p>
          <div class="w-full h-2 bg-gray-300 rounded-full">
            <div class="w-1/2 h-full bg-primary rounded-full"></div>
          </div>
        </div>
        <div class="flex justify-end">
          <RouterLink to="#" class="text-xs bg-gray-300 p-1 rounded-md font-semibold">
            Editar meta
          </RouterLink>
        </div>
      </article>
      <!-- mis lecturas actuales -->
      <article>
        <h2 class="font-semibold text-gray-100">Mis lecturas actuales</h2>
          <!-- contenedor para mostrar nombre del libro, paginas leidas de x numero de paginas e imagen del libro -->
        <div>
          <figure>
            <img src="" alt="">
          </figure>
        </div>
      </article>
      <!-- mis publicaciones -->
      <section>
        <h2 class="font-semibold text-gray-100">Mis publicaciones</h2>
      
      </section>
    </main>
  
</template>
