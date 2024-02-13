<script setup>
  import { inject } from 'vue'
  import AuthAPI from '../api/AuthAPI'
  import { reset } from '@formkit/vue'
  
  const toast = inject('toast');
  const emits = defineEmits(['close-modal']);

  const handleSubmit = async ({newPassword_confirm, ...dataInput}) => {
    try {
      const { data: { token } } = await AuthAPI.changePassword(dataInput)
      localStorage.setItem('AUTH_TOKEN', token)
      reset('passwordForm')
      toast.open({ message: 'Contraseña Actualizada Correctamente ', type: 'success'})
      emits('close-modal')

    } catch (error) {
      toast.open({message: error.response.data.msg, type: 'error'})
    }
  }
</script>

<template>
  <section 
    class="fixed inset-0   bg-black bg-opacity-50 flex items-center justify-center z-0"
    @click="$emit('close-modal')"
  >
    <div 
      class="sm:w-1/2 w-5/6 p-2 sm:p-4 z-10  bg-white h-auto shadow-xl rounded-lg relative"
      @click.stop
    >
      <button 
        class="absolute top-2 right-2 text-2xl z-10" 
        @click="$emit('close-modal')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="fill: rgb(190, 136, 136);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
      </button>
      <h1 class="text-primary  font-bold text-base sm:text-xl mb-2">Cambiar contraseña</h1>
      <FormKit
        id="passwordForm"
        type="form"
        :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones"
        @submit="handleSubmit"
      >
        <FormKit
          type="password"
          name="oldPassword"
          label="Contraseña Actual:"
          validation="required|length:8"
          :validation-messages="{
            required: 'La contraseña es obligatoria',
            length: 'La contraseña debe contener al menos 8 caracteres',
          }"
        />
        <FormKit
        type="password"
        name="newPassword"
        label="Nueva Contraseña:"
        validation="required|length:8"
        :validation-messages="{
          required: 'La contraseña es obligatoria',
          length: 'La contraseña debe contener al menos 8 caracteres',
        }"
      />

      <FormKit
        type="password"
        name="newPassword_confirm"
        label="Confirmar Contraseña:"
        validation="required|confirm"
        :validation-messages="{
          required: 'La contraseña es obligatoria',
          confirm: 'Las contraseñas no son iguales',
        }"
      />
        <FormKit type="submit">Cambiar contraseña </FormKit>
    </FormKit>
  </div>
  </section>
</template>


