<script setup>
  import { inject } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const toast = inject('toast')
  defineEmits(['close-dropdown'])

  const copyProfile = () => {
    const prfileUrl = window.location.href
    navigator.clipboard.writeText(prfileUrl)
    toast.open({ message: 'Perfil copiado', type: 'success'})
  }

  const logout = () => {
    localStorage.removeItem('AUTH_TOKEN')
    localStorage.removeItem('user_data')
    router.push({name:'login'})
  }

</script>

<template>
  <div  @click="close-dropdown" class="absolute z-10 space-y-2 top-10 transi w-[200px] right-0 bg-gray-300 border border-gray-200 shadow-md rounded-lg p-4">
    <button type="button" @click="copyProfile" class=" w-40 py-2 px-4 text-center text-xs xs:text-sm bg-primary rounded-md">Compartir perfil</button>
    <button type="button" @click="logout" class="w-40 py-2 px-4 text-center text-xs xs:text-sm bg-red-400 rounded-md ">Cerrar sesión</button>
  </div>
</template>


