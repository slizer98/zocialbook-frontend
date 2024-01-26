import { ref, onMounted, onUnmounted, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

export function useHeaderLogic() {
  const route = useRoute();
  const screenWidth = ref(window.innerWidth);
  const shouldRenderHeader = ref(false);
  const excludedRoutes = ['register', 'login', 'confirm-account'];

  const handleResize = () => {
    screenWidth.value = window.innerWidth;
  };

  onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  watch(() => route.name, () => {
    shouldRenderHeader.value = !excludedRoutes.includes(route.name);
  });

  watchEffect(() => {
    document.title = route.meta.title || 'ZocialBook';
  });

  return {
    screenWidth,
    shouldRenderHeader,
  };
}