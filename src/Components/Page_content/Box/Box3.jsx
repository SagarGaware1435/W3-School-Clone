import React from 'react';
import HowItWorks from "./HowItWorks";
const DEFAULT_IMAGE = "https://www.w3schools.com/images/mylearning.png";

const Box3 = ({ title, info, img, links, img_width, button_data, button_color, howitworks, title_img }) => {
  let imageSrc;

  if (img) {
    if (img === true) {
      imageSrc = DEFAULT_IMAGE;
    } else {
      imageSrc = img;
    }
  }

  const renderInfo = () => {
    if (Array.isArray(info)) {
      return info.map((ele, index) => (
        <p key={index} className='text-[18px]'>{ele}</p>
      ));
    }
    else {
      return <p className='text-[18px]'>{info}</p>;
    }
  };

  return (
    <>
      <div className='flex flex-col gap-5 p-6'>
        {title && <h1 className='text-[32px] font-medium'>{title}</h1>}
        {title_img && <img src={title_img} className={`w-[${img_width ? img_width : "50%"}]`} alt="title_img" />}
        {renderInfo()}
        {imageSrc && <img src={imageSrc} className={`w-[${img_width ? img_width : "70%"}]`} alt="img" />}
        {links &&
          <ul className='list-disc px-16'>
            {links.map((ele) => (
              <li key={ele}>{ele}</li>
            ))}
          </ul>
        }
        {button_data && <button className={`bg-[${button_color}] text-white p-2 w-[20%] rounded-md font-medium px-6`}>{button_data}</button>
        }
      </div>
      {howitworks && <HowItWorks />}

    </>
  );
}

export default Box3;

