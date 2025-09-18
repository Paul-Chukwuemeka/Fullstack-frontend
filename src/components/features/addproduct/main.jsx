"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [body, setBody] = useState({
    name: "",
    price: 0,
    quantity: 0,
    image: "",
  });

  useEffect(() => {
    console.log(body);
  }, [body]);

  async function postData() {
    const apiUrl = "/api/addProduct"
    const res = await axios.post(apiUrl,body)
    console.log(res.data)
  }

  return (
    <div className="p-5 flex flex-col gap-2">
      <h1 className="text-3xl font-semibold">Add a new Product</h1>
      <form
        className="w-full max-w-xl flex flex-col gap-2 self-center shadow-[0_0_6px] h-fit p-4 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          postData();
        }}
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="product-name"
            className="after:content-['*'] after:text-red-500 font-semibold"
          >
            Product Name
          </label>
          <input
            type="text"
            className="border h-13 rounded-md"
            name="product-name"
            required
            onChange={(e) => {
              setBody({ ...body, name: e.target.value });
            }}
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
            className="border h-13 rounded-md"
            name="product-price"
            required
            onChange={(e) => {
              setBody({ ...body, price: Number(e.target.value) });
            }}
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
            className="border h-13 rounded-md"
            name="product-image"
            required
            onChange={(e) => {
              setBody({ ...body, image: e.target.value });
            }}
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
            className="border h-13 rounded-md"
            name="product-quantity"
            required
            onChange={(e) => {
              setBody({ ...body, quantity: Number(e.target.value) });
            }}
          />
        </div>
        <button className="w-45 border m-auto h-14 font-extrabold bg-blue-600 text-white rounded-lg">
          Add New Product
        </button>
      </form>
    </div>
  );
};

export default Main;
