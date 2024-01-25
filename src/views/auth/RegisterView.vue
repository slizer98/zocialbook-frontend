
<script setup>
  import { ref } from 'vue';
  import { reset } from '@formkit/vue'
  import AuthAPI from '../../api/AuthAPI'

  const handleSubmit = async({password_confirm, ...formData}) => {
    try {
      const createAt = new Date().toISOString()
  
      const fullData = {...formData, createAt}
      const { data } = await AuthAPI.register(fullData)
      console.log(data)
    } catch (error) {
      console.log(error)
    }

    
  } 
  const isNameFocused = ref(false);
</script>

<template>
  <section class=" w-full flex justify-between flex-col sm:flex-row rounded-lg shadow-lg ">
    <div class="bg-primary flex  flex-1 p-4 flex-col space-y-4 gap-4">
      <h1 class="text-white text-2xl md:text-4xl font-extrabold  text-center sm:mt-10">ZocialBook</h1>
      <p class="text-white hidden sm:block">"¡Inicia tu aventura literaria con ZocialBook! 📚 Crea tu cuenta y comienza a documentar tus peripecias de lectura."</p>
      <router-link :to="{name: 'login'}" class="text-white hidden sm:block border-2 transition-all font-bold border-white p-2 rounded-lg text-center hover:bg-white hover:text-primary">
        Iniciar Sesión
      </router-link>
    </div>
    <div class="flex-1 p-4">
      <h2 class="text-xl md:text-2xl font-extrabold text-primary text-center my-10">
        Crea una cuenta 
      </h2>
      <FormKit
        id="registerForm"
        type="form"
        :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones"
        @submit="handleSubmit"
      >
          <FormKit 
            type="text"
            name="username"
            placeholder="Nombre:*"
            @focus="isNameFocused = true"
            @blur="isNameFocused = false"
            validation="required|length:3"
            :validation-messages="{
              required: 'El nombre es obligatorio',
              length: 'El nombre es muy corto'
            }"
          />

          <FormKit 
            type="email"
            name="email"
            placeholder="Correo:*"
            validation="required|email"
            :validation-messages="{
              required: 'El email es obligatorio',
              email: 'Email no valido'
            }"
          />

          <FormKit 
            type="password"
            name="password"
            placeholder="Password:*"
            validation="required|length:8"
            :validation-messages="{
              required: 'La contraseña es obligatoria',
              length: 'La contraseña debe contener al menos 8 caracteres'
            }"
          />

            <FormKit 
              type="password"
              name="password_confirm"
              placeholder="Repite la Contraseña:*" 
              validation="required|confirm"
              :validation-messages="{
                required: 'La contraseña es obligatoria',
                confirm: 'Las contraseñas no son iguales'
              }"
            />
      
          <FormKit
            type="text"
            name="favoriteAuthor"
            placeholder="Mi autor favorito es:(opcional)"
            validation="length:3"
            :validation-messages="{
              length: 'El texto es muy corto'
            }"
          />
        
        
        <FormKit type="submit" >Crear Cuenta</FormKit>
        <router-link :to="{name: 'login'}" class="text-sm sm:hidden">
            ¿Ya tienes una cuenta? <span class="text-primary font-bold underline">Inicia Sesión </span>
        </router-link>
        
      </FormKit>
    </div>
  </section>
  
</template>
