import React from "react";
import "../assets/css/product.css";
import { useStateValue } from "../context";

export default function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch some action
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <span role="img" aria-label="star">
                  ⭐️
                </span>
              </p>
            ))}
        </div>
      </div>
      <img alt="product" src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
