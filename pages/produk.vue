<script setup lang="ts">
import { products } from "~/data/site";
useSeoMeta({
  title: "Furniture & Custom Furniture | Avernique Interior",
  description:
    "Jelajahi sofa, meja, kursi, lemari, bedroom, workspace dan kitchen set custom Avernique Interior.",
});
const route = useRoute();
const router = useRouter();
const validFilters = [
  "Semua",
  "Sofa",
  "Meja",
  "Kursi",
  "Lemari",
  "Bedroom",
  "Workspace",
  "Kitchen",
];
const filter = computed({
  get: () =>
    typeof route.query.kategori === "string" &&
    validFilters.includes(route.query.kategori)
      ? route.query.kategori
      : "Semua",
  set: (value: string) => {
    router.replace({ query: value === "Semua" ? {} : { kategori: value } });
  },
});
const filtered = computed(() =>
  filter.value === "Semua"
    ? products
    : products.filter((product) => product.category === filter.value),
);
</script>
<template>
  <div>
    <ProductHero />
    <section class="container-shell section-bottom">
      <ProductFilter v-model="filter" /><ProductGrid :products="filtered" />
    </section>
    <HomeCTASection />
  </div>
</template>
