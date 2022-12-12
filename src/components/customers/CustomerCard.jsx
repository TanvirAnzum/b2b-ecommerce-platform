import React from "react";

const CustomerCard = ({ customer }) => {
  const { name, orders, displayPicture } = customer || {};
  return (
    <div className="w-full min-h-[6em] flex  shadow-md shadow-gray-500 rounded-md p-5 gap-5 bg-white">
      <img src={displayPicture} alt="" className="w-[5em] sm:w-[10em]" />
      <div className="flex flex-col items-start gap-5 justify-center">
        <p className="text-xl font-bold tracking-wider">{name}</p>
        <p className="text-xl font-semibold">Orders: {orders}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
