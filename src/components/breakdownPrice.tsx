import React from "react";
import { calculetPrice, addCommasToNumber } from "../app/utils/pricecal";

export function BreakdownPrice(data) {
   
   
    const {
      totalPrice,
      deliveryPrice,
      wagePrice,
      UAEPrice,
      IRPrice,
      UAESheppingPrice,
      IRSheppingPrice,
    } = calculetPrice(data.price);
    // console.log(UAESheppingPrice);
//   const UAEPrice = productPrice;
//   const IRPrice = UAEPrice * 14000;
//   const UAESheppingPrice = UAEPrice * 0.5;
//   const IRSheppingPrice = UAESheppingPrice * 14000;
//   const deliveryPrice = IRPrice * 0.5;
//   const wagePrice = IRPrice * 0.5;
//   const totalPrice = IRPrice + deliveryPrice + wagePrice;
  return (
    <>
      <div className="px-6 pb-6 mt-6 border-t border-gray-300 ">
        <div className="mt-2 px-7">
          <div className="flex flex-wrap items-center mt-6">
            <h2 className="text-lg font-bold text-gray-700 border-b border-red-300  pb-1  ">
              تفکیک هزینه ها
            </h2>
          </div>
          <div className="mt-2 px-7">
            <h3>قیمت ارزی :{totalPrice} درهم</h3>
            <h3>قیمت ارزی با تخفیف :{UAEPrice} درهم </h3>
            <h3>معادل قیمت ارزی :{IRPrice} تومان </h3>
            <h3>هزینه شیپینگ به درهم :{UAESheppingPrice} درهم </h3>
            <h3>هزینه شیپینگ به تومان :{IRSheppingPrice} تومان</h3>
            <h3>هزینه حمل و گمرک :{deliveryPrice} تومان</h3>
            <h3>کارمزد :{wagePrice}تومان </h3>
          </div>
        </div>
      </div>
    </>
  );
}
