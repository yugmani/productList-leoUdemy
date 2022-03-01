import React from 'react';

const Product = ({ name }) => {
  const buy = () => {
    alert(`You bought new ${name}`);
  };
  return (
    <div className="container">
      <h1 style={title}>This is a Product:{name} </h1>
      <button
        style={{
          color: 'blue',
          padding: '5px 10px',
          borderRadius: '5px',
          background: 'yellow',
        }}
        onClick={buy}
      >
        Buy
      </button>
    </div>
  );
};

export default Product;

const title = {
  color: 'orange',
  fontSize: '40px',
  padding: '5px 10px',
};
