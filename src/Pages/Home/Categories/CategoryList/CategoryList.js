/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ filterResult, product, allProducts }) => {
  return (
    <div className="px-10 grid shadow-lg p-5 rounded-xl">
      <h1 className="text-xl font-bold pb-3">Category list</h1>
      <Link>
        <button onClick={() => allProducts(product)} className="btn btn-ghost w-full">
          All
        </button>
      </Link>
      <Link>
        <button onClick={() => filterResult('DELL')} className="btn btn-ghost w-full">
          DELL
        </button>
      </Link>
      <Link>
        <button onClick={() => filterResult('HP')} className="btn btn-ghost w-full">
          HP
        </button>
      </Link>
      <Link>
        <button onClick={() => filterResult('ACER')} className="btn btn-ghost w-full">
          ACER
        </button>
      </Link>
    </div>
  );
};

export default CategoryList;
