<script setup>
import { useImage } from "@vueuse/core";

const avatarUrl = "https://place.dog/300/200";
const { isLoading } = useImage({ src: avatarUrl });
</script>

<template>
  <div>
    <h1 class="text-red-500">Portfolio</h1>
    <span v-if="isLoading">Loading</span>
    <img v-else :src="avatarUrl" />
  </div>
</template>
