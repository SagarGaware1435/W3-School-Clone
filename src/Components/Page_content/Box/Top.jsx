import React from 'react';

const Top = ({ head, onNextClick, onPrevClick }) => {
    return (
        <>
            <div className='flex flex-col gap-2 p-6'>
                <h1 className='text-[42px] mt-24 '>{head}</h1>
                <div className='flex justify-between text-white font-bold'>
                    <div className='bg-[#04aa6d] p-3 rounded-lg'>
                        <button className='flex justify-center items-center gap-1 text-[17px]' onClick={onPrevClick}><ion-icon name="chevron-back-outline" style={{ fontSize: 20 }}></ion-icon> Prev</button>
                    </div>
                    <div className='bg-[#04aa6d] p-3 rounded-lg'>
                        <button className='flex justify-center items-center gap-1 text-[17px]' onClick={onNextClick}>Next <ion-icon name="chevron-forward-outline" style={{ fontSize: 20 }}></ion-icon></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top;
