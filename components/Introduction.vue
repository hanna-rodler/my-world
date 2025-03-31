<template>
  <div class="container-plain" style="margin-top: 0" id="introduction">
    <!-- TODO: Schrift einbinden -->
    <div
      class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 md:gap-x-4 md:h-[80vh]"
    >
      <div class="md:hidden my-5">
        <AtomsHeadline level="h1" levelStyle="gradient">
          Hanna Julia
        </AtomsHeadline>
        <AtomsHeadline level="h2" class="font-light"
          >Web Developer</AtomsHeadline
        >
      </div>
      <div class="w-full flex items-center justify-center">
        <div class="relative w-60 h-90 md:w-80 md:h-120 group md:mr-5">
          <div
            class="absolute w-full h-full bg-gradient-main rounded-2xl sm:rounded-3xl translate-x-3 sm:translate-x-5 translate-y-3 sm:translate-y-5 group-hover:translate-x-7 group-hover:translate-y-7 transition-transform duration-300"
          ></div>
          <NuxtImg
            class="rounded-2xl sm:rounded-3xl absolute w-full h-full group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
            src="/images/me.webp"
            alt="Hanna Julia"
            width="320"
            height="480"
            aspect-ratio="1.5"
          >
            <!-- // TODO: webp default jpg -->
          </NuxtImg>
        </div>
      </div>
      <div class="w-full mt-14 md:mt-0 md:flex md:flex-col md:justify-center">
        <div class="hidden md:block">
          <AtomsHeadline level="h1" levelStyle="gradient">
            Hanna Julia
          </AtomsHeadline>
          <AtomsHeadline level="h2" class="font-light"
            >Web Developer</AtomsHeadline
          >
        </div>
        <div class="md:mt-12">
          Ob in meiner Masterarbeit, meiner Arbeit oder bei Hobby Projekten -
          für mich geht es bei Technik um den Menschen. Ich entwickle
          leidenschaftlich Lösungen bei denen der User an erster Stelle steht.
          Technik soll für den Menschen und mit den Menschen geschaffen werden,
          sie soll den Menschen neues ermöglichen, altes vereinfachen und ......
        </div>
      </div>
    </div>
    <div class="md:h-[10vh] my-6 sm:my-8 md:my-0">
      <a
        href="#about"
        class="cursor-pointer flex flex-col items-center"
        @click="scrollToSection('about', $event)"
      >
        <div class="text-lg mb-2">Lerne mich kennen</div>
        <div>
          <Icon
            name="heroicons:chevron-double-down"
            size="42"
            class="bg-gradient-main shiny-text"
          />
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { scrollToSection } from "~/utils/utils";
</script>
