import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostStore = defineStore('post', () => {

  const textPost = ref('')
  const imagePost = ref(null)

  return {
    textPost,
    imagePost
  }
})