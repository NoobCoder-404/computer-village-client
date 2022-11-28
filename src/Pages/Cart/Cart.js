/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import SingleOrder from './SingleOrder/SingleOrder';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrder] = useState({});
  const url = `${process.env.REACT_APP_API_URL}/orders?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  const handleDelete = () => {};

  const handleStatusUpdate = () => {};
  return (
    <div>
      <h2 className="text-5xl">You have {orders.length} Orders</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <SingleOrder
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}></SingleOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
