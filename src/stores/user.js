import { ref, onMounted, computed } from 'vue';
import { defineStore } from 'pinia';
import AuthAPI from '@/api/AuthAPI';

export const useUserStore = defineStore('user', () => {
  const user = ref({});
  const userLogged = ref(false);
  const postIds = ref([]);

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const loadUser = async () => {
    try {
      const { data } = await AuthAPI.auth();
      user.value = data;
      user.value.birthday = transformBirthdayToEdit();
      localStorage.setItem('user_data', JSON.stringify(data))
      userLogged.value = true
    } catch (error) {
      console.error(error);
    }
  };

  const userLoaded = new Promise((resolve) => {
    onMounted(async () => {
      await loadUser();
      resolve(true);
    });
  });

  
  const transformDate = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    return year;
  };

  const transformBirthdayToEdit = () => {
    if (user.value?.birthday) {
      const newDate = new Date(user.value.birthday);
      const year = newDate.getFullYear();
      const month = newDate.getMonth() + 1;
      const day = newDate.getDate() + 1;
      return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    }
    return '';
  };

  const transformBirthday = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate() + 1;
    return `${day < 10 ? '0' + day : day} de ${monthNames[month - 1]} de ${year}`;
  };

  const getFirstLetter = computed(() => {
    if (user.value?.username) {
      return user.value.username[0].toUpperCase();
    }
    return '';
  });

  const updateUser = (newUserData) => {
    user.value = { ...user.value, ...newUserData };
  };

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  
  }

  return {
    user,
    postIds,
    getFirstLetter,
    transformDate,
    transformBirthday,
    userLogged,
    updateUser,
    disableScroll,
    enableScroll,
    userLoaded,
  };
});
