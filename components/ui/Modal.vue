<script setup lang="ts">
const props = defineProps<{ open: boolean; title: string }>();
const emit = defineEmits<{ close: [] }>();
const dialog = ref<HTMLDialogElement>();
let previous: HTMLElement | null = null;
watch(
  () => props.open,
  async (value) => {
    await nextTick();
    if (value) {
      previous = document.activeElement as HTMLElement;
      dialog.value?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.value?.close();
      document.body.style.overflow = "";
      previous?.focus();
    }
  },
);
onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>
<template>
  <dialog
    ref="dialog"
    class="modal"
    aria-labelledby="modal-title"
    @cancel.prevent="emit('close')"
    @click="
      (event) => {
        if (event.target === dialog) emit('close');
      }
    "
  >
    <div class="modal-inner">
      <div class="modal-heading">
        <h2 id="modal-title">{{ title }}</h2>
        <button
          class="close-button"
          aria-label="Tutup detail"
          @click="emit('close')"
        >
          ×
        </button>
      </div>
      <slot />
    </div>
  </dialog>
</template>
