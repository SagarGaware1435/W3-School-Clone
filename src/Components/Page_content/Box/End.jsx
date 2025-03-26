import React from 'react'
const End = ({ onNextClick, onPrevClick }) => {
  return (
    <>
      <div className='flex flex-col gap-2 p-6 pb-20'>
        <div className='flex justify-between  text-white font-bold'>
          <div className='bg-[#04aa6d] p-3 rounded-lg'>
            <button className='flex justify-center items-center gap-1 text-[17px]' onClick={onPrevClick}><ion-icon name="chevron-back-outline" style={{ fontSize: 20 }}></ion-icon> Previous</button>
          </div>
          <button className='p-3 rounded-lg border-2 border-gray-400 text-black hover:bg-gray-300'>Log in to track progress</button>
          <div className='bg-[#04aa6d] p-3 rounded-lg'>
            <button className='flex justify-center items-center gap-1 text-[17px]' onClick={onNextClick}>Next <ion-icon name="chevron-forward-outline" style={{ fontSize: 20 }}></ion-icon></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default End
