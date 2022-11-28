/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import OrderRow from './OrderRow';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const url = `${process.env.REACT_APP_API_URL}/orders?email=${user.email}`;
  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  console.log(orders);
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('deleted successfully');
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-5xl">You have {orders.length} Orders</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>phone</th>
              <th>Price</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow key={order._id} order={order} handleDelete={handleDelete}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
