import React, { useState } from 'react';

const Product = ({ name, price, image, onCalculateTotal }) => {
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
        Total Cash:<span className="qty">{totalCash}</span>
      </h3>
      <h3>
        [<span className="qty"> {totalItems}</span> item(s) ]
      </h3>
    </div>
  );
};

const ProductForm = ({ index, onCreateProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const createProduct = (event) => {
    event.preventDefault();
    const product = { id: index, name, price, image };
    onCreateProduct(product);
    setName('');
    setPrice(0);
    setImage(' ');
  };

  return (
    <form>
      <h3 className="title">Add New Item</h3>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />{' '}
      <br /> <br />
      <input
        type="number"
        // value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
      />{' '}
      <br /> <br />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image Link"
      />{' '}
      <br /> <br />
      <button onClick={createProduct} className="create-btn">
        Create
      </button>
    </form>
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

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <div className="dashboard">
        <ProductForm index={products.length + 1} onCreateProduct={addProduct} />
        <Total totalCash={total} totalItems={totalQuantity} />
      </div>
      <hr />
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
