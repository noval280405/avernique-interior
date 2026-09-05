<script setup lang="ts">
import type { Product } from "~/data/site";
import { whatsapp } from "~/data/site";
defineProps<{ product: Product }>();
const open = ref(false);
</script>
<template>
  <article class="product-card">
    <button
      class="image-wrap"
      :aria-label="`Lihat detail ${product.name}`"
      @click="open = true"
    >
      <UiPhoto :src="product.image" :alt="product.name" /><span
        class="image-arrow"
        >↗</span
      >
    </button>
    <p class="card-eyebrow">{{ product.category }}</p>
    <h3>{{ product.name }}</h3>
    <p class="material">{{ product.material }}</p>
    <div class="product-bottom">
      <p>{{ product.price }}</p>
      <button class="text-link" @click="open = true">
        Lihat Detail <span>→</span>
      </button>
    </div>
    <UiModal :open="open" :title="product.name" @close="open = false"
      ><UiPhoto :src="product.image" :alt="product.name" class="detail-image" />
      <p class="eyebrow mt-6">{{ product.category }}</p>
      <p class="my-4">{{ product.material }}</p>
      <p class="my-4">{{ product.price }}</p>
      <p class="description mb-6">
        Ukuran, warna, dan material dapat disesuaikan dengan kebutuhan ruang
        Anda. Harga katalog merupakan contoh; konsultasikan spesifikasi dan
        penawaran akhir bersama kami.
      </p>
      <UiPrimaryButton
        :to="
          whatsapp(
            `Halo Avernique, saya tertarik dengan ${product.name}. Bisa konsultasi ukuran dan material?`,
          )
        "
        external
        >Konsultasikan Produk</UiPrimaryButton
      ></UiModal
    >
  </article>
</template>
