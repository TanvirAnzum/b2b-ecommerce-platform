import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="bg-slate-100">
      <NavBar />
      <div className="w-full sm:w-[80%] min-h-screen p-5 mx-auto ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
