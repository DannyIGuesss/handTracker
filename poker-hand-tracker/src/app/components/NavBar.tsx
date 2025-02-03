"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-red-400 h-[8vh] flex justify-between static">
        <div className="flex items-center">
          <h1 className=" text-md md:text-lg lg:text-2xl text-white px-4 py-2">
            HandTracker
          </h1>
        </div>

        {/* burger icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-white focus:outline-none mr-4 transition-transform duration-300 ${
              isMenuOpen ? "transform scale-110 bg-gray-500" : ""
            }`}
          >
            <img src="../../menu.png" alt="icon" className=" h-12 w-18" />
          </button>
          {isMenuOpen && (
            <ul className="absolute top-14 right-10 flex flex-col justify-around bg-gray-400 mt-2 py-2 px-4 rounded-lg shadow-lg ">
              <button className="text-center bg-gray-600 hover:bg-gray-400 px-3.5 py-2 rounded-md my-1">
                <li>Create</li>
              </button>
              <button className="text-center bg-gray-600 hover:bg-gray-400 px-3.5 py-2 rounded-md my-1">
                <li>Past Hands</li>
              </button>
              <button className="text-center bg-gray-600 hover:bg-gray-400 px-3.5 py-2 rounded-md my-1">
                <li>LogOut</li>
              </button>
            </ul>
          )}
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex md:flex-row md:w-2/4">
          <ul className="flex justify-around  items-center bg-red-400 w-full">
            <li>
              <button className=" text-sm md:text-md lg:text-lg bg-black rounded text-white px-2 py-1 ">
                Create
              </button>
            </li>
            <li>
              <button className=" text-sm md:text-md lg:text-lg bg-black rounded text-white px-2 py-1">
                Past Hands
              </button>
            </li>
            <li>
              <button className=" text-sm md:text-md lg:text-lg bg-black rounded text-white px-2 py-1">
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
