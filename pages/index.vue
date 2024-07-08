<script setup lang="ts">
import type { Blog } from "@/types/blog";
import type { Category } from "@/types/category";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
  queries: { orders: "-date", limit: 100 },
});

const { data: catData } = await useMicroCMSGetList<Category>({
  endpoint: "categories",
});

const { hiddenCatList, changeHiddenCatList } = useHiddenCatList();
</script>

<template>
  <main class="flex flex-col gap-8 items-center">
    <h1 class="text-center font-sans text-4xl font-semibold">
      Shu Saginoya Portfolio
    </h1>
    <ul class="flex gap-2">
      <li v-for="cat in catData?.contents" :key="cat.id">
        <button
          class="inline-block rounded bg-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-white"
          :class="{
            'opacity-50': hiddenCatList.includes(cat.id),
          }"
          @click="changeHiddenCatList(cat.id)"
        >
          {{ cat.name }}
        </button>
      </li>
    </ul>
    <ul class="grid grid-cols-1 gap-8">
      <li
        v-for="blog in data?.contents"
        v-show="!hiddenCatList.includes(blog.category.id)"
        :key="blog.id"
      >
        <NuxtLink
          :to="`/${blog.id}`"
          class="flex flex-col gap-4 sm:transition-shadow sm:hover:shadow md:flex-row md:items-center lg:gap-6"
        >
          <img
            :src="blog.eyecatch?.url"
            :width="blog.eyecatch?.width"
            :height="blog.eyecatch?.height"
            class="md:w-1/3 md:flex-none"
            alt=""
          />
          <div class="md:p-2.5 md:pr-0">
            <div
              class="inline-block rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600"
            >
              {{ blog.category?.name }}
            </div>
            <div class="mt-2 text-lg font-semibold md:text-xl">
              {{ blog.title }}
            </div>
            <div class="mt-1 text-sm text-gray-700">
              {{ dateFormat(blog.date ?? blog.publishedAt ?? blog.createdAt) }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
