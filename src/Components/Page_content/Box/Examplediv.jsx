import React from "react";

const Examplediv = ({ data = [], src = "#", info }) => {
  return (
    <>
      <div className="bg-[#e7e9eb] rounded-md p-4 py-6">
        <p className="text-2xl ">Example</p>
        <p className="text-md my-2">{info}</p>
        <div className="bg-white my-5 border-l-4 p-2 border-[#04aa6d]">
          {data &&
            data.length > 0 &&
            data.map((ele, index) => <p key={index}>{ele}</p>)}
        </div>
        {src !== "#" && (
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#04aa6d] py-2 px-5 rounded-md text-white font-medium"
          >
            Try it Yourself
          </a>
        )}
      </div>
    </>
  );
};

export default Examplediv;
