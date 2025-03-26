import React, { useEffect, useState } from 'react';

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className='lg:flex flex-col items-center justify-center bg-[#282A35] pt-[7%] pb-[7%] gap-10'>
          <div>
            <img src='https://www.w3schools.com/how-spaces-works3.png' alt='How It Works' />
          </div>
          <div>
            <button className='w-[300px] h-[53.5px] text-white text-[21px] font-bold bg-[#04AA6D] rounded-2xl'>Learn More</button>
          </div>
        </div>
      )}
    </>
  );
}
