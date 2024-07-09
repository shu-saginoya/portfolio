<script setup lang="ts">
const birthday = {
  year: 1986,
  month: 11,
  date: 12,
};

const getAge = () => {
  const today = new Date();
  const birth = new Date(birthday.year, birthday.month, birthday.date);
  return today.getFullYear() - birth.getFullYear();
};

const profile = {
  name: "鷺野谷 周",
  age: getAge(),
  email: "shu.saginoya@gmail.com",
};
</script>

<template>
  <main class="flex flex-col gap-8 items-center">
    <h1 class="text-3xl font-semibold">Profile</h1>
    <img
      src="/images/profile-picture.png"
      alt="Profile Picture"
      class="w-36 rounded-full"
    />
    <ul class="grid grid-cols-1 divide divide-y">
      <li
        v-for="(item, key) in profile"
        :key="key"
        class="grid grid-cols-3 gap-2 py-2"
      >
        <span>{{ key }}</span>
        <span class="col-span-2">{{ item }}</span>
      </li>
    </ul>
    <ul class="flex gap-8 items-center">
      <li>
        <NuxtLink to="https://github.com/shu-saginoya" target="_blank">
          <Icon name="uil:github" color="black" size="36px" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://zenn.dev/shu_saginoya" target="_blank">
          <Icon name="simple-icons:zenn" color="black" size="24px" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://x.com/shu_saginoya" target="_blank">
          <Icon name="prime:twitter" color="black" size="24px" />
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/" class="mt-6 block text-center text-indigo-600">
      ＜ 記事一覧に戻る
    </NuxtLink>
  </main>
</template>
