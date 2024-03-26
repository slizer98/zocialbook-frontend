<script setup>
  import { usePostStore } from '@/stores/post'
  import { useUserStore } from '@/stores/user';

  const user = useUserStore()
  const post = usePostStore()

  const firstName = user.user.username.split(' ')[0]
  
  const getSelectedText = () => {
    let selectedText = '';
    if (window.getSelection) {
      selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != 'Control') {
      selectedText = document.selection.createRange().text;
    }
    return selectedText;
  };

  const handleMouseUp = () => {
    getSelectedText();
};

const convertBold = () => {
    const selectedText = getSelectedText();
    if (!selectedText) return;
    const boldText = `<strong>${selectedText}</strong>`;
    const newText = post.textPost?.replace(selectedText, boldText);
    post.textPost = newText
  }

  const convertItalic = () => {
    const selectedText = getSelectedText();
    if (!selectedText) return;
    const italicText = `<em>${selectedText}</em>`;
    const newText = post.textPost?.replace(selectedText, italicText);
    post.textPost = newText
  }

  const convertUnderline = () => {
    const selectedText = getSelectedText();
    if (!selectedText) return;
    const underlineText = `<u>${selectedText}</u>`;
    const newText = post.textPost?.replace(selectedText, underlineText);
    post.textPost = newText
  }

  const converStrike = () => {
    const selectedText = getSelectedText();
    if (!selectedText) return;
    const strikeText = `<strike>${selectedText}</strike>`;
    const newText = post.textPost?.replace(selectedText, strikeText);
    post.textPost = newText
  }

  const convertUlist = () => {
    let selectedText = getSelectedText();
    if (!selectedText) return;
    //TODO: Implementar lista de items
    selectedText = selectedText.split('\n');
    console.log(selectedText);
    selectedText = selectedText.map(item => `<li>${item}</li>`).join('');
    console.log(selectedText);
    const ulistText = `<ul>${selectedText}</ul>`; 
    post.textPost = ulistText
  }

  const convertOlist = () => {
    let selectedText = getSelectedText();
    if (!selectedText) return;
    selectedText = selectedText.split('\n');
    console.log(selectedText);
    selectedText = selectedText.map(item => `<li>${item}</li>`).join('');
    console.log(selectedText);
    const ulistText = `<ol>${selectedText}</ol>`; 
    post.textPost = ulistText
  }

</script>

<template>
  <div>
  
    <nav class="flex items-center justify-between p-2 border-b border-gray-300">
      <button @click="convertBold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M17.061 11.22A4.46 4.46 0 0 0 18 8.5C18 6.019 15.981 4 13.5 4H6v15h8c2.481 0 4.5-2.019 4.5-4.5a4.48 4.48 0 0 0-1.439-3.28zM13.5 7c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H9V7h4.5zm.5 9H9v-3h5c.827 0 1.5.673 1.5 1.5S14.827 16 14 16z"></path></svg></button>
      <button @click="convertItalic"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M19 7V4H9v3h2.868L9.012 17H5v3h10v-3h-2.868l2.856-10z"></path></svg></button>
      <button @click="convertUnderline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M5 18h14v2H5zM6 4v6c0 3.309 2.691 6 6 6s6-2.691 6-6V4h-2v6c0 2.206-1.794 4-4 4s-4-1.794-4-4V4H6z"></path></svg></button>
      <button @click="converStrike"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M20 11h-8c-4 0-4-1.816-4-2.5C8 7.882 8 6 12 6c2.8 0 2.99 1.678 3 2.014L16 8h1c0-1.384-1.045-4-5-4-5.416 0-6 3.147-6 4.5 0 .728.148 1.667.736 2.5H4v2h16v-2zm-8 7c-3.793 0-3.99-1.815-4-2H6c0 .04.069 4 6 4 5.221 0 6-2.819 6-4.5 0-.146-.009-.317-.028-.5h-2.006c.032.2.034.376.034.5 0 .684 0 2.5-4 2.5z"></path></svg></button>
      <button @click="convertUlist"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path></svg></button>
      <button @click="convertOlist"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M5.282 12.064c-.428.328-.72.609-.875.851-.155.24-.249.498-.279.768h2.679v-.748H5.413c.081-.081.152-.151.212-.201.062-.05.182-.142.361-.27.303-.218.511-.42.626-.604.116-.186.173-.375.173-.578a.898.898 0 0 0-.151-.512.892.892 0 0 0-.412-.341c-.174-.076-.419-.111-.733-.111-.3 0-.537.038-.706.114a.889.889 0 0 0-.396.338c-.094.143-.159.346-.194.604l.894.076c.025-.188.074-.317.147-.394a.375.375 0 0 1 .279-.108c.11 0 .2.035.272.108a.344.344 0 0 1 .108.258.55.55 0 0 1-.108.297c-.074.102-.241.254-.503.453zm.055 6.386a.398.398 0 0 1-.282-.105c-.074-.07-.128-.195-.162-.378L4 18.085c.059.204.142.372.251.506.109.133.248.235.417.306.168.069.399.103.692.103.3 0 .541-.047.725-.14a1 1 0 0 0 .424-.403c.098-.175.146-.354.146-.544a.823.823 0 0 0-.088-.393.708.708 0 0 0-.249-.261 1.015 1.015 0 0 0-.286-.11.943.943 0 0 0 .345-.299.673.673 0 0 0 .113-.383.747.747 0 0 0-.281-.596c-.187-.159-.49-.238-.909-.238-.365 0-.648.072-.847.219-.2.143-.334.353-.404.626l.844.151c.023-.162.067-.274.133-.338s.151-.098.257-.098a.33.33 0 0 1 .241.089c.059.06.087.139.087.238 0 .104-.038.193-.117.27s-.177.112-.293.112a.907.907 0 0 1-.116-.011l-.045.649a1.13 1.13 0 0 1 .289-.056c.132 0 .237.041.313.126.077.082.115.199.115.352 0 .146-.04.266-.119.354a.394.394 0 0 1-.301.134zm.948-10.083V5h-.739a1.47 1.47 0 0 1-.394.523c-.168.142-.404.262-.708.365v.754a2.595 2.595 0 0 0 .937-.48v2.206h.904zM9 6h11v2H9zm0 5h11v2H9zm0 5h11v2H9z"></path></svg></button>
      <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"></path><path d="m8 11-3 4h11l-4-6-3 4z"></path><path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path></svg></button>
    </nav>
    <textarea 
      v-model="post.textPost" 
      class="h-80 w-full p-2 text-xl outline-none resize-none placeholder:text-xl"
      :placeholder="'¿Qué estás pensando, ' + firstName + '?'"
      @mouseup="handleMouseUp"
    ></textarea>
    
  </div>
</template>

