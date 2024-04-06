<script setup>
  import { computed } from 'vue';
  import { useUserStore } from '@/stores/user';

  const user = useUserStore()
  const userProfile =  computed( () => user?.user || {})
</script>

<template>
  <section class="my-4 p-2 md:p-6 w-[99%] bg-white rounded-md shadow-lg" >
    <h2 class="font-semibold text-gray-800 text-xl md:text-2xl text-center">Detalles</h2>
    <div>
      <p class="text-gray-500 text-base md:text-lg ">Vive en 
        <span class="font-bold text-gray-800">
           {{userProfile.location}} 
          </span>
      </p>
      <p class="text-gray-500 text-base md:text-lg">Nació 
        <span class="font-bold text-gray-800">
           {{user.transformBirthday(userProfile.birthday)}}
          </span>
      </p>
      <p class="text-gray-500 text-base md:text-lg">Se unió en 
        <span class="font-bold text-gray-800">
           {{user.transformDate(userProfile.createAt) }}
          </span>
      </p>
    </div>
    <div class="flex flex-row md:flex-col lg:flex-row gap-2 pt-2">
      <p class="text-gray-500 text-base md:text-lg">
        <span class="text-gray-900 font-bold text-base md:text-lg">
          {{userProfile.following}}
        </span>  Siguiendo
      </p>
      <p class="text-gray-500 text-base md:text-lg">
        <span class="text-gray-900 font-bold text-base md:text-lg" >
          {{userProfile.followers}}
        </span> Seguidores
      </p>
    </div>
    <h2 class="font-semibold text-gray-900 text-base md:text-lg mt-4">Sobre mi</h2>
    <p class="text-sm text-gray-500">
      {{userProfile.aboutMe}}
    </p>
  </section>
</template>


