<script setup>
  import { usePostStore } from '@/stores/post';
  import { useUserStore } from '@/stores/user';
  import { transformDate } from '@/utils';
  import regularHeart from '@/assets/icons/regularHeart.svg'
  import solidHeart from '@/assets/icons/solidHeart.svg'
  import { ref } from 'vue';

  const postStore = usePostStore()
  const user = useUserStore()

  const likeInfo = ref({})

  const updateIsLiked = async (postId) => {
    likeInfo.value[postId] = await postStore.findIfUserLiked(postId); 
  };

  // Función para obtener el recuento de likes de una publicación específica
const getLikesCount = (postId) => {
  // Verifica si la información de likes para la publicación está disponible en likeInfo
  if (likeInfo.value[postId]) {
    return likeInfo.value[postId].likesCount; // Devuelve el recuento de likes
  } else {
    return 0; // Devuelve 0 si la información de likes no está disponible
  }
};
  
</script>
<template>
  <div v-for="post in postStore?.posts" :key="post._id" class="my-4 p-2 md:py-6 md:px-12 w-[99%] bg-white rounded-md shadow-lg">
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
      <figure class="w-full  mx-auto  rounded-t-xl shadow-lg border border-slate-400">
        <img :src="post.imagePostUrl" alt="Imagen de la publicación" class="w-[90%] h-auto  mx-auto object-cover">
      </figure>
    </div>
    <!-- likes y comentarios -->
    <section>
      <div>
        <button 
          class="my-4 cursor-pointer hover:opacity-60"
          @click="updateIsLiked(post._id)"
        >
          <img 
            v-if="likeInfo[post._id]?.isLiked"
            :src="solidHeart" 
            alt="icono de libro con corazon en el centro"
            class="w-8 h-8"
          >
          <img 
            v-else
            :src="regularHeart" 
            alt="icono de libro con corazon en el centro"
            class="w-8 h-8"
          >
        </button>
        <span class="font-semibold">{{getLikesCount(post._id)}}</span>
      </div>

    </section>
  </div>
</template>


<style lang="scss" scoped>

</style>