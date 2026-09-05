<script setup lang="ts">
const values = [
  {
    name: "FUNGSIONAL",
    text: "Furniture dirancang agar nyaman dan efektif digunakan.",
  },
  {
    name: "PERSONAL",
    text: "Setiap desain dapat disesuaikan dengan kebutuhan.",
  },
  {
    name: "BERKUALITAS",
    text: "Material dipilih berdasarkan kebutuhan proyek.",
  },
  {
    name: "DETAIL",
    text: "Finishing dan detail menjadi bagian penting dari setiap pekerjaan.",
  },
];
</script>
<template>
  <section class="section section-sand">
    <div class="container-shell">
      <UiSectionTitle eyebrow="OUR VALUES" title="Nilai yang Kami Bawa" />
      <div class="values-grid">
        <article v-for="(value, i) in values" :key="value.name">
          <span class="value-number">0{{ i + 1 }}</span>
          <h3>{{ value.name }}</h3>
          <p class="description">{{ value.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
