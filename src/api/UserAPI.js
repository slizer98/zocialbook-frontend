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
}