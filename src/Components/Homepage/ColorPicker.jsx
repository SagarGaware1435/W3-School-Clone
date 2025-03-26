import React from 'react'

export default function ColorPicker() {
  return (
    <>
      <div className='flex flex-col justify-center items-center pt-20 pb-20 pr-5 pl-5 bg-[#f3ecea]'>
        <div className='text-[55px] font-bold lg:text-[65px]'>
          <h1>Color Picker</h1>
        </div>
        <div className='text-[20px] font-semibold'>W3Schools' famous color picker:</div>
        <div className='pt-[35px]'>
          <img src='https://www.w3schools.com/images/colorpicker.png' className='w-[150px] h-[128px]' alt=""></img>
        </div>
      </div>
    </>
  )
}