<script setup lang="ts">
import { services } from "~/data/site";
</script>
<template>
  <section class="section container-shell service-grid">
    <ServicesServiceCard
      v-for="(service, i) in services"
      :key="service.name"
      :service="service"
      :index="i"
    />
  </section>
</template>
