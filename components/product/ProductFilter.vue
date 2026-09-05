<script setup lang="ts">
defineProps<{ modelValue: string }>();
const emit = defineEmits<{ "update:modelValue": [value: string] }>();
const filters = [
  "Semua",
  "Sofa",
  "Meja",
  "Kursi",
  "Lemari",
  "Bedroom",
  "Workspace",
  "Kitchen",
];
</script>
<template>
  <div class="filter-bar" role="group" aria-label="Filter kategori">
    <button
      v-for="filter in filters"
      :key="filter"
      :class="{ selected: modelValue === filter }"
      :aria-pressed="modelValue === filter"
      @click="emit('update:modelValue', filter)"
    >
      {{ filter }}
    </button>
  </div>
</template>
