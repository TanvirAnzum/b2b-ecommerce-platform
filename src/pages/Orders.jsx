import React from "react";
import OrderCard from "../components/orders/OrderCard";
import Search from "../components/Search";
import orders from "../fakeData/orders.json";

const Orders = () => {
  return (
    <div className="w-full flex flex-col gap-5 sm:mt-20">
      <Search
        title="All Orders"
        placeholder="order id, mobile number or a name"
      />
      <div className="flex w-full items-center justify-center gap-2">
        <button className="w-[10em] border hover:bg-gray-600 hover:text-white p-2 rounded-3xl bg-indigo-600 text-white">
          All Time
        </button>
        <button className="w-[10em] border hover:bg-gray-600 hover:text-white p-2 rounded-3xl bg-gray-300">
          Todays
        </button>
        <button className="w-[10em] border hover:bg-gray-600 hover:text-white p-2 rounded-3xl bg-gray-300">
          Yesterdays
        </button>
      </div>
      {orders?.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}
    </div>
  );
};

export default Orders;
