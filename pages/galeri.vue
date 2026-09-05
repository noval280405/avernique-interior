<script setup lang="ts">
import { gallery } from "~/data/site";
useSeoMeta({
  title: "Galeri | Avernique Interior",
  description:
    "Inspirasi furniture, interior, material, workshop, dan instalasi Avernique Interior.",
});
const filter = ref("Semua");
const filtered = computed(() =>
  filter.value === "Semua"
    ? gallery
    : gallery.filter((item) => item.category === filter.value),
);
</script>
<template>
  <div>
    <GalleryHero />
    <section class="container-shell section-bottom">
      <GalleryFilter v-model="filter" /><GalleryGrid :items="filtered" />
    </section>
  </div>
</template>
