import React, { useState } from 'react';

const Product = ({ name }) => {
  const [quantity, setQuantity] = useState(0);

  const buy = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container">
      <h3 className="title">
        The product is: <span className="product-name">{name}</span>
      </h3>
      <h4>
        Quantity:<span className="qty">{quantity}</span>
      </h4>
      <button className="btn" onClick={buy}>
        Buy
      </button>
      <hr />
    </div>
  );
};

const Total = () => {
  return <h3>Total Cash:0</h3>;
};

const ProductList = () => {
  return (
    <div>
      <Product />
      <Product />
      <Product />
      <Total />
    </div>
  );
};

export default ProductList;
