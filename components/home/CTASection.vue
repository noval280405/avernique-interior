<script setup lang="ts">
import { photos, whatsapp } from "~/data/site";
</script>
<template>
  <section class="cta-section">
    <UiPhoto :src="photos.living" alt="Interior rumah bernuansa hangat" />
    <div class="cta-content">
      <p class="eyebrow">LET’S CREATE SOMETHING BEAUTIFUL</p>
      <h2>Wujudkan Ruang<br />yang Anda Inginkan.</h2>
      <p>
        Punya ide untuk rumah, kantor, atau bisnis Anda?<br />Konsultasikan
        bersama Avernique Interior.
      </p>
      <UiPrimaryButton :to="whatsapp()" external
        >Konsultasi Sekarang</UiPrimaryButton
      >
    </div>
  </section>
</template>
