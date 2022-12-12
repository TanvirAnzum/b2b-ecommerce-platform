import React from "react";

const Search = ({ title, placeholder }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="w-full min-h-[12vh] flex flex-col gap-4 items-center justify-center  rounded"
      onSubmit={submitHandler}
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <input
        type="text"
        className="w-full sm:w-[80%] h-12 text-xl bg-white border rounded  p-2 outline-indigo-400 border-indigo-300"
        placeholder={placeholder}
      />
    </form>
  );
};

export default Search;
