<script setup lang="ts">
import { services } from "~/data/site";
</script>
<template>
  <section class="section section-dark">
    <div class="container-shell">
      <div class="section-heading">
        <UiSectionTitle
          eyebrow="OUR EXPERTISE"
          title="Apa yang Kami Kerjakan"
          description="Dari satu furniture istimewa hingga ruang yang seutuhnya Anda."
        /><NuxtLink to="/layanan" class="text-link"
          >Lihat Semua Layanan <span>↗</span></NuxtLink
        >
      </div>
      <div class="service-preview-grid">
        <NuxtLink
          v-for="(service, i) in services"
          :key="service.name"
          :to="`/layanan#layanan-${i}`"
          class="service-row"
          ><span class="service-number">0{{ i + 1 }}</span>
          <h3>{{ service.name }}</h3>
          <span>↗</span></NuxtLink
        >
      </div>
    </div>
  </section>
</template>
