import React from "react";
import CustomerCard from "../components/customers/CustomerCard";
import Search from "../components/Search";
import customers from "../fakeData/customers.json";

const Customers = () => {
  return (
    <div className="w-full flex flex-col gap-5 sm:mt-20">
      <Search title="My Customers" placeholder={"Search by customers name"} />
      {customers?.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </div>
  );
};

export default Customers;
