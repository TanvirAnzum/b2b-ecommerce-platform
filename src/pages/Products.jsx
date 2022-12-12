import React from "react";
import ProductCard from "../components/products/ProductCard";
import products from "../fakeData/products.json";

const Products = () => {
  return (
    <div className="w-full flex flex-col gap-5 sm:mt-20">
      <h1 className="text-center text-3xl font-bold mb-4">All Products</h1>
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
