import React, { useState } from "react";

function ProductCard({ id, image, price, quantity, onAddToCart }) {
  const [count, setCount] = useState(quantity);

  const handleQuantityChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    setCount(newCount);
  };

  const handleAddToCart = () => {
    onAddToCart({ id, image, price, quantity: count });
  };

  return (
    <div className="product-card">
      <img src={image} alt="Product" />
      <p>Price: ${price}</p>
      <p>Quantity: {count}</p>
      <input
        type="number"
        min="1"
        max="5"
        value={count}
        onChange={handleQuantityChange}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
