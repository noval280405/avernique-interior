<script setup lang="ts">
import { projects } from "~/data/site";
</script>
<template>
  <section class="section container-shell">
    <div class="section-heading">
      <UiSectionTitle
        eyebrow="SELECTED WORKS"
        title="Proyek Pilihan"
        description="Setiap ruang adalah kolaborasi. Setiap detail adalah cerita."
      /><NuxtLink to="/proyek" class="text-link"
        >Lihat Semua Proyek <span>↗</span></NuxtLink
      >
    </div>
    <div class="project-grid">
      <ProjectCard
        v-for="project in projects.slice(0, 3)"
        :key="project.name"
        :project="project"
      />
    </div>
  </section>
</template>
