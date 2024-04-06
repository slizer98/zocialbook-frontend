import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import PostAPI from '@/api/PostAPI'
import { useUserStore } from './user'


export const usePostStore = defineStore('post', () => {

  const posts = ref([])
  const textPost = ref('')
  const imagePost = ref(null)

  const user = useUserStore()
  const userLoaded = user.userLoaded;
  let usernameUrl = ''
  
  userLoaded.then(() => {
    usernameUrl = user.user.usernameUrl
    getPosts(usernameUrl)
  });

  const existPost = computed(() => posts.value.length > 0) 

  const getPosts = async (usernameUrl) => {
    const { data } = await PostAPI.getPosts(usernameUrl)
    posts.value = data
  }
  

  return {
    textPost,
    imagePost,
    existPost,
    posts,
  }
})