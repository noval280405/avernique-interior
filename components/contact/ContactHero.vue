<script setup lang="ts">
import { photos, whatsapp } from "~/data/site";
</script>
<template>
  <UiPageHero
    eyebrow="LET’S START A CONVERSATION"
    title="Mari Wujudkan Ruang Anda."
    description="Ceritakan kebutuhan furniture atau interior Anda kepada Avernique Interior."
    ><UiPrimaryButton :to="whatsapp()" external class="mt-8"
      >Konsultasi via WhatsApp</UiPrimaryButton
    ></UiPageHero
  >
</template>
