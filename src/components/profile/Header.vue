<script setup>
  import { useUserStore } from '@/stores/user';
  import { ref, computed } from 'vue';
  import ModalOptions from '@/components/profile/ModalOptions.vue';
  import DropDownOptions from '@/components/profile/DropDownOptions.vue';
  import camera from '@/assets/icons/camera.svg';
  import close from '@/assets/icons/close.svg';
  import down from '@/assets/icons/down.svg';
  

  const user = useUserStore()
  const isOptionActive = ref(false)
  const modalActive = ref(false)
  const isOpen = ref(false)
  
  const profileColors = [
    'bg-blue-300',
    'bg-purple-300',
    'bg-yellow-300',
    'bg-red-300',
    'bg-pink-300',
    'bg-indigo-300',
    'bg-gray-300',
    'bg-black',
  ]
  
  const getColorRandom = computed(() => {
    return profileColors[Math.floor(Math.random() * profileColors.length)];
  })
  const userProfile =  computed( () => user?.user || {})

  const toggleOptions = () => {
    isOptionActive.value = !isOptionActive.value
    modalActive.value = !modalActive.value
  }

  const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    }
  const  closeDropdown= () => {
      isOpen.value = false;
    }

</script>
<template>
  <header class="md:px-28 bg-tertiary">
    <div class="border border-red-500 h-40 md:h-80 w-full relative">
      <figure
        class=" h-20 w-20 sm:h-24 sm:w-24 md:w-36 md:h-36  border  flex justify-center items-center rounded-full absolute -bottom-10 left-4 md:-bottom-16 "
        :class="getColorRandom"
      >
        <img 
          v-if="userProfile.profilePicture" 
          :src="userProfile?.profilePicture" 
          alt="" 
          class="w-full h-full rounded-full object-contain"

        />
        <p v-else class="text-white text-4xl font-bold">{{user.getFirstLetter}}</p>

        <button @click="toggleOptions">
          <figure class="h-8 w-8 md:h-10 md:w-10  rounded-full absolute -bottom-1 md:-bottom-1 right-0 sm:right-3 bg-primary flex items-center justify-center">
            <img v-if="isOptionActive" :src="close" alt="icono de una camara" class="w-6" :class="{'options': isOptionActive, 'options-close': !isOptionActive}">
            <img v-else :src="camera" alt="icono de una camara" class="w-6">
          </figure>
        </button>
        <ModalOptions :modalActive="modalActive" />
      </figure>
    </div>
    <section class="space-y-4 md:px-28 px-5 w-full md:flex md:items-center md:flex-col-reverse bg-tertiary pb-6">
      <div class="w-full flex justify-end space-x-2 pt-2">
        <RouterLink to="#" class="text-xs md:text-sm bg-primary hover:bg-primary-dark p-1 rounded-md font-semibold">
          + Favorito
        </RouterLink>
        <RouterLink :to="{name: 'edit-profile', params:{ username: userProfile?.usernameUrl } }" class="text-xs md:text-sm bg-gray-300 transition hover:bg-gray-400 p-1 rounded-md font-semibold">
          Editar perfil
        </RouterLink>
        <div class="relative">
          <button @click="toggleDropdown" class="transform scale-x-[-1]">
            <img :src="down" alt="icono flecha abajo" :class="{'rotate-180': isOpen}">
          </button>
          <transition name="fade">
            <DropDownOptions v-if="isOpen" @close-dropdown="closeDropdown" />
          </transition>
        </div>
      </div>
      <div class=" sm:w-1/2 sm:ml-4 md:w-1/2 lg:w-2/3 lg:pl-4 xl:w-3/4 2xl:w-4/5">
        <h1 class="font-semibold text-gray-900 text-xl sm:text-2xl md:text-3xl">{{userProfile.username}}</h1>
        <p class="text-xs md:text-sm text-gray-500">#{{userProfile.favoriteAuthor}}</p>
      </div>
    </section>
  </header>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
}
</style>