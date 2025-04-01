<template>
  <div
    class="bg-gradient-main-lighter relative h-screen w-screen flex items-center justify-center cursor-pointer overflow-hidden"
    @click="openCurtain()"
  >
    <!-- Left Panel -->
    <div
      class="absolute top-0 left-0 w-1/2 h-full bg-gray-purple transition-all duration-700 flex items-center justify-end pr-4"
      :class="{ '-translate-x-full': isOpen }"
    >
      <h1
        class="text-gradient-main text-[30vw] font-bold drop-shadow-2xl relative z-10"
      >
        <span>H</span><span>e</span>
      </h1>
    </div>
    <!-- Right Panel -->
    <div
      class="absolute top-0 right-0 w-1/2 h-full bg-gray-purple transition-all duration-700 flex items-center justify-start pl-4"
      :class="{ 'translate-x-full': isOpen }"
    >
      <h1
        class="text-gradient-main text-[30vw] font-bold drop-shadow-2xl relative z-10"
      >
        <span>l</span><span>l</span><span>o</span>
      </h1>
    </div>
    <div class="absolute left-1/2 top-0 w-[2px] bg-gray-purple h-screen"></div>
    <div
      class="absolute left-1/2 animate-pulse h-6 w-6 -ml-3 rounded-full bg-dirtyPurple bottom-56"
    ></div>
    <div
      class="absolute left-1/2 w-60 md:w-80 space-y-2 ml-[-7.5rem] md:-ml-40 bottom-20"
    >
      <div class="bg-white text-xl md:text-3xl text-center py-2">
        Hanna Julia Rodler
      </div>
      <div class="bg-white text-xl md:text-3xl text-center py-2 font-light">
        Web Developer
      </div>
    </div>
  </div>
  <!-- <div
    class="relative h-screen w-screen flex items-center justify-center bg-gradient-main-lighter cursor-pointer overflow-hidden"
    @click="openCurtain"
  >

    <!-- Content Revealed After Curtain Opens -->
  <!--<div
      v-show="isOpen"
      class="absolute left-1/2 animate-pulse h-6 w-6 -ml-3 rounded-full bg-dirtyPurple bottom-56 z-10"
    ></div>
    <div
      v-show="isOpen"
      class="absolute left-1/2 w-60 md:w-80 space-y-2 ml-[-7.5rem] md:-ml-40 bottom-20 z-10"
    >
      <div class="bg-white text-xl md:text-3xl text-center py-2">Name</div>
      <div class="bg-white text-xl md:text-3xl text-center py-2 font-light">
        Web Developer
      </div>
    </div>
  </div> -->
  <!-- <div class="curtain w-full h-screen overflow-hidden">
    <div class="curtain__wrapper w-full h-full">
      <input type="checkbox" class="curtain__checkbox" checked />
      <div class="curtain__panel curtain__panel--left">

      </div>

      <div class="curtain__prize">Background behind!</div>

      <div class="curtain__panel curtain__panel--right"></div>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const openCurtain = () => {
  isOpen.value = true;
};
onMounted(() => {
  const header = document.getElementsByTagName("header")[0];
  console.log("header", header);
  if (header) {
    header.classList.add("hidden");
    header.classList.remove("md:flex");
  }
  const footer = document.getElementsByTagName("footer")[0];
  if (footer) {
    footer.classList.add("hidden");
  }
});
</script>

<style scoped>
.transition-all {
  transition: transform 0.7s ease-in-out;
}
</style>
