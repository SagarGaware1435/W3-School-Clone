import React from "react";
import UserNavbar from "../Navbar/UserNavbar";

export default function Cards({
  displayImage,
  hoverImage,
  oldPrice,
  newPrice,
  subtitle,
  enrollNowText,
  PaymentLinked,
}) {
  return (
    <>
    
      <div className="w-[18rem] p-5 border-[1px] border-gray-300 rounded-md  relative">
        <div className="flex items-center justify-center">
          <img
            src={displayImage}
            alt="Product"
            className="object-fit w-[280px] h-[159px]"
          />
          <img
            src={hoverImage}
            alt="Product Hover"
            className="absolute  mx-auto w-[280px] h-[160px] object-fit opacity-0 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="px-4 py-2 grid">
          <div className="text-gray-500 mt-1">
            {oldPrice.trim() === "" ? (
              <div className="h-[12px]"></div>
            ) : (
              <span className="line-through text-[12px]">{oldPrice}</span>
            )}
          </div>
          <div className="">
            <div className="text-[24px]">
              <span>{newPrice}</span>{" "}
            </div>
            
            <div className="text-[14px] w-full font-semibold text-gray-800">
              {subtitle}
            </div>
          </div>
          <div className="flex items-center justify-center">
          <a href={PaymentLinked}> <button className="bg-green-500 text-white w-[10rem] mt-3 px-7 py-2 rounded hover:bg-green-800 transition-colors">
              {enrollNowText}
            </button></a>
          </div> 
        </div>
      </div>
    </>
  );
}
