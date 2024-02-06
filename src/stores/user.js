import { ref, onMounted, computed } from "vue";
import { defineStore } from "pinia";
import AuthAPI from "@/api/AuthAPI";


export const useUserStore = defineStore("user", () => {
    const user = ref({})

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    onMounted(async() => {
        try {
            const { data } = await AuthAPI.auth()
            user.value = data  
            user.value.birthday = transformBirthdayToEdit()
            localStorage.setItem("user_data", JSON.stringify(data))
            
        } catch (error) {
            console.log(error)
        }
    })

    const transformDate = (date) => {
        const newDate = new Date(date)
        const year = newDate.getFullYear()
        return year
    }

  // tranform birthday to a compatible format with the date input
    const transformBirthdayToEdit = () => {
        if (user.value?.birthday) {
            const newDate = new Date(user.value.birthday)
            const year = newDate.getFullYear()
            const month = newDate.getMonth() + 1
            const day = newDate.getDate() + 1
            return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`
        }
        return ""
    }

    const transformBirthday = (date) => {
        const newDate = new Date(date)
        const year = newDate.getFullYear()
        const month = newDate.getMonth() + 1
        const day = newDate.getDate() + 1
        return `${day < 10 ? "0" + day : day} de ${monthNames[month - 1]} de ${year}`
    }

    const getFirstLetter = computed(() => {
        if (user.value?.username) {
            return user.value.username[0].toUpperCase()
        }
        return ""
    })
    
    return {
        user,
        getFirstLetter,
        transformDate,
        transformBirthday
    }
});