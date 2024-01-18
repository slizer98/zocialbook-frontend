<script setup></script>
<template>
  <header>
    <div class="border border-red-500 h-24 w-full relative">
      <figure
        class="h-16 w-16 border border-red-500 bg-black rounded-full absolute -bottom-8 left-2"
      >
        <img src="" alt="" />
      </figure>
    </div>
    <main class="font-sans w-full flex border border-red-500 flex-col space-y-4 px-5 pb-14">
      <section>
        <div class="pl-14 pt-2">
          <h1 class="font-semibold">Erick Villafuerte</h1>
          <p class="text-xs text-gray-500">Desarrollador Frontend</p>
        </div>
        <div class="w-full flex justify-end space-x-2">
          <RouterLink to="#" class="text-xs bg-verde-pastel p-1 rounded-md font-semibold">
            + Favorito
          </RouterLink>
          <RouterLink to="#" class="text-xs bg-gray-300 p-1 rounded-md font-semibold">
            Editar perfil
          </RouterLink>
        </div>
      </section>
      <!-- Sobre mi -->
      <section>
        <h2 class="font-semibold">Sobre mi</h2>
        <p class="text-xs">
          Lorem ipsum dolor sit ame consectetur adipi sicing elit. Quisquam, voluptates.
        </p>
      </section>
      <!-- mi meta como lector -->
      <article class="flex flex-col space-y-2">
        <h2 class="font-semibold">Reto de lectura</h2>
        <div>
          <p class="text-xs">Mi meta como lector es leer 10 libros en 2024</p>
          <div class="w-full h-2 bg-gray-300 rounded-full">
            <div class="w-1/2 h-full bg-verde-pastel rounded-full"></div>
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
        <h2 class="font-semibold">Mis lecturas actuales</h2>
          <!-- contenedor para mostrar nombre del libro, paginas leidas de x numero de paginas e imagen del libro -->
        <div>
          <figure>
            <img src="" alt="">
          </figure>
        </div>
      </article>
      <!-- mis publicaciones -->
      <section>
        <h2 class="font-semibold">Mis publicaciones</h2>
      
      </section>
    </main>
  </header>
</template>
