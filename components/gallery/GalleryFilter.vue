<script setup lang="ts">
defineProps<{ modelValue: string }>();
const emit = defineEmits<{ "update:modelValue": [value: string] }>();
const filters = [
  "Semua",
  "Furniture",
  "Interior",
  "Material",
  "Workshop",
  "Installation",
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
