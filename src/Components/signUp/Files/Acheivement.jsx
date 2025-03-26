import React from "react";

export default function Acheivement() {
  return (
    <>
      <div
        style={{ fontFamily: ["Source Sans Pro", "sans-serif"] }}
        className="flex flex-col justify-center items-center text-center bg-[rgb(40,42,52)] pt-20"
      >
        <div class="text-[25px] lg:text-[32px] font-bold text-[#d9eee1]">Achievements</div>

        <div className="mt-10 text-[12px] lg:text-[20px] font-bold text-white">Track your learning journey</div>
        <div>
          <img src="https://www.w3schools.com/signup/coursecards.png" className="mt-10 pl-10 pr-10 w-auto" alt=""></img>
        </div>
        <div className="text-[#d9eee1] text-[16px] lg:text-[20px] font-bold mt-10">You can collect 3 stars in total on each tutorial.</div>
        <div className="mt-10 pb-[10%] pl-5 pr-5">
          <img src="https://www.w3schools.com/signup/stars.svg" className="w-[500px] h-[138.23px]" alt=""></img>
        </div>
        <svg
          style={{ width: "100%", marginBottom: "-10px" }}
          viewBox="0 0 5060 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 259.942V224.356L105.417 206.563C210.833 188.77 421.667 153.184 632.5 153.184C711.464 153.184 790.428 158.175 869.391 163.167C1001.26 171.504 1133.13 179.84 1265 164.927C1381.62 152.526 1498.23 120.855 1614.85 89.1837C1709.07 63.596 1803.28 38.0084 1897.5 22.583C2108.33 -14.0706 2319.17 0.163822 2530 22.583C2635.42 34.5043 2740.83 49.3615 2846.25 64.2186C2951.67 79.0758 3057.08 93.9329 3162.5 105.854C3373.33 128.273 3584.17 142.508 3795 123.647C3872.5 117.499 3950 106.879 4027.5 96.2593C4160.83 77.9885 4294.17 59.7176 4427.5 64.2186C4526.88 67.5736 4626.27 81.9985 4725.65 96.4235C4837.1 112.6 4948.55 128.777 5060 129.341V259.942H4427.5H3795H3162.5H2530H1897.5H1265H632.5H105.417H0Z"
            fill="#96D4D4"
          ></path>
        </svg>
      </div>

    </>
  );
}
