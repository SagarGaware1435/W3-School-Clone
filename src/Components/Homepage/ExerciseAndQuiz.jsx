import React from "react";

export default function ExerciseAndQuiz() {
  return (
    <>
      <div
        style={{ fontFamily: "Source Sans Pro" }}
        className="flex flex-col items-center justify-center bg-[#282A35] pt-20 pb-20 pr-10 pl-10"
      >
        <div className="text-white text-[65px] font-bold">
          Exercises and Quizzes
        </div>
        <div className="text-[20px] mt-[10px] text-white font-bold">
          Test your skills!
        </div>
        <div className="lg:grid lg:grid-cols-2 pt-[3%] justify-center gap-[50px] sm:grid-cols-1">
          <div className="lg:w-[450px] bg-[#04aa6d] rounded-md text-white hover:bg-[#069461] font-medium text-center md:w-[300px] sm:w-[200px] mt-4">
            <button className="px-[70px] py-[50px] text-[35px]">
              Exercises
            </button>
          </div>
          <div className="lg:w-[450px]  bg-[#fff4a3] rounded-md text-black hover:bg-[#f8e97e] text-center  font-medium md:w-[300px] sm:w-[200px] mt-4">
            <button className="px-[70px] py-[50px] text-[35px] text-black sm:w-[250px]">
              Quizzes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
