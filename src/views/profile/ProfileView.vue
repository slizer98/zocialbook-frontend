<script setup>

  import { useUserStore } from '@/stores/user';
  import { ref, computed } from 'vue';
  import ModalOptions from '@/components/profile/ModalOptions.vue';
  import camera from '@/assets/icons/camera.svg';
  import close from '@/assets/icons/close.svg';
  import down from '@/assets/icons/down.svg';
  import DropDownOptions from '@/components/profile/DropDownOptions.vue';

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
  <header class="md:px-28">
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
    
  </header>
    <main class="font-sans w-full md:px-28 flex border border-red-500 flex-col space-y-4 px-5 pb-14">
      
      <section class="space-y-4 md:flex md:items-center md:flex-col-reverse">
        <div class="w-full flex justify-end space-x-2 pt-2">
          <RouterLink to="#" class="text-xs md:text-sm bg-primary p-1 rounded-md font-semibold">
            + Favorito
          </RouterLink>
          <RouterLink :to="{name: 'edit-profile', params:{ username: userProfile?.usernameUrl } }" class="text-xs md:text-sm bg-gray-300 p-1 rounded-md font-semibold">
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
      <!-- Sobre mi -->
      <section >
        <div>
          <p class="text-gray-500 text-xs md:text-sm">{{userProfile.location}}</p>
          <p class="text-gray-500 text-xs md:text-sm">{{user.transformBirthday(userProfile.birthday)}}</p>
          <p class="text-gray-500 text-xs md:text-sm">Se unió en {{user.transformDate(userProfile.createAt) }}</p>
        </div>
        <div class="flex gap-2 pt-2">
          <p class="text-gray-500 text-xs md:text-sm">
            <span class="text-gray-900 font-bold md:text-sm">
              {{userProfile.following}}
            </span>  Siguiendo
          </p>
          <p class="text-gray-500 text-xs md:text-sm">
            <span class="text-gray-900 font-bold md:text-sm" >
              {{userProfile.followers}}
            </span> Seguidores
          </p>
        </div>
      </section>
      <section>
        <h2 class="font-semibold text-gray-900">Sobre mi</h2>
        <p class="text-xs text-gray-800">
          Lorem ipsum dolor sit ame consectetur adipi sicing elit. Quisquam, voluptates.
        </p>
      </section>
      <!-- mi meta como lector -->
      <article class="flex flex-col space-y-2">
        <h2 class="font-semibold text-gray-100">Reto de lectura</h2>
        <div>
          <p class="text-xs text-gray-300">Mi meta como lector es leer 10 libros en 2024</p>
          <div class="w-full h-2 bg-gray-300 rounded-full">
            <div class="w-1/2 h-full bg-primary rounded-full"></div>
          </div>
        </div>
        <div class="flex justify-end">
          <RouterLink to="#" class="text-xs bg-gray-300 p-1 rounded-md font-semibold">
            Editar meta
          </RouterLink>
        </div>
      </article>
      <!-- mis lecturas actuales -->
      <article>
        <h2 class="font-semibold text-gray-100">Mis lecturas actuales</h2>
          <!-- contenedor para mostrar nombre del libro, paginas leidas de x numero de paginas e imagen del libro -->
        <div>
          <figure>
            <img src="" alt="">
          </figure>
        </div>
      </article>
      <!-- mis publicaciones -->
      <section>
        <h2 class="font-semibold text-gray-100">Mis publicaciones</h2>
      </section>


    </main>
  
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>