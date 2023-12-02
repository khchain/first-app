"use client";
import React, { useState } from "react";

export function ProductDetails(data,) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <section>
        <div className=" lg:pl-20">
          <div className="mb-8 ">
            <h2 className="max-w-xl mb-6 text-2xl font-bold  md:text-4xl">
              {data?.title} title
            </h2>

            <p className="max-w-md text-gray-700 ">
              {data?.description} description
            </p>
          </div>

          <div className="mb-8 ">
            <h2 className="w-16 pb-1 mb-4 text-xl font-semibold border-b border-red-300">
              سایز
            </h2>
            <div>
              <div className="flex flex-wrap -mb-2">
                <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-red-400  hover:text-red-600 ">
                  8 GB
                </button>
                <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-red-400 hover:text-red-600 ">
                  16 GB
                </button>
                <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-red-400 hover:text-red-600 ">
                  1 TB
                </button>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="w-16 pb-1 mb-6 text-xl font-semibold border-b border-red-300 ">
              رنگ
            </h2>
            <div>
              <div className="flex flex-wrap -mx-2 -mb-2">
                <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-red-400  hover:text-red-600 ">
                  256 GB
                </button>
                <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-red-400 hover:text-red-600 ">
                  112 GB
                </button>
                <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-red-400 hover:text-red-600 ">
                  1 TB
                </button>
              </div>
            </div>
          </div>
          <div className="w-32 mb-8 ">
            <label
              htmlFor="quantity"
              className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-red-300 "
            >
              تعداد
            </label>
            <div className="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
              <button
                onClick={() => {
                  if (quantity !== 1) {
                    setQuantity(quantity - 1);
                  }
                }}
                className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer   hover:text-gray-700  hover:bg-gray-400"
              >
                <span className="m-auto text-2xl font-thin">-</span>
              </button>
              <input
                disabled
                type="number"
                value={quantity}
                className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none    focus:outline-none text-md hover:text-black"
              />
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer   hover:text-gray-700 hover:bg-gray-400"
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="w-28 pb-1 mb-6 text-xl font-semibold border-b border-red-300 ">
              قیمت نهایی
            </h2>
            <h3>{data?.price} تومان</h3>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center justify-center w-full p-4 text-red-600 border border-red-400 rounded-md lg:w-2/5  hover:bg-red-600  hover:text-gray-100 ">
              افزودن به سبد خرید
            </button>
          </div>

          <div className="bg-red-300"></div>
        </div>
      </section>
    </>
  );
}
