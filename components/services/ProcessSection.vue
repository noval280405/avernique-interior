<script setup lang="ts">
const steps = [
  "Konsultasi",
  "Survey",
  "Konsep Desain",
  "Penawaran",
  "Produksi",
  "Instalasi",
  "Serah Terima",
];
</script>
<template>
  <section class="section section-sand">
    <div class="container-shell">
      <UiSectionTitle
        eyebrow="OUR PROCESS"
        title="Dari Ide Menjadi Ruang"
        description="Proses yang terarah, dengan Anda di setiap langkahnya."
      />
      <ol class="process-timeline">
        <li v-for="(step, i) in steps" :key="step">
          <span>0{{ i + 1 }}</span>
          <h3>{{ step }}</h3>
        </li>
      </ol>
    </div>
  </section>
</template>
