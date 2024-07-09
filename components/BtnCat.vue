<script setup lang="ts">
defineProps<{
  active?: boolean;
}>();
</script>

<template>
  <button
    class="inline-block rounded border-2 border-slate-400 px-1.5 py-0.5 text-sm font-semibold text-slate-400"
    :class="{
      'text-white border-indigo-600 bg-indigo-600': active,
    }"
  >
    <slot />
  </button>
</template>
