<script setup lang="ts">
import { navigation, whatsapp } from "~/data/site";
</script>
<template>
  <footer class="footer">
    <div class="container-shell">
      <div class="footer-main">
        <div>
          <NuxtLink to="/" class="brand"
            >AVERNIQUE<span>INTERIOR</span></NuxtLink
          >
          <p class="mt-7">Furniture • Interior • Custom</p>
          <p class="mt-3 muted">Ruang Nyaman, Dirancang untuk Anda.</p>
        </div>
        <div>
          <p class="eyebrow">JELAJAHI</p>
          <nav class="footer-links" aria-label="Navigasi footer">
            <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">{{
              item.label
            }}</NuxtLink>
          </nav>
        </div>
        <div>
          <p class="eyebrow">TERHUBUNG</p>
          <div class="social-links">
            <a
              href="https://www.instagram.com/averniqueinterior/"
              target="_blank"
              rel="noopener noreferrer"
              >Instagram ↗</a
            ><a
              href="https://www.tiktok.com/@averniqueinterior"
              target="_blank"
              rel="noopener noreferrer"
              >TikTok ↗</a
            ><a :href="whatsapp()" target="_blank" rel="noopener noreferrer"
              >WhatsApp ↗</a
            >
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Avernique Interior. Seluruh hak dilindungi.</p>
        <p>Website dibuat oleh <span>Muhammad Noval</span></p>
      </div>
    </div>
  </footer>
</template>
