<script setup>
  import { ref } from 'vue'
  import ModalAvatars from './ModalAvatars.vue'
  import ModalProfilePicture from './ModalChangeProfilePicture.vue'
  import ModalSeeProfilePicture from './ModalSeeProfilePicture.vue'
  import { useUserStore } from '@/stores/user'
  
 defineProps(['modalActive'])
    const user = useUserStore()
    const showAvatars = ref(false)
    const showChangeProfilePicture = ref(false)
    const showProfilePicture = ref(false)
  
    const toggleModalAvatars = () => {
      showAvatars.value = !showAvatars.value
      if(showAvatars.value){
        user.disableScroll()
      }
      else{
        user.enableScroll()
      }
    }

    const toggleModalProfilePicture = () => {
      showChangeProfilePicture.value = !showChangeProfilePicture.value
      if(showChangeProfilePicture.value){
        user.disableScroll()
      }
      else{
        user.enableScroll()
      }
    }

    const toggleModalSeeProfilePicture = () => {
      showProfilePicture.value = !showProfilePicture.value
      if(showProfilePicture.value){
        user.disableScroll()
      }
      else{
        user.enableScroll()
      }
    }
 
 
</script>

<template>
  <div             
    class="modal  absolute -bottom-14 -right-36   flex flex-col justify-center items-center rounded-md"
    :class="{ 'modal-active': modalActive, 'modal-inactive': !modalActive }"
  >
    <button 
      @click="toggleModalSeeProfilePicture"
      class="p-2 bg-blur hover:bg-blur-hover rounded-md text-sm sm:text-base w-32 sm:w-36 shadow-lg"
    >
      Ver Foto
    </button>
    <button 
      @click="toggleModalProfilePicture" 
      class="p-2 bg-blur hover:bg-blur-hover rounded-md text-sm sm:text-base w-32 sm:w-36 shadow-lg"
    >
      Cambiar Foto
    </button>
    <button 
      @click="toggleModalAvatars" 
      class="p-2 bg-blur hover:bg-blur-hover rounded-md text-sm sm:text-base w-32 sm:w-36 shadow-lg"
      >
        Poner Avatar
      </button>
  </div>
<ModalAvatars v-if="showAvatars" :showAvatars="showAvatars" @toggleModalAvatars="toggleModalAvatars" />
<ModalProfilePicture v-if="showChangeProfilePicture" :showChangeProfilePicture="showChangeProfilePicture" @toggleModalProfilePicture="toggleModalProfilePicture"/>
<ModalSeeProfilePicture v-if="showProfilePicture" :showProfilePicture="showProfilePicture" @toggleModalSeeProfilePicture="toggleModalSeeProfilePicture" />
</template>

<style  scoped>
  
.options {
  animation: spin .5s linear ;;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

.modal {
  transition: clip-path .5s ease-in-out;
}
.bg-blur{
  background-color: rgba(159, 243, 194, 0.5);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease-in-out;
}
.bg-blur:hover {
  background-color: rgba(105, 238, 161, 0.5);
  backdrop-filter: blur(8px);
}
.modal-active {
  display: block;
  display: flex;
  flex-direction: column;
  gap: 10px;
  clip-path: circle(73.7% at 48% 51%);
}

.modal-inactive {
  clip-path: circle(0.0% at 0 50%);
}


</style>./modals/ModalAvatars.vue./ModalChangeProfilePicture.vue