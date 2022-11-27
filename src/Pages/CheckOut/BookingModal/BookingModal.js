import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = () => {
  const { user } = useContext(AuthContext);
  const handleBooking = () => {};
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
            />

            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input border-slate-400 w-full"
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
              defaultValue={user?.email}
              disabled
            />
            <input
              name="item"
              type="text"
              placeholder=""
              className="input   border-slate-400 w-full"
              defaultValue={user?.email}
              disabled
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input border-slate-400 w-full"
            />
            <input className="w-full btn btn-neutral mb-10" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
