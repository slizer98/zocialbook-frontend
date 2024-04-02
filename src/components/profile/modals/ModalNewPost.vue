<script setup>
  import { useUserStore } from '@/stores/user';
  import { usePostStore } from '@/stores/post';
  import TexEditor from '@/components/TextEditor.vue'

  const user = useUserStore()
  const post = usePostStore()

  defineProps(['isPostOpen'])
  defineEmits(['toggleModal'])
  
  const getText = () => {
    console.log(post?.textPost)
    console.log(post?.imagePost)
  }
  
</script>

<template>
  <section 
    v-if="isPostOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
    @click="$emit('toggleModal')"
  >
    <div 
      class=" w-5/6 sm:w-4/6 md:w-[50%] lg:w-[45%] snap-y overflow-y-scroll  h-3/4 p-2 sm:p-4 z-30  bg-white sm:h-3/4 shadow-xl rounded-lg relative"
      @click.stop
    >
      <button 
        class="absolute top-2 right-2 text-2xl z-10" 
        @click="$emit('toggleModal')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="fill: rgb(190, 136, 136)"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
      </button>
      <h1 class="text-primary text-center font-bold text-xl sm:text-2xl mb-2">Crear publicación</h1>
      <div class="flex items-center gap-2 mb-2">
        <figure>
          <img 
          :src="user.user.profilePicture" 
          alt="Foto de perfil del usuario"
          class="w-12 h-12 rounded-full object-contain mx-auto"
          >
        </figure>
        <p class="text-center font-bold text-gray-900">{{user.user.username}}</p>
      </div>
      <!-- aqui va el contenido del modal -->
      <TexEditor />
      <button type="submit" @click="getText"  class="bg-primary w-full p-2 mx-auto mt-4 rounded-md text-gray-100">Publicar</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>