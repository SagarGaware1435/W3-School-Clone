import React from "react";

export default function Become() {
  return (
    <>
      <div
        style={{ fontFamily: ["Source Sans Pro", "sans-serif"] }}
        className="flex flex-col"
      >
        <div className="flex flex-col justify-center items-center text-center pt-20">
          <div className="">
            <img src="https://www.w3schools.com/signup/lynxlogo.svg" alt=""></img>
          </div>
          <div className="text-[25px] lg:text-[32px] font-extrabold mt-[3%]">
            Become a W3Schooler
          </div>
          <div className="text-[12px] lg:text-[16px] mt-[3%]">
            <b className="font-extrabold">Learn</b> with proven training
            materials used by millions
          </div>
          <div className="text-[15px] ml-[10%] mr-[10%] lg:text-[21px] text-center font-semibold mt-[3%]">
            We have been helping people learn to code for over 23 years. Start
            learning with our constantly updated and improved learning material.
            Join our online community and get started today!
          </div>
          <div className="mt-[7%] grid grid-cols-1 gap-10 p-3 lg:grid-cols-3 lg:gap-20 text-white">
            <div className="w-[290px] bg-[#282a35] p-4 rounded-2xl">
              <div className="text-left">
                <span className="text-[45px]">70</span>
                <span className="pl-2 text-[25px]">Million +</span>
              </div>
              <div className="text-left">
                <span className="text-[15px] font-bold">Monthly</span>{" "}
                <span className="text-[15px]">Visits</span>
              </div>
            </div>
            <div className="w-[290px] bg-[#282a35] p-4 rounded-2xl">
              <div className="text-left">
                <span className="text-[45px]">3</span>
                <span className="pl-2 text-[25px]">Billion +</span>
              </div>
              <div className="text-left">
                <span className="text-[15px] font-bold">Yearly</span>{" "}
                <span className="text-[15px]">Page Visits</span>
              </div>
            </div>
            <div className="w-[290px] bg-[#282a35] p-4 rounded-2xl">
              <div className="text-left">
                <span className="text-[45px]">1</span>
                <span className="pl-2 text-[25px]">Million +</span>
              </div>
              <div className="text-left">
                <span className="text-[15px] font-bold">Spaces</span>{" "}
                <span className="">Created</span>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <button className="w-[222.8px] h-[53.5px] text-white text-[21px] font-semibold bg-[#04AA6D] rounded-3xl mt-[35px]">
              Sign Up for Free
            </button>
          </div>
        </div>
        <svg
          style={{ width: "100%", marginBottom: "-7px" }}
          viewBox="0 0 5060 374"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M140.556 238.55L0 245.763V373.051H140.556H843.333H1686.67H2530H3373.33H4216.67H5060V40.8298C4778.89 -8.81241 4497.78 -8.81241 4216.67 19.6152C3967.87 43.2731 3719.07 92.5228 3470.27 141.772C3437.96 148.169 3405.64 154.565 3373.33 160.905C3352.81 164.931 3332.3 168.979 3311.78 173.028C3051.18 224.447 2790.59 275.866 2530 280.979C2333.05 286.033 2136.11 266.72 1939.16 247.407C1855 239.154 1770.83 230.9 1686.67 224.548C1405.56 203.334 1124.44 203.334 843.333 210.547C642.946 214.479 442.559 224.232 293.084 231.507C232.87 234.438 180.917 236.966 140.556 238.55Z"
            fill="#D9EEE1"
          ></path>
        </svg>
      </div>
    </>
  );
}
