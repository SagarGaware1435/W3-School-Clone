import React from 'react'
import Examplediv from './Examplediv'

const Box2 = ({ title, info, code, data_bold, data, src, imageSrc, img_width, example_info }) => {
  const renderInfo = () => {
    if (Array.isArray(info)) {
      return info.map((ele, index) => (
        <p key={index} className='text-[18px] py-3 px-6'>{ele}</p>
      ));
    }
    else {
      return <p className='text-[18px] py-8 px-3'>{info}</p>;
    }
  };
  const renderData = () => {
    if (Array.isArray(data)) {
      return data.map((ele, index) => (
        <p key={index} className='text-[18px] py-3 px-6'>{ele}</p>
      ));
    }
    else {
      return <p className='text-[18px] py-8 px-3'>{data}</p>;
    }
  };
  return (
    <>
      <div className='m-4'>
        {title && <p className='text-3xl p-6'>{title}</p>}
        {info && renderInfo()}
        <Examplediv data={code} src={src} info={example_info} />
        {data_bold && <p className='font-bold py-6'>{data_bold}</p>}
        {data && renderData()}
        {imageSrc && <img src={imageSrc} className={`w-[${img_width ? img_width : "40%"}] m-6`} alt="img" />}
      </div>
    </>
  )
}

export default Box2
