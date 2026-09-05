<script setup lang="ts">
const materials = [
  {
    name: "Solid Wood",
    text: "Natural · Strong · Timeless",
    image: "/images/material-wood.svg",
  },
  {
    name: "Plywood",
    text: "Strong · Versatile",
    image: "/images/material-plywood.svg",
  },
  { name: "MDF", text: "Clean · Flexible", image: "/images/material-mdf.svg" },
  {
    name: "HPL",
    text: "Texture · Color · Durable",
    image: "/images/material-hpl.svg",
  },
  {
    name: "Fabric",
    text: "Comfort · Soft",
    image: "/images/material-fabric.svg",
  },
  {
    name: "Leather",
    text: "Premium · Timeless",
    image: "/images/material-leather.svg",
  },
];
</script>
<template>
  <section class="section container-shell">
    <UiSectionTitle
      eyebrow="THE FOUNDATION OF QUALITY"
      title="Material Pilihan"
      description="Tekstur, karakter, dan kualitas yang melengkapi desain Anda."
    />
    <div class="material-grid">
      <article v-for="material in materials" :key="material.name">
        <UiPhoto
          :src="material.image"
          :alt="`Ilustrasi tekstur ${material.name}`"
        />
        <h3>{{ material.name }}</h3>
        <p class="material">{{ material.text }}</p>
      </article>
    </div>
  </section>
</template>
