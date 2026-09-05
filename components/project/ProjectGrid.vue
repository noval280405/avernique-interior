<script setup lang="ts">
import { projects } from "~/data/site";
</script>
<template>
  <section class="container-shell section-bottom">
    <div class="project-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </div>
    <p class="sample-note">
      Portofolio konsep dengan data dummy dan foto ilustrasi.
    </p>
  </section>
</template>
