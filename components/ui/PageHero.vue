<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
}>();
</script>
<template>
  <section class="page-hero container-shell" :class="{ 'has-image': image }">
    <div>
      <p class="eyebrow">{{ eyebrow || "AVERNIQUE INTERIOR" }}</p>
      <h1>{{ title }}</h1>
      <p v-if="description" class="description">{{ description }}</p>
      <slot />
    </div>
    <UiPhoto v-if="image" :src="image" :alt="title" eager />
  </section>
</template>
