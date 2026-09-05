<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    description?: string;
    align?: string;
  }>(),
  { align: "left" },
);
</script>
<template>
  <header
    class="section-title"
    :class="{ 'text-center mx-auto': align === 'center' }"
  >
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="description">{{ description }}</p>
  </header>
</template>
