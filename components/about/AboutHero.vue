<script setup lang="ts">
import { photos } from "~/data/site";
</script>
<template>
  <UiPageHero
    eyebrow="TENTANG AVERNIQUE"
    title="Kami Merancang Ruang untuk Kehidupan yang Lebih Baik."
    description="Setiap ruang memiliki cerita. Kami membantu Anda mewujudkannya."
    :image="photos.living"
  ></UiPageHero>
</template>
