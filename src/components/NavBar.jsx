import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-[10vh] flex p-5 items-center fixed bottom-0 sm:top-0 justify-between  bg-slate-300">
      <img
        src="https://img.icons8.com/fluency/96/null/e-commerce.png"
        alt=""
        className="hidden sm:block w-[4em]"
      />

      <ul className="w-full sm:w-[30em] flex items-center justify-between">
        <Link to="/" className="flex flex-col items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/null/home-page.png"
            alt=""
            className="cursor-pointer w-[2em]"
          />
          <p className="cursor-pointer">Home</p>
        </Link>
        <Link
          to="/orders"
          className="flex flex-col items-center justify-center"
        >
          <img
            src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/null/external-logistics-shipping-delivery-kmg-design-detailed-outline-kmg-design-2.png"
            alt=""
            className="cursor-pointer w-[2em]"
          />
          <p className="cursor-pointer">Orders</p>
        </Link>
        <Link
          to="/products"
          className="flex flex-col items-center justify-center"
        >
          <img
            src="https://img.icons8.com/external-outline-lafs/64/null/external-products-cloud-storage-outline-lafs.png"
            alt=""
            className="cursor-pointer w-[2em]"
          />
          <p className="cursor-pointer">Products</p>
        </Link>
        <Link
          to="/customers"
          className="flex flex-col items-center justify-center"
        >
          <img
            src="https://img.icons8.com/external-febrian-hidayat-detailed-outline-febrian-hidayat/64/null/external-manage-business-and-management-febrian-hidayat-detailed-outline-febrian-hidayat.png"
            alt=""
            className="cursor-pointer w-[2em]"
          />
          <p className="cursor-pointer">Customers</p>
        </Link>
        <Link className="flex flex-col items-center justify-center">
          <img
            src="https://img.icons8.com/fluency-systems-regular/48/null/user.png"
            alt=""
            className="cursor-pointer w-[2em]"
          />
          <p className="cursor-pointer">Account</p>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
