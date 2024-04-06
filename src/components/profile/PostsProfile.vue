<script setup>
  import PostCard from '@/components/shared/PostCard.vue';
  import { usePostStore } from '@/stores/post';
  const post = usePostStore()
  
  
</script>

<template>
  <section class=" my-4 p-2 md:p-6 w-[99%] bg-white rounded-md shadow-lg">
    <h2 class="font-semibold text-xl md:text-2xl text-gray-800">Mis publicaciones</h2>      <!-- nueva publicacion -->
    <p v-if="!post?.existPost" class="text-center mt-8 font-semibold">No tienes publicaciones aún</p>
  </section>
  <PostCard />
  

</template>


<style lang="scss" scoped>

</style>