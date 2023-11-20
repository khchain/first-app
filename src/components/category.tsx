import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Category() {
  const categories = [
    {
      id: "1",
      name: "مد و پوشاک",
      image: "/images/Clothing.jpg",
    },
    {
      id: "2",
      name: "آرایشی بهداشتی",
      image: "/images/arayeshi.jpg",
    },
    {
      id: "3",
      name: "کالای دیجیتال",
      image: "/images/digital.jpg",
    },
  ];
  return (
    <>
      <div className="rounded-lg h-min bg-white my-6  p-6 container mx-auto  ">
        <h1 className=" flex text-4xl  justify-center  items-center mb-6 ">
          دسته‌بندی‌ محصولات
        </h1>
        <div className="  flex  justify-center flex-wrap">
          {categories.map((categorie) => {
            return (
              <div
                key={categorie.id}
                className="bg-white w-72 h-96 shadow-2xl rounded m-3"
              >
                <Link href="#" className="hover:text-red-600 text-gray-700">
                  <div className="h-5/6 w-full">
                    <Image
                      className="w-full h-full object-cover rounded-t"
                      src={categorie.image}
                      alt="piña"
                      width={900}
                      height={900}
                    />
                  </div>
                  <div className="w-full h-1/6  items-center flex justify-center">
                    <span className="text-lg font-semibold  tracking-wide ">
                      {categorie.name}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
