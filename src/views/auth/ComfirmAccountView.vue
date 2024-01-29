<script setup>
  import { onMounted, ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import AuthAPI  from '../../api/AuthAPI'
  import confirm from '../../assets/images/confirm.svg'
  import warning from '../../assets/images/warning.svg'

  const router = useRouter();
  const route = useRoute();
  const { token } = route.params;

  const message = ref('');
  const errorMessage = ref(false);
  
  onMounted(async() => {
    try {
      const { data } = await AuthAPI.verifyAccount(token);
      errorMessage.value = false;
      message.value = data.msg;
      setTimeout(() => {
        router.push({ name: 'login' });
      }, 5000);
    } catch (error) {
      errorMessage.value = true;
      message.value = error.response.data.msg;
      setTimeout(() => {
        router.push({ name: 'login' });
      }, 3000);
    }
  })

  const messageText = computed(() => {
    return errorMessage.value ? 'Error al confirmar' : 'Cuenta confirmada';
  })
  const image = computed(() => {
    return errorMessage.value ? warning : confirm;
  })
  
</script>

<template>
  <section class=" w-full flex justify-between flex-col sm:flex-row rounded-lg shadow-lg ">
   
    <h1 class="text-white bg-primary py-4 sm:hidden text-2xl md:text-4xl font-extrabold  text-center sm:mt-10">ZocialBook</h1>
    <div class="flex-1 p-4 shadow-md">
      <h2 
        class="text-xl md:text-2xl lg:text-4xl font-extrabold  text-center mb-5 sm:mb-10"
        :class="{ 'text-red-500': errorMessage, 'text-primary': !errorMessage}"
      >
        {{messageText}}
      </h2>
      <img 
        :src="image" 
        alt=" imagen para dar a conocer el estado"
        class="w-80 h-80 mx-auto"
      >
      <p class="text-center mt-2">{{ message }}</p>
    
    </div>
    
  </section>
</template>


<style lang="scss" scoped>

</style>