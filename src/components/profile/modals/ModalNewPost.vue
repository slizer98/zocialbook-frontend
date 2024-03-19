<script setup>
  import { QuillEditor } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css';


  defineEmits(['toggleModal'])
  defineProps(['isPostOpen'])
  
</script>

<template>
  <section 
  v-if="isPostOpen"
  class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
  @click="$emit('toggleModal')"
>
  <div 
    class=" w-5/6 sm:w-4/6 md:w-[60%] lg:w-[45%] snap-y overflow-y-scroll md:overflow-y-auto h-3/4 p-2 sm:p-4 z-30  bg-white sm:h-auto shadow-xl rounded-lg relative"
    @click.stop
  >
    <button 
      class="absolute top-2 right-2 text-2xl z-10" 
      @click="$emit('toggleModal')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="fill: rgb(190, 136, 136)"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
    </button>
    <h1 class="text-primary text-center  font-bold text-base sm:text-xl mb-4">Crear publicación</h1>

    <div class="editor-wrapper h-72 max-h-80 overflow-y-scroll">
      <div class="toolbar"></div>
      <QuillEditor toolbar="#my-toolbar" >
        <template #toolbar>
          <div id="my-toolbar">
            <!-- dropdown with several title buttons -->
            <select class="ql-header">
              <option value="1"></option>
              <option value="2"></option>
              <option selected></option>
            </select>
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-underline"></button>
            <button class="ql-strike"></button>
            <button class="ql-link"></button>
            <button class="ql-image"></button>
            <button class="ql-list" value="ordered"></button>
            <button class="ql-list" value="bullet"></button>
            <button class="ql-clean"></button>
    
            <!-- But you can also add your own -->
            <button id="custom-button"></button>
          </div>
        </template>
      </QuillEditor>
    
    </div>
    <button type="submit" class="bg-primary w-full p-2 mx-auto mt-4 rounded-md text-gray-100">Publicar</button>
  </div>
</section>
</template>


<style scoped>

.ql-toolbar.ql-snow {
  border: none;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>