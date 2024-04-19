import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

function ProductList() {
  const productsData = [
    { id: 1, image: "/1.jpg", price: 52, quantity: 5, size: "S" },
    { id: 2, image: "/2.jpg", price: 52, quantity: 5, size: "XS" },
    { id: 3, image: "/3.jpg", price: 52, quantity: 5, size: "L" },
  ];

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedSize, setSelectedSize] = useState("All");

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
    setTotalPrice(totalPrice + product.price * product.quantity);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    const newTotalPrice = updatedCart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setCart(updatedCart);
    setTotalPrice(newTotalPrice);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const filteredProducts =
    selectedSize === "All"
      ? productsData
      : productsData.filter((product) => product.size === selectedSize);

  return (
    <div>
      <Cart
        products={cart}
        totalPrice={totalPrice}
        onQuantityChange={handleQuantityChange}
      />
      <div>
        <select onChange={(e) => handleSizeChange(e.target.value)}>
          <option value="All">All Sizes</option>
          <option value="S">S</option>
          <option value="XS">XS</option>
          <option value="L">L</option>
          <option value="M">M</option>
        </select>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
