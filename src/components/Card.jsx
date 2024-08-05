// src/Card.js
import React, { useContext } from 'react';
import { MyContext } from '../MyContext.jsx';

const Card = ({ product }) => {
  const { total, setTotal } = useContext(MyContext);
  console.log(product);
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-1/3">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      {/* <h2 className="text-xl font-bold mb-2">pata nahi</h2> */}
      <p className="text-gray-700 mb-4">{product.description}</p>
      {/* <p className="text-gray-700 mb-4">loda lassan</p> */}
      <p className="text-yellow-500 text-lg font-semibold mb-2">
        ${product.price.toFixed(2)}
        {/* 5000 */}
      </p>
      <p className="text-gray-500">Category: {product.category}</p>
      {/* <p className="text-gray-500">Category: Electronics</p> */}
      <div className="flex gap-2">
        <button
          className="mt-3 bg-green-500 hover:bg-green-800"
          // onClick={() => alert('hello')}
          onClick={() => setTotal(total + product.price)}
          // onClick={() => setTotal(total + 5000)}
        >
          Add to cart
        </button>
        <button
          className="mt-3 bg-red-500 hover:bg-red-800 justify-between"
          // onClick={() => alert('hello')}
          onClick={() => setTotal(total - product.price)}
          // onClick={() => setTotal(total + 5000)}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Card;
