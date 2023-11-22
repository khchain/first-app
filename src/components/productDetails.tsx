"use client";
import React, { useState } from "react";

export function ProductDetails() {
  return (
    <>
      <section className="overflow-hidden   rounded-lg h-min bg-white my-6  p-6 container mx-auto    ">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <img
                    src="https://i.postimg.cc/6qcPhTQg/R-18.png"
                    alt=""
                    className="object-cover w-full lg:h-full "
                  />
                </div>
                <div className="flex-wrap hidden md:flex ">
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-red-300 hover:border-red-300"
                    >
                      <img
                        src="https://i.postimg.cc/6qcPhTQg/R-18.png"
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent hover:border-red-300"
                    >
                      <img
                        src="https://i.postimg.cc/6qcPhTQg/R-18.png"
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent hover:border-red-300"
                    >
                      <img
                        src="https://i.postimg.cc/6qcPhTQg/R-18.png"
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent hover:border-red-300"
                    >
                      <img
                        src="https://i.postimg.cc/6qcPhTQg/R-18.png"
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                </div>
                <div className="px-6 pb-6 mt-6 border-t border-gray-300 ">
                  <div className="flex flex-wrap items-center mt-6">
                    <h2 className="text-lg font-bold text-gray-700 border-b border-red-300  pb-1  ">
                      تفکیک هزینه ها
                    </h2>
                  </div>
                  <div className="mt-2 px-7">
                    {/* <a className="text-sm text-red-400 " href="#">
                      Get delivery dates
                    </a> */}
                    <h3>قیمت ارزی :900درهم</h3>
                    <h3>قیمت ارزی با تخفیف :700 درهم </h3>
                    <h3>معادل قیمت ارزی :700,000,000 تومان </h3>
                    <h3>هزینه شیپینگ به درهم :20 درهم </h3>
                    <h3>هزینه شیپینگ به تومان :1,000,000 تومان </h3>
                    <h3>هزینه حمل و گمرک :3,000,000 تومن </h3>
                    <h3>کارمزد :200,000,000 </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className=" lg:pl-20">
                <div className="mb-8 ">
                  <h2 className="max-w-xl mb-6 text-2xl font-bold  md:text-4xl">
                    Macbook Pro M130c90
                  </h2>
                  {/* <p className="inline-block mb-6 text-4xl font-bold text-gray-700 ">
                    <span>$1500.99</span>
                    <span className="text-base font-normal text-gray-500 line-through ">
                      $1800.99
                    </span>
                  </p>
                  <p className="max-w-md text-gray-700 ">
                    Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor
                    amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum
                    dor amet Lorem ispum dor amet Lorem ispum dor amet
                  </p> */}
                </div>
                {/* <div className="mb-8">
                  <h2 className="w-16 pb-1 mb-4 text-2xl font-bold border-b border-red-300  ">
                    Colors
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    <button className="p-1 mb-2 mr-3 ">
                      <div className="w-6 h-6 rounded-full bg-stone-400"></div>
                    </button>
                    <button className="p-1 mb-2 mr-3 ">
                      <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                    </button>
                    <button className="p-1 mb-2 ">
                      <div className="w-6 h-6 bg-red-200 rounded-full"></div>
                    </button>
                  </div>
                </div> */}
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
                      <button className="px-4 py-2 mb-2 font-semibold border rounded-md hover:border-red-400 hover:text-red-600 ">
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
                      <button className="px-4 py-2 mb-2 mr-2 font-semibold border rounded-md hover:border-red-400 hover:text-red-600 ">
                        1 TB
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-32 mb-8 ">
                  <label
                    for=""
                    className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-red-300 "
                  >
                    تعداد
                  </label>
                  <div className="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer   hover:text-gray-700  hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none    focus:outline-none text-md hover:text-black"
                      placeholder="1"
                    />
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer   hover:text-gray-700 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="w-28 pb-1 mb-6 text-xl font-semibold border-b border-red-300 ">
                    قیمت نهایی
                  </h2>
                  <h3>1,800,000 تومان</h3>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {/* <button className="w-full p-4 bg-red-500 rounded-md lg:w-2/5  text-gray-50 hover:bg-red-600 ">
                    Add to cart
                  </button> */}
                  <button className="flex items-center justify-center w-full p-4 text-red-600 border border-red-400 rounded-md lg:w-2/5  hover:bg-red-600  hover:text-gray-100 ">
                    افزودن به سبد خرید
                  </button>
                </div>

                <div className="bg-red-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
