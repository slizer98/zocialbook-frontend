
<script setup>
import { ref } from 'vue';
//   import { inject } from 'vue';
//   import { reset } from '@formkit/vue'
//   import AuthAPI from '../../api/AuthAPI'

//   const toast = inject('toast')

//   const handleSubmit = async({password_confirm, ...formData}) => {
//     try {
//       const {data} = await AuthAPI.register(formData)
//       toast.open({message: data.msg, type: 'success'})
//       reset('registerForm')
//     } catch (error) {
//       toast.open({message: error.response.data.msg, type: 'error'})
//     }
//   } 
  const isNameFocused = ref(false);
</script>

<template>
  <h1 class="text-xl md:text-4xl font-extrabold text-gray-100 text-center my-10">
    Crea una cuenta en 
    <span class="text-primary text-2xl md:text-4xl" >ZocialBook</span> 
  </h1>
  <div class="bg-white rounded-md shadow-md mx-5 max-w-md  border-l-4 border-primary">
    <FormKit
      id="registerForm"
      type="form"
      :actions="false"
      incomplete-message="No se pudo enviar, revisa las notificaciones"
      @submit="handleSubmit"
    >
      <div class="mb-4 pb-4 border-b border-gray-300 pt-4">
        <FormKit 
          type="text"
          name="name"
          :placeholder="isNameFocused ? '' : 'Tu Nombre:'"
          @focus="isNameFocused = true"
          @blur="isNameFocused = false"
          validation="required|length:3"
          :validation-messages="{
            required: 'El nombre es obligatorio',
            length: 'El nombre es muy corto'
          }"
        />
      </div>
      
      <div class="mb-4 pb-4 border-b border-gray-300">
        <FormKit 
          type="email"
          name="email"
          placeholder="Tu E-mail"
          validation="required|email"
          :validation-messages="{
            required: 'El email es obligatorio',
            email: 'Email no valido'
          }"
        />
      </div>
  
      <div class="mb-4 pb-4 border-b border-gray-300">
        <FormKit 
          type="password"
          name="password"
          placeholder="Password:"
          validation="required|length:8"
          :validation-messages="{
            required: 'La contraseña es obligatoria',
            length: 'La contraseña debe contener al menos 8 caracteres'
          }"
        />
      </div>

      <div class="mb-4 pb-4 border-b border-gray-300">
           <FormKit 
              type="password"
              name="password_confirm"
              placeholder="Repite la Contraseña" 
              validation="required|confirm"
              :validation-messages="{
                required: 'La contraseña es obligatoria',
                confirm: 'Las contraseñas no son iguales'
              }"
            />
      </div>
      <div class="mb-4 pb-4 border-b border-gray-300">
        <FormKit
          type="textarea"
          name="about"
          placeholder="Cuéntanos sobre ti"
          validation="length:10"
          :validation-messages="{
            length: 'El texto es muy corto'
          }"
        />
      </div>
      
      <FormKit type="submit" >
        Crear Cuenta
      </FormKit>
    </FormKit>
  </div>
  
</template>
