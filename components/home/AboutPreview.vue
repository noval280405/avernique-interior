<script setup lang="ts">
import { photos } from "~/data/site";
</script>
<template>
  <section class="section container-shell split-section">
    <div class="about-image">
      <UiPhoto
        :src="photos.dining"
        alt="Interior ruang makan dengan material alami"
      /><span class="photo-label">A space to feel at home.</span>
    </div>
    <div class="split-copy">
      <UiSectionTitle
        eyebrow="TENTANG AVERNIQUE"
        title="Ruang bukan hanya tempat untuk tinggal."
      />
      <p class="description">
        Avernique Interior menghadirkan furniture dan solusi interior yang
        memadukan fungsi, kenyamanan, dan estetika untuk menciptakan ruang yang
        memiliki karakter.
      </p>
      <p class="serif-quote">
        “Setiap ruang punya cerita.<br />Mari ciptakan cerita Anda.”
      </p>
      <NuxtLink to="/tentang" class="text-link"
        >Tentang Kami <span>↗</span></NuxtLink
      >
    </div>
  </section>
</template>
