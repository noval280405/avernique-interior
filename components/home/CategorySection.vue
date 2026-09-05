<script setup lang="ts">
import { categories } from "~/data/site";
</script>
<template>
  <section id="ruang" class="section container-shell">
    <div class="section-heading">
      <UiSectionTitle
        eyebrow="SPACES FOR YOUR EVERYDAY"
        title="Furniture untuk Setiap Ruang"
        description="Temukan pilihan furniture yang dirancang untuk melengkapi setiap bagian rumah Anda."
      /><span class="section-index">01 / EXPLORE</span>
    </div>
    <div class="category-grid">
      <NuxtLink
        v-for="item in categories"
        :key="item.name"
        :to="{ path: '/produk', query: { kategori: item.filter } }"
        class="category-card"
        ><div class="image-wrap">
          <UiPhoto :src="item.image" :alt="item.name" />
        </div>
        <h3>{{ item.name }} <span>↗</span></h3>
        <p>{{ item.description }}</p></NuxtLink
      >
    </div>
  </section>
</template>
