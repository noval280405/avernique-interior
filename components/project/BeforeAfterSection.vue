<script setup lang="ts">
import { photos } from "~/data/site";
const position = ref(50);
</script>
<template>
  <section class="section section-sand">
    <div class="container-shell">
      <UiSectionTitle
        eyebrow="A NEW PERSPECTIVE"
        title="Transformasi Ruang"
        description="Geser untuk mengeksplorasi ilustrasi perubahan suasana ruang."
      />
      <div class="comparison">
        <UiPhoto
          :src="photos.living"
          alt="Sesudah: ruang dengan nuansa hangat"
        />
        <div
          class="comparison-before"
          :style="{ clipPath: `inset(0 ${100 - position}% 0 0)` }"
        >
          <UiPhoto
            :src="photos.living"
            alt="Sebelum: simulasi nuansa ruang desaturasi"
          />
        </div>
        <span class="comparison-label before-label">SEBELUM</span
        ><span class="comparison-label after-label">SESUDAH</span>
        <div class="comparison-handle" :style="{ left: `${position}%` }">
          <span>↔</span>
        </div>
        <input
          v-model.number="position"
          type="range"
          min="0"
          max="100"
          aria-label="Perbandingan sebelum dan sesudah"
        />
      </div>
      <p class="sample-note">
        Simulasi visual perubahan warna; bukan dokumentasi renovasi aktual.
      </p>
    </div>
  </section>
</template>
