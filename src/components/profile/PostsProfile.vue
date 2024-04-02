<script setup>
  import { usePostStore } from '@/stores/post';

  const post = usePostStore()
  console.log(post.existPost)
</script>

<template>
  <section class=" w-full sm:ml-4 bg-gray-50 box-border rounded-md shadow-lg p-4">
    <h2 class="font-semibold text-xl md:text-2xl text-gray-800">Mis publicaciones</h2>      <!-- nueva publicacion -->
    <p v-if="!post?.existPost" class="text-center mt-8 font-semibold">No tienes publicaciones aún</p>
  </section>
</template>


<style lang="scss" scoped>

</style>