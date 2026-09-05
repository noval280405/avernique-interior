<script setup lang="ts">
import { navigation, whatsapp } from "~/data/site";
const open = ref(false);
const route = useRoute();
watch(
  () => route.path,
  () => {
    open.value = false;
  },
);
</script>
<template>
  <header class="site-header">
    <div class="navbar container-shell">
      <NuxtLink to="/" aria-label="Avernique Interior — Beranda" class="brand"
        >AVERNIQUE<span>INTERIOR</span></NuxtLink
      >
      <nav class="desktop-nav" aria-label="Navigasi utama">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          :class="{ active: route.path === item.to }"
          >{{ item.label }}</NuxtLink
        >
      </nav>
      <a
        :href="whatsapp()"
        class="nav-consult"
        target="_blank"
        rel="noopener noreferrer"
        >Konsultasi <span>↗</span></a
      ><button
        class="menu-toggle"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        :aria-label="open ? 'Tutup menu' : 'Buka menu'"
        @click="open = !open"
      >
        {{ open ? "×" : "☰" }}
      </button>
    </div>
    <nav
      v-if="open"
      id="mobile-nav"
      class="mobile-nav"
      aria-label="Navigasi mobile"
      @keydown.esc="open = false"
    >
      <NuxtLink
        v-for="item in navigation"
        :key="item.to"
        :to="item.to"
        :class="{ active: route.path === item.to }"
        >{{ item.label }}<span>↗</span></NuxtLink
      ><a :href="whatsapp()" target="_blank" rel="noopener noreferrer"
        >Konsultasi WhatsApp ↗</a
      >
    </nav>
  </header>
</template>
