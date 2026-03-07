export function useMouseScroll() {
  const scrollY = ref(0);
  const lastScrollY = ref(0);

  const updateScroll = () => {
    lastScrollY.value = scrollY.value;
    scrollY.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener('scroll', updateScroll, { passive: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateScroll);
  });

  return { scrollY, lastScrollY };
}
