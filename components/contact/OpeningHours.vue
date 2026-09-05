<script setup lang="ts">
const hours = [
  { day: "Senin – Jumat", time: "09.00 – 18.00" },
  { day: "Sabtu", time: "09.00 – 17.00" },
  { day: "Minggu", time: "Dengan Perjanjian" },
];
</script>
<template>
  <section class="section section-sand">
    <div class="container-shell hours-layout">
      <UiSectionTitle
        eyebrow="WE’RE HERE FOR YOU"
        title="Jam Operasional"
        description="Mari luangkan waktu untuk membicarakan ruang impian Anda."
      />
      <dl>
        <div v-for="item in hours" :key="item.day">
          <dt>{{ item.day }}</dt>
          <dd>{{ item.time }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
