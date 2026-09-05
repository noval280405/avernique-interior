<script setup lang="ts">
defineProps<{ items: { image: string; name: string; category: string }[] }>();
const selected = ref<{ image: string; name: string; category: string } | null>(
  null,
);
</script>
<template>
  <div>
    <p class="result-count" role="status">{{ items.length }} inspirasi ruang</p>
    <div class="gallery-grid">
      <button
        v-for="item in items"
        :key="item.name"
        :aria-label="`Perbesar ${item.name}`"
        @click="selected = item"
      >
        <UiPhoto :src="item.image" :alt="item.name" /><span
          >{{ item.name }} <span>↗</span></span
        >
      </button>
    </div>
    <UiModal
      :open="!!selected"
      :title="selected?.name || 'Galeri'"
      @close="selected = null"
      ><UiPhoto
        v-if="selected"
        :src="selected.image"
        :alt="selected.name"
        class="lightbox-image"
      />
      <p class="eyebrow mt-5">{{ selected?.category }}</p></UiModal
    >
  </div>
</template>
