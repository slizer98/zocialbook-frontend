import api from '../lib/axios'

export default {
  createPost(data) {
    const formData = new FormData()
    formData.append('imagePost', data.imagePost)
    formData.append('text', data.textPost)
    formData.append('userId', data.userId)
    formData.append('createdAt', data.createdAt)
    formData.append('usernameUrl', data.usernameUrl)

    const token = localStorage.getItem('AUTH_TOKEN')
    return api.post('/post/create-post', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  getPosts(usernameUrl) {
    const token = localStorage.getItem('AUTH_TOKEN')
    return api.get(`/post/get-posts/${usernameUrl}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  likePost(postId) {
    const token = localStorage.getItem('AUTH_TOKEN')
    return api.post('/post/like-post', { postId }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}