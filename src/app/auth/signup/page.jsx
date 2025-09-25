"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isVisible, SetIsVisible] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (data.confirmPassword && data.confirmPassword != data.password) {
      setError(true);
    }
  }, [data]);

  return (
    <div className="w-full h-screen p-4 flex flex-col gap-1 items-center justify-center ">
      <form className="w-full max-w-120 flex flex-col gap-4 p-4 rounded-lg h-fit shadow-[0_0_10px]">
        <div className=" relative  input-name">
          <input
            type="text"
            name="User name"
            placeholder="enter you username"
            required
            value={data.name}
            className="border w-full h-13 rounded-lg focus:border-gray-900 p-4  duration-500 outline-none border-gray-300"
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
        </div>
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
            className={`${
              error ? "border-red-500" : "border-gray-400"
            } border w-full h-13 rounded-lg focus:border-gray-900 p-4  duration-500 outline-none border-gray-300`}
          />
        </div>
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
            value={data.confirmPassword}
            placeholder="confirm your Password"
            onChange={(e) => {
              setData({ ...data, confirmPassword: e.target.value });
            }}
            className={`${
              error ? "border-red-500" : "border-gray-400 focus:border-gray-900"
            } border w-full h-13 rounded-lg  p-4  duration-500 outline-none border-gray-300`}
          />
        </div>
        <button className="w-full h-14 rounded-lg text-white font-bold bg-blue-500 text-xl">
          Create account
        </button>
      </form>

      {error && <span>password and confirm password does not match</span>}
    </div>
  );
};

export default Page;
