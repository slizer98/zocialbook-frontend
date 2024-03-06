<script setup>
  import { useUserStore } from '@/stores/user';
  import arrowIcon from '@/assets/icons/arrow.svg';
  import { ref, inject } from 'vue';
  import ModalPassword from '@/components/ModalPassword.vue';
  import { FormKit } from '@formkit/vue';
  import UserAPI from '@/api/UserAPI';
  import { useRouter, useRoute } from 'vue-router';

  const user = useUserStore();
  const router = useRouter();
  const route = useRoute();

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
    birthday: 'Fecha de nacimiento',
    annualBookGoal: 'Meta anual de libros',
  }
  
  const handleSubmit = async (formData) => {

    const { annualBookGoal, ...rest } = formData;
    for (const field in rest) {
      if (formData[field] && formData[field].length < 4) {
        const nameInSpanish = namesInSpanish[field];
        toast.open({ message: `${nameInSpanish} debe tener al menos 4 caracteres`, type: 'error' });
        return;
      }
    }

    if(annualBookGoal <= 0) {
      toast.open({ message: 'La meta anual de libros debe ser mayor a 0', type: 'error' });
      return;
    }

    const { birthday } = formData;
    const transformedDate = new Date(birthday).toISOString().split('T')[0];
    const annualBookGoalInt = parseInt(annualBookGoal);
    const fullData = { ...formData, birthday: transformedDate, annualBookGoal: annualBookGoalInt };
    const usernameUrl = route.params.username;

    
    try {
      await UserAPI.updateProfile(fullData, usernameUrl)
      toast.open({ message: 'Perfil actualizado', type: 'success' })
      user.updateUser(fullData)
      localStorage.setItem('user_data', JSON.stringify(fullData))
      router.push({ name: 'profile' })
    } catch (error) {
      toast.open({ message: error.response.data.msg, type: 'error' })
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
        id="editProfile"
        type="form"
        :actions="false"
        :value="{
          username: userData.username ,
          favoriteAuthor: userData.favoriteAuthor || '',
          location: userData.location || '',
          birthday: userData.birthday,
          aboutMe: userData.aboutMe || '',
          annualBookGoal: userData.annualBookGoal || ''
        }"
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
        <FormKit
          type="number"
          name="annualBookGoal"
          label="Meta anual de libros"
          placeholder="Meta anual de libros"
        />
      
        <FormKit
          type="textarea"
          name="aboutMe"
          label="Sobre mí:"
          class="resize-none"
          rows="5"
          placeholder="Escribe algo sobre ti"
          minlength="4"
        />
        <div class="my-4">
          <button 
            type="button"
            class="w-full text-sm text-start pt-2 text-gray-400 font-bold  border-b border-b-gray-300 hover:bg-gray-200 hover:text-gray-400 rounded-lg transition-none" 
            @click="showModal"
          >
            Cambiar contraseña
          </button>
        </div>
        
        <FormKit type="submit"  > Guardar Cambios </FormKit>  
        
      </FormKit>
    </section>
    <ModalPassword @close-modal="closeModal" v-if="modal" />
  </main>
</template>

<style>
  textarea {
    resize: none;
  }
</style>