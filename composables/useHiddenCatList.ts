export const useHiddenCatList = () => {
  const hiddenCatList = ref<string[]>([]);

  const changeHiddenCatList = (id: string): void => {
    if (hiddenCatList.value.includes(id)) {
      hiddenCatList.value = hiddenCatList.value.filter((cat) => cat !== id);
    } else {
      hiddenCatList.value.push(id);
    }
  };
  return {
    hiddenCatList: readonly(hiddenCatList),
    changeHiddenCatList,
  };
};
