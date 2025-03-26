import React from "react";
import { dataRecognized } from "./HeaderData";
import CodeGame from "./CodeGame";
import ColorPicker from "./ColorPicker";
import CssTemplate from "./CssTemplate";
import ExerciseAndQuiz from "./ExerciseAndQuiz";
import HowItWorks from "./HowItWorks";
import MyILearn from "./MylLearn";
import ProCaption from "./ProCaption";
import Footer from "../Homepage/Footer";
import About from "./About";
import LoggedOutNavbar from "../Navbar/LoggedOutNavbar";
const MainHeader = () => {
  const backgroundColors = [
    "#D9EEE1",
    "#FFF4A3",
    "#080808",
    "#F3ECEA",
    "#96D4D4",
    "#D9EEE1",
  ];
  const backgroundButtonColors = ["#04AA6D", "#FFC0C7", "#282A35", "#FFF4A3"];

  const getTextColor = (backgroundColor) => {
    if (backgroundColor === "#04AA6D" || backgroundColor === "#282A35") {
      return "#fff";
    } else {
      return "#000";
    }
  };
  const getButtonTextColor = (backgroundColor) => {
    if (backgroundColor === "#282A35") {
      return "#fff";
    } else {
      return "#000";
    }
  };

  return (
    <div className="w-full">
      <LoggedOutNavbar />

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

export default MainHeader;
