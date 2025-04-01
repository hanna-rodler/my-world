<template>
  <div
    class="relative w-screen flex items-center justify-center cursor-pointer overflow-hidden"
    @click="openCurtain()"
    :class="{ 'h-screen': !hideCurtain }"
  >
    <!-- Left Panel -->
    <div
      class="absolute top-0 left-0 w-1/2 h-full bg-gradient-light-left transition-all duration-700 flex items-center justify-end pr-4"
      :class="{ '-translate-x-full': isOpen }"
    >
      <h1
        class="text-gradient-left text-[30vw] font-bold drop-shadow-2xl relative z-10"
      >
        <span>H</span><span>e</span>
      </h1>
    </div>
    <!-- Right Panel -->
    <div
      class="absolute top-0 right-0 w-1/2 h-full bg-gradient-light-right transition-all duration-700 flex items-center justify-start pl-4"
      :class="{ 'translate-x-full': isOpen }"
    >
      <h1
        class="text-gradient-right text-[30vw] font-bold drop-shadow-2xl relative z-10"
      >
        <span>l</span><span>l</span><span>o</span>
      </h1>
    </div>
    <!-- Absolute placed additional content -->
    <div
      v-show="!isOpen"
      class="absolute left-1/2 top-0 w-[2px] bg-gray-purple h-screen"
    ></div>
    <div
      v-show="!isOpen"
      class="absolute left-1/2 animate-pulse h-6 w-6 -ml-3 rounded-full bg-dirtyPurple bottom-56"
    ></div>
    <div
      v-show="!isOpen"
      class="absolute left-1/2 w-60 md:w-80 space-y-2 ml-[-7.5rem] md:-ml-40 bottom-20 transition-all duration-700"
    >
      <!-- <div
      class="absolute left-1/2 w-60 md:w-80 space-y-2 ml-[-7.5rem] md:-ml-40 bottom-20 animateMoveOutOfView bg-orange"
      :class="{ '-translate-y-full opacity-0': isOpen }"
    > -->
      <div class="bg-white text-xl md:text-3xl text-center py-2">
        Hanna Julia Rodler
      </div>
      <div class="bg-white text-xl md:text-3xl text-center py-2 font-light">
        Web Developer
      </div>
    </div>
  </div>
  <div v-show="isOpen" class="transition-all duration-700 ease-in">
    <Introduction />
    <About />
    <Knowledge />
    <Contact />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const box = ref(null);
const showCurtainEffect = useState("showCurtainEffect");

const isOpen = ref(false);
const header = ref<Element | null>(null);
const footer = ref<Element | null>(null);
const hideCurtain = ref(false);

onMounted(() => {
  header.value = document.getElementsByTagName("header")[0];
  footer.value = document.getElementsByTagName("footer")[0];
  console.log("hide header and footer");
  if (header.value) {
    header.value.classList.add("hidden");
    header.value.classList.remove("md:flex");
  }
  if (footer.value) {
    footer.value.classList.add("hidden");
  }
});

const openCurtain = () => {
  requestAnimationFrame(() => {
    box.value.style.transition = "transform 1.5s ease-in-out";
    box.value.style.transform = `translateY(-${window.innerHeight}px)`;
  });
  setTimeout(() => {
    isOpen.value = true;
    if (header.value) {
      header.value.classList.remove("hidden");
      header.value.classList.add("md:flex");
    }
    if (footer.value) {
      footer.value.classList.remove("hidden");
    }
  }, 700);
  setTimeout(() => {
    hideCurtain.value = true;
    showCurtainEffect.value = false;
  }, 1400);
};
</script>

<script lang="ts"></script>

<style scoped>
.transition-all {
  transition:
    transform 0.7s ease-in-out,
    opacity 0.7s ease-in-out;
}

.animateMoveTopOfScreen {
  transform: translateY(100%);
  opacity: 0;
  transition:
    transform 0.7s ease-in-out,
    opacity 0.7s ease-in-out;
}
.isOpen .animateMoveTopOfScreen {
  transform: translateY(0);
  opacity: 1;
}
</style>
