import React from 'react'

const About = () => {
    return (
        <>
            <div className='bg-[url("https://www.w3schools.com/images/background_in_space.gif")] h-[69vh] relative w-full'>
                <div className='flex w-[95%] md:w-[70%] lg:w-[50%] m-auto flex-col gap-6 items-center justify-center pt-24'>
                    <p className='text-white font-bold text-[50px] sm:text-[70px] text-center'>Learn to Code</p>
                    <p className='text-[#fff4a3] text-xl font-bold text-center'>With the world's largest web developer site.</p>
                    <div className='flex items-center justify-center'>
                        <input className='px-6 py-2 rounded-l-3xl placeholder-black  min-[500px]:w-[400px]' type="text" placeholder='Search our tutorials, e.g. HTML' />
                        <button className='bg-[#04aa6d] p-2 px-6 sm:px-10 rounded-r-3xl'>
                            <ion-icon style={{ color: 'white', fontSize: 20, fontWeight: 'extrabold' }} name="search-outline"></ion-icon>
                        </button>
                    </div>
                    <a href="/" className='text-white underline font-bold text-xl'>
                        Not Sure Where To Begin?
                    </a>
                </div>
                <div className='hidden min-[1000px]:block absolute top-[170px] right-[100px]'>
                    <img src="https://www.w3schools.com/images/lynx_in_space.png" alt="Lynx in Space" />
                </div>
            </div>
            <svg style={{ background: '#D9EEE1' }} width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#282A35"></path>
            </svg>
        </>
    )
}

export default About
