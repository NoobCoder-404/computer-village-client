/* eslint-disable no-unused-vars */
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import BookingModal from './BookingModal/BookingModal';

const Details = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [selected, setSelected] = useState(new Date());
  const { title, image, original_price, resale_price, used, location } = useLoaderData();
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <div className="lg:flex justify-center items-center lg:mt-16 p-5">
      <div className="card lg:card-side bg-base-100 shadow-xl lg:w-2/3">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body lg:flex justify-center items-center">
          <div>
            <h2 className="card-title pb-3">{title}</h2>
            <p className="pb-3">Seller : {user.displayName}</p>
            <p className="pb-3">Original Price : ${original_price}</p>
            <p className="pb-3">Resale Price : ${resale_price}</p>
            <p className="pb-3">
              Used : {used} {''}year
            </p>
            <p className="pb-3">Location : {location}</p>
            <p className="pb-3">Date {format(selected, 'PP')}.</p>

            <div className="card-actions justify-start mt-3">
              <label
                onClick={() => setCurrentUser(user)}
                htmlFor="booking-modal"
                className="btn btn-primary">
                Buy now
              </label>
            </div>

            {user && currentUser && (
              <BookingModal
                title={title}
                resale_price={resale_price}
                setCurrentUser={setCurrentUser}
                setSelected={setSelected}
                image={image}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
