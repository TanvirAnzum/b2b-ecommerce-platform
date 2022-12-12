import React from "react";

const OrderCard = ({ order }) => {
  const { id, title, status, paymentStatus, quantity, date, price } =
    order || {};

  let circleBg;
  if (status === "accepted") circleBg = "bg-green-500";
  else if (status === "shipped") circleBg = "bg-red-500";
  else if (status === "pending") circleBg = "bg-yellow-500";

  let paymentBg;
  if (paymentStatus === "paid") paymentBg = "bg-green-500";
  else if (paymentStatus === "cod") paymentBg = "bg-yellow-500";

  return (
    <div className="w-full min-h-[16em] flex flex-col shadow-md shadow-gray-500 rounded-md justify-between p-5 gap-2 bg-white">
      <div className="flex items-center">
        <h1 className="font-semibold text-md sm:text-xl">{`Order No: #${id}`}</h1>
        {id === 12344 && (
          <p className="text-md p-1 rounded mx-2 bg-green-600 text-white">
            New
          </p>
        )}
        <p className="ml-auto font-semibold text-sm sm:text-xl text-center">
          {date}
        </p>
      </div>
      <div className="w-full h-fit sm:h-[20em] flex p-2 items-center justify-start">
        <img
          src="https://i.ibb.co/tY7sSBF/a-U5-Cz-CSHPKTX54f-GKNc-A8-T-1200-80.jpg"
          alt=""
          className="w-[8em] h-[8em] border sm:w-1/3 sm:h-[18em] p-2"
        />
        <div className="w-[70%] sm:w-1/3 flex flex-col p-2 sm:p-10 gap-2 sm:gap-8">
          <h1 className="text-md font-bold sm:text-4xl">{title}</h1>
          <p className="font-normal text-md sm:text-xl"> {quantity} Units</p>
          <p className="font-semibold text-md sm:text-2xl ">{price}&#36;</p>
          <p
            className={`font-semibold text-md sm:text-2xl text-white ${paymentBg} w-fit p-1 rounded`}
          >
            {paymentStatus}
          </p>
        </div>
      </div>
      <div className="w-full min-h-[2em] sm:h-[4em] flex items-center justify-between p-2 border rounded-lg">
        <div className="flex items-center justify-center gap-1">
          <div className={`w-[1em] h-[1em] rounded-full ${circleBg}`}></div>
          <p className="text-md sm:text-xl font-semibold"> {status}</p>
        </div>

        <button className="p-2 border hover:bg-slate-500 hover:text-white rounded text-sm  sm:text-xl font-semibold">
          {"Details >"}
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
