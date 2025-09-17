import React from "react";

const Main = () => {
  return (
    <div className="p-5 flex flex-col gap-2">
      <h1 className="text-3xl font-semibold">Add a new Product</h1>
      <form className="w-full max-w-xl flex flex-col gap-2 self-center border shadow-lg h-fit p-2">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="product-name"
            className="after:content-['*'] after:text-red-500 font-semibold"
          >
            Product Name
          </label>
          <input
            type="text"
            className="border h-10 rounded-md"
            name="product-name"
          />
        </div>{" "}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="product-price"
            className="after:content-['*'] after:text-red-500 font-semibold"
          >
            Product Price
          </label>
          <input
            type="number"
            className="border h-10 rounded-md"
            name="product-price"
          />
        </div>{" "}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="product-image"
            className="after:content-['*'] after:text-red-500 font-semibold"
          >
            Product Image
          </label>
          <input
            type="text"
            className="border h-10 rounded-md"
            name="product-image"
          />
        </div>{" "}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="product-quantity"
            className="after:content-['*'] after:text-red-500 font-semibold"
          >
            Product Quantity
          </label>
          <input
            type="number"
            className="border h-10 rounded-md"
            name="product-quantity"
          />
        </div>
      </form>
    </div>
  );
};

export default Main;
