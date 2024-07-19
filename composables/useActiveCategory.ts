export const useActiveCategory = () => {
  const activeCategory = useState<string | undefined>(
    "activeCategory",
    () => undefined,
  );

  const setCategory = (id: string): void => {
    activeCategory.value = id;
  };

  const clearCategory = (): void => {
    activeCategory.value = undefined;
  };
  return {
    activeCategory: readonly(activeCategory),
    setCategory,
    clearCategory,
  };
};
