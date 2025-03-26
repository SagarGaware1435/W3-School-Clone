import React from 'react';

const Box5 = ({ title, info, color, height, width, margin, button_data, links }) => {
    const clr = color ? color : "#ffffcc";
    const renderInfo = () => {
        if (Array.isArray(info)) {
            return info.map((ele, index) => (
                <p key={index} className='text-[15px] '>{ele}</p>
            ));
        }
        else {
            return <p className='text-[15px]'>{info}</p>;
        }
    };

    const boxStyle = {
        backgroundColor: clr,
        padding: "24px 32px",
        fontSize: "15px"
    }

    if (height) {
        boxStyle.height = height;
    }

    if (width) {
        boxStyle.width = width;
    }
    return (
        <>
            <div className={`${margin ? 'm-10' : 'm-0'}`}>
                {title && <h1 className='text-[32px] font-medium'>{title}</h1>}
                <div style={boxStyle}>
                    {renderInfo()}
                    {button_data && <button className="bg-[#04aa6d] px-6 mt-5 py-3 rounded-md text-white font-medium">{button_data}</button>}
                    {links &&
                        <ul className='list-disc px-16'>
                            {links.map((ele) => (
                                <li key={ele}>{ele}</li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </>
    );
};

export default Box5;
