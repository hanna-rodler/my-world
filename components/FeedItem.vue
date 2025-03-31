<template>
  <li
    role="article"
    class="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-blue before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:-left-[2.5rem] lg:left-[4rem]"
  >
    <div class="flex flex-col flex-1 gap-3">
      <div class="flex flex-col">
        <h4
          class="flex flex-col md:flex-row text-base md:text-lg font-medium leading-7"
        >
          <span :class="{ 'font-bold': item.highlight }">{{ item.title }}</span>
          <span class="font-light" v-if="item.company">
            <span class="hidden md:inline-block md:mx-2"> - </span>
            {{ item.company }}</span
          >
        </h4>
        <span class="font-normal text-gray leading-normal">
          {{ item.date }}</span
        >
      </div>
      <p v-if="item.description && item.description.length == 1">
        {{ item.description[0] }}
      </p>
      <ul
        v-if="item.description && item.description.length >= 2"
        class="pl-5 list-disc marker:text-blue"
      >
        <li v-for="(desc, index) in item.description" :key="index" class="my-1">
          {{ desc }}
        </li>
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Experience } from "~/types/experience.type";

const props = defineProps({
  item: {
    type: Object as () => Experience,
    required: true,
  },
});
</script>
