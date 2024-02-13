<script setup>
  import { useUserStore } from '@/stores/user';
  import arrowIcon from '@/assets/icons/arrow.svg';
  import { ref, inject } from 'vue';
  import ModalPassword from '@/components/ModalPassword.vue';
  import { FormKit } from '@formkit/vue';

  const modal = ref(false);
  const userData = ref(JSON.parse(localStorage.getItem('user_data')))
  const toast = inject('toast');
  const showModal = () => {
    modal.value = true;
  }
  const closeModal = () => {
    modal.value = false;
  }

  const namesInSpanish = {
    username: 'Nombre',
    favoriteAuthor: 'Autor favorito',
    location: 'Ubicación',
    birthday: 'Fecha de nacimiento'
  }
  
  const handleSubmit = async (formData) => {
  for (const field in formData) {
    if (formData[field] && formData[field].length < 4) {
      const nameInSpanish = namesInSpanish[field];
      toast.open({ message: `${nameInSpanish} debe tener al menos 4 caracteres`, type: 'error' });
      return;
    }
  }
  try {
    
  } catch (error) {
    console.log(error);
  }
}
  

</script>
<template>
  <header class="flex justify-between md:px-dmd mt-14 xs:mt-0">
    <router-link :to="{name: 'profile'}">
      <img :src="arrowIcon" alt="icono de flecha" class="w-8 mt-2">
    </router-link>
    <h1 class="text-xl sm:text-2xl w-3/4 flex-1 lg:text-3xl text-center my-4 font-bold  text-primary">Editar Perfil</h1>
  </header>
  <main class="w-screem px-mxs sm:px-dxs md:px-dmd 2xl:px-dlg mb-14">
    <section class="max-w-screen-md md:mx-auto">
      <FormKit
        type="form"
        :value="{
          username: userData.username ,
          favoriteAuthor: userData.favoriteAuthor || '',
          location: userData.location || '',
          birthday: userData.birthday 
        }"
        submit-label="Guardar"
        @submit="handleSubmit"
      >
       
        <FormKit
          type="text"
          name="username"
          label="Nombre"
          placeholder="Nombre"
          validation="required"
        />
        
        <FormKit
          type="text"
          name="favoriteAuthor"
          label="Autor favorito"
          placeholder="Autor favorito"
        />
        
        <FormKit
          type="text"
          name="location"
          label="Ubicación"
          placeholder="Ubicación"
        />
        
        <FormKit
          type="date"
          name="birthday"
          label="Fecha de nacimiento"
          placeholder="Fecha de nacimiento"
          validation="required"
        />
        <div class="flex items-center justify-between mt-4">
          <button 
            class="w-full text-sm text-start pt-2 text-gray-400 font-bold  border-b border-b-gray-300 hover:bg-gray-200 hover:text-gray-400 rounded-lg transition-none" 
            @click="showModal"
          >
            Cambiar contraseña
          </button>
        </div>
      </FormKit>
    </section>
    <ModalPassword @close-modal="closeModal" v-if="modal" />
  </main>
</template>
