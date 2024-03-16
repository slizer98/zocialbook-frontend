<script setup>
  import { useUserStore } from '@/stores/user';
  import { computed } from 'vue';
  import { QuillEditor } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css';

  const user = useUserStore()

  const userProfile =  computed( () => user?.user || {})
  
</script>

<template>
  <article class="w-full ml-4 mb-4 bg-gray-50 box-border rounded-md shadow-lg p-4">
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
      <button class="text-gray-500 bg-gray-200 hover:bg-gray-300 w-full rounded-2xl text-start pl-2 transition-colors ">
        ¿Qué estás pensando?
      </button>

    </div>
    <div>
      <QuillEditor theme="snow" toolbar="essential" />
    </div>
  </article>
</template>


<style lang="scss" scoped>

</style>