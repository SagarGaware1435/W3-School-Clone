import React from 'react'

export default function PublicProfile() {
  return (
    <>
    <div
        style={{ fontFamily: ["Source Sans Pro", "sans-serif"] }}
        className="flex flex-col justify-center items-center text-center bg-[rgb(163,210,211)] pt-20 pb-20"
      >
     <div class="text-[25px] lg:text-[32px] font-bold">Public Profile</div>

        <div className="mt-2 text-[12px] lg:text-[20px]"><b className="font-bold">Share</b><span className='font-medium'> your coding skills with the world</span></div>
        <div>
          <img src="https://www.w3schools.com/signup/profilepreview.png" className="mt-10 pl-5 pr-5 w-auto h-auto lg:w-[700px]"></img>
        </div>
        <div className='mt-5'>
            <button className='w-[250px] py-2 text-white text-[19px] font-semibold bg-[#04AA6D] rounded-3xl hover:bg-[#04AA6] '>Sign Up for Free</button>
          </div>
      </div>
    </>
  )
}
