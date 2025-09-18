import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="shadow-lg h-15 w-full p-8 flex items-center justify-between">
      <h1 className="font-extrabold text-2xl">Logo</h1>
      <ul className="flex gap-5 font-normal text-lg flex-1 justify-center">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/addProduct"}>
          <li>Add new Product</li>
        </Link>
      </ul>
      <div className="flex gap-2 max-md:hidden  text-lg font-semibold items-center">
        <button className="w-30 h-11 rounded-lg text-white bg-blue-700">
          Sign up
        </button>
        <button className="w-25 h-11 rounded-lg text-white bg-blue-700">
          Log in
        </button>
      </div>
    </header>
  );
};

export default Header;
