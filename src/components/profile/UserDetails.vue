<script setup>
  import { computed } from 'vue';
  import { useUserStore } from '@/stores/user';

  const user = useUserStore()
  const userProfile =  computed( () => user?.user || {})
</script>

<template>
  <section class="w-[99%] xs:w-full bg-gray-50 md:max-w-md p-4 mt-4 l box-border space-y-2 rounded-md shadow-lg" >
    <h2 class="font-semibold text-gray-800 text-lg text-center">Detalles</h2>
    <div>
      <p class="text-gray-500 text-sm ">Vive en 
        <span class="font-bold text-gray-800">
           {{userProfile.location}} 
          </span>
      </p>
      <p class="text-gray-500 text-sm">Nació 
        <span class="font-bold text-gray-800">
           {{user.transformBirthday(userProfile.birthday)}}
          </span>
      </p>
      <p class="text-gray-500 text-sm">Se unió en 
        <span class="font-bold text-gray-800">
           {{user.transformDate(userProfile.createAt) }}
          </span>
      </p>
    </div>
    <div class="flex gap-2 pt-2">
      <p class="text-gray-500 text-sm">
        <span class="text-gray-900 font-bold md:text-sm">
          {{userProfile.following}}
        </span>  Siguiendo
      </p>
      <p class="text-gray-500 text-sm">
        <span class="text-gray-900 font-bold md:text-sm" >
          {{userProfile.followers}}
        </span> Seguidores
      </p>
    </div>
    <h2 class="font-semibold text-gray-900 mt-4">Sobre mi</h2>
    <p class="text-sm text-gray-500">
      {{userProfile.aboutMe}}
    </p>
  </section>
</template>


