<script setup>
  import HeaderProfile from '@/components/profile/HeaderProfile.vue';
  import UserDetails from '@/components/profile/UserDetails.vue';
  import ReadingChallenge from '@/components/profile/ReadingChalenge.vue';

</script>
<template>
    <HeaderProfile />
    <main class="font-sans sm:px-6 md:mx-auto md:px-12 lg:px-24 flex-wrap w-full flex  flex-col sm:flex-row space-y-4  pb-14">
      <div class="w-full mx-auto xs:mx-0 sm:w-1/3">
        <!-- Sobre mi -->
        <UserDetails />
        <!-- mi meta como lector -->
        <ReadingChallenge />
      </div>
    
      <!-- mis lecturas actuales -->
      <article>
        <h2 class="font-semibold text-gray-800">Mis lecturas actuales</h2>
          <!-- contenedor para mostrar nombre del libro, paginas leidas de x numero de paginas e imagen del libro -->
        <div>
          <figure>
            <img src="" alt="">
          </figure>
        </div>
      </article>
      <!-- mis publicaciones -->
      <section>
        <h2 class="font-semibold text-gray-800">Mis publicaciones</h2>
      </section>
    </main>
  
</template>
