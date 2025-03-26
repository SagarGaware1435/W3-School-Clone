import React from 'react'

export default function MylLearn() {
  return (
    <div>
      <div className='flex flex-col items-center text-center bg-[#D9EEF1] pt-20 pb-20 pr-5 pl-5'>
        <div>
          <h1 className='text-[65px] font-bold'>My Learning</h1>
        </div>
        <div>
          <h3 className='mt-[35px] text-[20px] font-semibold'>Track your progress with our <b className='font-bold'>free</b> "My Learning" program</h3>
        </div>
        <div>
          <h3 className='mt-[35px] text-[20px] font-semibold'>Log in to your account,and start earning points!</h3>
        </div>
        <div>
          <img src='https://www.w3schools.com/myl-green-off.png' className='mt-[35px] p-2' alt=''></img>
        </div>
        <div>
          <button className='w-[300px] h-[53.5px] text-white text-[21px] font-semibold bg-[#04AA6D] rounded-3xl mt-[35px]'>Sign Up for Free</button>
        </div>
      </div>
    </div>
  )
}
