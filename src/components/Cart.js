import React from "react";

function Cart({ products, totalPrice, onQuantityChange }) {
  const handleQuantityChange = (id, newQuantity) => {
    onQuantityChange(id, newQuantity);
  };

  const getTotalPrice = () => {
    return totalPrice;
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt="Product" />
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <input
              type="number"
              min="1"
              max="5"
              value={product.quantity}
              onChange={(e) =>
                handleQuantityChange(product.id, parseInt(e.target.value, 10))
              }
            />
          </li>
        ))}
      </ul>
      <p>GRAND TOTAL ${getTotalPrice()}</p>
    </div>
  );
}

export default Cart;
