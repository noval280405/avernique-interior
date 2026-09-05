<script setup lang="ts">
const values = [
  {
    title: "Desain Custom",
    text: "Desain disesuaikan dengan kebutuhan ruang.",
  },
  {
    title: "Material Pilihan",
    text: "Material dipilih berdasarkan kebutuhan dan budget.",
  },
  { title: "Detail Finishing", text: "Setiap detail pengerjaan diperhatikan." },
  { title: "Survey Lokasi", text: "Tersedia survey untuk proyek tertentu." },
];
</script>
<template>
  <section class="section section-sand">
    <div class="container-shell">
      <UiSectionTitle
        eyebrow="THE AVERNIQUE DIFFERENCE"
        title="Mengapa Avernique?"
        align="center"
      />
      <div class="values-grid">
        <article v-for="(item, i) in values" :key="item.title">
          <span class="value-number">0{{ i + 1 }}</span>
          <h3>{{ item.title }}</h3>
          <p class="description">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
