<script setup lang="ts">
import { photos } from "~/data/site";
</script>
<template>
  <section class="section container-shell split-section">
    <UiPhoto
      :src="photos.dining"
      alt="Furniture kayu dalam ruang makan natural"
      class="story-image"
    />
    <div class="split-copy">
      <UiSectionTitle
        eyebrow="OUR STORY"
        title="Furniture dan Interior yang Dibuat dengan Tujuan."
      />
      <p class="description">
        Avernique Interior menghadirkan furniture dan solusi interior yang
        menggabungkan fungsi, kenyamanan, serta estetika.
      </p>
      <p class="description mt-5">
        Kami percaya setiap ruang memiliki kebutuhan dan karakter yang berbeda.
      </p>
      <p class="description mt-5">
        Karena itu, setiap desain dapat disesuaikan berdasarkan ukuran,
        material, warna, fungsi dan kebutuhan pengguna.
      </p>
    </div>
  </section>
</template>
