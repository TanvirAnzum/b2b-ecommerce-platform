import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const { register, handleSubmit, reset } = useForm();
  const registerHandler = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 sm:mt-20 items-center justify-center">
      <div className="w-[90%] sm:w-[22em] min-h-[36em] flex flex-col bg-base-100 rounded-lg p-8 gap-5 shadow-lg shadow-slate-400">
        <div className="flex items-center justify-between">
          <h1 className="text-xl uppercase font-bold text-center ">Sign Up</h1>
          <h1 className="text-xl uppercase font-bold text-center text-error cursor-pointer">
            <Link to="/">home</Link>
          </h1>
        </div>
        <form
          className="w-full flex flex-col items-start justify-center gap-1"
          onSubmit={handleSubmit(registerHandler)}
        >
          <label htmlFor="name" className="font-medium ">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full text-md rounded-md border-2 border-slate-300 px-2 py-1 outline-none focus:ring focus:ring-accent text-black"
            required
            {...register("fullName")}
          />

          <label htmlFor="email" className="font-medium ">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full text-md rounded-md border-2 border-slate-300 px-2 py-1 outline-none focus:ring focus:ring-accent text-black"
            required
            {...register("email")}
          />

          <label className="font-medium " htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full text-md rounded-md border-2 border-slate-300 px-2 py-1 outline-none focus:ring focus:ring-accent text-black"
            required
            {...register("password")}
          />

          <label htmlFor="photo" className="font-medium ">
            Image
          </label>
          <input
            type="file"
            id="photo"
            className="w-full text-md rounded-md border-2 border-slate-300 px-2 py-1 outline-none focus:ring focus:ring-accent text-black"
            required
            {...register("imageUrl")}
          />

          <button
            type="submit"
            className="self-center rounded uppercase p-2 bg-green-500 w-fit mt-5 btn-accent font-semibold"
          >
            Sign Up
          </button>
        </form>

        <div className="w-full h-[4em] relative flex items-center justify-center">
          <p className="w-fit h-fit ring ring-primary rounded-md p-1 absolute m-auto bg-base z-50 font-bold">
            OR
          </p>
        </div>

        <p className="text-md text-center font-medium ">
          Already a user?{" "}
          <Link to="/login">
            <span className="cursor-pointer font-bold underline text-success">
              LOGIN
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
