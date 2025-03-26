import React from "react";

export default function CssTemplate() {
  return (
    <>
      <div style={{ fontFamily: 'Source Sans Pro' }} className="flex flex-col justify-center items-center pt-20 pb-20 pr-5 pl-5 bg-[#e7e9b] text-center">
        <div className="text-[65px] font-bold sm:text-[60px]">Web Templates</div>
        <div className="text-[20px] font-bold">Browse our selection of free responsive HTML Templates</div>
        <div className="mt-[35px] lg:ml-[15%] lg:mr-[15%] ">
          <img src="https://www.w3schools.com/w3css_templates.jpg" alt=""></img>
        </div>
        <div className="mt-[35px] lg:w-[710px] p-5 text-white text-[20px] font-semibold bg-[#282A35] rounded-3xl sm:w-full hover:bg-black">
          <button>
            Browse Templates
          </button>
        </div>
      </div>
    </>
  );
}
