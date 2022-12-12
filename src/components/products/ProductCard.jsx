import React from "react";
import "../../assets/styles/productCard.css";

const ProductCard = ({ product }) => {
  const { title, price, Status, units } = product || {};
  return (
    <div className="w-full min-h-[16em] flex flex-col shadow-md shadow-gray-500 rounded-md justify-between p-5 gap-2 bg-white">
      <div className="w-full h-fit sm:h-[20em] flex p-2 items-center justify-center">
        <img
          src="https://i.ibb.co/tY7sSBF/a-U5-Cz-CSHPKTX54f-GKNc-A8-T-1200-80.jpg"
          alt=""
          className="w-[8em] h-[8em] border sm:w-1/3 sm:h-[18em] p-2"
        />
        <div className="w-[70%] sm:w-1/3 flex flex-col p-2 sm:p-10 gap-2 sm:gap-8">
          <h1 className="text-md font-bold sm:text-4xl">{title}</h1>
          <p className="font-normal text-md sm:text-xl">{units} Units</p>
          <p className="font-semibold text-md sm:text-2xl ">
            {price}&#36;{" "}
            <span className="line-through text-sm sm:text-xl font-thin ml-2">
              {(price * 1.08).toFixed(2)}&#36;
            </span>
          </p>
          <p className="font-semibold text-md sm:text-2xl text-green-500">
            {Status}
          </p>
        </div>
        <div className="h-[8em] sm:h-[18em] w-[30%] sm:w-1/3 flex flex-col justify-between items-end ">
          <img
            src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/null/external-option-social-media-interface-anggara-basic-outline-anggara-putra.png"
            alt=""
            className="cursor-pointer"
          />
          <div className="">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" id="toggle" className="sr-only" />
                <div className="block bg-gray-600 w-10 h-6 sm:w-14 sm:h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 sm:w-6 sm:h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="w-full h-[2em] sm:h-[4em] flex items-center justify-center bg-slate-400 rounded-lg">
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/null/external-share-basic-user-interface-anggara-glyph-anggara-putra.png"
            alt=""
            className="w-[1em] sm:w-[2em] cursor-pointer"
          />
          <p className="text-md sm:text-xl font-semibold cursor-pointer">
            Share Products
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
