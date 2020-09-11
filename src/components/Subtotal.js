import React from "react";
import "../assets/css/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context";
import { useHistory } from "react-router-dom";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const history = useHistory();

  const getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => item.price + amount, 0);
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* homework */}
              Subtotal - ({basket.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
