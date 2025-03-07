import React from "react";

const Button = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="view-btn"
    >
      View Product
    </button>
  );
};

export default Button;
