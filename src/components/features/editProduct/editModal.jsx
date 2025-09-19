import React from "react";
import { useState } from "react";
import axios from "axios";

const EditModal = ({ data, setIsEdit }) => {
  const [body, setBody] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function updateProduct() {
    setLoading(true);
    try {
      const res = await axios.put(`/api/updateProduct/${data._id}`, body);
      window.location.reload();
      setLoading(false)
    } catch (error) {
      setError(true);
      
    }
  }

  return (
    <div className="w-full flex items-center justify-center h-screen absolute top-0 left-0 z-10 bg-black/30">
      {loading && (
        <div
          className={`${
            error && "bg-red-500"
          } bg-green-500 absolute loading text-white font-bold flex items-center justify-center  top-0 m-auto w-60 p-2 shrink-0 h-10 border`}
        >
          {error ? "error" : "Loading"}
        </div>
      )}
      <form
        className="w-full p-4 max-w-130 rounded-lg bg-white h-110 flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
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
            className="border h-13 p-2 rounded-md"
            name="product-name"
            required
            value={body.name}
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
            className="border h-13 p-2 rounded-md"
            name="product-price"
            required
            value={body.price}
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
            className="border h-13 p-2 rounded-md"
            name="product-image"
            required
            value={body.image}
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
            className="border h-13 p-2 rounded-md"
            name="product-quantity"
            required
            value={body.quantity}
            onChange={(e) => {
              setBody({ ...body, quantity: Number(e.target.value) });
            }}
          />
        </div>
        <div className="w-full flex items-center justify-center gap-8">
          <button
            className="w-40 h-12 rounded-lg font-semibold bg-green-500 text-white"
            onClick={updateProduct}
          >
            Edit Product
          </button>
          <button
            className="w-40 h-12 rounded-lg font-semibold bg-red-500 text-white"
            onClick={() => {
              setIsEdit(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
