<script setup lang="ts">
import type { Project } from "~/data/site";
import { whatsapp } from "~/data/site";
defineProps<{ project: Project }>();
const open = ref(false);
</script>
<template>
  <article class="project-card">
    <button
      class="image-wrap"
      :aria-label="`Lihat proyek ${project.name}`"
      @click="open = true"
    >
      <UiPhoto :src="project.image" :alt="project.name" /><span
        class="image-arrow"
        >↗</span
      >
    </button>
    <p class="card-eyebrow">{{ project.category }}</p>
    <h3>{{ project.name }}</h3>
    <div class="project-bottom">
      <p>{{ project.location }} · {{ project.year }}</p>
      <button class="text-link" @click="open = true">Lihat Proyek →</button>
    </div>
    <UiModal :open="open" :title="project.name" @close="open = false"
      ><UiPhoto :src="project.image" :alt="project.name" class="detail-image" />
      <p class="eyebrow mt-6">
        {{ project.category }} · {{ project.location }} · {{ project.year }}
      </p>
      <p class="description my-6">{{ project.description }}</p>
      <p class="material mb-6">
        Showcase konsep — data proyek dan foto ilustrasi.
      </p>
      <UiPrimaryButton
        :to="
          whatsapp(
            `Halo Avernique, saya ingin konsultasi interior seperti konsep ${project.name}.`,
          )
        "
        external
        >Konsultasikan Ruang Anda</UiPrimaryButton
      ></UiModal
    >
  </article>
</template>
