import React, { useState } from 'react';

const Product = ({ name, price, image, onCalculateTotal, onShowProduct }) => {
  const [quantity, setQuantity] = useState(0);

  const buy = () => {
    setQuantity(quantity + 1);
    onCalculateTotal(price);
  };

  return (
    <li className="container">
      <h2 className="title">{name}</h2>
      <div className="product-layout">
        <div className="product-info">
          <h4>
            Quantity:<span className="qty">{quantity}</span>
          </h4>
          <h4>
            Rate:<span className="qty">${price}</span>
          </h4>
          <button className="buy-btn" onClick={buy}>
            Buy
          </button>
        </div>
        <div
          className="product-image"
          style={{ backgroundImage: `url('${image}')` }}
        >
          {/* <img src={image} alt={name} /> */}
        </div>
      </div>
    </li>
  );
};

const Total = ({ totalCash, totalItems }) => {
  return (
    <div>
      <h3>
        Total Cash:<span className="qty">{totalCash}</span>{' '}
        <small>
          [<span className="qty"> {totalItems}</span> item(s) ]
        </small>
      </h3>
    </div>
  );
};

const ProductList = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(items);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const calculateTotal = (price) => {
    setTotal(total + +price);
    setTotalQuantity(totalQuantity + 1);
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onCalculateTotal={calculateTotal}
          />
        ))}
      </ul>

      <Total totalCash={total} totalItems={totalQuantity} />
    </div>
  );
};

export default ProductList;

// array of items
const items = [
  {
    id: 1,
    name: 'Android Tablet',
    price: 200,
    image:
      'https://pixfeeds.com/images/technology/tablets/1280-488793544-tablet-computers.jpg',
  },
  {
    id: 2,
    name: 'Apple Watch',
    price: 300,
    image:
      'https://i5.walmartimages.com/asr/3cd3895e-f6e1-4c7d-a1a6-4ae4494a1a8e.31f33326b7e84b10fcaf3ec92d08f4e8.jpeg',
  },
  {
    id: 3,
    name: 'Nokia Phone',
    price: 99,
    image:
      'https://inteng-storage.s3.amazonaws.com/images/FEBRUARY/sizes/nokia3_resize_md.jpg',
  },
];
