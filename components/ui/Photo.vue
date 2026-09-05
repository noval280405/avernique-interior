<script setup lang="ts">
withDefaults(defineProps<{ src: string; alt: string; eager?: boolean }>(), {
  eager: false,
});
function fallback(event: Event) {
  const img = event.target as HTMLImageElement;
  if (!img.src.endsWith("/images/placeholder.svg"))
    img.src = "/images/placeholder.svg";
}
</script>
<template>
  <img
    :src="src"
    :alt="alt"
    :loading="eager ? 'eager' : 'lazy'"
    :fetchpriority="eager ? 'high' : 'auto'"
    decoding="async"
    @error="fallback"
  />
</template>
