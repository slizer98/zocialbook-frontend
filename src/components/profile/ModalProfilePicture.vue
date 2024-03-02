<script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router';
  import { saveCloudinary } from '@/helpers/cloudinary'
  import UserAPI from '@/api/UserAPI';
  
  
  defineEmits(['toggleModalProfilePicture'])
  defineProps(['showChangeProfilePicture'])

  const route = useRoute()
  

  const selectedFile = ref(null)
  const active = ref(false);
  const firstFilePath = ref(null);
  const isPictureSelected = ref(false);
  const urlCloudinary = ref(null);

  const toggleActive = () => {
    active.value = !active.value;
  };
  const handleFile = (event) => {
    selectedFile.value = event.target.files[0];
    firstFilePath.value = URL.createObjectURL(selectedFile.value);
    isPictureSelected.value = true;
  }

  const handleFileDrop = (event) => {
    const files = event.dataTransfer.files;
    const firstFile = files[0];
    firstFilePath.value = URL.createObjectURL(firstFile);
    isPictureSelected.value = true;
    selectedFile.value = firstFile;
  }


  const savePicture = async() => {
    urlCloudinary.value = await saveCloudinary(selectedFile.value)
    const profilePicture = urlCloudinary.value.url
    await UserAPI.saveAvatar({profilePicture}, route.params.username)
    location.reload()
  }
  
</script>

<template>
  <section 
    v-if="showChangeProfilePicture"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
    @click="$emit('toggleModalProfilePicture')"
  >
    <div 
      class=" w-5/6 sm:w-4/6 md:w-[60%] lg:w-[45%] snap-y overflow-y-scroll md:overflow-y-auto h-3/4 p-2 sm:p-4 z-30  bg-white sm:h-auto shadow-xl rounded-lg relative"
      @click.stop
      >
      <button 
          class="absolute top-2 right-2 text-2xl z-10" 
          @click="$emit('toggleModalProfilePicture')"
      >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="fill: rgb(190, 136, 136);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
      </button>
      <h1 class="text-primary  font-bold text-base sm:text-xl mb-2">Selecciona una foto</h1>

      <div
        @dragenter.prevent="toggleActive"
        @dragleave.prevent="toggleActive"
        @dragover.prevent
        @drop.prevent="handleFileDrop"
        :class="{ 'active-dropzone': active }"
        class="flex flex-col items-center justify-center w-full h-60 border-2 border-dashed border-primary rounded-lg dropzone cursor-pointer"
      >
        <span>Arrastra el archivo aquí</span>
        <span>O</span>
        <label for="dropzoneFile" class="cursor-pointer p-2  bg-primary hover:bg-primary-dark text-white rounded-md ">Selecciona</label>
        <input type="file" id="dropzoneFile" class="dropzoneFile" @change="handleFile" />
      </div>
      <div v-if="isPictureSelected" class="w-full mt-2 flex flex-col justify-center items-center">
        <p>Vista Previa:</p>
        <figure class=" mx-auto  h-24 w-24 sm:h-24 sm:w-24 md:w-36 md:h-36  border border-primary  flex justify-center items-center rounded-full  ">
          <img v-if="firstFilePath"  :src="firstFilePath" alt="preview" class="w-full h-full rounded-full object-contain" />
        </figure>
        <button @click="savePicture" class="bg-primary my-3 p-2 rounded-md text-white block mx-auto">Guardar Foto</button>
      </div>
    </div>
  </section>    
</template>


<style scoped >

.dropzone input {
  display: none;
}

.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #41b883;
}

.active-dropzone label {
  background-color: #fff;
  color: #41b883;
}
</style>
