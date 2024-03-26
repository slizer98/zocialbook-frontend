import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostStore = defineStore('post', () => {

  const textPost = ref('')

  return {
    textPost
  }
})