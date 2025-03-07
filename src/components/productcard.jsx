// write product card here
import React from "react";
import Button from "../components/button"; // Import Button Component

const ProductCard = () => {
  // Static product details
  const product = {
    name: "Sample Product",
    price: "$20.00",
    image: "https://via.placeholder.com/150",
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <Button onClick={() => alert("Product Viewed")} />
    </div>
  );
};

export default ProductCard;
