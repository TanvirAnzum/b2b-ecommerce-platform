import React from "react";

const PaymentCard = ({ payment }) => {
  const { date, id, paymentStatus, price } = payment;
  return (
    <div className="w-full min-h-[12em] flex flex-col shadow-md shadow-gray-500 rounded-md justify-between p-5 gap-2 bg-white">
      <div className="w-full h-fit  flex p-2 items-center ">
        <img
          src="https://i.ibb.co/tY7sSBF/a-U5-Cz-CSHPKTX54f-GKNc-A8-T-1200-80.jpg"
          alt=""
          className="w-[6em] h-[6em] sm:w-[8em] sm:h-[8em] border p-2"
        />
        <div className="flex flex-col justify-between gap-5 p-2">
          <p className="text-sm sm:text-xl font-semibold">Order #{id}</p>
          <p className="text-sm sm:text-xl">{date}</p>
        </div>
        <div className="ml-auto flex flex-col justify-between gap-5 p-2">
          <p className="text-sm sm:text-xl font-semibold">{price}&#36;</p>
          <div className="flex items-center gap-1">
            <div className="w-[1em] h-[1em] rounded-full bg-green-500"></div>
            <p>{paymentStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
