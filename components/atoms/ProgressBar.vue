<template>
  <div class="my-3">
    <span>{{ skill.name }}</span>
    <div class="relative w-full">
      <label
        id="p02d-label"
        for="p02d"
        class="absolute top-0 left-0 block w-full mb-0 text-xs text-center text-white"
        ><span class="sr-only">{{ skill.name }}</span>
        {{ skill.value }} %</label
      >
      <progress
        aria-labelledby="p02d-label"
        id="p02d"
        max="100"
        :value="skill.value"
        class="block w-full overflow-hidden bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-blue [&::-moz-progress-bar]:bg-blue rounded-full"
      >
        {{ skill.value }} %
      </progress>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  skill: {
    type: {
      name: String,
      value: String,
    },
    required: true,
  },
});
</script>
