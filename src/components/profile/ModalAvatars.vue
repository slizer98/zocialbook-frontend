<script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import UserAPI from '@/api/UserAPI'
  import avartar1 from '@/assets/avatars/avatar1.png'
  import avartar2 from '@/assets/avatars/avatar2.png'
  import avartar3 from '@/assets/avatars/avatar3.png'
  import avartar4 from '@/assets/avatars/avatar4.png'
  import avartar5 from '@/assets/avatars/avatar5.png'
  import avartar6 from '@/assets/avatars/avatar6.png'
  import avartar7 from '@/assets/avatars/avatar7.png'
  import avartar8 from '@/assets/avatars/avatar8.png'
  import avartar9 from '@/assets/avatars/avatar9.png'

  defineProps(['showAvatars'])
  defineEmits(['toggleModalAvatars'])

  const selected = ref(null)
  const isSelect = ref(false)
  const route = useRoute()
  const avatars = [
    avartar1,
    avartar2,
    avartar3,
    avartar4,
    avartar5,
    avartar6,
    avartar7,
    avartar8,
    avartar9
  ]
  
  const selectedAvatar = (avatar) => {
    selected.value = avatar
    isSelect.value = true
  }

  const saveAvatarDB = async() => {
    try {
      const profilePicture = selected.value
      const usernameUrl = route.params.username
      
      await UserAPI.saveAvatar({profilePicture}, usernameUrl)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  
</script>

<template>
  <section 
    v-if="showAvatars"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
    @click="$emit('toggleModalAvatars')"
  >
    <div 
      class=" w-5/6 sm:w-4/6 md:w-[60%] lg:w-[45%] snap-y overflow-y-scroll md:overflow-y-auto h-3/4 p-2 sm:p-4 z-30  bg-white sm:h-auto shadow-xl rounded-lg relative"
      @click.stop
    >
      <button 
        class="absolute top-2 right-2 text-2xl z-10" 
        @click="$emit('toggleModalAvatars')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="fill: rgb(190, 136, 136);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
      </button>
      <h1 class="text-primary  font-bold text-base sm:text-xl mb-2">Selecciona un avatar</h1>
      <ul class="grid grid-cols xs:grid-cols-2 sm:grid-cols-3  gap-4 transition-all">
        <li  
          v-for="avatar in avatars" 
          :key="avatar"
          @click="selectedAvatar(avatar)"  
          class="w-full border border-gray-300 flex justify-center cursor-pointer hover:shadow-lg hover:border-gray-400 hover:scale-105"
          :class="{'border-2  border-primary scale-110': selected === avatar}"
        >
          <img :src="avatar" :alt="avatar" class=" w-2/5 xs:w-2/4 sm:w-3/4 ">
        </li>
      </ul>
      <button type="submit" v-if="selected" @click="saveAvatarDB" class="bg-primary w-full p-2 mx-auto mt-4 rounded-md text-gray-100">Guardar Avatar</button>
    </div>
  </section>
</template>


<style scoped>

</style>