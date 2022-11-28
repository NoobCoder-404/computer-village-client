/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ title, resale_price, setCurrentUser, setSelected }) => {
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const item = form.item.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    console.log(name, email, item, price, phone, location);
    const booking = {
      name,
      email,
      item,
      price,
      phone,
      location,
      date: setSelected
    };
    console.log(booking);
    fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setCurrentUser(null);
          toast.success('Booking Confirmed');
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative min-h[500px]">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold pb-10"> </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4" action="">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input  border-slate-400 w-full"
              defaultValue={user?.displayName}
              disabled
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input   border-slate-400 w-full"
              defaultValue={user?.email}
              disabled
            />
            <input
              name="item"
              type="text"
              placeholder=""
              className="input   border-slate-400 w-full"
              defaultValue={title}
              disabled
            />
            <input
              name="price"
              type="text"
              placeholder=""
              className="input   border-slate-400 w-full"
              defaultValue={resale_price}
              disabled
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input border-slate-400 w-full"
              required
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input border-slate-400 w-full"
              required
            />
            <input className="w-full btn btn-neutral mb-10" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
