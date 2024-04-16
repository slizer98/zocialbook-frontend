import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import PostAPI from '@/api/PostAPI'
import { useUserStore } from './user'


export const usePostStore = defineStore('post', () => {

  const posts = ref([])
  const textPost = ref('')
  const imagePost = ref(null)
  const isLiked = ref(false)
  const likes = ref(0)

  const user = useUserStore()
  const userLoaded = user.userLoaded;
  let usernameUrl = ''
  
  userLoaded.then(() => {
    usernameUrl = user.user.usernameUrl
    getPosts(usernameUrl)
  });


  const existPost = computed(() => posts.value.length > 0) 

  const getPosts = async (usernameUrl) => {
    try {
      const { data } = await PostAPI.getPosts(usernameUrl);
      posts.value = data;
    } catch (error) {
      console.error('Error al obtener los posts:', error);
    }
  }
  
  const findIfUserLiked = async (postId) => {
    try {
      const { data } = await PostAPI.likePost(postId);
      return {
        isLiked: data.liked,
        likesCount: data.likes
      };
    } catch (error) {
      console.error('Error al obtener el estado de like:', error);
      return {
        isLiked: false,
        likesCount: 0
      };
    }
  };

  return {
    textPost,
    imagePost,
    existPost,
    posts,
    findIfUserLiked,
    isLiked,
    likes,
    getPosts,
  }
})