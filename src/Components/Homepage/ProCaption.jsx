import React from "react";

export default function ProCaption() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#282A35] pt-20 pb-20 pr-5 pl-5">
        <div className="text-white text-center">
          <h1 className="text-[52px] font-bold">Become a PRO User</h1>
        </div>
        <div className="text-[#ffc0c7] p-2 text-center">
          <p className="text-[25px]">And unlock powerful features:</p>
        </div>
        <div className="text-white mt-5 flex flex-col justify-start items-start">
          <p className="flex justify-center items-center gap-2 text-[18px] leading-[25px] font-bold p-4 ">
            <div>
              <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" alt=""/>
            </div>
            <div>Browse W3Schools without ads</div>
          </p>
          <p className="flex justify-center items-center  gap-2 text-[18px] leading-[16px] font-bold p-4 ">
            <div>
              <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" alt=""/>
            </div>
            <div>
              Website hosting(Includes <a
                href="/"
                className="underline underline-offset-3 hover:text-green-400"
              >
                Spaces
              </a> PRO)
            </div>
          </p>
          <p className="flex justify-center items-center gap-2 text-[18px] leading-[16px] font-bold p-4 ">
            <div>
              <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" alt=""/>
            </div>
            <div>
              Access to our <a
                href="/"
                className="underline underline-offset-3 hover:text-green-400"
              >
                HTML Video Tutorial
              </a>
            </div>
          </p>
        </div>
        <div className="mt-[35px]">
          <button className="w-[300px] h-[52px] text-white text-[21px] font-semibold bg-[#04AA6D] rounded-3xl">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
