import { ref, onMounted, computed } from "vue";
import { defineStore } from "pinia";
import AuthAPI from "@/api/AuthAPI";


export const useUserStore = defineStore("user", () => {
    const user = ref({})
    onMounted(async () => {
        try {
            const { data } = await AuthAPI.auth()
            user.value = data  
            user.value.createAt = transformDate()
            console.log(user.value)
        } catch (error) {
            console.log(error)
        }
    })

    // TODO: create a new function to load the user data

    const transformDate = () => {
        const optionFormat = { year: 'numeric', month: 'long', day: 'numeric' }
        const newDate = new Date(user.value?.createAt)
        const allDate = newDate.toLocaleDateString('es-ES', optionFormat)
        const year = newDate.getFullYear()
        return year
    }
    const getUsername = computed(() => user.value?.username ? user.value.username : '')
    
    return {
        user,
        getUsername,
        transformDate
    }
});