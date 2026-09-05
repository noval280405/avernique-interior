<script setup lang="ts">
import { whatsapp } from "~/data/site";
</script>
<template>
  <a
    :href="whatsapp()"
    class="floating-wa"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Konsultasi melalui WhatsApp"
    ><svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.6a8.5 8.5 0 1 1 16.3-3.9Z"
      />
      <path
        d="M8 7.5c-1 3 3.5 7.5 6.5 7l1.3-2-2.5-1-1 1c-1.5-.5-2.5-1.5-3-3l1-1-1-2Z"
      /></svg
    ><span>WhatsApp <i></i> Konsultasi</span></a
  >
</template>
