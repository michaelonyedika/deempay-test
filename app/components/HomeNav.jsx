import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className=" py-5">
      <div className=" container flex flex-wrap items-center mx-auto mt-10 md:px-12 md:flex-row">
        <div className=" mb-14 lg:mb-0 lg:w-1/2">
          <h1
            className=" max-w-xl text-[2.9rem] leading-none text-gray-900 
                    font-extrabold font-sans text-center lg:text-5xl lg:text-left 
                    lg:leading-tight mb-5"
          >
            A small business is only as good as it's tools
          </h1>
          <p className=" max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
            We're different. DeemPay is the only Fintech business platform that
            let you run your business payments transactions on one platform
          </p>

          <div className=" flex justify-center mt-14 lg:justify-start">
            <Link href="/services">
              <button
                type="button"
                className=" text-white bg-[#035ae8] font-medium 
                        rounded-lg px-5 py-4 text-center hover:bg-[#6366f1] 
                        hover:drop-shadow-md transition duration-300 ease-in-out"
              >
                Learn More
              </button>
            </Link>

            <Link href="/services">
              <button
                className=" ml-4 text-gray-900 bg-gray-200 font-medium 
                        rounded-lg px-5 py-4 text-center hover:bg-gray-300 
                        hover:drop-shadow-md transition duration-300 ease-in-out"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className=" lg:w-1/2">
          <img src="/deempay_img_2.png" alt="hero-img" className=" ml-auto rounded-t-lg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
