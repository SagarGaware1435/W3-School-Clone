import React from "react";

export default function W3Spaces() {
  return (
    <>
      <div
        style={{ fontFamily: ["Source Sans Pro", "sans-serif"]}}
        className="flex flex-col justify-center items-center bg-[rgb(40,42,52)] text-white text-center pt-20"
      >
        <div className="text-[25px] md:text-[32px] font-bold">
          W3School Spaces
        </div>
        <div className="text-[12px] pt-3 md:text-[20px] font-bold">
          <span className="text-[#ffc0c7]">Code</span> Websites directly in the
          browser - No setup required
        </div>
        <div>
          <div style={{ position: "relative" }} className="pt-[5%] pl-[10%]">
            <img
              src="https://www.w3schools.com/signup/dynamicspaces.gif"
              className="pl-[10%] pr-[10%]"
            ></img>
            <img
              src="https://www.w3schools.com/signup/lynx.png"
              className="h-[120px] w-[50px] mt-[-30%] ml-[-4%] md:h-[300px] md:w-[200px] md:mt-[-35%] md:ml-[-10%]"
            />
          </div>
          <div className="mt-[32px] pt-[17%] lg:pt-[7%]">
            <button
              style={{ position: "relative" }}
              className="w-[250px] py-2 text-white text-[19px] font-semibold bg-[#04AA6D] rounded-3xl hover:bg-[#04AA6]"
            >
              Sign Up for Free
            </button>
          </div>
          <div className="pt-[4%] pb-[10%]">
            <button
              style={{ position: "relative" }}
              className="w-[250px] py-2 text-white text-[19px] font-semibold bg-[transparent] border border-[#ffc0c7] rounded-3xl hover:bg-[#04AA6]"
            >
              Read More
            </button>
          </div>
        </div>
        <svg style={{width: '100%', marginBottom: '0px'}} viewBox="0 0 5060 307" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 41.2209V406.665H5060V239.053C4497.78 269.624 3935.56 269.624 3373.33 216.213C3125.16 193.256 2876.98 159.209 2628.81 125.161C2314.76 82.0754 2000.71 38.9901 1686.67 18.3807C1124.44 -18.5152 562.222 9.59595 281.111 26.1112L0 41.2209Z" fill="#04AA6D"></path>
            </svg>
      </div>
    </>
  );
}
