<template>
  <ul
    aria-label="Alternative changelog feed with images"
    role="feed"
    class="relative flex flex-col pl-6 before:absolute before:left-6 before:top-0 before:h-full before:border-orange before:-translate-x-1/2 before:content-[''] before:w-[2px] before:bg-gradient-to-b before:from-orange before:via-pink before:to-blue before:z-10 after:content-[''] after:absolute after:bottom-3 after:-translate-x-1/2 after:border after:left-6 after:w-[2px] after:h-3 lg:pl-0 text-black w-full"
    :class="{
      'gap-7 py-6': smaller,
      'gap-7 md:gap-12 py-6 md:py-10': !smaller,
    }"
  >
    <FeedItem
      v-for="(item, index) in feed"
      :key="index"
      :item="item"
    ></FeedItem>
  </ul>
</template>

<script setup lang="ts">
import type { Experience } from "~/types/experience.type";

const props = defineProps({
  feed: {
    type: Array as PropType<Experience[]>,
    required: true,
  },
  smaller: {
    type: Boolean,
    default: false,
  },
});
</script>
