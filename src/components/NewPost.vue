<script setup>
  import { computed, ref } from 'vue';
  import { useUserStore } from '@/stores/user';
  import ModalNewPost from '@/components/profile/modals/ModalNewPost.vue';

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
  <article class="w-full sm:ml-4 mb-4 bg-gray-50 box-border rounded-md shadow-lg p-4">
    <div class="flex gap-2">

      <!-- foto de perfil en miniatura -->
      <figure class="h-10 w-10">
        <img 
          :src="userProfile?.profilePicture" 
          alt="Foto de perfil del usuario"
          class="w-full h-full rounded-full object-contain"
        >
      </figure>
      <!-- boton para abrir modal para la publicacion  -->
      <button 
        class="text-gray-500 bg-gray-200 hover:bg-gray-300 w-full rounded-2xl text-start pl-2 transition-colors"
        @click="toggleModal"
      >
        ¿Qué estás pensando?
      </button>
    </div>
    <ModalNewPost v-if="isPostOpen" :isPostOpen="isPostOpen" @toggleModal="toggleModal" />
  </article>
</template>


<style lang="scss" scoped>

</style>