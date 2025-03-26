import React from "react";

export default function () {
  return (
    <>
      <div style={{ fontFamily: ["Source Sans Pro", "sans-serif"] }}>
        <div className="community flex flex-col justify-center items-center text-center pt-[30%] pb-[15%] lg:pt-[10%] lg:pb-[10%]">
          <div className="text-[20px] md:text-[32px] font-bold text-white">
            W3Schools Community
          </div>
          <div className="text-[10px] md:text-[20px] font-bold mt-[32px] text-white">
            Join the community and connect with other W3Schoolers
          </div>
          <div className="mt-[32px] pb-[10%]">
            <button className="w-[250px] py-2 text-white text-[19px] font-semibold bg-[#04AA6D] rounded-3xl hover:bg-[#04AA6]">
              Sign Up for Free
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-left md:flex-row gap-5 justify-center items-center pl-[10%] pr-[10%] pb-[15%]">
          <div className="">
            <img
              src="https://www.w3schools.com/signup/discord.png"
              className="mt-[-40px] md:mt-[-40px] w-full"
              alt="Discord"
            ></img>
          </div>
          <div className="flex flex-col ml-4">
            <h1 className="text-[20px] font-bold">
              Ask questions - help others
            </h1>
            <p>
              Reach your learning goals by working together with other learners.
            </p>
          </div>
        </div>
        <svg style={{width: '100%', marginBottom: '-10px'}} viewBox="0 0 5060 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="wavepath3" fill-rule="evenodd" clip-rule="evenodd" d="M4778.89 201.524L5060 224.655L5060 317.179L-0.000428702 317.178L7.82261e-05 101.172C210.562 90.1097 421.124 74.2062 631.686 58.3026C983.346 31.7421 1335.01 5.18153 1686.67 1.17503C2248.89 -6.65384 2811.11 39.608 3373.33 85.8699L4778.89 201.524Z" fill="#282A35"></path>
        </svg>
      </div>
    </>
  );
}
