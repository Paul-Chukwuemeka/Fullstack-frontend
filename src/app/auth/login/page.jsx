"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [isVisible, SetIsVisible] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  async function handleLogIn() {
    try {
      const res = await axios.post("/api/auth/signin", data);
      console.log(res)
      localStorage.setItem("auth_token",res.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full h-screen py-10 px-2 flex flex-col gap-15 items-center  ">
      <h1 className="text-4xl font-semibold ">Log in</h1>
      <form
        className="w-full max-w-120 flex flex-col gap-4 p-4 rounded-lg h-fit shadow-[0_0_10px]"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogIn();
        }}
      >
        <div className=" relative  input-name">
          <input
            type="email"
            name="email"
            required
            value={data.email}
            placeholder="enter you Email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
            className="border w-full h-13 rounded-lg focus:border-gray-900 p-4  duration-500 outline-none border-gray-300"
          />
        </div>{" "}
        <div className=" relative  input-name">
          <button
            type="button"
            className="absolute top-1/2 right-5 -translate-y-1/2 text-gray-500"
            onClick={() => {
              SetIsVisible(!isVisible);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-eye-icon lucide-eye duration-800"
            >
              {isVisible ? (
                <>
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </>
              ) : (
                <>
                  <path d="m15 18-.722-3.25" />
                  <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                  <path d="m20 15-1.726-2.05" />
                  <path d="m4 15 1.726-2.05" />
                  <path d="m9 18 .722-3.25" />
                </>
              )}
            </svg>
          </button>
          <input
            type={isVisible ? "text" : "password"}
            name="Password"
            required
            minLength={8}
            value={data.password}
            placeholder="enter your Password"
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
            className={`border w-full h-13 rounded-lg focus:border-gray-900 p-4  duration-500 outline-none border-gray-300`}
          />
        </div>
        <button className="w-full h-14 rounded-lg text-white font-bold bg-blue-500 text-xl">
          Login
        </button>
      </form>

      {error.isError && <span>{error.message}</span>}
    </div>
  );
};

export default Page;
