import api from '../lib/axios'

export default {
  createPost(data) {
    const formData = new FormData()
    formData.append('imagePost', data.imagePost)
    formData.append('text', data.textPost)
    formData.append('userId', data.userId)
    formData.append('createdAt', data.createdAt)

    const token = localStorage.getItem('AUTH_TOKEN')
    return api.post('/post/create-post', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}