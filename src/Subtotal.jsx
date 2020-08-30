import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* price */}

      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"RP. "}
        // renderText={(value) =>
        // <div>

        // </div>}

        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items) : <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </div>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

// renderText={(value) => (
//   <>
//     <p>
//       Subtotal ({basket.lenght} items) : <strong></strong>
//     </p>
//     <small>
//       <input type="checkbox"/>This order contains
//     </small>
//     <>
// )}
