<script setup lang="ts">
type Birthday = {
  year: number;
  month: number;
  date: number;
};

const birthday: Birthday = {
  year: 1986,
  month: 11,
  date: 12,
};

const getAge = (birthday: Birthday) => {
  const { year, month, date } = birthday;

  const today = new Date();
  const birthdate = new Date(year, month - 1, date);

  // 今年の誕生日の日付データを取得
  const currentYearBirthday = new Date(
    today.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate(),
  );

  // 生まれた年と今年の差を計算
  let age = today.getFullYear() - birthdate.getFullYear();

  // 今日の日付と今年の誕生日を比較
  if (today < currentYearBirthday) {
    // 今年誕生日を迎えていない場合、1を引く
    age--;
  }

  // 年齢の値を返す
  return age;
};

const profile = {
  name: "鷺野谷 周",
  age: getAge(birthday),
  email: "shu.saginoya@gmail.com",
};

const links = {
  github: "https://github.com/shu-saginoya",
  zenn: "https://zenn.dev/shu_saginoya",
  twitter: "https://x.com/shu_saginoya",
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
      <li
        v-for="(item, key) in links"
        :key="key"
        class="grid grid-cols-3 gap-2 py-2"
      >
        <span>{{ key }}</span>
        <a :href="item" target="_blank" class="col-span-2">{{ item }}</a>
      </li>
    </ul>
    <p>
      映像制作・営業企画などを経て現職のウェブサイトの制作に従事。高校時代は情報技術科に属していたため、プログラミンについても抵抗なく新技術の導入を行い、継続的な業務改善に役立てています。
    </p>
    <NuxtLink to="/" class="mt-6 block text-center text-indigo-600">
      ＜ 記事一覧に戻る
    </NuxtLink>
  </main>
</template>
