<template>
  <Navbar v-show="!showCurtain" />
  <main>
    <NuxtPage />
  </main>
  <Footer v-show="!showCurtain"></Footer>
</template>
<script setup lang="ts">
const showCurtain = useState<boolean>("showCurtain", () => false);
const route = useRoute();
const isOnRoot = route.path === "/" || route.path === "";

if (isOnRoot) {
  showCurtain.value = true;
} else {
  showCurtain.value = false;
}

onMounted(() => {
  console.log("mounted: show Curtain: ", showCurtain.value);
});
</script>
