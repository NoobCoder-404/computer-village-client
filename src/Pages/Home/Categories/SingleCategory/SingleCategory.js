/* eslint-disable react/prop-types */
import React from 'react';

const SingleCategory = ({ product }) => {
  const { title, image, original_price, resale_price, used } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price : ${original_price}</p>
        <p>Price : ${resale_price}</p>
        <p>
          Used : {used} {''}year
        </p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
