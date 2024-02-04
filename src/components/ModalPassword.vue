<script setup>

</script>

<template>
  <section class="w-1/2 bg-gray-400 h-60 shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h1>Cambiar contraseña</h1>
    <FormKit
      id="passwordForm"
      type="form"
      :actions="false"
      incomplete-message="No se pudo enviar, revisa las notificaciones"
      @submit="handleSubmit"
    >
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
          confirm: 'Las contraseñas no coinciden',
        }"
      />
      <button type="submit" class="bg-primary text-white rounded-md p-2 w-full">Cambiar</button>
    </FormKit>
  </section>
</template>


<style lang="scss" scoped>

</style>