<script setup>
  import { ref } from 'vue';
  import { usePostStore } from '@/stores/post'
  import { useUserStore } from '@/stores/user';
  import { useTextEditor } from '@/composables/useTextEditor';
 
  const {selectedText, getSelectedText, applyFormatting, applyFormattingList } = useTextEditor();
  const user = useUserStore()
  const post = usePostStore()
  const watchFormatedText = ref(false)
  const showPopover = ref(false)
  const uploadImage = ref(false)
  const selectedFile = ref(false)
  const firstFilePath = ref(null)
  const firstName = user.user.username.split(' ')[0]


  const handleMouseUp = () => {
    getSelectedText()
  }

  const applyFormat = format => {
    const formattedText = applyFormatting(format);
    post.textPost = post.textPost?.replace(selectedText.value, formattedText + '<br>');
  }

  const applyFormatList = format => {
    const formattedText = applyFormattingList(format);
    post.textPost = post.textPost?.replace(selectedText.value, formattedText);
  }

  const showFormattedText = () => {
    watchFormatedText.value = !watchFormatedText.value
  }
  const togglePopover = () => {
    showPopover.value = !showPopover.value;
  }
  const getImagePost = (event) => {
    selectedFile.value = event.target.files[0];
    post.imagePost = selectedFile.value
    uploadImage.value = false
    firstFilePath.value = URL.createObjectURL(selectedFile.value)
  }
</script>

