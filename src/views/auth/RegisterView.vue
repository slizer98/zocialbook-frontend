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

  const handleSubmit = async ({ password_confirm, ...formData }) => {
    try {
      const createAt = new Date().toISOString();
      const fullData = { ...formData, createAt };
      const { data } = await AuthAPI.register(fullData);
      reset('registerForm');
      toast.open({ message: data.msg, type: 'success'})
    } catch (error) {
      const messageError = error.response.data.msg;
      toast.open({ message: messageError, type: 'error'})
    }
  };
</script>

<template>
  <section class="w-full flex justify-between flex-col sm:flex-row rounded-lg shadow-lg">
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
        <div class="form-group">
          <label :class="{ 'label-active': isFocused }">Nombre:</label>
          <FormKit
            v-model="value"
            @focus="handleFocus"
            @blur="handleBlur"
            type="text"
            name="username"
            placeholder=" "
            validation="required|length:3"
            :validation-messages="{
              required: 'El nombre es obligatorio',
              length: 'El nombre es muy corto',
            }"
          />
        </div>

        <div class="form-group">
          <label :class="{ 'label-active': isFocused }">Correo:</label>
          <FormKit
            type="email"
            name="email"
            placeholder=" "
            validation="required|email"
            :validation-messages="{
              required: 'El email es obligatorio',
              email: 'Email no valido',
            }"
          />
        </div>

        <div class="form-group">
          <label :class="{ 'label-active': isFocused }">Password:</label>
          <FormKit
            type="password"
            name="password"
            placeholder=" "
            validation="required|length:8"
            :validation-messages="{
              required: 'La contraseña es obligatoria',
              length: 'La contraseña debe contener al menos 8 caracteres',
            }"
          />
        </div>

        <div class="form-group">
          <label :class="{ 'label-active': isFocused }">Repite la Contraseña:</label>
          <FormKit
            type="password"
            name="password_confirm"
            placeholder=" "
            validation="required|confirm"
            :validation-messages="{
              required: 'La contraseña es obligatoria',
              confirm: 'Las contraseñas no son iguales',
            }"
          />
        </div>

        <div class="form-group">
          <label :class="{ 'label-active': isFocused }">Mi autor favorito es:(opcional)</label>
          <FormKit
            type="text"
            name="favoriteAuthor"
            placeholder=" "
            validation="length:3"
            :validation-messages="{
              length: 'El texto es muy corto',
            }"
          />
        </div>

        <FormKit type="submit">Crear Cuenta</FormKit>
        <router-link :to="{ name: 'login' }" class="text-sm sm:hidden">
          ¿Ya tienes una cuenta? <span class="text-primary font-bold underline">Inicia Sesión </span>
        </router-link>
      </FormKit>
    </div>
  </section>
  
</template>

<style scoped>
.form-group {
  position: relative;
  margin-bottom: 1.5rem; /* Ajusta el margen entre los grupos de formularios según sea necesario */
}

.label-active {
  position: absolute;
  top: 0.25rem;
  left: 1rem;
  color: #374151;
  font-size: 0.75rem;
  pointer-events: none;
  transition: top 0.2s, left 0.2s, font-size 0.2s;
}

/* Puedes ajustar estos estilos según tus preferencias */
.form-group label {
  font-size: 0.9rem;
  color: #a0a2a6;
}

.form-group input {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  outline: none;
}
</style>
