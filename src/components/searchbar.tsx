"use client";
import React from "react";

export function Searchbar() {
  
  const handleSubmit = () => {};
  return (
    <>
      
        <div className=" container mx-auto bg-red-500 rounded-lg p-14 flex items-center justify-center">
          <form>
            <h1 className="text-center font-bold text-white text-6xl">
              قیمت کلای آمازون رو به تومن ببین !
            </h1>
            <p className="text-center mx-auto font-normal text-sm my-6 max-w-lg">
              با جستجوی محصول مورد نظر میتونی از قیمت و هزینه ی ارسالش باخبر بشی
            </p>
            <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
              <input
                onChange={(e)=>{console.log(e.target.value)}}
                className="text-base text-gray-400 flex-grow outline-none p-3 "
                type="text"
                placeholder="نام محصول یا لینک آمازون امارات کالای مورد نظر را وارد نمایید..."
              />
              <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin"
                >
                  جستجو
                </button>
              </div>
            </div>
          </form>
        </div>
      
    </>
  );
}
