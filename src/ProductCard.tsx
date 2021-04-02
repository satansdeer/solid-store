import { Product } from "./types";

export interface ProductCardProps {
  datum: Product;
}

export const ProductCard = ({ datum }: ProductCardProps) => {
  const isInCart = true;

  return (
    <div className="nes-container is-rounded item">
      <img
        style="image-rendering: pixelated"
        src={datum.image}
        width="64px"
        height="64px"
        alt="goblin"
      />
      <p>{datum.name}</p>
      <p>{datum.price} Zm</p>
      {isInCart ? (
        <button disabled className="nes-btn is-disabled">
          Added to cart
        </button>
      ) : (
        <button className="nes-btn is-primary">Add to cart</button>
      )}
    </div>
  );
};
