
<script setup>
  import { ref, inject, computed } from 'vue'
  import { useRouter } from 'vue-router';
  import AuthAPI from '../../api/AuthAPI'

  const toast = inject('toast');
  const errorPassword = ref(false);
  const router = useRouter();

  const handleSubmit = async(formData) => {
    try {
      const { data: { token } } = await AuthAPI.login(formData)
      localStorage.setItem('AUTH_TOKEN', token)
      errorPassword.value = false;
      router.push({name: 'home'})
    } catch (error) {
      if(error.response.data.msg === 'La contraseña es incorrecta'){
        return errorPassword.value = true;
      }
      toast.open({type: 'error', message: error.response.data.msg })
    }
  }

  const incorrectPasswordMsg = computed(() => {
    return errorPassword.value ? 'La contraseña es incorrecta' : '';
  })
  
</script>

<template>
  <section class=" w-full flex justify-between flex-col sm:flex-row rounded-lg shadow-lg ">
   
    <h1 class="text-white bg-primary py-4 sm:hidden text-2xl md:text-4xl font-extrabold  text-center sm:mt-10">ZocialBook</h1>
    <div class="flex-1 p-4">
      <h2 class="text-xl md:text-2xl font-extrabold text-primary text-center my-10">
        Inicia Sesión
      </h2>
      <FormKit
        id="loginForm"
        type="form"
        :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones"
        @submit="handleSubmit"
      >

          <FormKit 
            type="email"
            name="email"
            label="Correo Electrónico:"
            validation="required|email"
            :validation-messages="{
              required: 'El email es obligatorio',
              email: 'Email no valido',
            }"
          />

          <FormKit 
            type="password"
            name="password"
            label="Contraseña:"
            validation="required|length:8"
            :validation-messages="{
              required: 'La contraseña es obligatoria',
              length: 'La contraseña debe contener al menos 8 caracteres',
            }"
          />
          <span v-if="errorPassword" class=" border-red-500  text-red-600 text-xs font-bold   uppercase ">{{ incorrectPasswordMsg }} </span>

        <FormKit type="submit" >Iniciar Sesión</FormKit>
        <router-link :to="{name: 'register'}" class="text-sm sm:hidden">
            ¿Aún no tienes cuenta? <span class="text-primary font-bold underline">Registrate</span>
        </router-link>
        
      </FormKit>
    </div>
    <div class="bg-primary sm:flex hidden flex-1 p-4 flex-col space-y-4 gap-4">
        <h1 class="text-white  text-2xl md:text-4xl font-extrabold  text-center sm:mt-10">ZocialBook</h1>
        <p class="text-white hidden sm:block">"¡Inicia tu aventura literaria con ZocialBook! 📚 Inicia sesión para continuar tu aventura literaria."</p>
        <router-link :to="{name: 'register'}" class="text-white hidden sm:block border-2 transition-all font-bold border-white p-2 rounded-lg text-center hover:bg-white hover:text-primary">
          Resitrarse
        </router-link>
      </div>
  </section>
  
</template>
