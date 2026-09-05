<script setup lang="ts">
import { products } from "~/data/site";
const featured = [products[0]!, products[3]!, products[9]!, products[5]!];
</script>
<template>
  <section class="section section-sand">
    <div class="container-shell">
      <div class="section-heading">
        <UiSectionTitle
          eyebrow="CURATED FOR YOU"
          title="Produk Pilihan"
          description="Furniture pilihan untuk melengkapi ruang Anda."
        /><NuxtLink to="/produk" class="text-link"
          >Lihat Semua Produk <span>↗</span></NuxtLink
        >
      </div>
      <div class="product-grid">
        <ProductCard
          v-for="product in featured"
          :key="product.name"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>
