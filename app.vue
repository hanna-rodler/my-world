<template>
  <Navbar />
  <main>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtPage />
  </main>
  <Footer></Footer>
</template>
<script setup lang="ts">
const showCurtainEffect = useState("showCurtainEffect", () => true);
</script>
