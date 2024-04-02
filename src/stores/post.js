import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const usePostStore = defineStore('post', () => {

  const posts = ref([])
  const textPost = ref('')
  const imagePost = ref(null)

  const existPost = computed(() => posts.value.length > 0)

  return {
    textPost,
    imagePost,
    existPost,
  }
})