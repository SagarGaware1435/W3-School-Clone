import React from "react";

export default function WantToUpgarde() {
  return (
    <>
      <div
        style={{ fontFamily: ["Source Sans Pro", "sans-serif"] }}
        className="flex flex-col justify-center items-center bg-[#04AA6D] text-white text-center pt-20"
      >
        <div>
          <div className="text-[30px] md:text-[42px] font-extrabold mt-2">Want To Upgrade?</div>
          <div className="text-[24px] font-semibold mt-2">
            You Can Also Upgrade Your Account
          </div>
          <div className="text-[24px] font-semibold mt-2">
            To Unlock Powerful Features:
          </div>
        </div>
        <div className="pt-[7%] flex flex-col lg:flex-row gap-20 pb-[10%]">
          <div>
            <div className="h-[280px] w-[280px] bg-[rgb(121,189,149)] rounded-[50%] flex items-center">
              <img
                src="https://www.w3schools.com/signup/adfree.png"
                className="h-[150px] object-cover  ml-[12%]"
              />
            </div>
            <div className="pt-7 text-[24px] font-extrabold">Ad Free Learning</div>
            <div className="pt-2 text-[19px] font-bold">No distractions</div>
            
          </div>
          <div>
            <div className="h-[280px] w-[280px] bg-[rgb(121,189,149)] rounded-[50%] flex items-center">
              <img
                src="https://www.w3schools.com/signup/video.png"
                className="h-[150px] object-cover  ml-[5%]"
              />
            </div>
            <div className="pt-7 text-[24px] font-extrabold">HTML Video Tutorial</div>
            <div className="pt-2 text-[19px] font-bold">Learn HTML by video</div>
          </div>
          <div>
            <div className="h-[280px] w-[280px] bg-[rgb(121,189,149)] rounded-[50%] flex items-center">
              <img
                src="https://www.w3schools.com/signup/spacesupgrade.png"
                className="h-[150px] object-cover  ml-[7%]"
              />
            </div>
            <div className="pt-7 text-[24px] font-extrabold">Spaces</div>
            <div className="pt-2 text-[19px] font-bold">More possibilities with spaces</div>
          </div>
        </div>
        <svg style={{width: '100%', marginBottom: '-7px'}} viewBox="0 0 5060 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="wavepath4" fill-rule="evenodd" clip-rule="evenodd" d="M5060 41.9665V407.664L0 407.664V239.936C562.222 270.528 1124.44 270.528 1686.67 217.08C1934.84 194.108 2183.02 160.036 2431.19 125.965C2745.24 82.8493 3059.29 39.734 3373.33 19.1103C3935.56 -17.8111 4497.78 10.3195 4778.89 26.8463L5060 41.9665Z" fill="white"></path>
        </svg>
      </div>
    </>
  );
}
