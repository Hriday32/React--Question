import React from "react";
import { useCart } from "./Question20/CardContext";

const Question20 = () => {
  const { cartState, cartDispatch } = useCart();
  const addToCart = (item) => {
    const existingCartItem = cartState.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItem) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: existingCartItem.quantity + 1 },
      });
    } else {
      cartDispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: 1 } });
    }
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity > 0) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: itemId, quantity },
      });
    }
  };

  const removeFromCart = (itemId) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
  ];
  return (
    <div>
      <h2>Shoping cart</h2>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} -{item.quantity}
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Product List</h2>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            {products.name}
            <button onClick={() => addToCart(products)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question20;
