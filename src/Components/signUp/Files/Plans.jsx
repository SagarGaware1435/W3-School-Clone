import React, { useState } from "react";

export default function Plans() {
  const [isChecked, setIsChecked] = useState(false);
  const [pro, updatePro] = useState("$4.99");
  const [pre, updatePre] = useState("$9.99");
  const [dia, updateDia] = useState("$29.99");
  const [type, updateType] = useState("month");
  const toggleSwitchChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      updatePro("$4.99");
      updateDia("$29.99");
      updatePre("$9.99");
      updateType("month");
    } else {
      updatePro("$49.99");
      updateDia("$299.99");
      updatePre("$99.99");
      updateType("year");
    }
  };
  return (
    <>
      <div
        style={{ fontFamily: ["Source Sans Pro", "sans-serif"] }}
        className="flex flex-col justify-center items-center text-center pt-20 pb-0 pl-5 pr-5"
      >
        <div>
          <div className="text-[30px] md:text-[40px] font-bold">
            Your chance to Achieve even{" "}
            <span className="text-[#04aa6d]">more</span>
          </div>
          <div className="mt-[3%] text-[25px] font-normal">
            Find the plan to fulfill the requirements of your project
          </div>
          <div className="text-[12px] md:text-[15px] mt-[3%] font-semibold flex text-center gap-10 items-center justify-center">
            <div>Monthly</div>
            <label className="toggle">
              <input
                className="toggle-checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={toggleSwitchChange}
              />
              <div className="toggle-switch"></div>
            </label>
            <div>Yearly(get 2 months for free)</div>
          </div>

          <div className="flex items-center justify-center">
            <div className="gap-5 mt-7 grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4 gap-2">
              <div className="w-[270px] md:w-[258px] p-4 bg-[#d9eee1] border border-[#04aa6d] rounded-3xl">
                <div className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h1 className="text-[25px] font-bold md:text-[32px] mt-2">
                      Free
                    </h1>
                  </div>
                  <div className="text-[12px] font-semibold mt-2">
                    Become a W3Schooler
                  </div>
                  <div className="mt-2">
                    <img src="https://www.w3schools.com/signup/lynxbrown.svg"></img>
                  </div>
                  <div className="text-[15px] font-semibold mt-2">
                    Improve Your Learning Experience
                  </div>
                </div>
                <div className="text-[15px] font-bold mt-5">
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    My Learning
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    Public Profile
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    W3Schools Community
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />1
                    Basic Space
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    W3Spaces Subdomain
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    SSL Certificate
                  </div>
                </div>
                <div>
                  <div class="pt-[17%]">
                    <button className="w-[150px] h-[48.5px] text-white text-[19px] font-semibold bg-[#282A35] rounded-3xl hover:bg-[#000]">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              {/* // box2 */}
              <div className="w-[270px] md:w-[258px] p-4 bg-[#fff] border border-[#04aa6d] rounded-3xl">
                <div className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h1 className="text-[25px] font-bold md:text-[32px] mt-2">
                      Pro
                    </h1>
                  </div>
                  <div className="text-[12px] font-semibold mt-2">
                    Build and host your frontend projects
                  </div>
                  <div className="mt-6">
                    <p className="text-[#04aa6d] text-[42px] font-bold">
                      {pro}{" "}
                      <span className="text-black text-[15px]">/{type}</span>
                    </p>
                  </div>
                  <div className="text-[15px] font-semibold mt-2">
                    All Free
                    <br />
                    <p>+</p>
                  </div>
                </div>
                <div className="text-[15px] font-bold mt-5">
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    Ad Free Browsing
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    HTML Video Tutorial
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    10 Basic Spaces
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    Analytics
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    Priority Support
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    Cancel Anytime
                  </div>
                </div>
                <div>
                  <div class="mt-[32px]">
                    <button className="w-[150px] h-[48.5px] text-white text-[19px] font-semibold bg-[#04aa6d] rounded-3xl hover:bg-[#04aa6e]">
                      Get Pro
                    </button>
                  </div>
                </div>
              </div>

              {/* box3 */}
              <div className="w-[270px] md:w-[258px] p-4 bg-[#fff] border border-[#04aa6d] rounded-3xl">
                <div className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h1 className="text-[25px] font-bold md:text-[32px] mt-2">
                      Premium
                    </h1>
                  </div>
                  <div className="text-[12px] font-semibold mt-2">
                    Get backend support and all you need to build a web app
                  </div>
                  <div className="mt-2">
                    <p className="text-[#04aa6d] text-[42px] font-bold">
                      {pre}{" "}
                      <span className="text-black text-[15px]">/{type}</span>
                    </p>
                  </div>
                  <div className="text-[15px] font-semibold mt-2">
                    All <span className="font-extrabold">Pro</span>
                    <br />
                    <p>+ upgraded to</p>
                  </div>
                </div>
                <div className="text-[15px] font-bold">
                  <div className="flex items-center  justify-center gap-5 text-[32px]">
                    15
                  </div>
                  <div className="flex items-center justify-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    Basic Spaces
                  </div>
                  <div className="flex items-center justify-center gap-5 text-[32px]">
                    1
                  </div>
                  <div className="flex items-center justify-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    Fullstack Space
                  </div>
                </div>
                <div>
                  <div class="mt-[32px] pt-[7%]">
                    <button className="w-[150px] h-[48.5px] text-white text-[19px] font-semibold bg-[#04aa6d] rounded-3xl hover:bg-[#04aa6e]">
                      Get Premium
                    </button>
                  </div>
                </div>
              </div>

              {/* box-4 */}
              <div className="w-[270px] md:w-[258px] p-4 bg-[#fff] border border-[#04aa6d] rounded-3xl">
                <div className="flex flex-col items-center justify-center text-center">
                  <div>
                    <h1 className="text-[25px] font-bold md:text-[32px] mt-2">
                      Diamond
                    </h1>
                  </div>
                  <div className="text-[12px] font-semibold mt-2">
                    Get more server power for professionals and businesses
                  </div>
                  <div className="mt-2">
                    <p className="text-[#04aa6d] text-[42px] font-bold">
                      {dia}{" "}
                      <span className="text-black text-[15px]">/{type}</span>
                    </p>
                  </div>
                  <div className="text-[15px] font-semibold mt-2">
                    All <span className="font-extrabold">Premium</span>
                    <br />
                    <p>+ upgraded to</p>
                  </div>
                </div>
                <div className="text-[15px] font-bold">
                  <div className="flex items-center  justify-center gap-5 text-[32px]">
                    20
                  </div>
                  <div className="flex items-center justify-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    Basic Spaces
                  </div>
                  <div className="flex items-center  justify-center gap-5 text-[32px]">
                    3
                  </div>
                  <div className="flex items-center justify-center gap-5">
                    <img src="https://www.w3schools.com/signup/check.svg" />
                    Fullstack Space
                  </div>
                </div>
                <div>
                  <div class="mt-[32px] pt-[7%]">
                    <button className="w-[150px] h-[48.5px] text-white text-[19px] font-semibold bg-[#04aa6d] rounded-3xl hover:bg-[#04aa6e]">
                      Get Diamond
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[10%] lg:mt-[4%]">
            <p className="text-[20px] font-bold">
              Looking to add multiple users?
            </p>
            <p className="text-[#04aa6d] underline font-semibold text-[16px] pb-10">
              Read here for how to get in touch
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
