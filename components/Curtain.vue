<template>
  <!-- <div
    class="bg-gradient-main-lighter h-screen flex items-center cursor-pointer"
    @click="openCurtain()"
  >
    <h1
      class="text-gradient-main w-full flex justify-between items-center text-[30vw] font-bold min-h-[50vw] -mt-14"
    >
      <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>
    </h1>
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
    </div>
</div> -->
  <div class="curtain w-full h-screen overflow-hidden">
    <div class="curtain__wrapper w-full h-full">
      <input type="checkbox" class="curtain__checkbox" checked />
      <div class="curtain__panel curtain__panel--left"></div>
      <!-- curtain__panel -->

      <!-- The prize behind the curtain panels -->
      <div class="curtain__prize">Prize!</div>
      <!-- curtain__prize -->

      <!-- The right curtain panel -->
      <div class="curtain__panel curtain__panel--right"></div>
      <!-- curtain__panel -->
    </div>
    <!-- curtain__wrapper -->
  </div>
  <!-- curtain -->
</template>
<!-- TODO: calc text-[xrem]? probably -->
<script setup lang="ts">
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

function openCurtain() {
  console.log("open curtain");
}
</script>