<template>
  <div>
  
    <nav class="flex items-center justify-between p-2 border-b border-gray-300">
      <button @click="applyFormat('strong')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M17.061 11.22A4.46 4.46 0 0 0 18 8.5C18 6.019 15.981 4 13.5 4H6v15h8c2.481 0 4.5-2.019 4.5-4.5a4.48 4.48 0 0 0-1.439-3.28zM13.5 7c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H9V7h4.5zm.5 9H9v-3h5c.827 0 1.5.673 1.5 1.5S14.827 16 14 16z"></path></svg></button>
      <button @click="applyFormat('em')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M19 7V4H9v3h2.868L9.012 17H5v3h10v-3h-2.868l2.856-10z"></path></svg></button>
      <button @click="applyFormat('u')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M5 18h14v2H5zM6 4v6c0 3.309 2.691 6 6 6s6-2.691 6-6V4h-2v6c0 2.206-1.794 4-4 4s-4-1.794-4-4V4H6z"></path></svg></button>
      <button @click="applyFormat('del')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M20 11h-8c-4 0-4-1.816-4-2.5C8 7.882 8 6 12 6c2.8 0 2.99 1.678 3 2.014L16 8h1c0-1.384-1.045-4-5-4-5.416 0-6 3.147-6 4.5 0 .728.148 1.667.736 2.5H4v2h16v-2zm-8 7c-3.793 0-3.99-1.815-4-2H6c0 .04.069 4 6 4 5.221 0 6-2.819 6-4.5 0-.146-.009-.317-.028-.5h-2.006c.032.2.034.376.034.5 0 .684 0 2.5-4 2.5z"></path></svg></button>
      <button @click="applyFormatList('ul')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path></svg></button>
      <button @click="applyFormatList('ol')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M5.282 12.064c-.428.328-.72.609-.875.851-.155.24-.249.498-.279.768h2.679v-.748H5.413c.081-.081.152-.151.212-.201.062-.05.182-.142.361-.27.303-.218.511-.42.626-.604.116-.186.173-.375.173-.578a.898.898 0 0 0-.151-.512.892.892 0 0 0-.412-.341c-.174-.076-.419-.111-.733-.111-.3 0-.537.038-.706.114a.889.889 0 0 0-.396.338c-.094.143-.159.346-.194.604l.894.076c.025-.188.074-.317.147-.394a.375.375 0 0 1 .279-.108c.11 0 .2.035.272.108a.344.344 0 0 1 .108.258.55.55 0 0 1-.108.297c-.074.102-.241.254-.503.453zm.055 6.386a.398.398 0 0 1-.282-.105c-.074-.07-.128-.195-.162-.378L4 18.085c.059.204.142.372.251.506.109.133.248.235.417.306.168.069.399.103.692.103.3 0 .541-.047.725-.14a1 1 0 0 0 .424-.403c.098-.175.146-.354.146-.544a.823.823 0 0 0-.088-.393.708.708 0 0 0-.249-.261 1.015 1.015 0 0 0-.286-.11.943.943 0 0 0 .345-.299.673.673 0 0 0 .113-.383.747.747 0 0 0-.281-.596c-.187-.159-.49-.238-.909-.238-.365 0-.648.072-.847.219-.2.143-.334.353-.404.626l.844.151c.023-.162.067-.274.133-.338s.151-.098.257-.098a.33.33 0 0 1 .241.089c.059.06.087.139.087.238 0 .104-.038.193-.117.27s-.177.112-.293.112a.907.907 0 0 1-.116-.011l-.045.649a1.13 1.13 0 0 1 .289-.056c.132 0 .237.041.313.126.077.082.115.199.115.352 0 .146-.04.266-.119.354a.394.394 0 0 1-.301.134zm.948-10.083V5h-.739a1.47 1.47 0 0 1-.394.523c-.168.142-.404.262-.708.365v.754a2.595 2.595 0 0 0 .937-.48v2.206h.904zM9 6h11v2H9zm0 5h11v2H9zm0 5h11v2H9z"></path></svg></button>
      <button @click="uploadImage=!uploadImage"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"></path><path d="m8 11-3 4h11l-4-6-3 4z"></path><path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path></svg></button>
      <button @click="togglePopover" class="w-8" >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"></path>
        </svg>
      </button>
    </nav>
    <textarea 
      v-if="!watchFormatedText"
      v-model="post.textPost" 
      class="h-60 w-full p-2 text-xl outline-none resize-none placeholder:text-xl"
      :placeholder="'¿Qué estás pensando, ' + firstName + '?'"
      @mouseup="handleMouseUp"
    ></textarea>
    <div v-else v-html="post.textPost" class="h-60 w-full p-2 text-xl outline-none overflow-y-scroll" ></div>
    <figure v-if="selectedFile" class=" mx-auto  h-40 border border-primary  flex justify-center items-center   ">
      <img v-if="firstFilePath"  :src="firstFilePath" alt="preview" class="w-full h-full  object-contain" />
    </figure>
    <div v-if="uploadImage" class="w-full h-16" >
      <input @change="getImagePost" type="file">
    </div>
    <div class="w-full relative">
      <button @click="showFormattedText" class="bg-gray-300 font-bold hover:bg-gray-400 text-sm p-2 rounded-sm">{{ watchFormatedText ? 'Editar' : 'Vista previa' }}</button>
      
      <!-- popover para informacion de como funciona el editor de texto -->
      <div class="">
        <div v-if="showPopover" class="absolute sm:w-[363px] sm:h-[300px] overflow-y-scroll -top-60 right-0 bg-white border border-gray-300 p-2 rounded-sm">
          <h2 class="text-base font-bold mb-2">Editor de Texto</h2>
          <p class="mb-4 text-sm">El editor de texto te permite dar formato a tu texto de diversas maneras. A continuación, encontrarás una lista de etiquetas HTML y una breve explicación de cómo usarlas:</p>
          <ul class="mb-4">
            <li class="text-sm"><strong>&lt;strong&gt;</strong>: Para resaltar el texto en negrita.</li>
            <li class="text-sm"><em>&lt;em&gt;</em>: Para resaltar el texto en cursiva.</li>
            <li class="text-sm"><u>&lt;u&gt;</u>: Para subrayar el texto.</li>
            <li class="text-sm"><del>&lt;del&gt;</del>: Para tachar el texto.</li>
            <li class="text-sm">&lt;ul&gt;: Para crear una lista desordenada.</li>
            <li class="text-sm">&lt;ol&gt;: Para crear una lista ordenada.</li>
            <li class="text-sm">&lt;br&gt;: Para dar un salto de linea.</li>
          </ul>
          <ul>
            <li class="text-sm">Para aplicar formato a tu texto, selecciona la palabra o frase que deseas modificar y haz clic en el botón correspondiente. ¡Así de fácil!</li>
            <li class="text-sm">En caso de las listas tienes que poner tus oraciones o palabras en lineas separadas!</li>
            <p class="text-sm">
              <span class="font-bold">Ejemplo de lista:</span>
              <br>
              <span class="bg-blue-600 text-white">Elemento 1</span>
              <br>
              <span class="bg-blue-600 text-white">Elemento 2</span>
              <br>
              <span class="bg-blue-600 text-white">Elemento 2</span>
            </p>
          </ul>
          </div>
      </div>
    </div>
  </div>
  
</template>

<style>
ol {
  list-style-type: decimal;
}
ul {
  list-style-type: disc;
}
li {
  margin-left: 1rem;
}

</style>