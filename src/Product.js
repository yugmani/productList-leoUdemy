import React, { useState } from 'react';

const Product = ({ name, price, onCalculateTotal, onShowProduct }) => {
  const [quantity, setQuantity] = useState(0);

  const buy = () => {
    setQuantity(quantity + 1);
    onCalculateTotal(price);
  };

  return (
    <div className="container">
      <h3 className="title" className="product-name">
        {name}
      </h3>
      <h4>
        Quantity:<span className="qty">{quantity}</span>
      </h4>
      <h4>
        Rate:<span className="qty">${price}</span>
      </h4>

      <button className="buy-btn" onClick={buy}>
        Buy
      </button>

      <hr />
    </div>
  );
};

const Total = ({ totalCash }) => {
  return <h3>Total Cash:{totalCash}</h3>;
};

const ProductList = () => {
  const [total, setTotal] = useState(0);

  const calculateTotal = (price) => {
    setTotal(total + +price);
  };

  return (
    <div>
      <Product
        name="Android Tablet"
        price="200"
        onCalculateTotal={calculateTotal}
      />

      <Product
        name="Apple Watch"
        price="300"
        onCalculateTotal={calculateTotal}
      />

      <Product
        name="Nokia Phone"
        price="99"
        onCalculateTotal={calculateTotal}
      />

      <Total totalCash={total} />
    </div>
  );
};

export default ProductList;
