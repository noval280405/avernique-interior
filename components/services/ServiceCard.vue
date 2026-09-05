<script setup lang="ts">
import { whatsapp } from "~/data/site";
defineProps<{
  service: { name: string; description: string; image: string };
  index: number;
}>();
</script>
<template>
  <article :id="`layanan-${index}`" class="service-card">
    <UiPhoto :src="service.image" :alt="service.name" />
    <div>
      <span class="value-number">0{{ index + 1 }}</span>
      <h3>{{ service.name }}</h3>
      <p class="description">{{ service.description }}</p>
      <a
        :href="
          whatsapp(
            `Halo Avernique, saya ingin mempelajari layanan ${service.name}.`,
          )
        "
        class="text-link"
        target="_blank"
        rel="noopener noreferrer"
        >Pelajari Layanan ↗</a
      >
    </div>
  </article>
</template>
