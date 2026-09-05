<script setup lang="ts">
import { whatsapp } from "~/data/site";
const contacts = [
  { name: "WhatsApp", value: "08XX-XXXX-XXXX", href: whatsapp() },
  {
    name: "Email",
    value: "hello@averniqueinterior.com",
    href: "mailto:hello@averniqueinterior.com",
  },
  {
    name: "Instagram",
    value: "@averniqueinterior",
    href: "https://www.instagram.com/averniqueinterior/",
  },
  {
    name: "TikTok",
    value: "@averniqueinterior",
    href: "https://www.tiktok.com/@averniqueinterior",
  },
];
</script>
<template>
  <section class="container-shell section-bottom">
    <div class="contact-grid">
      <a
        v-for="contact in contacts"
        :key="contact.name"
        :href="contact.href"
        target="_blank"
        rel="noopener noreferrer"
        ><p class="eyebrow">{{ contact.name }} ↗</p>
        <p>{{ contact.value }}</p></a
      >
    </div>
    <p class="sample-note">
      Kontak demo. Nomor WhatsApp, email, dan akun sosial perlu dikonfirmasi
      sebelum website dipublikasikan.
    </p>
  </section>
</template>
