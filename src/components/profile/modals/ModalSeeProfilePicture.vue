<script setup>
  import { computed } from 'vue';
  import { useUserStore } from '@/stores/user';

  const user = useUserStore()
  const userProfile =  computed( () => user?.user || {})

  defineProps(['showProfilePicture'])
  defineEmits(['toggleModalSeeProfilePicture'])

</script>

<template>
  <section 
  v-if="showProfilePicture"
  class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 transition-all duration-300 ease-in-out"
  @click="$emit('toggleModalSeeProfilePicture')"
>
  <div 
    class=" w-5/6 sm:w-4/6 md:w-[60%] lg:w-[45%] snap-y overflow-y-scroll md:overflow-y-auto h-auto p-2 sm:p-4 z-30  bg-white md:h-3/4 shadow-xl rounded-lg relative"
    @click.stop
  >
  <button 
  class="absolute top-2 right-2 text-2xl z-10" 
  @click="$emit('toggleModalSeeProfilePicture')"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="fill: rgb(190, 136, 136)"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
  </button>
    <div >
      <picture class="w-full">
        <source
          media="(min-width: 568px)"
          :srcset="userProfile?.profilePicture"
        />
        <img
          :src="userProfile?.profilePicture"
          class="w-50"
          alt="profile picture"
        />
      </picture>
    </div>
   
  </div>
</section>

</template>

