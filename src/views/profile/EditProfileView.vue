<script setup>
  import { useUserStore } from '@/stores/user';
  import arrowIcon from '@/assets/icons/arrow.svg';
import { onMounted, computed } from 'vue';

  const user = useUserStore();
  onMounted(async () => {
    await user.loadUserData();
  })
  const userProfile = computed(() => user?.user || {});
  console.log(userProfile?.value?.birthday);
  const handleSubmit = async(formData) => {

   }

</script>
<template>
  <div class="flex justify-between md:px-dmd">
    <router-link :to="{name: 'profile'}">
      <img :src="arrowIcon" alt="icono de flecha" class="w-8 mt-2">
    </router-link>
    <h1 class="text-xl sm:text-2xl w-3/4 flex-1 lg:text-3xl text-center my-4 font-bold  text-primary">Editar Perfil</h1>
  </div>
  <div class="md:px-dmd 2xl:px-dlg">

    <FormKit
      id="editProfileForm"
      type="form"
      :actions="false"
      incomplete-message="No se pudo enviar, revisa las notificaciones"
      @submit="handleSubmit"
      >
      <FormKit
      type="text"
      name="name"
      :value="userProfile?.username"
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
        :value="userProfile?.favoriteAuthor"
        placeholder="Autor favorito:"
        validation="required|min:4"
        :validation-messages="{
          required: 'El autor favorito es obligatorio',
          min: 'El autor favorito debe tener al menos 4 caracteres'
        }"
      />
    </FormKit>
    <!-- ubicacion -->
    <FormKit 
      type="text"
      name="location"
      :value="userProfile?.location"
      placeholder="Ubicación:"
      validation="min:4"
      :validation-messages="{
        min: 'La ubicación debe tener al menos 4 caracteres'
      }"
    />
    <!-- Fecha de nacimiento -->
    <FormKit 
      type="date"
      name="birthDate"
      :value="userProfile?.birthday"
      placeholder="Fecha de nacimiento:"
      validation="required"
      :validation-messages="{
        required: 'La fecha de nacimiento es obligatoria'
      }"
    />

    <div class="flex items-center justify-between mt-4">
      <button class="w-full text-sm text-start pt-2 text-gray-400 font-bold  border-b border-b-gray-300 hover:bg-gray-200 hover:text-gray-400 rounded-lg transition-none" @click="showModal = true">
        Cambiar contraseña
      </button>
    </div>
  </div>
</template>
