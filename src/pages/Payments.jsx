import React from "react";
import PaymentCard from "../components/payments/PaymentCard";
import payments from "../fakeData/payments.json";

const Payments = () => {
  return (
    <div className="w-full flex flex-col gap-5 sm:mt-20">
      <h1 className="text-center text-3xl font-bold my-2">Payments</h1>
      <div className="flex items-start justify-center sm:justify-start gap-1">
        <label
          htmlFor="method"
          className="text-lg sm:text-xl font-semibold mr-1"
        >
          Default Method:
        </label>
        <select name="method" id="method" className="rounded p-1 bg-slate-200">
          <option value="bothOptions">Both Options</option>
          <option value="cod">Cash On Delivery</option>
          <option value="advancedPayment">Advanced Payment</option>
        </select>
      </div>
      <div className="flex items-start justify-center sm:justify-start gap-1">
        <label
          htmlFor="payment"
          className="text-lg sm:text-xl font-semibold mr-1"
        >
          Payment Profile:
        </label>
        <select
          name="payment"
          id="payment"
          className="rounded p-1 bg-slate-200"
        >
          <option value="bankAcount">Bank Account</option>
          <option value="mobileBanking">Mobile Banking</option>
          <option value="cash">Cash</option>
        </select>
      </div>
      <hr />
      <div className="flex items-start justify-center sm:justify-start gap-1">
        <label
          htmlFor="overview"
          className="text-lg sm:text-xl font-semibold mr-1"
        >
          Payments Overview:
        </label>
        <select
          name="overview"
          id="overview"
          className="rounded p-1 bg-slate-200"
        >
          <option value="bankAcount">Life Time</option>
          <option value="mobileBanking">Last Month</option>
        </select>
      </div>
      <div className="flex items-center justify-center sm:justify-start gap-2">
        <div className="w-[10em] sm:w-[16em] h-[10em] bg-orange-600 flex flex-col items-center justify-center rounded">
          <h1 className="text-sm sm:text-xl text-white font-semibold">
            Amount On hold
          </h1>
          <h1 className="text-xl sm:text-3xl text-white font-bold">701&#36;</h1>
        </div>
        <div className="w-[10em] sm:w-[16em] h-[10em] bg-green-600 flex flex-col items-center justify-center rounded">
          <h1 className="text-sm sm:text-xl text-white font-semibold">
            Amount Recieved
          </h1>
          <h1 className="text-xl sm:text-3xl text-white font-bold">
            2,319&#36;
          </h1>
        </div>
      </div>
      <h1 className="text-lg sm:text-xl font-semibold">Transactions</h1>
      <div className="flex w-full items-center justify-center sm:justify-start gap-2">
        <button className="w-[10em] border hover:bg-gray-600 hover:text-white p-2 rounded-3xl bg-gray-300">
          On hold
        </button>
        <button className="w-[10em] border hover:bg-gray-600 text-white p-2 rounded-3xl  bg-indigo-600">
          Payments
        </button>
        <button className="w-[10em] border hover:bg-gray-600 hover:text-white p-2 rounded-3xl bg-gray-300">
          Refunds
        </button>
      </div>
      {payments?.map((payment) => (
        <PaymentCard payment={payment} key={payment.id} />
      ))}
    </div>
  );
};

export default Payments;
