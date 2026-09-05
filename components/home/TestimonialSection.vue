<script setup lang="ts">
const testimonials = [
  {
    name: "Amanda",
    text: "Kitchen set sesuai dengan desain yang kami inginkan dan hasil pengerjaannya terlihat rapi.",
    type: "Custom Kitchen Set",
  },
  {
    name: "Kevin",
    text: "Sofa custom dibuat sesuai ukuran ruangan dan hasil akhirnya sangat cocok dengan interior rumah.",
    type: "Custom Furniture",
  },
  {
    name: "Rian",
    text: "Interior kantor menjadi jauh lebih nyaman dan terlihat profesional.",
    type: "Office Interior",
  },
];
</script>
<template>
  <section class="section container-shell">
    <UiSectionTitle
      eyebrow="WORDS FROM OUR CLIENTS"
      title="Cerita dari Klien Kami"
      align="center"
    />
    <div class="testimonial-grid">
      <figure v-for="item in testimonials" :key="item.name">
        <p class="stars" aria-label="5 dari 5 bintang">★★★★★</p>
        <blockquote>“{{ item.text }}”</blockquote>
        <figcaption>
          <strong>{{ item.name }}</strong
          ><span>{{ item.type }}</span>
        </figcaption>
      </figure>
    </div>
    <p class="sample-note">Testimoni ilustrasi untuk preview website.</p>
  </section>
</template>
