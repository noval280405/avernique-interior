<script setup lang="ts">
import type { Product } from "~/data/site";
defineProps<{ products: Product[] }>();
</script>
<template>
  <div>
    <p class="result-count" role="status">
      Menampilkan {{ products.length }} produk
    </p>
    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
  </div>
</template>
