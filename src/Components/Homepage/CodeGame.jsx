import React from 'react'

export default function CodeGame() {
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-[#96D4D4] pt-20 pb-20 pr-5 pl-5 text-center'>
        <div style={{fontFamily:['Freckle Face','cursive']}} className='text-[48px]'>Code Game</div>
        <div style={{fontFamily:['Freckle Face','cursive']}} className='text-[32px] m-[10px] sm:text-[25px]'>Help the Lynx collect pine cones!</div>
        <div>
            <img src='https://www.w3schools.com/images/w3lynx_200.png' className='m-[16px]' alt=""></img>
        </div>
        <div>
            <button className='w-[200px] h-[52px] text-white text-[21px] font-bold bg-[#282A35] rounded-3xl sm:text-[18px]'>Play Game</button>
          </div>
    </div>
    </>
  )
}
