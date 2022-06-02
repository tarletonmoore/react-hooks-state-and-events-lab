import React, { useState } from "react";


function Item({ name, category }) {
  const [isCart, setIsCart] = useState(false)

  function handleCart() {
    setIsCart(!isCart)
  }

  const cart = isCart ? "in-cart" : "Add to Cart"

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cart}</button>
    </li>
  );
}

export default Item;
