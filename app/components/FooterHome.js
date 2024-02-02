import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterHome = () => {
  return (
    <>
      <div className=" bg-gray-300 h-1/2 w-full flex flex-col md:flex-row justify-around  p-20">
        <div className=" p-5">
          <ul>
            <Link href="/" className=" flex items-center pb-6">
              <Image src="/deempay_logo.svg" alt="Logo" className=" h-10 mr-3" width={150} height={100} />
            </Link>

            <div className=" flex gap-6 pb-5">
              <FaInstagram
                href="/"
                className="text-2xl cursor-pointer hover:text-yellow-600"
              />
              <FaTwitter
                href="/"
                className="text-2xl cursor-pointer hover:text-blue-600"
              />
              <FaLinkedinIn
                href="/"
                className="text-2xl cursor-pointer hover:text-blue-600"
              />
              <FaYoutube
                href="/"
                className="text-2xl cursor-pointer hover:text-red-600"
              />
            </div>
          </ul>
        </div>

        <div className=" p-5">
          <ul>
            <p className=" text-gray-800 font-bold text-2xl pb-4">Products</p>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">Stocks</Link>
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">Futures & options</Link>
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">Mutual Funds</Link>
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">Fixed deposits</Link>
            </li>
          </ul>
        </div>

        <div className=" p-5">
          <ul>
            <p className=" text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className=" text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">About</Link>
            </li>
            <li className=" text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">Products</Link>
            </li>
            <li className=" text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">Princing</Link>
            </li>
            <li className=" text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">Careers</Link>
            </li>
            <li className=" text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">Press & Media</Link>
            </li>
          </ul>
        </div>

        <div className=" p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
              <Link href="/">Contact</Link>
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
              <Link href="/">Support Portals</Link>
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
              <Link href="/">List of Charges</Link>
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
              <Link href="/">Download & Resourses</Link>
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-indigo-600 cursor-pointer">
              <Link href="/">Videos</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center text-center p-5 bg-gray-300">
        <h1 className="text-gray-800 font-semibold">
          &copy; 2021-2022 All rights reserved | Build with love &hearts; by
          <span className=" hover:text-blue-600 font-semibold cursor-pointer ml-1">
            <Link href="/">DeemPay</Link>
          </span>
        </h1>
      </div>
    </>
  );
};

export default FooterHome;
