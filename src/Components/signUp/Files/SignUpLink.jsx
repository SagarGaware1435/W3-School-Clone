import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function SignUpLink() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>

      <div
        style={{ fontFamily: ["Source Sans Pro", "sans-serif"] }}
        className="signUp text-center pt-20"
      >
        <div className="md:text-[4.5vw] text-[11vw]  text-white font-bold ">
          {isSmallScreen ? "Sign Up" : "Sign Up For Free"}
        </div>

        <div className="text-[20px] text-white font-semibold leading-[2.5rem] mt-[35px]">
          Create a Free W3Schools Account to{" "}
          <span className="text-[#FFF4A3]"> Improve</span> Your Learning
          Experience
        </div>

        <div>
          <button className="w-[222.8px] h-[48.5px] text-white text-[17px] font-semibold bg-[#04AA6D] rounded-3xl mt-[35px]">
            <Link to={"/signuppage"}>Sign up for free</Link>
          </button>
        </div>

        <div className="flex mt-[10%] w-full  text-white items-center justify-center ">
          <div className=" mx-auto w-full">
            <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 w-full pb-[10%]">
              <div className="flex gap-5 item-center justify-center">
                <div>
                  <img
                    src="https://www.w3schools.com/signup/star.svg"
                    width={60}
                  ></img>
                </div>
                <div className="text-left">
                  <h1 className="text-[22px]">Track</h1>
                  <p className="text-[16px]">Your Learning</p>
                </div>
              </div>

              <div className="flex gap-10 items-center justify-center ">
                <div>
                  <img
                    src="https://www.w3schools.com/signup/upload.svg"
                    width={60}
                  ></img>
                </div>
                <div className="text-left">
                  <h1 className="text-[22px]">Share</h1>
                  <p className="text-[16px]">Your Skills</p>
                </div>
              </div>

              <div className="flex gap-5 items-center justify-center">
                <div>
                  <img
                    src="https://www.w3schools.com/signup/chat.svg"
                    width={60}
                  ></img>
                </div>
                <div className="text-left">
                  <h1 className="text-[22px]">Connect</h1>
                  <p className="text-[16px]">with Community</p>
                </div>
              </div>

              <div className="flex gap-10  items-center justify-center">
                <div>
                  <img
                    width={60}
                    src="https://www.w3schools.com/signup/window.svg"
                  ></img>
                </div>
                <div className="text-left">
                  <h1 className="text-[22px]">Code</h1>
                  <p className="text-[16px]">In Browser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          style={{ width: "100%", marginBottom: "-5px" }}
          viewBox="0 0 5001 216"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="wavepath1"
            d="M5001 152.929L4723.16 137.162C4445.33 121.395 3889.69 89.8608 3334.01 58.3264C2778.34 26.7919 2222.68 -4.74254 1667 0.594104C1111.33 4.96047 0 68.7574 0 68.7574L1.25366e-05 215.999C362.922 215.995 -359.449 216.003 283.045 215.999C838.715 215.999 1111.33 215.998 1667 215.998C2222.68 215.998 2778.34 215.998 3334.01 215.998C3889.69 215.998 4445.33 215.998 4723.16 215.998H5001V152.929Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  );
}
