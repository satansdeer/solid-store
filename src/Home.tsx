// import { ProductCard } from "./ProductCard"
import { useProducts } from "./useProducts";
import { Switch, Match, For } from "solid-js";
import { ProductCard } from "./ProductCard"

type ProductCardProps = {
  datum: Item;
};

type Item = {
  name: string;
};

type Category = {
  items: Item[];
  name: string;
};

type Products = {
  categories: Category[];
  isLoading: boolean;
  error: null;
};

interface HomeProps {
  useProductsHook?: () => Pick<
    ReturnType<typeof useProducts>,
    "getCategories" | "getIsLoading" | "getError"
  >;
}

export const Home = ({ useProductsHook = useProducts }: HomeProps) => {
  const { getCategories, getIsLoading, getError } = useProductsHook();

  return (
    <Switch>
      <Match when={getIsLoading()}>Loading..</Match>
      <Match when={getError()}>Error</Match>
      <Match when={true}>
        <For each={getCategories()}>
          {(category) => (
            <section className="nes-container with-title showcase">
              <h2 className="title">{category.name}</h2>
              <section className="items">
                <For each={category.items}>
                  {(item) => <ProductCard datum={item} />}
                </For>
              </section>
            </section>
          )}
        </For>
      </Match>
    </Switch>
  );
};
