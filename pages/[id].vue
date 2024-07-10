<script setup lang="ts">
import type { Blog } from "@/types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>

<template>
  <main class="flex flex-col gap-6">
    <template v-if="data">
      <h1 class="text-3xl font-semibold">
        {{ data.title }}
      </h1>
      <img
        :src="data.eyecatch?.url"
        :width="data.eyecatch?.width"
        :height="data.eyecatch?.height"
        alt=""
      />
      <div
        class="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4"
      >
        <div
          class="rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600"
        >
          {{ data.category?.name }}
        </div>
        <div class="text-sm text-gray-700">
          {{ dateFormat(data.date ?? data.publishedAt ?? data.createdAt) }}
        </div>
      </div>
      <div class="prose" v-html="data.content"></div>
      <ul v-if="data.tags" class="flex gap-2 items-center">
        <li v-for="tag in data.tags" :key="tag.id">
          <span class="text-sm text-gray-600"> #{{ tag.name }} </span>
        </li>
      </ul>
    </template>
    <template v-else>
      <h1 class="text-3xl font-semibold">記事が見つかりませんでした</h1>
    </template>
    <NuxtLink to="/" class="mt-6 block text-center text-indigo-600"
      >＜ 記事一覧に戻る</NuxtLink
    >
  </main>
</template>
