import React from "react";
import { useDispatch } from "react-redux";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() =>
            dispatch({ type: "DECREMENT_QUANTITY", payload: cartItem })
          }
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() =>
            dispatch({ type: "INCREMENT_QUANTITY", payload: cartItem })
          }
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        onClick={() =>
          dispatch({ type: "CLEAR_ITEM_FROM_CART", payload: cartItem })
        }
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
