<script setup>
  import { usePostStore } from '@/stores/post';
  import { useUserStore } from '@/stores/user';
  import { transformDate } from '@/utils';

  const postStore = usePostStore()
  const user = useUserStore()
  
</script>
<template>
  <div v-for="post in postStore?.posts" :key="post._id" class="my-4 p-2 md:p-6 w-[99%] bg-white rounded-md shadow-lg">
    <div class="w-full flex mb-2">
      <figure class="h-10 w-10 md:h-12 md:w-12 mr-2">
        <img 
          :src="user?.user.profilePicture" 
          alt="Foto de perfil del usuario"
          class="w-full h-full rounded-full object-contain "
        >
      </figure>
      <div>
        <h3 class="font-semibold text-lg">{{user?.user.username}}</h3>
        <p class="text-gray-500 font-medium text-sm">{{transformDate(post.createdAt)}}</p>
      </div>
    </div>
    <p v-html="post.text" class="my-2"></p>
    <div v-if="post.imagePostUrl">
      <figure class="w-full px-10 rounded-t-xl shadow-lg border border-slate-400">
        <img :src="post.imagePostUrl" alt="Imagen de la publicación" class="w-96 h-96  mx-auto object-cover">
      </figure>
    </div>

  </div>
</template>


<style lang="scss" scoped>

</style>