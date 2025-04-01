<template>
  <Navbar v-show="!showCurtain" />
  <main>
    <NuxtPage />
  </main>
  <Footer v-show="!showCurtain"></Footer>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

const showCurtain = useState<boolean>("showCurtain", () => false);
const route = useRoute();
const isOnRoot = route.path === "/" || route.path === "";
const isScrolling = useState<boolean>("isScrolling", () => false);
const activeSection = useState<string | null>("activeSection", () => null);
const isMobile = useState<boolean>("isMobile", () => false);

if (isOnRoot) {
  showCurtain.value = true;
} else {
  showCurtain.value = false;
}

function scrollToSection(sectionId, event = null) {
  if (event) event.preventDefault();

  isScrolling.value = true;
  activeSection.value = sectionId;

  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 120; // Adjust for sticky header height
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }

  setTimeout(() => {
    isScrolling.value = false;
  }, 1200);
}

// Handle direct access with hash
onMounted(() => {
  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1);
    setTimeout(() => scrollToSection(sectionId), 10); // Delay to ensure DOM is ready
  }

  window.addEventListener("resize", () => {
    setTimeout(() => {
      isMobile.value = window.innerWidth < 767;
    }, 2000);
  });
});

useSeoMeta({
  title: "Hanna Julia Rodler",
  ogTitle: "Hanna Julia Rodler | Web Developer",
  description:
    "Hanna Julia Rodler ist eine Full-Stack Webentwicklerin aus Linz, spezialisiert auf moderne Webtechnologien und kreative digitale Lösungen.",
  ogDescription:
    "Hanna Julia Rodler ist eine Full-Stack Webentwicklerin aus Linz, spezialisiert auf moderne Webtechnologien und kreative digitale Lösungen.",
  ogImage: "https://hannajuliarodler.com/_ipx/s_320x480/images/HJRodler.png",
});
</script>
