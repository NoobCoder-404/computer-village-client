/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ product }) => {
  const { _id, title, image } = product;
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-end">
          <Link to={`/product/${_id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
