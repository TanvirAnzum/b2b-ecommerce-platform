import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/images/404-pages.jpg";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="w-full  min-h-screen flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img src={errorImg} alt="" />
        <p className="text-error text-center font-semibold text-xl">
          Something went wrong!!!
        </p>
        <p className="text-error text-center font-semibold text-xl">
          {error.statusText || error.message}
        </p>
        <div>
          <Link
            className="p-2 bg-green-500 text-white rounded font-bold text-xl"
            to={"/"}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
