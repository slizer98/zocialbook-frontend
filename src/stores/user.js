import { ref, onMounted, computed } from "vue";
import { defineStore } from "pinia";
import AuthAPI from "@/api/AuthAPI";


export const useUserStore = defineStore("user", () => {
    const user = ref({})

    onMounted(async() => {
        try {
            const { data } = await AuthAPI.auth()
            user.value = data  
            user.value.createAt = transformDate()
            user.value.birthday = transformBirthday.value
            localStorage.setItem("user_data", JSON.stringify(data))
            
        } catch (error) {
            console.log(error)
        }
    })

    const transformDate = () => {
        const newDate = new Date(user.value?.createAt)
        const year = newDate.getFullYear()
        return year
    }

  // tranform birthday to a compatible format with the date input
    const transformBirthday = computed(() => {
        if (user.value.birthday) {
            const newDate = new Date(user.value.birthday)
            const year = newDate.getFullYear()
            const month = newDate.getMonth() + 1
            const day = newDate.getDate() + 1
            return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`
        }
        return ""
    })

    const getFirstLetter = computed(() => {
        if (user.value?.username) {
            return user.value.username[0].toUpperCase()
        }
        return ""
    })
    
    return {
        user,
        getFirstLetter,
    }
});