import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import { dataInfo } from "../../Data";

const Sidepanel = () => {
    const location = useLocation();
    const currentSection = location.pathname.split('/')[1];

    const sectionLinks = dataInfo.filter(entry => entry.section.toLowerCase() === currentSection);

    return (
        <div className='fixed w-[14%] bg-[#e7e9eb] mt-[95px] h-[87vh] overflow-y-auto'>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-xl font-normal p-4'>{currentSection.toUpperCase()} Tutorial</h1>

                {sectionLinks.map((ele, index) => (
                    <NavLink
                        key={index}
                        to={`/${ele.section.toLowerCase()}/${ele.page_name.replace(/\s+/g, '').toLowerCase()}`}
                        className={({ isActive }) => isActive ? 'bg-[#04aa6d] text-white px-4' : 'hover:bg-[#cccccc] px-4'}
                    >
                        {ele.page_name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Sidepanel;
