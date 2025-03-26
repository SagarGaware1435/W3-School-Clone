import React from 'react'

const Box1 = ({ info, button_data, color }) => {
    const clr = color || "#d9eee1";
    const renderInfo = () => {
        if (Array.isArray(info)) {
            return info.map((ele, index) => (
                <p key={index} className='px-6 py-2 text-md font-medium'>{ele}</p>
            ));
        }
        else {
            return <p className='px-6 py-2 text-md font-medium'>{info}</p>;
        }
    };

    return (
        <>
            <div className={`bg-[${clr}] pt-8`}>
                {renderInfo()}
                <button className="bg-[#04aa6d] p-3 m-5 rounded-md text-white font-medium px-6">{button_data}</button>
            </div>
        </>
    )
}

export default Box1
