<script setup>
  import HeaderProfile from '@/components/profile/HeaderProfile.vue';
  import UserDetails from '@/components/profile/UserDetails.vue';
  import ReadingChallenge from '@/components/profile/ReadingChalenge.vue';
  import NewPost from '@/components/NewPost.vue';
  import PostsProfile from '@/components/profile/PostsProfile.vue';
</script>
<template>
    <HeaderProfile />
    <main class="font-sans sm:px-6 md:mx-auto md:px-12 max-w-[1390px]  flex-wrap w-full flex box-border flex-col sm:flex-row space-y-4  pb-14">
      <div class="w-full mx-auto xs:mx-0 sm:w-[33%]">
        <!-- Sobre mi -->
        <UserDetails />
        <!-- mi meta como lector -->
        <ReadingChallenge />
        <article>
          <h2 class="font-semibold text-gray-800">Mis lecturas actuales</h2>
            <!-- contenedor para mostrar nombre del libro, paginas leidas de x numero de paginas e imagen del libro -->
          <div>
            <figure>
              <img src="" alt="">
            </figure>
          </div>
        </article>
      </div>  
      <div class="flex-1  ">
        <NewPost />
        <PostsProfile />
      </div>   
    </main>
  
</template>
