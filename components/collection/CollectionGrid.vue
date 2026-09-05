<script setup lang="ts">
import { collections } from "~/data/site";
</script>
<template>
  <section class="container-shell section-bottom collection-grid">
    <CollectionCard
      v-for="collection in collections"
      :key="collection.name"
      :collection="collection"
    />
  </section>
</template>
