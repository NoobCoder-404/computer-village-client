import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import BookingModal from './BookingModal/BookingModal';

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { title, image, original_price, resale_price, used } = useLoaderData();

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
            <p className="pb-3">Resale Price : ${resale_price}</p>

            <div className="card-actions justify-start mt-3">
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <label htmlFor="booking-modal" className="btn">
              open modal
            </label>
            <BookingModal />
          </div>
        </div>
      </div>
    </div>

    // <div className="lg:flex justify-center mt-20">
    //   <div className="card card-side lg:w-2/3 bg-base-100 shadow-xl ">
    //     <figure>
    //       <img src={image} alt="Movie" />
    //     </figure>
    //     <div className="card-body lg:flex justify-center items-center">
    //       <div>
    //         <h2 className="card-title pb-3">{title}</h2>
    //         <p className="pb-3">Original Price : ${original_price}</p>
    //         <p className="pb-3">Resale Price : ${resale_price}</p>
    //         <p className="pb-3">
    //           Used : {used} {''}year
    //         </p>
    //         <p className="pb-3">Resale Price : ${resale_price}</p>
    //         <p className="pb-3">Resale Price : ${resale_price}</p>
    //         <div className="card-actions justify-start pt-5">
    //           <button className="btn btn-primary">Buy Now</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CheckOut;
