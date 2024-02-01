"use client";

import Link from "next/link";
import React, { useState } from "react";

const HeroNav = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleMenu = () => {
    setMenuIcon(!menuIcon);
  };
  return (
    // Navbar
    <nav className="py-5 bg-white sticky top-0 border-b border-gray-100">
      <div className="container md:px-12 md:flex md:items-center md:justify-between">
        <div className=" flex items-center justify-between">
          <Link href="/" className=" flex items-center">
            <img src="/deempay_logo.svg" alt="Logo" className=" h-10 mr-3" />
            {/* <span className=" text-2xl text-gray-900 font-sans font-bold">
              DeemPay
            </span> */}
          </Link>
          <span
            onClick={handleMenu}
            className=" block mx-2 text-3xl bg-gray-100 p-2 rounded-lg md:hidden"
          >
            {menuIcon ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.7"
                stroke="currentColor"
                class="w-6 h-6"
                onClick={handleMenu}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={handleMenu}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </span>
        </div>

        <ul
          className={
            menuIcon
              ? "p-5 z-10 absolute bg-white/80 backdrop-blur w-full left-0 opacity-100 top-[80px] transition-all ease-in duration-300 md:p-0 md:flex md:items-center md:space-x-8 md:static md:w-auto md:opacity-100"
              : "p-5 z-10 absolute bg-white/80 backdrop-blur w-full left-0 opacity-0 top-[-400px] transition-all ease-in duration-300 md:p-0 md:flex md:items-center md:space-x-8 md:static md:w-auto md:opacity-100"
          }
        >
          <li onClick={handleMenu} className=" md:my-0">
            <Link
              href="/"
              className="font-medium duration-500 text-gray-900 hover:text-indigo-600"
            >
              Home
            </Link>
          </li>

          <li onClick={handleMenu} className=" my-6 md:my-0">
            <Link
              href="/about"
              className=" font-medium duration-500 text-gray-900 hover:text-indigo-600"
            >
              About
            </Link>
          </li>

          <li onClick={handleMenu} className=" my-6 md:my-0">
            <Link
              href="/services"
              className=" font-medium duration-500 text-gray-900 hover:text-indigo-600"
            >
              Services
            </Link>
          </li>

          <li onClick={handleMenu} className=" my-6 md:my-0">
            <Link
              href="/contact"
              className=" font-medium duration-500 text-gray-900 hover:text-indigo-600"
            >
              Contact
            </Link>
          </li>

          <Link onClick={handleMenu} href="/signup" className="">
            <button
              type="button"
              className=" w-full text-white bg-[#035ae8] font-medium rounded-lg px-3.5 py-3 text-center
                 hover:bg-[#6366f1] hover:drop-shadow-md transition duration-300 ease-in-out"
            >
              Get Started
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default HeroNav;
