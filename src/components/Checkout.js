import React from "react";
import "../assets/css/checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../context";
import FlipMove from "react-flip-move";

export default function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt="checkout ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className="checkout__title"> Your shopping Basket</h2>
          <FlipMove
            appearAnimation="fade"
            enterAnimation="fade"
            leaveAnimation="fade"
          >
            {basket.map((item) => (
              <div key={item.id}>
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right"></div>
      <Subtotal />
    </div>
  );
}
