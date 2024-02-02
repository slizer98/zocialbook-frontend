<script setup>
  import { ref, inject } from 'vue';
  import { reset } from '@formkit/vue';
  import AuthAPI from '../../api/AuthAPI'
  

  const isFocused = ref(true);
  const value = ref('');
  const toast = inject('toast');
  const handleFocus = () => {
    isFocused.value = false;
  };

  const handleBlur = () => {
    if (!value.value) {
      isFocused.value = false;
    }
  };

  const handleSubmit = async ({ password_confirm, birthday, ...formData }) => {
    try {
      const createAt = new Date().toISOString();
      birthday = new Date(birthday).toISOString();
      const fullData = { ...formData, createAt, birthday }
      const { data } = await AuthAPI.register(fullData)
      reset('registerForm');
      toast.open({ message: data.msg, type: 'success'})
    } catch (error) {
      const messageError = error.response.data.msg;
      toast.open({ message: messageError, type: 'error'})
    }
  };
</script>

<template>
  <section class="w-full sm:px-6 md:px-0 flex justify-between flex-col sm:flex-row rounded-lg shadow-lg">
    <div class="bg-primary flex flex-1 p-4 flex-col space-y-4 gap-4">
      <h1 class="text-white text-2xl md:text-4xl font-extrabold text-center sm:mt-10">ZocialBook</h1>
      <p class="text-white hidden sm:block">
        "¡Inicia tu aventura literaria con ZocialBook! 📚 Crea tu cuenta y comienza a documentar tus peripecias de lectura."
      </p>
      <router-link
        :to="{ name: 'login' }"
        class="text-white hidden sm:block border-2 transition-all font-bold border-white p-2 rounded-lg text-center hover:bg-white hover:text-primary"
      >
        Iniciar Sesión
      </router-link>
    </div>
    <div class="flex-1 p-4">
      <h2 class="text-xl md:text-2xl font-extrabold text-primary text-center my-10">Crea una cuenta</h2>
      <FormKit
        id="registerForm"
        type="form"
        :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones"
        @submit="handleSubmit"
      >
        
          <FormKit
            v-model="value"
            @focus="handleFocus"
            @blur="handleBlur"
            type="text"
            name="username"
            label="Nombre de usuario:"
            validation="required|length:3"
            :validation-messages="{
              required: 'El nombre es obligatorio',
              length: 'El nombre es muy corto',
            }"
          />
   
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
            type="date"
            name="birthday"
            label="Fecha de Nacimiento:"
            validation="required|date"
            :validation-messages="{
              required: 'El email es obligatorio',
              date: 'Fecha no valida',
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
   
          <FormKit
            type="password"
            name="password_confirm"
            label="Confirmar Contraseña:"
            validation="required|confirm"
            :validation-messages="{
              required: 'La contraseña es obligatoria',
              confirm: 'Las contraseñas no son iguales',
            }"
          />
  
          <FormKit
            type="text"
            name="favoriteAuthor"
            label="Autor Favorito:"
            validation="length:3"
            :validation-messages="{
              length: 'El texto es muy corto',
            }"
          />
               
        <FormKit type="submit">Crear Cuenta</FormKit>
        <router-link :to="{ name: 'login' }" class="text-sm sm:hidden">
          ¿Ya tienes una cuenta? <span class="text-primary font-bold underline">Inicia Sesión </span>
        </router-link>
      </FormKit>
    </div>
  </section>
  
</template>

