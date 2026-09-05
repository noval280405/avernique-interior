<script setup lang="ts">
withDefaults(
  defineProps<{ to: string; external?: boolean; outline?: boolean }>(),
  { external: false, outline: false },
);
</script>
<template>
  <a
    v-if="external"
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
    class="button"
    :class="{ outline }"
    ><slot /><span aria-hidden="true">↗</span></a
  ><NuxtLink v-else :to="to" class="button" :class="{ outline }"
    ><slot /><span aria-hidden="true">↗</span></NuxtLink
  >
</template>
