"use client";

import React, { useState } from "react";
// import { useForm } from "react-hook-form"; delet package

import Link from "next/link";

export function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  


  return (
    <>
      <div className=" container mx-auto bg-red-600 rounded-lg p-14 flex items-center justify-center">
        <div>
          <h1 className="text-center font-bold text-white text-6xl">
            قیمت کلای آمازون رو به تومن ببین !
          </h1>
          <p className="text-center mx-auto font-normal text-sm my-6 max-w-lg">
            با جستجوی محصول مورد نظر میتونی از قیمت و هزینه ی ارسالش باخبر بشی
          </p>
          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              className="text-base text-gray-400 flex-grow outline-none p-3 "
              type="text"
              placeholder="نام محصول یا لینک آمازون امارات کالای مورد نظر را وارد نمایید..."
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <Link
                href={{
                  pathname: "/productDetails",
                  query: { link : searchValue},
                }}
              >
                <span
                  
                  className="bg-green-600 text-white text-base rounded-lg px-4 py-2 font-thin"
                >
                  جستجو
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
