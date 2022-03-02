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
        Price:<span className="qty">${price}</span>
      </h4>
      <button className="buy-btn" onClick={buy}>
        Buy
      </button>
      <button className="show-btn" onClick={() => onShowProduct(name)}>
        Show
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
  const showProduct = (name) => {
    alert("You've selected " + name);
  };
  return (
    <div>
      <Product
        name="Android Tablet"
        price="200"
        onCalculateTotal={calculateTotal}
        onShowProduct={showProduct}
      />

      <Product
        name="Apple Watch"
        price="300"
        onCalculateTotal={calculateTotal}
        onShowProduct={showProduct}
      />

      <Product
        name="Nokia Phone"
        price="99"
        onCalculateTotal={calculateTotal}
        onShowProduct={showProduct}
      />

      <Total totalCash={total} />
    </div>
  );
};

export default ProductList;
