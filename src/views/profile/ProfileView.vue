<script setup>
  import Header from '@/components/profile/Header.vue';
  import UserDetails from '@/components/profile/UserDetails.vue';
  import ReadingChallenge from '@/components/profile/ReadingChalenge.vue';

</script>
<template>
    <Header />
    <main class="font-sans max-w-[1130px] mx-auto flex-wrap overflow-hidden w-full flex  flex-col xs:flex-row space-y-4  pb-14">
      <div class="mx-auto sm:mx-0">
        <!-- Sobre mi -->
        <UserDetails />
        <!-- mi meta como lector -->
        <ReadingChallenge />
      </div>
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

<style scoped>


</style>