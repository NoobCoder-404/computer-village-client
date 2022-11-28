/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const OrderRow = ({ order, handleDelete }) => {
  const { _id, image, item, location, name, phone, price } = order;

  const { user } = useContext(AuthContext);
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-primary text-white hover:text-black btn-ghost">
            Delete
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={image} alt="" />
            </div>
          </div>
          <div>{item}</div>
        </div>
      </td>
      <td className="p-0 ">
        <br />
        <span className="badge badge-ghost badge-sm p-0">{phone}</span>
      </td>
      <td>
        <br />
        <span className="badge badge-ghost badge-sm p-0">${price}</span>
      </td>
      <td>{location}</td>
      <th>
        <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">
          {status ? status : 'pending'}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
