<script setup>
  import { useUserStore } from '@/stores/user';
  import arrowIcon from '@/assets/icons/arrow.svg';
import { onMounted } from 'vue';

  const user = useUserStore();
  onMounted(() => {})
  const handleSubmit = async(formData) => { }
</script>
<template>
  <div class="flex justify-between">
    <img :src="arrowIcon" alt="icono de flecha">
    <h1 class="text-xl sm:text-2xl w-3/4 flex-1 lg:text-3xl text-center my-4 font-bold  text-primary">Editar Perfil</h1>
  </div>
  <div class="px-2">

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
      validation="required|min:4"
      :validation-messages="{
        required: 'La ubicación es obligatoria',
        min: 'La ubicación debe tener al menos 4 caracteres'
      }"
    />
    <!-- Fecha de nacimiento -->
    <FormKit 
      type="date"
      name="birthDate"
      :value="userProfile?.birthDate"
      placeholder="Fecha de nacimiento:"
      validation="required"
      :validation-messages="{
        required: 'La fecha de nacimiento es obligatoria'
      }"
    />
  </div>
</template>
