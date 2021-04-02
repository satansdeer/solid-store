import { createSignal } from "solid-js";
import { getProducts } from "./api";
import { Category } from "./types";

export const useProducts = (apiGetProducts = getProducts) => {
  const [getCategories, setCategories] = createSignal<Category[]>([]);
  const [getIsLoading, setIsLoading] = createSignal(true);
  const [getError, setError] = createSignal(false);

  (async () => {
    try {
      const data = await apiGetProducts();
      setCategories(data.categories || []);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  })();

  return { getCategories, getIsLoading, getError };
};
