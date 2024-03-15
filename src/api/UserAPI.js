import api from '../lib/axios'

export default {
    updateProfile(data, usernameUrl) {
        const token = localStorage.getItem('AUTH_TOKEN')
        return api.patch(`user/update-user/${usernameUrl}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    saveAvatar(profilePicture, usernameUrl) {
        const token = localStorage.getItem('AUTH_TOKEN')
        return api.post(`user/save-picture/${usernameUrl}`, profilePicture, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    savePicture(file, usernameUrl) {
      const formData = new FormData();
      formData.append('profilePicture', file);
    
      const token = localStorage.getItem('AUTH_TOKEN');
      return api.post(`user/upload-picture/${usernameUrl}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
    }
}