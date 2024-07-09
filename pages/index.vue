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

const { activeCategory, setCategory, clearCategory } = useActiveCategory();
</script>

<template>
  <main class="flex flex-col gap-8 items-center">
    <h1 class="text-center font-sans text-4xl font-semibold">
      Shu Saginoya Portfolio
    </h1>
    <ul class="flex gap-1">
      <li>
        <BtnCat :active="!activeCategory" @click="clearCategory">
          すべて
        </BtnCat>
      </li>
      <li v-for="cat in catData?.contents" :key="cat.id">
        <BtnCat
          :active="activeCategory === cat.id"
          @click="setCategory(cat.id)"
        >
          {{ cat.name }}
        </BtnCat>
      </li>
    </ul>
    <TransitionGroup name="list" tag="ul" class="grid grid-cols-1 gap-8">
      <li
        v-for="blog in data?.contents"
        v-show="!activeCategory || activeCategory === blog.category.id"
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
    </TransitionGroup>
  </main>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
