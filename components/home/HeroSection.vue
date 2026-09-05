<script setup lang="ts">
import { photos, whatsapp } from "~/data/site";
</script>
<template>
  <section class="home-hero">
    <div class="hero-copy">
      <p class="eyebrow">
        <span class="tiny-line"></span> FURNITURE • INTERIOR • CUSTOM
      </p>
      <h1>
        Ruang yang<br />Lebih Indah<span class="hero-italic"
          >Dimulai dari<br />Desain yang Tepat.</span
        >
      </h1>
      <p class="description">
        Furniture dan solusi interior modern yang dirancang untuk menghadirkan
        kenyamanan, fungsi, dan karakter pada setiap ruang.
      </p>
      <div class="hero-actions">
        <UiPrimaryButton to="/produk">Jelajahi Produk</UiPrimaryButton
        ><a
          :href="whatsapp()"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
          >Konsultasi Interior <span>↗</span></a
        >
      </div>
      <div class="hero-footnote">
        <span class="small-mark">A</span>
        <p>
          Dirancang dengan hati.<br /><strong
            >Dibuat untuk kehidupan Anda.</strong
          >
        </p>
      </div>
    </div>
    <div class="hero-visual">
      <UiPhoto
        :src="photos.hero"
        alt="Ruang tamu premium dengan sofa natural, aksen kayu, dan cahaya hangat"
        eager
      />
      <div class="hero-image-caption">
        <span>THE ART OF LIVING WELL</span><span>01 — 03</span>
      </div>
      <div class="image-note">
        <span>Thoughtfully designed.</span><em>Beautifully lived.</em>
      </div>
    </div>
    <a href="#ruang" class="scroll-note">SCROLL TO EXPLORE <span>↓</span></a>
  </section>
</template>
