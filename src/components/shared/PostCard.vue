<script setup>
  import { usePostStore } from '@/stores/post';
  import { useUserStore } from '@/stores/user';

  const postStore = usePostStore()
  const user = useUserStore()
  
</script>
<template>
  <div v-for="post in postStore?.posts" :key="post._id" class="m-4 p-4 w-full bg-white rounded-md shadow-lg">
    <div class="w-full flex mb-2">
      <figure class="h-10 w-10 md:h-12 md:w-12 mr-2">
        <img 
          :src="user?.user.profilePicture" 
          alt="Foto de perfil del usuario"
          class="w-full h-full rounded-full object-contain "
        >
      </figure>
      <div>
        <h3>{{user?.user.username}}</h3>
        <p>{{post.createdAt}}</p>
      </div>
    </div>
    <p>{{post.text}}</p>
    <div v-if="post.imagePostUrl">
      <img :src="post.imagePostUrl" alt="Imagen de la publicación" class="w-full h-96 object-cover">
    </div>

  </div>
</template>


<style lang="scss" scoped>

</style>