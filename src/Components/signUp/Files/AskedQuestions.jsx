import React, { useState } from "react";

export default function AskedQuestions() {
  const [openQuestion, setOpenQuestion] = useState({});

  const toggleQuestionVisibility = (questionNumber) => {
    setOpenQuestion(prevState => ({
      ...prevState,
      [questionNumber]: !prevState[questionNumber]
    }));
  };

  return (
    <div style={{ fontFamily: ["Source Sans Pro", "sans-serif"] }} className="flex flex-col bg-[#282a35] items-center pt-20 pl-5 pr-5">
      <h1 className="text-center text-[25px] lg:text-[32px] text-[#ffc0c7] font-bold">
        Frequently Asked Questions
      </h1>

      {[
        {
          question: "Is My Learning Free?",
          answer: "Both My Learning and W3Schools Public Profile are completely free of charge, however there are available upgrade plans that can enhance your learning experience."
        },
        {
          question: "Where can I find My Learning?",
          answer: "You can access your My Learning profile through the upper right corner on any W3Schools page."
        },
        {
          question: "How to collect stars?",
          answer: "Stars can be collected by completing to read the tutorial, finishing exercises, and taking the quiz of the topic you have been learning."
        },
        {
          question: "How can I get certified?",
          answer: "All of our certifications can be found and purchased at campus.w3schools.com"
        }
      ].map((item, index) => (
        <React.Fragment key={index}>
          <div className={`abc flex text-[16px] w-[90%] lg:w-[50%] bg-white p-5 rounded-xl font-bold mt-5 ${openQuestion[index] ? 'active' : ''}`}>
            <button className="flex items-center text-left gap-5 w-full" onClick={() => toggleQuestionVisibility(index)}>
              <img src={openQuestion[index] ? 'https://www.w3schools.com/signup/chevron-up.svg' : 'https://www.w3schools.com/signup/chevron-down.svg'} width={16} alt="img" />
              {item.question}
            </button>
          </div>
          {openQuestion[index] && (
            <div className="flex text-[16px] w-[90%] lg:w-[50%] bg-white p-5 rounded-b-lg font-bold mt-1">
              {item.answer}
            </div>
          )}
        </React.Fragment>
      ))}

    </div>
  );
}