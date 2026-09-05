<script setup lang="ts">
defineProps<{
  collection: {
    name: string;
    description: string;
    image: string;
    filter: string;
  };
}>();
</script>
<template>
  <NuxtLink
    :to="{ path: '/produk', query: { kategori: collection.filter } }"
    class="collection-card"
    ><UiPhoto :src="collection.image" :alt="collection.name" />
    <div>
      <h2>{{ collection.name }}</h2>
      <p>{{ collection.description }}</p>
      <span class="text-link">Explore Collection ↗</span>
    </div></NuxtLink
  >
</template>
