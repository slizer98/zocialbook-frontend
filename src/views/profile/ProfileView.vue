<script setup>
  import HeaderProfile from '@/components/profile/HeaderProfile.vue';
  import UserDetails from '@/components/profile/UserDetails.vue';
  import ReadingChallenge from '@/components/profile/ReadingChalenge.vue';
  import NewPost from '@/components/NewPost.vue';
  import PostsProfile from '@/components/profile/PostsProfile.vue';
</script>
<template>
    <HeaderProfile />
    <main class="font-sans  md:mx-auto max-w-[1390px]   grid grid-cols-1 md:grid-cols-8 space-y-4  pb-14">
      <div class="col-span-2 px-2 md:px-0 ">
        <!-- Sobre mi -->
        <UserDetails />
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
      <div class="col-span-4 md:mx-8 px-2 md:px-0">
        <NewPost />
        <PostsProfile />
      </div>   
      <div class="col-span-2 px-2 md:px-0">
         <!-- mi meta como lector -->
         <ReadingChallenge />
      </div>
    </main>
  
</template>
