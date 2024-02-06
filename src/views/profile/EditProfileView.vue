<script setup>
  import { useUserStore } from '@/stores/user';
  import arrowIcon from '@/assets/icons/arrow.svg';
  import { ref, computed } from 'vue';
  import ModalPassword from '@/components/ModalPassword.vue';

  const modal = ref(false);

  const userData = ref(JSON.parse(localStorage.getItem('user_data')))


  const showModal = () => {
    modal.value = true;
  }
  const closeModal = () => {
    modal.value = false;
  }
    
  const handleSubmit = async(formData) => {
    console.log(formData);
   }

</script>
<template>
  <header class="flex justify-between md:px-dmd">
    <router-link :to="{name: 'profile'}">
      <img :src="arrowIcon" alt="icono de flecha" class="w-8 mt-2">
    </router-link>
    <h1 class="text-xl sm:text-2xl w-3/4 flex-1 lg:text-3xl text-center my-4 font-bold  text-primary">Editar Perfil</h1>
  </header>
  <main class="w-screem px-mxs sm:px-dxs md:px-dmd 2xl:px-dlg ">
    <section class="max-w-screen-md md:mx-auto">
      <FormKit
        id="updateProfileForm"
        type="form"
        :actions="false"
        :value = "{
          username: userData?.username,
          favoriteAuthor: userData?.favoriteAuthor,
          location: userData?.location,
          birthday: userData?.birthday
        }"
        incomplete-message="No se pudo enviar, revisa las notificaciones"
        @submit="handleSubmit"
      >
        <FormKit
        type="text"
        name="username"
        placeholder="Nombre:"
        validation="required|min:4"
        :validation-messages="{
          required: 'El nombre es obligatorio',
          min: 'El nombre debe tener al menos 4 caracteres'
        }"
        />
        <!-- Autor favorito -->
        <FormKit 
          type="text"
          name="favoriteAuthor"
          placeholder="Autor favorito:"
          validation="min:4"
          :validation-messages="{
            min: 'El autor favorito debe tener al menos 4 caracteres'
          }"
        />
      </FormKit>
      <!-- ubicacion -->
      <FormKit 
        type="text"
        name="location"
        placeholder="Ubicación:"
        validation="min:4"
        :validation-messages="{
          min: 'La ubicación debe tener al menos 4 caracteres'
        }"
      />
      <!-- Fecha de nacimiento -->
      <FormKit 
        type="date"
        name="birthdate"
        placeholder="Fecha de nacimiento:"
        validation="required"
        :validation-messages="{
          required: 'La fecha de nacimiento es obligatoria'
        }"
      />

      <div class="flex items-center justify-between mt-4">
        <button 
          class="w-full text-sm text-start pt-2 text-gray-400 font-bold  border-b border-b-gray-300 hover:bg-gray-200 hover:text-gray-400 rounded-lg transition-none" 
          @click="showModal"
        >
          Cambiar contraseña
        </button>
      </div>

      <FormKit type="submit"> Guardar cambios </FormKit>
    </section>
      <ModalPassword @close-modal="closeModal" v-if="modal" />
  </main>
</template>
