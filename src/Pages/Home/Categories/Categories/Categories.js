/* eslint-disable react/prop-types */
import React from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const Categories = ({ products }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
      {products.map((product, i) => (
        <SingleCategory key={i} product={product}></SingleCategory>
      ))}
    </div>
  );
};

export default Categories;
