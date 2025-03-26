import React from "react";
import "../../App.css";
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar2 from "../Navbar/Navbar2";
import { useState } from "react";
import { userData } from "../Homepage/HeaderData";
import { StarPoints } from "./assets";
const UserProfile = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex justify-between fixed bg-white w-full z-50 pb-[2rem]">
        <div className="flex gap-1 md:gap-2 lg:gap-1 xl:gap-5 ">
          <a href="/" className="group">
            <img
              className="h-12 m-auto transition duration-300 ease-in-out group-hover:filter group-hover:brightness-75"
              src="https://www.w3schools.com/images/w3schools_logo_436_2.png"
              alt="logo"
            />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex sm:hidden justify-center items-center gap-1 py-3 xl:py-4 px-2 hover:bg-[#04aa6d] hover:text-white"
          >
            Menu
            <AiFillCaretDown style={{ fontSize: 12 }} />
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white flex flex-col p-4">
              <a href="/" className="mb-2">
                Tutorials
              </a>
              <a href="/" className="mb-2">
                Exercises
              </a>
              <a href="/" className="mb-2">
                Get Certified
              </a>
              <a href="/">Services</a>
            </div>
          )}

          <a
            href="/"
            className="hidden sm:flex justify-center items-center gap-1 py-3 xl:py-4 px-2 hover:bg-[#04aa6d]  hover:text-white"
          >
            Tutorials
            <AiFillCaretDown style={{ fontSize: 12 }} />
          </a>

          <a
            href="/"
            className="hidden sm:flex justify-center items-center gap-1 py-3 xl:py-4 px-2 hover:bg-[#04aa6d] hover:text-white"
          >
            Exercises
            <AiFillCaretDown style={{ fontSize: 12 }} />
          </a>

          <a
            href="/"
            className="hidden lg:flex justify-center items-center gap-1 py-3 xl:py-4 px-2 hover:bg-[#04aa6d] hover:text-white"
          >
            <p>Get Certified</p>
            <AiFillCaretDown style={{ fontSize: 12 }} />
          </a>

          <a
            href="/"
            className="hidden md:flex justify-center items-center gap-1 py-3 xl:py-4 px-2 hover:bg-[#04aa6d] hover:text-white"
          >
            Services
            <AiFillCaretDown
              className="gap-10 md:gap-2"
              style={{ fontSize: 12 }}
            />
          </a>

          <div className="flex items-center justify-center">
            <div>
              <input
                className="hidden text-[12px] min-[850px]:block border-2 py-1 px-4 lg:w-[80%] xl:w-[100%]  text-lg rounded-3xl"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div>
              <BsSearch className="lg:ml-[-75px] md:ml-[-30px] xl:ml-[-25px]" />
            </div>
          </div>
        </div>

        <div className="flex gap-6 mr-5">
          <div className="hidden xl:flex justify-center items-center gap-1">
            <BiCodeAlt className="w-5 h-5 text-[#9763f6]" />
            <span>Spaces</span>
          </div>

          <Link className="flex items-center" to={"/userprofile"}>
            <button>Welcome : {`${props.name}`}</button>
          </Link>

          <Link to={"/"}>
            <button className="bg-[#d9eee1] hover:bg-[#04aa6d] hover:text-white p-5 flex items-center justify-center">
              Logout
            </button>
          </Link>
        </div>

        <Navbar2 />
      </div>
      <div
        style={{
          fontSize: "36px",
          fontWeight: "600",
          color: "#282a35",
          fontStyle: "normal",
        }}
        className="md:p-8 p-2 md:mx-[2.5rem] mx-0 w-full md:flex"
      >
        <div className="md:p-0">
          <h1 className="styledText md:w-2/3 flex spacing-7 mt-[11rem] leading-[45px]">
            My Learning
          </h1>
          <div className="BoxConatiner w-full rounded-3xl  mt-[3rem] relative">
            <div className="md:flex relative">
              <div className="relative z-10">
                <h1 className="userName text-[1.9rem] leading-7 text-left font-normal">
                  Hi, {`${props.name}`}
                </h1>
                <div className="md:text-[18px] text-[16px] font-light md:w-11/12 w-full mt-3">
                  {userData.MyLearningContent}
                </div>
                <div className="text-[18px] font-light mt-3">
                  {userData.Note}
                </div>
                <div className="buttonFlex flex  w-full mt-5 p-0">
                  <Link
                    to={"/certification"}
                    className="md:text-[18px] flex justify-center  text-[12px] font-semibold bg-[#282a35] mx-0 text-white p-3 rounded-3xl xl:w-2/3 w-full mt-3"
                  >
                    {" "}
                    <button>{userData.MyLearningButton1}</button>
                  </Link>
                  <Link
                    to={"/certification"}
                    className="md:text-[18px]  text-[12px] xl:w-1/2 w-full mx-0  mt-3 hover:underline font-semibold flex justify-center"
                  >
                    {" "}
                    <button>{userData.MyLearningButton2}</button>
                  </Link>
                </div>
              </div>
              <div className=" md:w-1/2 w-full flex justify-center items-center ">
                <img className="md:mt-0 mt-[3rem]" src={StarPoints} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#fafafa] w-full">
        <div className="ProgressMarked bg-[#fafafa] mt-8 md:p-6 p-0 pl-9 flex justify-between md:w-[50%] w-full">
          <h1 className="text-4xl">In Progress</h1>
          <h1>Show all in progress</h1>
        </div>
        <div className="flex md:p-8 p-2">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-10 ">
            <div className="card1 bg-white w-[15rem] rounded-2xl ">
              <div className="flex justify-center items-center border-[1px] border-[#fafafa] mt-8">
                <div>
                  <img
                    src="https://my-learning.w3schools.com/tutorial-logos/react.svg"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-[10px] mt-3 ml-5">Tutorial</p>
              <p className="mt-3 ml-5 cursor-pointer font-semibold">
                Learn HTML
              </p>
              <p className="font-semibold  ml-5 text-[12px]">
                23 of 35 lessons Completed
              </p>
              <div className="p-4">
                <div className="float-right mx-5 text-2xl mb-[2rem]">63%</div>
                <div
                  className="w-full  h-[9px] rounded-3xl mx-auto mb-8 mt-8"
                  style={{ border: "2px solid black" }}
                >
                  <div className="bg-black w-[63%] h-[6px]"></div>
                </div>
              </div>
            </div>

            <div className="card1 bg-white w-[15rem] rounded-2xl ">
              <div className="flex justify-center items-center border-[1px] border-[#fafafa] mt-8">
                <div>
                  <img
                    src="https://my-learning.w3schools.com/tutorial-logos/html.svg"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-[10px] mt-3 ml-5">Tutorial</p>
              <p className="mt-3 ml-5  cursor-pointer font-semibold">
                Learn React
              </p>

              <p className="font-semibold ml-5 text-[12px]">
                56 of 74 lessons Completed
              </p>
              <div className="p-4">
                <div className="float-right mx-5 text-2xl mb-[2rem]">85%</div>
                <div
                  className="w-full  h-[9px] rounded-3xl mx-auto mb-8 mt-8"
                  style={{ border: "2px solid black" }}
                >
                  <div className="bg-black w-[85%] h-[6px]"></div>
                </div>
              </div>
            </div>
            {/* <img src="https://my-learning.w3schools.com/tutorial-logos/html.svg" alt="" /> */}

            <div className="card1 ">
              <p className="font-semibold">
                Tip Collect stars Read all the lessons in a tutorial, and get a
                star. Score 100% on the quiz in a tutorial, and get a star.
                Complete all the exercises in a tutorial, and get another star.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl p-6">More Tutorials</h1>
      </div>
      <div className="flex gap-10 bg-[fafafa]">
        <div className="grid md:grid-cols-3 grid-cols-1 w-full p-8">
          <div className="card1 bg-white w-[15rem] rounded-2xl">
            <div className="flex justify-center items-center border-[1px] border-[#fafafa] mt-8">
              <div>
                <img
                  src="https://my-learning.w3schools.com/tutorial-logos/fallback.svg"
                  alt="TypeScript"
                />
              </div>
            </div>
            <p className="text-[10px] mt-3 ml-5">TypeScript</p>
            <p className="mt-3 ml-5 cursor-pointer font-semibold">
              Learn TypeScript
            </p>
            <p className="font-semibold ml-5 text-[12px]">
              30 of 50 lessons Completed
            </p>
            <div className="p-4">
              <div className="float-right   mx-5 text-2xl mb-[2rem]">75%</div>
              <div
                className="w-full h-[9px] bg-transparent  rounded-3xl mx-auto mb-8 mt-8"
                style={{ border: "2px solid black" }}
              >
                <div className="bg-black w-75% h-[6px]"></div>
              </div>
            </div>
          </div>

          <div className="card1 bg-white w-[15rem] rounded-2xl">
            <div className="flex justify-center items-center border-[1px] border-[#fafafa] mt-8">
              <div>
                <img
                  src="https://my-learning.w3schools.com/tutorial-logos/fallback.svg"
                  alt="Web Development"
                />
              </div>
            </div>
            <p className="text-[10px] mt-3 ml-5">Web Development</p>
            <p className="mt-3 ml-5 cursor-pointer font-semibold">
              Learn Web Development
            </p>
            <p className="font-semibold ml-5 text-[12px]">
              45 of 60 lessons Completed
            </p>
            <div className="p-4">
              <div className="float-right bg-transparent  mx-5 text-2xl mb-[2rem]">75%</div>
              <div
                className="w-full h-[9px]  bg-transparent  rounded-3xl mx-auto mb-8 mt-8"
                style={{ border: "2px solid black" }}
              >
                <div className="bg-black w-75% h-[6px]"></div>
              </div>
            </div>
          </div>

          <div className="card1 bg-white w-[15rem] rounded-2xl">
            <div className="flex justify-center items-center border-[1px] border-[#fafafa] mt-8">
              <div>
                <img src="https://my-learning.w3schools.com/tutorial-logos/fallback.svg" alt="Vue.js" />
              </div>
            </div>
            <p className="text-[10px] mt-3 ml-5">Vue.js</p>
            <p className="mt-3 ml-5 cursor-pointer font-semibold">
              Learn Vue.js
            </p>
            <p className="font-semibold ml-5 text-[12px]">
              20 of 40 lessons Completed
            </p>
            <div className="p-4">
              <div className="float-right mx-5 text-2xl mb-[2rem]">50%</div>
              <div
                className="w-full  bg-transparent  h-[9px] rounded-3xl mx-auto mb-8 mt-8"
                style={{ border: "2px solid black" }}
              >
                <div className="bg-black w-50% h-[6px]"></div>
              </div>
            </div>
          </div>

          <div className="card1 bg-white w-[15rem] rounded-2xl">
            <div className="flex justify-center items-center border-[1px] border-[#fafafa] mt-8">
              <div>
                <img
                  src="https://my-learning.w3schools.com/tutorial-logos/fallback.svg"
                  alt="JavaScript"
                />
              </div>
            </div>
            <p className="text-[10px] mt-3 ml-5">JavaScript</p>
            <p className="mt-3 ml-5 cursor-pointer font-semibold">
              Learn JavaScript
            </p>
            <p className="font-semibold ml-5 text-[12px]">
              25 of 35 lessons Completed
            </p>
            <div className="p-4">
              <div className="float-right mx-5 text-2xl mb-[2rem]">71.43%</div>
              <div
                className="w-full bg-transparent  h-[9px] rounded-3xl mx-auto mb-8 mt-8"
                style={{ border: "2px solid black" }}
              >
                <div className="bg-black w-71.43% h-[6px]"></div>
              </div>
            </div>
          </div>

          <div className="card1 bg-white w-[15rem] rounded-2xl">
            <div className="flex justify-center items-center border-[1px] border-[#fafafa] mt-8">
              <div>
                <img src="https://my-learning.w3schools.com/tutorial-logos/css.svg" alt="CSS" />
              </div>
            </div>
            <p className="text-[10px] mt-3 ml-5">CSS</p>
            <p className="mt-3 ml-5 cursor-pointer font-semibold">Learn CSS</p>
            <p className="font-semibold ml-5 text-[12px]">
              15 of 25 lessons Completed
            </p>
            <div className="p-4">
              <div className="float-right mx-5 text-2xl mb-[2rem]">60%</div>
              <div
                className="w-full h-[9px]  bg-transparent  rounded-3xl mx-auto mb-8 mt-8"
                style={{ border: "2px solid black" }}
              >
                <div className="bg-black w-60% h-[6px]"></div>
              </div>
            </div>
          </div>

          <div className="card1 bg-white w-[15rem] rounded-2xl">
            <div className="flex justify-center items-center border-[1px] border-[#fafafa] mt-8">
              <div>
                <img
                  src="https://my-learning.w3schools.com/tutorial-logos/js.svg"
                  alt="JavaScript"
                />
              </div>
            </div>
            <p className="text-[10px] mt-3 ml-5">JavaScript</p>
            <p className="mt-3 ml-5 cursor-pointer font-semibold">
              Learn JavaScript
            </p>
            <p className="font-semibold ml-5 text-[12px]">
              X of Y lessons Completed
            </p>
            <div className="p-4">
              <div className="float-right mx-5 text-2xl mb-[2rem]">40%</div>
              <div
                className="w-full h-[9px] rounded-3xl bg-transparent mx-auto mb-8 mt-8"
                style={{ border: "2px solid black" }}
              >
                <div className="bg-black w-[40%] h-[6px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
