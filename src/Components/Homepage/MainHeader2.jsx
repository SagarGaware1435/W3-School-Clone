import React, { useState } from 'react';
import { dataRecognized } from './HeaderData';
import CodeGame from './CodeGame';
import ColorPicker from './ColorPicker';
import CssTemplate from './CssTemplate';
import ExerciseAndQuiz from './ExerciseAndQuiz';
import HowItWorks from './HowItWorks';
import MyILearn from './MylLearn';
import ProCaption from './ProCaption';
import Footer from "../Homepage/Footer"
import About from './About';
import { Link } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
const MainHeader2 = (props) => {
  const backgroundColors = ['#D9EEE1', '#FFF4A3', '#080808', '#F3ECEA', '#96D4D4', '#D9EEE1'];
  const backgroundButtonColors = ['#04AA6D', '#FFC0C7', '#282A35', '#FFF4A3'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const getTextColor = (backgroundColor) => {
    if (backgroundColor === '#04AA6D' || backgroundColor === '#282A35') {
      return '#fff';
    } else {
      return '#000';
    }
  };
  const getButtonTextColor = (backgroundColor) => {
    if (backgroundColor === '#282A35') {
      return '#fff';
    } else {
      return '#000';
    }
  };

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
      <div className="pt-[94px] w-full">
        <About />
        <div className="w-full">
          {dataRecognized.map((Element, index) => (
            <div
              key={Element.Title}
              style={{
                backgroundColor:
                  backgroundColors[index % backgroundColors.length],
              }}
            >
              <div className="lg:p-[6rem] md:p-[2rem] p-[2rem] md:flex">
                <div
                  className="w-full"
                  style={{
                    color: getButtonTextColor(
                      backgroundButtonColors[
                        index % backgroundButtonColors.length
                      ]
                    ),
                  }}
                >
                  <h1 className="lg:text-[90px] md:text-[50px] text-[40px] font-bold text-center mb-4">
                    {Element.Title}
                  </h1>
                  <p className="text-center md:text-[16px] text-[10px] font-semibold mb-4 mx-16">
                    {Element.description}
                  </p>
                  <div>
                    {Element.buttonsEncountered.map((item, buttonIndex) => (
                      <div className="flex justify-center" key={buttonIndex}>
                        <button
                          className="font-bold text-base md:text-lg lg:text-[18px] py-2 px-4 mb-5 w-48 md:w-60 lg:w-60 rounded-3xl"
                          style={{
                            color: getTextColor(
                              backgroundButtonColors[
                                buttonIndex % backgroundButtonColors.length
                              ]
                            ),
                            backgroundColor:
                              backgroundButtonColors[
                                buttonIndex % backgroundButtonColors.length
                              ],
                          }}
                        >
                          {item}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full bg-[#E7E9EB] shadow-xl rounded-[4px]">
                  <div className="p-8">
                    <h1 className="text-[1.5rem] font-semibold mb-5">
                      {Element.Example}
                    </h1>
                    <div class="bg-white border-l-[4px] border-[#04AA6D] w-full">
                      <div class="w-full">
                        <pre class="p-2  overflow-x-auto">
                          {Element.code.join("\n")}
                        </pre>
                      </div>
                    </div>

                    <a href={`${Element.linksEmbedded}`}>
                      <button className="font-bold text-white bg-[#04AA6D] mt-4 md:text-lg lg:text-[18px] py-2 px-4 w-48 md:w-60 lg:w-60 rounded-3xl relative">
                        {Element.data}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <HowItWorks />
          <MyILearn />
          <ProCaption />
          <ColorPicker />
          <CodeGame />
          <ExerciseAndQuiz />
          <CssTemplate />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainHeader2;
