<script setup>
  import { computed, ref } from 'vue';
  import { useUserStore } from '@/stores/user';
  import { usePostStore } from '@/stores/post'
  import ModalNewPost from '@/components/profile/modals/ModalNewPost.vue';

  const post = usePostStore()
  const user = useUserStore()
  const isPostOpen = ref(false)

  const userProfile = computed(() => user?.user || {})

  const toggleModal = () => {
    isPostOpen.value = !isPostOpen.value
    if(isPostOpen.value){
      user.disableScroll()
    }
    else{
      user.enableScroll()
    }
  }
</script>

<template>
  <article class="w-[99%] sm:ml-4 mb-4 bg-gray-50 box-border rounded-md shadow-lg p-4">
    <div class="flex gap-2 ">

      <!-- foto de perfil en miniatura -->
      <figure class="h-10 w-10 md:h-12 md:w-12">
        <img 
          :src="userProfile?.profilePicture" 
          alt="Foto de perfil del usuario"
          class="w-full h-full rounded-full object-contain"
        >
      </figure>
      <!-- boton para abrir modal para la publicacion  -->
      <button 
        class="text-gray-500  bg-gray-200 hover:bg-gray-300 w-full rounded-2xl text-base md:text-lg text-start pl-2 max-h-12 overflow-y-hidden  transition-colors"
        @click="toggleModal"
      >
        {{ post.textPost ? post.textPost : '¿Qué estás pensando?' }}
      </button>
    </div>
    <ModalNewPost v-if="isPostOpen" :isPostOpen="isPostOpen" @toggleModal="toggleModal" />
  </article>
</template>


<style lang="scss" scoped>

</style>