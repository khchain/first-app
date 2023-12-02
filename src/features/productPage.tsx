"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { calculetPrice, addCommasToNumber } from "../app/utils/pricecal";
import { useFetchData } from "../hooks/useFetchData";
import { BreakdownPrice } from "../components/breakdownPrice";
import { ImageCatalog } from "../components/imageCatalog";
import { ProductDetails } from "../components/productDetails";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const productLink: any = searchParams.get("link");
  const { data, error, isLoading } = useFetchData(productLink);
  console.log(data, error, isLoading);
  return (
    <>
      <section className="overflow-hidden   rounded-lg h-min bg-white my-6  p-6 container mx-auto    ">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full mb-8 md:w-1/2 ">
              <ImageCatalog data={data} />
              <BreakdownPrice productPrice={data} />
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <ProductDetails data={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
