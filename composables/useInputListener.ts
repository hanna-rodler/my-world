import { ref, onMounted, onUnmounted } from "vue";

export function useInputListener() {
  const isInteracting = ref(false);
  const interactionType = ref<"mouse" | "touch" | null>(null);

  const handleWheel = () => {
    isInteracting.value = true;
    interactionType.value = "mouse";
  };

  let startY = 0;

  const handleTouchStart = (event: TouchEvent) => {
    startY = event.touches[0].clientY;
  };

  const handleTouchMove = (event: TouchEvent) => {
    const currentY = event.touches[0].clientY;
    if (Math.abs(currentY - startY) > 5) {
      isInteracting.value = true;
      interactionType.value = "touch";
    }
  };

  onMounted(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchmove", handleTouchMove);
  });

  return { isInteracting, interactionType };
}
