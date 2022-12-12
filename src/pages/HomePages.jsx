import React from "react";
import { Link } from "react-router-dom";

const HomePages = () => {
  return (
    <div className="w-full flex flex-col gap-5 sm:mt-20">
      <h1 className="text-2xl font-semibold">Welcome to B2B Ecommerce site</h1>

      <p className="text-xl font-semibold">Total pages: </p>
      <ul className="list-inside list-decimal flex flex-col gap-2 ">
        <li className="hover:text-green-500 hover:font-semibold w-fit">
          <Link to="/login">Login Page</Link>
        </li>
        <li className="hover:text-green-500 hover:font-semibold w-fit">
          <Link to="/registration">Registration Page</Link>
        </li>
        <li className="hover:text-green-500 hover:font-semibold w-fit">
          <Link to="/products">All Products Page</Link>
        </li>
        <li className="hover:text-green-500 hover:font-semibold w-fit">
          <Link to="/orders">Orders Page</Link>
        </li>
        <li className="hover:text-green-500 hover:font-semibold w-fit">
          <Link to="/customers">Customers Page</Link>
        </li>
        <li className="hover:text-green-500 hover:font-semibold w-fit">
          <Link to="/payments">Payments Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePages;
